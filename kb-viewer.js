// KB Entity Viewer - Knowledge Base 상세 정보 뷰어
// Art KB와 Meta KB의 모든 엔티티를 탐색하고 상세 정보 확인

class KBViewer {
    constructor() {
        this.artKbId = '8cb7d4ac-7882-419a-a0cb-90b586fea960';
        this.metaKbId = '6e8d718c-5c37-44e1-ba6f-347195b46811';
        this.currentKB = 'art'; // 'art' or 'meta'
        this.entities = [];
        this.relations = [];
        this.selectedEntity = null;
        this.filters = {
            entityType: 'all',
            dateRange: 'all',
            searchTerm: ''
        };
    }

    // KB 레지스트리 로드
    async loadKBRegistry(kbType = 'art') {
        this.currentKB = kbType;

        // 실제로는 API에서 가져와야 함
        if (kbType === 'art') {
            this.entities = [
                {
                    entity_id: 'task_plan_20260330_001',
                    entity_type: 'TaskPlan',
                    created_at: '2026-03-30T14:23:45Z',
                    updated_at: '2026-03-30T14:23:45Z',
                    source_agent: 'art_task_plan_generator',
                    iteration: 'iteration_5',
                    metadata: {
                        task_name: 'Character Design Generation',
                        phase: 'Phase 1',
                        status: 'completed',
                        duration_ms: 12340
                    },
                    content: {
                        objective: 'Generate comprehensive character design document',
                        requirements: [
                            'Visual appearance specifications',
                            'Personality traits',
                            'Backstory elements'
                        ],
                        output_path: '/workspace/P4_Generated_Task_Plan/character_design.md'
                    },
                    relations: ['eval_result_20260330_002', 'agent_prompt_generator_v3']
                },
                {
                    entity_id: 'eval_result_20260330_002',
                    entity_type: 'EvaluationResult',
                    created_at: '2026-03-30T14:45:12Z',
                    updated_at: '2026-03-30T14:45:12Z',
                    source_agent: 'art_task_plan_evaluator',
                    iteration: 'iteration_5',
                    metadata: {
                        task_plan_id: 'task_plan_20260330_001',
                        evaluator_version: 'v3',
                        passed: true,
                        score: 92
                    },
                    content: {
                        scores: {
                            completeness: 95,
                            clarity: 90,
                            feasibility: 88,
                            consistency: 95
                        },
                        feedback: 'Well-structured character design with comprehensive details',
                        recommendations: [
                            'Consider adding more visual reference examples',
                            'Expand on character relationships'
                        ]
                    },
                    relations: ['task_plan_20260330_001']
                },
                {
                    entity_id: 'pipeline_config_v5',
                    entity_type: 'PipelineConfig',
                    created_at: '2026-03-28T10:00:00Z',
                    updated_at: '2026-03-30T15:00:00Z',
                    source_agent: 'art_task_plan_orchestrator',
                    iteration: 'iteration_5',
                    metadata: {
                        version: 5,
                        active: true,
                        environment: 'production'
                    },
                    content: {
                        phases: {
                            'Phase 1': {
                                agents: ['Designer', 'Analyzer', 'Generator', 'Evaluator'],
                                timeout_ms: 300000,
                                retry_count: 3
                            },
                            'Phase 2': {
                                agents: ['Process Validator', 'Agent Evolver', 'Evolver Reviewer'],
                                timeout_ms: 180000,
                                retry_count: 2
                            }
                        },
                        kb_settings: {
                            auto_save: true,
                            batch_size: 100,
                            consistency_check: true
                        }
                    },
                    relations: ['agent_prompt_orchestrator_v1']
                },
                {
                    entity_id: 'agent_prompt_generator_v3',
                    entity_type: 'AgentPrompt',
                    created_at: '2026-03-25T08:00:00Z',
                    updated_at: '2026-03-30T14:00:00Z',
                    source_agent: 'art_task_plan_agent_evolver',
                    iteration: 'iteration_4',
                    metadata: {
                        agent: 'art_task_plan_generator',
                        version: 3,
                        evolved_from: 'agent_prompt_generator_v2',
                        improvement_score: 8.5
                    },
                    content: {
                        system_prompt: 'You are an expert task plan generator for art assets...',
                        instructions: [
                            'Analyze input requirements thoroughly',
                            'Generate structured task plans with clear objectives',
                            'Include validation criteria for each task'
                        ],
                        examples: ['Example 1: Character design task...', 'Example 2: Environment art task...'],
                        constraints: [
                            'Maximum task plan size: 10MB',
                            'Required sections: Objective, Requirements, Deliverables, Timeline'
                        ]
                    },
                    relations: ['agent_prompt_generator_v2', 'task_plan_20260330_001']
                },
                {
                    entity_id: 'execution_log_thread_0042',
                    entity_type: 'ExecutionLog',
                    created_at: '2026-03-30T14:20:00Z',
                    updated_at: '2026-03-30T15:35:00Z',
                    source_agent: 'art_task_plan_monitor',
                    iteration: 'iteration_5',
                    metadata: {
                        thread_id: 'thread_0042',
                        duration_ms: 4500000,
                        status: 'completed',
                        alerts_triggered: 0
                    },
                    content: {
                        start_time: '2026-03-30T14:20:00Z',
                        end_time: '2026-03-30T15:35:00Z',
                        phases_completed: ['Phase 1', 'Phase 2'],
                        agents_invoked: ['Designer', 'Analyzer', 'Generator', 'Evaluator', 'Process Validator'],
                        kb_operations: {
                            creates: 156,
                            updates: 89,
                            reads: 342
                        },
                        performance_metrics: {
                            avg_agent_response_ms: 2340,
                            total_kb_latency_ms: 5678,
                            memory_usage_mb: 512
                        }
                    },
                    relations: ['task_plan_20260330_001', 'eval_result_20260330_002']
                }
            ];

            // Relations 데이터
            this.relations = [
                {
                    source: 'task_plan_20260330_001',
                    target: 'eval_result_20260330_002',
                    relation_type: 'evaluated_by',
                    created_at: '2026-03-30T14:45:12Z'
                },
                {
                    source: 'agent_prompt_generator_v3',
                    target: 'task_plan_20260330_001',
                    relation_type: 'generated_by',
                    created_at: '2026-03-30T14:23:45Z'
                },
                {
                    source: 'agent_prompt_generator_v3',
                    target: 'agent_prompt_generator_v2',
                    relation_type: 'evolved_from',
                    created_at: '2026-03-30T14:00:00Z'
                }
            ];

        } else {
            // Meta KB 데이터
            this.entities = [
                {
                    entity_id: 'iteration_5_strategy',
                    entity_type: 'Strategy',
                    created_at: '2026-03-30T10:00:00Z',
                    updated_at: '2026-03-30T16:00:00Z',
                    source_agent: 'art_task_plan_orchestrator',
                    iteration: 'iteration_5',
                    metadata: {
                        iteration_id: 'iteration_5',
                        strategy_name: 'Parallel Processing Optimization',
                        priority: 'high'
                    },
                    content: {
                        objective: 'Improve pipeline throughput by parallel agent execution',
                        approach: [
                            'Identify independent tasks',
                            'Allocate parallel workspaces',
                            'Implement concurrent KB writes with locking'
                        ],
                        expected_improvement: '35% reduction in total execution time',
                        risks: ['KB consistency issues', 'Resource contention']
                    },
                    relations: ['iteration_5_analysis']
                },
                {
                    entity_id: 'iteration_5_analysis',
                    entity_type: 'Analysis',
                    created_at: '2026-03-30T16:00:00Z',
                    updated_at: '2026-03-30T16:00:00Z',
                    source_agent: 'art_task_plan_analyzer',
                    iteration: 'iteration_5',
                    metadata: {
                        iteration_id: 'iteration_5',
                        analysis_type: 'performance',
                        status: 'completed'
                    },
                    content: {
                        metrics: {
                            execution_time_reduction: '32%',
                            throughput_increase: '28%',
                            error_rate_change: '+2%'
                        },
                        insights: [
                            'Parallel execution successful for Phase 1 agents',
                            'KB locking mechanism prevented consistency issues',
                            'Minor increase in error rate due to resource contention'
                        ],
                        recommendations: [
                            'Implement adaptive resource allocation',
                            'Add retry mechanism for resource conflicts'
                        ]
                    },
                    relations: ['iteration_5_strategy']
                },
                {
                    entity_id: 'atomic_fact_kb_growth',
                    entity_type: 'AtomicFact',
                    created_at: '2026-03-30T17:00:00Z',
                    updated_at: '2026-03-30T17:00:00Z',
                    source_agent: 'art_task_plan_kb_writer',
                    iteration: 'iteration_5',
                    metadata: {
                        fact_type: 'statistic',
                        confidence: 0.95
                    },
                    content: {
                        statement: 'KB entities grow at average rate of 150 per iteration',
                        evidence: {
                            iteration_3: 98,
                            iteration_4: 134,
                            iteration_5: 156
                        },
                        context: 'Based on last 3 iterations of Art Task Plan pipeline'
                    },
                    relations: []
                }
            ];

            this.relations = [
                {
                    source: 'iteration_5_strategy',
                    target: 'iteration_5_analysis',
                    relation_type: 'analyzed_by',
                    created_at: '2026-03-30T16:00:00Z'
                }
            ];
        }

        return { entities: this.entities, relations: this.relations };
    }

