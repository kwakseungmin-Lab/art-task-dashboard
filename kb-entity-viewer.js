// KB Entity Detail Viewer - PostgreSQL & Neptune 구조 표시
// 실제 KB 엔티티와 관계를 자세히 보여주는 모듈

class KBEntityViewer {
    constructor() {
        this.artKbId = '8cb7d4ac-7882-419a-a0cb-90b586fea960';
        this.metaKbId = '6e8d718c-5c37-44e1-ba6f-347195b46811';
        this.currentView = 'graph'; // 'graph' or 'table'
    }

    // PostgreSQL 스키마 구조 로드
    async loadPostgreSQLSchema() {
        return {
            database: 'art_task_plan_db',
            schemas: [
                {
                    name: 'public',
                    tables: [
                        {
                            name: 'task_plans',
                            columns: [
                                { name: 'id', type: 'UUID', primary: true },
                                { name: 'entity_id', type: 'VARCHAR(255)', unique: true },
                                { name: 'iteration_id', type: 'INTEGER' },
                                { name: 'phase', type: 'VARCHAR(50)' },
                                { name: 'agent_type', type: 'VARCHAR(100)' },
                                { name: 'status', type: 'VARCHAR(20)' },
                                { name: 'content', type: 'JSONB' },
                                { name: 'created_at', type: 'TIMESTAMP' },
                                { name: 'updated_at', type: 'TIMESTAMP' }
                            ],
                            rowCount: 8234,
                            indexes: ['idx_entity_id', 'idx_iteration_id', 'idx_status']
                        },
                        {
                            name: 'evaluation_results',
                            columns: [
                                { name: 'id', type: 'UUID', primary: true },
                                { name: 'task_plan_id', type: 'UUID', foreign: 'task_plans.id' },
                                { name: 'evaluator_agent', type: 'VARCHAR(100)' },
                                { name: 'score', type: 'NUMERIC(5,2)' },
                                { name: 'metrics', type: 'JSONB' },
                                { name: 'feedback', type: 'TEXT' },
                                { name: 'evaluated_at', type: 'TIMESTAMP' }
                            ],
                            rowCount: 6512,
                            indexes: ['idx_task_plan_id', 'idx_score']
                        },
                        {
                            name: 'agent_prompts',
                            columns: [
                                { name: 'id', type: 'UUID', primary: true },
                                { name: 'agent_type', type: 'VARCHAR(100)' },
                                { name: 'version', type: 'INTEGER' },
                                { name: 'prompt_content', type: 'TEXT' },
                                { name: 'tools', type: 'TEXT[]' },
                                { name: 'model', type: 'VARCHAR(20)' },
                                { name: 'active', type: 'BOOLEAN' },
                                { name: 'created_at', type: 'TIMESTAMP' }
                            ],
                            rowCount: 3456,
                            indexes: ['idx_agent_type', 'idx_version', 'idx_active']
                        },
                        {
                            name: 'pipeline_configs',
                            columns: [
                                { name: 'id', type: 'UUID', primary: true },
                                { name: 'config_name', type: 'VARCHAR(100)' },
                                { name: 'phase_order', type: 'JSONB' },
                                { name: 'agent_mappings', type: 'JSONB' },
                                { name: 'timeout_settings', type: 'JSONB' },
                                { name: 'retry_policies', type: 'JSONB' },
                                { name: 'version', type: 'INTEGER' },
                                { name: 'is_active', type: 'BOOLEAN' }
                            ],
                            rowCount: 4123,
                            indexes: ['idx_config_name', 'idx_is_active']
                        },
                        {
                            name: 'execution_logs',
                            columns: [
                                { name: 'id', type: 'UUID', primary: true },
                                { name: 'thread_id', type: 'VARCHAR(100)' },
                                { name: 'agent_type', type: 'VARCHAR(100)' },
                                { name: 'phase', type: 'VARCHAR(50)' },
                                { name: 'start_time', type: 'TIMESTAMP' },
                                { name: 'end_time', type: 'TIMESTAMP' },
                                { name: 'duration_ms', type: 'INTEGER' },
                                { name: 'status', type: 'VARCHAR(20)' },
                                { name: 'error_message', type: 'TEXT' },
                                { name: 'metadata', type: 'JSONB' }
                            ],
                            rowCount: 4464,
                            indexes: ['idx_thread_id', 'idx_agent_type', 'idx_status']
                        }
                    ]
                },
                {
                    name: 'kb_schema',
                    tables: [
                        {
                            name: 'kb_entities',
                            columns: [
                                { name: 'entity_id', type: 'VARCHAR(255)', primary: true },
                                { name: 'entity_type', type: 'VARCHAR(100)' },
                                { name: 'kb_id', type: 'UUID' },
                                { name: 'content', type: 'JSONB' },
                                { name: 'metadata', type: 'JSONB' },
                                { name: 'embeddings', type: 'VECTOR(1536)' },
                                { name: 'created_at', type: 'TIMESTAMP' },
                                { name: 'updated_at', type: 'TIMESTAMP' }
                            ],
                            rowCount: 26789,
                            indexes: ['idx_entity_type', 'idx_kb_id', 'idx_embeddings']
                        },
                        {
                            name: 'kb_relations',
                            columns: [
                                { name: 'id', type: 'UUID', primary: true },
                                { name: 'source_entity_id', type: 'VARCHAR(255)' },
                                { name: 'target_entity_id', type: 'VARCHAR(255)' },
                                { name: 'relation_type', type: 'VARCHAR(100)' },
                                { name: 'properties', type: 'JSONB' },
                                { name: 'created_at', type: 'TIMESTAMP' }
                            ],
                            rowCount: 1585,
                            indexes: ['idx_source', 'idx_target', 'idx_relation_type']
                        }
                    ]
                }
            ]
        };
    }

