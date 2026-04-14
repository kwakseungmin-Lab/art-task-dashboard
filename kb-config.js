// Knowledge Base Configuration
// 새로운 KB ID와 Azle API 설정

const KBConfig = {
    // Azle API 설정
    api: {
        baseUrl: 'https://agent.atoz.krafton.io',
        endpoints: {
            entities: '/api/knowledge-bases/{kbId}/entities',
            neighbors: '/api/knowledge-bases/{kbId}/entities/{entityId}/neighbors',
            relations: '/api/knowledge-bases/{kbId}/relations',
            stats: '/api/knowledge-bases/{kbId}/stats'
        }
    },

    // 새로운 KB ID (Phase 3에서 생성한 KB)
    kbs: {
        atp: {
            id: '912180a0-9b28-48b9-87d3-02f134ace69b',
            name: 'ATP KB',
            description: 'Art Task Plan KB - Raw evidence graph (42 entities, 35 relations)',
            stats: {
                entities: 42,  // Iteration 3-9 데이터
                relations: 35, // belongs_to, summarizes, evaluates, uses_harness
                iterations: '3-9'
            }
        },
        meta: {
            id: 'bfc88419-5cfb-4d33-a12b-c3a108aac93b',
            name: 'META KB',
            description: 'Meta KB - Decision/memory graph (53 entities, 66 relations)',
            stats: {
                entities: 53,  // ConceptVersion, HarnessVersion, Iteration components
                relations: 66, // evolved_to, HAS_*, instantiates_concept, etc.
                concepts: 'v3-v9',
                harness: 'v1-v4'
            }
        }
    },

    // Display configuration
    display: {
        // Entity type colors
        colors: {
            // ATP KB entity types
            IterationExecutionRecord: '#FF6B6B',
            RunSummary: '#4ECDC4',
            TaskPlanVersion: '#45B7D1',
            TaskPlanEval: '#FFA07A',
            HarnessRegressionEval: '#FF8C42',
            BackwardCompatibilityEval: '#FF6347',

            // META KB entity types
            ConceptVersion: '#9370DB',
            HarnessVersion: '#8B4789',
            IterationExecution: '#6B8E23',
            IterationStrategy: '#4169E1',
            IterationAnalysis: '#DC143C',
            IterationIncident: '#FF1493',
            EvolutionProposal: '#FFD700',
            ReferenceCorpusItem: '#87CEEB',
            PreferenceSpec: '#98FB98',
            GoalSpec: '#DDA0DD',
            TaskPlanPolicy: '#F0E68C',
            RegistryEntry: '#D2691E'
        },

        // Relation type colors
        relationColors: {
            // ATP relations
            belongs_to: '#90EE90',
            summarizes: '#FFB6C1',
            evaluates: '#87CEFA',
            uses_harness: '#DDA0DD',

            // META relations
            evolved_to: '#FFD700',
            HAS_STRATEGY: '#98FB98',
            HAS_ANALYSIS: '#FF6347',
            HAS_INCIDENT: '#FF69B4',
            instantiates_concept: '#9370DB',
            recommends: '#FFA500',
            applies_to: '#00CED1',
            distilled_to: '#F0E68C',
            promoted_to: '#FFE4B5',
            informs: '#B0C4DE',
            points_to_current: '#CD853F'
        }
    },

    // Query parameters
    query: {
        defaultLimit: 200,
        maxLimit: 200,
        timeout: 10000 // 10 seconds
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KBConfig;
}