    // 엔티티 상세 정보 로드
    async loadEntityDetails(entityId) {
        const entity = this.entities.find(e => e.entity_id === entityId);
        if (!entity) return null;

        // 관련 엔티티 찾기
        const relatedEntities = this.relations
            .filter(r => r.source === entityId || r.target === entityId)
            .map(r => {
                const relatedId = r.source === entityId ? r.target : r.source;
                const relatedEntity = this.entities.find(e => e.entity_id === relatedId);
                return {
                    ...relatedEntity,
                    relation_type: r.relation_type,
                    direction: r.source === entityId ? 'outgoing' : 'incoming'
                };
            });

        this.selectedEntity = {
            ...entity,
            related_entities: relatedEntities
        };

        return this.selectedEntity;
    }

    // 엔티티 필터링
    filterEntities(filters) {
        this.filters = { ...this.filters, ...filters };

        let filtered = [...this.entities];

        // Type 필터
        if (this.filters.entityType !== 'all') {
            filtered = filtered.filter(e => e.entity_type === this.filters.entityType);
        }

        // 날짜 필터
        if (this.filters.dateRange !== 'all') {
            const now = new Date();
            const ranges = {
                'today': 24 * 60 * 60 * 1000,
                'week': 7 * 24 * 60 * 60 * 1000,
                'month': 30 * 24 * 60 * 60 * 1000
            };
            const cutoff = new Date(now - ranges[this.filters.dateRange]);
            filtered = filtered.filter(e => new Date(e.created_at) >= cutoff);
        }

        // 검색어 필터
        if (this.filters.searchTerm) {
            const term = this.filters.searchTerm.toLowerCase();
            filtered = filtered.filter(e =>
                e.entity_id.toLowerCase().includes(term) ||
                e.entity_type.toLowerCase().includes(term) ||
                JSON.stringify(e.metadata).toLowerCase().includes(term)
            );
        }

        return filtered;
    }

