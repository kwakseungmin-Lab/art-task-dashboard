// KB API Client for Azle Platform
// Handles actual API calls to Azle Knowledge Base

class KBAPIClient {
    constructor(config = KBConfig) {
        this.config = config;
        this.baseUrl = config.api.baseUrl;
        this.cache = new Map();
        this.cacheTimeout = 60000; // 1 minute cache
    }

    // Build API URL
    buildUrl(endpoint, params = {}) {
        let url = endpoint;
        Object.keys(params).forEach(key => {
            url = url.replace(`{${key}}`, params[key]);
        });
        return `${this.baseUrl}${url}`;
    }

    // Fetch with cache
    async fetchWithCache(url, options = {}) {
        const cacheKey = url;
        const cached = this.cache.get(cacheKey);

        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            console.log(`Cache hit for: ${url}`);
            return cached.data;
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            this.cache.set(cacheKey, {
                data,
                timestamp: Date.now()
            });

            return data;
        } catch (error) {
            console.error(`Failed to fetch from ${url}:`, error);
            throw error;
        }
    }

    // Get all entities from a KB
    async getEntities(kbId, limit = 200) {
        const url = this.buildUrl(this.config.api.endpoints.entities, { kbId });
        const fullUrl = `${url}?limit=${limit}`;

        try {
            const response = await this.fetchWithCache(fullUrl);
            return response.entities || [];
        } catch (error) {
            console.error(`Failed to get entities for KB ${kbId}:`, error);
            return [];
        }
    }

    // Get entity neighbors
    async getEntityNeighbors(kbId, entityId, hopDepth = 1) {
        const encodedEntityId = encodeURIComponent(entityId);
        const url = this.buildUrl(this.config.api.endpoints.neighbors, {
            kbId,
            entityId: encodedEntityId
        });
        const fullUrl = `${url}?hop_depth=${hopDepth}`;

        try {
            const response = await this.fetchWithCache(fullUrl);
            return response;
        } catch (error) {
            console.error(`Failed to get neighbors for entity ${entityId}:`, error);
            return { nodes: [], relations: [] };
        }
    }

    // Build network graph from KB data
    async buildNetworkGraph(kbId) {
        console.log(`Building network graph for KB: ${kbId}`);

        // Get all entities
        const entities = await this.getEntities(kbId);
        console.log(`Fetched ${entities.length} entities`);

        // Build nodes
        const nodes = entities.map(entity => ({
            id: entity.entity_id,
            label: entity.label || entity.entity_id.split('::').pop(),
            type: entity.type || this.getEntityType(entity.entity_id),
            properties: entity.properties || {},
            group: this.getEntityGroup(entity.entity_id),
            color: this.getEntityColor(entity.entity_id)
        }));

        // Build edges by getting neighbors for each entity
        const edges = [];
        const processedRelations = new Set();

        for (const entity of entities) {
            const neighbors = await this.getEntityNeighbors(kbId, entity.entity_id);

            if (neighbors.relations) {
                for (const relation of neighbors.relations) {
                    const relationKey = `${relation.source_entity_id}-${relation.predicate}-${relation.target_entity_id}`;

                    if (!processedRelations.has(relationKey)) {
                        processedRelations.add(relationKey);

                        edges.push({
                            id: relation.relation_id || relationKey,
                            source: relation.source_entity_id,
                            target: relation.target_entity_id,
                            label: relation.predicate,
                            type: relation.predicate,
                            color: this.getRelationColor(relation.predicate)
                        });
                    }
                }
            }
        }

        console.log(`Built graph with ${nodes.length} nodes and ${edges.length} edges`);

        return { nodes, edges };
    }

    // Helper methods
    getEntityType(entityId) {
        // Extract type from entity ID format: type::namespace::id
        const parts = entityId.split('::');
        const typeMap = {
            'iter_exec': 'IterationExecutionRecord',
            'run_summary': 'RunSummary',
            'task_plan': 'TaskPlanVersion',
            'eval': 'Evaluation',
            'concept': 'ConceptVersion',
            'harness': 'HarnessVersion',
            'iter_strategy': 'IterationStrategy',
            'iter_analysis': 'IterationAnalysis',
            'iter_incident': 'IterationIncident',
            'evolution': 'EvolutionProposal',
            'reference': 'ReferenceCorpusItem',
            'preference': 'PreferenceSpec',
            'goal': 'GoalSpec',
            'policy': 'TaskPlanPolicy',
            'registry': 'RegistryEntry'
        };

        return typeMap[parts[0]] || parts[0];
    }

    getEntityGroup(entityId) {
        const type = this.getEntityType(entityId);

        // Group entities by their general category
        const groupMap = {
            'IterationExecutionRecord': 'execution',
            'RunSummary': 'execution',
            'TaskPlanVersion': 'taskplan',
            'TaskPlanEval': 'evaluation',
            'HarnessRegressionEval': 'evaluation',
            'BackwardCompatibilityEval': 'evaluation',
            'ConceptVersion': 'version',
            'HarnessVersion': 'version',
            'IterationExecution': 'iteration',
            'IterationStrategy': 'iteration',
            'IterationAnalysis': 'iteration',
            'IterationIncident': 'iteration',
            'EvolutionProposal': 'evolution',
            'ReferenceCorpusItem': 'promotion',
            'PreferenceSpec': 'promotion',
            'GoalSpec': 'promotion',
            'TaskPlanPolicy': 'policy',
            'RegistryEntry': 'registry'
        };

        return groupMap[type] || 'default';
    }

    getEntityColor(entityId) {
        const type = this.getEntityType(entityId);
        return this.config.display.colors[type] || '#808080';
    }

    getRelationColor(predicate) {
        return this.config.display.relationColors[predicate] || '#999999';
    }

    // Get combined data from both KBs
    async getCombinedKBData() {
        const [atpGraph, metaGraph] = await Promise.all([
            this.buildNetworkGraph(this.config.kbs.atp.id),
            this.buildNetworkGraph(this.config.kbs.meta.id)
        ]);

        // Add KB source to nodes
        atpGraph.nodes.forEach(node => node.kb = 'ATP');
        metaGraph.nodes.forEach(node => node.kb = 'META');

        // Combine nodes and edges
        const nodes = [...atpGraph.nodes, ...metaGraph.nodes];
        const edges = [...atpGraph.edges, ...metaGraph.edges];

        // Add cross-KB edges (uses_harness from ATP to META)
        // These are already in the data as uses_harness relations

        return { nodes, edges };
    }

    // Clear cache
    clearCache() {
        this.cache.clear();
        console.log('Cache cleared');
    }
}

// Create global instance
const kbApiClient = new KBAPIClient();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KBAPIClient;
}