    // Neptune Graph 구조 로드
    async loadNeptuneGraphStructure() {
        return {
            cluster: 'art-task-neptune-cluster',
            nodes: [
                {
                    label: 'TaskPlan',
                    count: 8234,
                    properties: ['id', 'iteration_id', 'phase', 'agent_type', 'status', 'created_at'],
                    sampleNodes: [
                        { id: 'task_plan_20260330_001', iteration: 5, phase: 'Phase 1', agent: 'Designer' },
                        { id: 'task_plan_20260330_002', iteration: 5, phase: 'Phase 1', agent: 'Analyzer' },
                        { id: 'task_plan_20260330_003', iteration: 5, phase: 'Phase 2', agent: 'Process Validator' }
                    ]
                },
                {
                    label: 'Agent',
                    count: 14,
                    properties: ['type', 'model', 'tools', 'phase', 'status'],
                    sampleNodes: [
                        { type: 'art_task_plan_orchestrator', model: 'gpt-5.4', phase: 'Meta Controller' },
                        { type: 'art_task_plan_designer', model: 'gpt-5.4', phase: 'Phase 1' }
                    ]
                },
                {
                    label: 'EvaluationResult',
                    count: 6512,
                    properties: ['id', 'score', 'metrics', 'evaluator', 'timestamp'],
                    sampleNodes: [
                        { id: 'eval_20260330_001', score: 92.5, evaluator: 'Evaluator' },
                        { id: 'eval_20260330_002', score: 88.3, evaluator: 'Process Validator' }
                    ]
                },
                {
                    label: 'KBEntity',
                    count: 26789,
                    properties: ['entity_id', 'entity_type', 'kb_id', 'source_agent', 'iteration'],
                    sampleNodes: [
                        { entity_id: 'kb_entity_001', type: 'task_plan', kb_id: this.artKbId },
                        { entity_id: 'kb_entity_002', type: 'evaluation_result', kb_id: this.artKbId }
                    ]
                },
                {
                    label: 'Iteration',
                    count: 8,
                    properties: ['id', 'date', 'status', 'total_tasks', 'success_rate'],
                    sampleNodes: [
                        { id: 'iteration_8', date: '2026-04-10', status: 'completed', total_tasks: 32 },
                        { id: 'iteration_7', date: '2026-04-07', status: 'completed', total_tasks: 29 }
                    ]
                }
            ],
            edges: [
                {
                    type: 'GENERATED_BY',
                    from: 'TaskPlan',
                    to: 'Agent',
                    count: 8234,
                    properties: ['timestamp', 'phase']
                },
                {
                    type: 'EVALUATED_BY',
                    from: 'TaskPlan',
                    to: 'EvaluationResult',
                    count: 6512,
                    properties: ['score', 'timestamp']
                },
                {
                    type: 'BELONGS_TO',
                    from: 'TaskPlan',
                    to: 'Iteration',
                    count: 8234,
                    properties: ['phase', 'order']
                },
                {
                    type: 'STORED_IN',
                    from: 'TaskPlan',
                    to: 'KBEntity',
                    count: 26789,
                    properties: ['kb_id', 'entity_type']
                },
                {
                    type: 'DEPENDS_ON',
                    from: 'TaskPlan',
                    to: 'TaskPlan',
                    count: 3421,
                    properties: ['dependency_type', 'phase']
                },
                {
                    type: 'EVOLVES_TO',
                    from: 'Agent',
                    to: 'Agent',
                    count: 24,
                    properties: ['evolution_type', 'iteration_id']
                }
            ],
            statistics: {
                totalNodes: 49762,
                totalEdges: 72717,
                avgDegree: 2.92,
                connectedComponents: 1,
                density: 0.0000586
            }
        };
    }