    // 통계 생성
    generateStatistics() {
        const stats = {
            total_entities: this.entities.length,
            total_relations: this.relations.length,
            by_type: {},
            by_iteration: {},
            recent_activity: []
        };

        // Type별 통계
        this.entities.forEach(e => {
            stats.by_type[e.entity_type] = (stats.by_type[e.entity_type] || 0) + 1;
        });

        // Iteration별 통계
        this.entities.forEach(e => {
            if (e.iteration) {
                stats.by_iteration[e.iteration] = (stats.by_iteration[e.iteration] || 0) + 1;
            }
        });

        // 최근 활동
        stats.recent_activity = this.entities
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 5)
            .map(e => ({
                entity_id: e.entity_id,
                entity_type: e.entity_type,
                action: 'updated',
                timestamp: e.updated_at
            }));

        return stats;
    }

    // HTML 렌더링 - 엔티티 목록
    renderEntitiesList(entities = this.entities) {
        if (entities.length === 0) {
            return '<p class="text-gray-500 text-center py-8">No entities found</p>';
        }

        return `
            <div class="space-y-2">
                ${entities.map(entity => `
                    <div class="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition-all"
                         onclick="viewEntityDetails('${entity.entity_id}')">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h4 class="font-semibold">${entity.entity_id}</h4>
                                <span class="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                                    ${entity.entity_type}
                                </span>
                            </div>
                            <span class="text-xs text-gray-500">
                                ${new Date(entity.created_at).toLocaleDateString()}
                            </span>
                        </div>
                        <div class="text-sm text-gray-600">
                            <p>Source: ${entity.source_agent}</p>
                            <p>Iteration: ${entity.iteration || 'N/A'}</p>
                            ${entity.metadata.status ?
                                `<p>Status: <span class="font-medium ${
                                    entity.metadata.status === 'completed' ? 'text-green-600' :
                                    entity.metadata.status === 'failed' ? 'text-red-600' :
                                    'text-yellow-600'
                                }">${entity.metadata.status}</span></p>` : ''}
                        </div>
                        <div class="mt-2 text-xs text-gray-500">
                            Relations: ${entity.relations ? entity.relations.length : 0}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // HTML 렌더링 - 엔티티 상세 정보
    renderEntityDetails(entity) {
        if (!entity) return '<p>Entity not found</p>';

        return `
            <div class="space-y-6">
                <!-- Header -->
                <div class="border-b pb-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-2xl font-bold">${entity.entity_id}</h2>
                            <span class="inline-block px-3 py-1 mt-2 text-sm rounded bg-blue-100 text-blue-800">
                                ${entity.entity_type}
                            </span>
                        </div>
                        <button onclick="backToKBList()"
                                class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                            Back to List
                        </button>
                    </div>
                </div>

                <!-- Metadata -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">Metadata</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-sm text-gray-600">Created</p>
                            <p class="font-medium">${new Date(entity.created_at).toLocaleString()}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-600">Updated</p>
                            <p class="font-medium">${new Date(entity.updated_at).toLocaleString()}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-600">Source Agent</p>
                            <p class="font-medium">${entity.source_agent}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-600">Iteration</p>
                            <p class="font-medium">${entity.iteration || 'N/A'}</p>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-gray-50 rounded">
                        <p class="text-sm font-semibold mb-2">Additional Metadata</p>
                        <pre class="text-xs overflow-x-auto">${JSON.stringify(entity.metadata, null, 2)}</pre>
                    </div>
                </div>

                <!-- Content -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">Content</h3>
                    <div class="p-4 bg-gray-50 rounded">
                        <pre class="text-sm overflow-x-auto">${JSON.stringify(entity.content, null, 2)}</pre>
                    </div>
                </div>

                <!-- Related Entities -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">Related Entities (${entity.related_entities ? entity.related_entities.length : 0})</h3>
                    <div class="space-y-2">
                        ${entity.related_entities && entity.related_entities.length > 0 ?
                            entity.related_entities.map(related => `
                                <div class="flex justify-between items-center p-3 border rounded hover:bg-gray-50">
                                    <div>
                                        <p class="font-medium">${related.entity_id}</p>
                                        <p class="text-sm text-gray-600">
                                            <span class="inline-block px-2 py-0.5 text-xs rounded ${
                                                related.direction === 'outgoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                            }">
                                                ${related.direction}
                                            </span>
                                            <span class="ml-2">${related.relation_type}</span>
                                        </p>
                                    </div>
                                    <button onclick="viewEntityDetails('${related.entity_id}')"
                                            class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                                        View
                                    </button>
                                </div>
                            `).join('') :
                            '<p class="text-gray-500 text-center py-4">No related entities</p>'}
                    </div>
                </div>
            </div>
        `;
    }

    // HTML 렌더링 - KB 통계
    renderStatistics() {
        const stats = this.generateStatistics();

        return `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Overview -->
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold mb-4">Overview</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="text-center">
                            <p class="text-3xl font-bold text-blue-600">${stats.total_entities}</p>
                            <p class="text-sm text-gray-600">Total Entities</p>
                        </div>
                        <div class="text-center">
                            <p class="text-3xl font-bold text-green-600">${stats.total_relations}</p>
                            <p class="text-sm text-gray-600">Total Relations</p>
                        </div>
                    </div>
                </div>

                <!-- Entity Types Distribution -->
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold mb-4">Entity Types</h3>
                    <div class="space-y-2">
                        ${Object.entries(stats.by_type).map(([type, count]) => `
                            <div class="flex justify-between items-center">
                                <span>${type}</span>
                                <span class="font-semibold">${count}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="bg-white rounded-lg shadow p-6 lg:col-span-2">
                    <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
                    <div class="space-y-2">
                        ${stats.recent_activity.map(activity => `
                            <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <div>
                                    <span class="font-medium">${activity.entity_id}</span>
                                    <span class="ml-2 text-sm text-gray-600">(${activity.entity_type})</span>
                                </div>
                                <span class="text-sm text-gray-500">
                                    ${new Date(activity.timestamp).toLocaleString()}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KBViewer;
}