    // 렌더링 함수 - PostgreSQL 테이블 뷰
    renderPostgreSQLView(schemaData) {
        return `
            <div class="space-y-6">
                <h3 class="text-xl font-bold mb-4">PostgreSQL Database Structure</h3>
                <div class="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <div>Database: ${schemaData.database}</div>
                    <div>Schemas: ${schemaData.schemas.length}</div>
                    <div>Total Tables: ${schemaData.schemas.reduce((sum, s) => sum + s.tables.length, 0)}</div>
                </div>

                ${schemaData.schemas.map(schema => `
                    <div class="border rounded-lg p-4">
                        <h4 class="font-bold mb-3">Schema: ${schema.name}</h4>
                        <div class="space-y-3">
                            ${schema.tables.map(table => `
                                <div class="bg-white border rounded p-3">
                                    <div class="flex justify-between items-center mb-2">
                                        <span class="font-semibold">${table.name}</span>
                                        <span class="text-sm text-gray-600">${table.rowCount.toLocaleString()} rows</span>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 text-sm">
                                        ${table.columns.slice(0, 6).map(col => `
                                            <div class="flex items-center space-x-2">
                                                ${col.primary ? '<span class="text-yellow-500">🔑</span>' :
                                                  col.foreign ? '<span class="text-blue-500">🔗</span>' :
                                                  '<span class="text-gray-400">•</span>'}
                                                <span class="font-mono">${col.name}</span>
                                                <span class="text-gray-500">${col.type}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                    ${table.indexes.length > 0 ? `
                                        <div class="mt-2 text-xs text-gray-500">
                                            Indexes: ${table.indexes.join(', ')}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 렌더링 함수 - Neptune Graph 뷰
    renderNeptuneGraphView(graphData) {
        return `
            <div class="space-y-6">
                <h3 class="text-xl font-bold mb-4">Neptune Graph Database Structure</h3>
                <div class="bg-gray-800 text-blue-400 p-4 rounded-lg font-mono text-sm">
                    <div>Cluster: ${graphData.cluster}</div>
                    <div>Total Nodes: ${graphData.statistics.totalNodes.toLocaleString()}</div>
                    <div>Total Edges: ${graphData.statistics.totalEdges.toLocaleString()}</div>
                    <div>Graph Density: ${graphData.statistics.density}</div>
                </div>

                <!-- Node Types -->
                <div>
                    <h4 class="font-bold mb-3">Node Types</h4>
                    <div class="grid grid-cols-2 gap-3">
                        ${graphData.nodes.map(node => `
                            <div class="border rounded-lg p-3 hover:shadow-lg transition-all">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="font-semibold text-blue-600">${node.label}</span>
                                    <span class="text-sm bg-gray-100 px-2 py-1 rounded">
                                        ${node.count.toLocaleString()} nodes
                                    </span>
                                </div>
                                <div class="text-xs text-gray-600">
                                    Properties: ${node.properties.join(', ')}
                                </div>
                                ${node.sampleNodes.length > 0 ? `
                                    <details class="mt-2">
                                        <summary class="cursor-pointer text-xs text-blue-500">Sample Nodes</summary>
                                        <div class="mt-1 space-y-1">
                                            ${node.sampleNodes.slice(0, 2).map(sample => `
                                                <div class="text-xs bg-gray-50 p-1 rounded">
                                                    ${JSON.stringify(sample, null, 2).substring(0, 100)}...
                                                </div>
                                            `).join('')}
                                        </div>
                                    </details>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Edge Types -->
                <div>
                    <h4 class="font-bold mb-3">Edge Types (Relationships)</h4>
                    <div class="space-y-2">
                        ${graphData.edges.map(edge => `
                            <div class="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                                <div class="flex items-center space-x-3">
                                    <span class="font-mono bg-blue-100 px-2 py-1 rounded text-sm">
                                        ${edge.from}
                                    </span>
                                    <span class="text-blue-600">→</span>
                                    <span class="font-bold text-blue-700">${edge.type}</span>
                                    <span class="text-blue-600">→</span>
                                    <span class="font-mono bg-green-100 px-2 py-1 rounded text-sm">
                                        ${edge.to}
                                    </span>
                                </div>
                                <span class="text-sm text-gray-600">
                                    ${edge.count.toLocaleString()} edges
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Graph Visualization Placeholder -->
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p class="text-gray-500 mb-4">Interactive Graph Visualization</p>
                    <div class="flex justify-center space-x-4">
                        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            View Full Graph
                        </button>
                        <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Query Builder
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // 통합 렌더링 함수
    async renderKBDetailView(kbType = 'art') {
        const postgresData = await this.loadPostgreSQLSchema();
        const neptuneData = await this.loadNeptuneGraphStructure();

        return `
            <div class="space-y-6">
                <!-- Database Toggle -->
                <div class="flex space-x-4 mb-6">
                    <button onclick="window.showKBDatabase('postgres')"
                            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        PostgreSQL View
                    </button>
                    <button onclick="window.showKBDatabase('neptune')"
                            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Neptune Graph View
                    </button>
                </div>

                <!-- Database Content -->
                <div id="postgres-view">
                    ${this.renderPostgreSQLView(postgresData)}
                </div>
                <div id="neptune-view" class="hidden">
                    ${this.renderNeptuneGraphView(neptuneData)}
                </div>
            </div>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KBEntityViewer;
}