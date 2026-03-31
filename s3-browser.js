// S3 Browser for Art Task Plan Iterations
// S3에 저장된 이터레이션 결과물 탐색 모듈

class S3Browser {
    constructor() {
        this.bucketName = 'a2z-s3-janghoon';
        this.baseUrl = 'https://a2z-s3-janghoon.s3.ap-northeast-2.amazonaws.com';
        this.iterations = [];
        this.currentPath = '/';
        this.selectedIteration = null;
    }

    // S3 이터레이션 목록 로드 (시뮬레이션)
    async loadIterations() {
        // 실제로는 S3 API를 사용하거나 백엔드에서 목록을 가져와야 함
        // 여기서는 예시 데이터 사용
        this.iterations = [
            {
                id: 'iteration_5',
                date: '2026-03-30',
                path: 'art-task-plan/iterations/iteration_5/',
                status: 'completed',
                files: {
                    'Task_Plan_Output.json': { size: 45234, modified: '2026-03-30T14:23:45Z' },
                    'Evaluation_Result.json': { size: 12890, modified: '2026-03-30T14:45:12Z' },
                    'Agent_Evolution_Log.json': { size: 8976, modified: '2026-03-30T15:10:33Z' },
                    'KB_Updates.json': { size: 34567, modified: '2026-03-30T15:30:21Z' },
                    'Pipeline_Metrics.json': { size: 5678, modified: '2026-03-30T15:35:00Z' }
                },
                summary: {
                    total_tasks: 24,
                    success_rate: 91.7,
                    kb_entities_created: 156,
                    kb_entities_updated: 89,
                    agents_evolved: 3
                }
            },
            {
                id: 'iteration_4',
                date: '2026-03-28',
                path: 'art-task-plan/iterations/iteration_4/',
                status: 'completed',
                files: {
                    'Task_Plan_Output.json': { size: 41234, modified: '2026-03-28T10:15:30Z' },
                    'Evaluation_Result.json': { size: 11234, modified: '2026-03-28T10:45:00Z' },
                    'Agent_Evolution_Log.json': { size: 7654, modified: '2026-03-28T11:20:15Z' },
                    'KB_Updates.json': { size: 29876, modified: '2026-03-28T11:40:30Z' }
                },
                summary: {
                    total_tasks: 21,
                    success_rate: 87.3,
                    kb_entities_created: 134,
                    kb_entities_updated: 76,
                    agents_evolved: 2
                }
            },
            {
                id: 'iteration_3',
                date: '2026-03-25',
                path: 'art-task-plan/iterations/iteration_3/',
                status: 'completed',
                files: {
                    'Task_Plan_Output.json': { size: 38765, modified: '2026-03-25T09:30:00Z' },
                    'Evaluation_Result.json': { size: 10234, modified: '2026-03-25T10:00:00Z' },
                    'KB_Updates.json': { size: 25432, modified: '2026-03-25T10:30:00Z' }
                },
                summary: {
                    total_tasks: 18,
                    success_rate: 83.5,
                    kb_entities_created: 98,
                    kb_entities_updated: 54,
                    agents_evolved: 1
                }
            }
        ];

        return this.iterations;
    }

    // 특정 이터레이션 상세 정보 로드
    async loadIterationDetails(iterationId) {
        const iteration = this.iterations.find(i => i.id === iterationId);
        if (!iteration) return null;

        // 실제로는 S3에서 파일 내용을 가져와야 함
        const details = {
            ...iteration,
            taskPlan: {
                total: iteration.summary.total_tasks,
                byPhase: {
                    'Phase 1 (Design & Analysis)': 8,
                    'Phase 2 (Generation & Evaluation)': 10,
                    'Phase 3 (Validation & Evolution)': 6
                },
                byAgent: {
                    'Designer': 4,
                    'Analyzer': 6,
                    'Generator': 5,
                    'Evaluator': 4,
                    'Process Validator': 3,
                    'Agent Evolver': 2
                }
            },
            evaluation: {
                scores: {
                    'Task Completion': 92,
                    'Quality': 88,
                    'Efficiency': 85,
                    'KB Consistency': 94
                },
                issues: [
                    { type: 'warning', message: 'Generator took longer than expected in 3 tasks' },
                    { type: 'info', message: 'KB Writer successfully updated 89 entities' }
                ]
            },
            kbUpdates: {
                artKB: {
                    created: 98,
                    updated: 45,
                    deleted: 2,
                    topEntities: [
                        { id: 'task_plan_20260330_001', type: 'TaskPlan', operations: 15 },
                        { id: 'eval_result_20260330_002', type: 'EvaluationResult', operations: 12 },
                        { id: 'agent_config_generator_v3', type: 'AgentConfig', operations: 8 }
                    ]
                },
                metaKB: {
                    created: 58,
                    updated: 44,
                    deleted: 0,
                    topEntities: [
                        { id: 'iteration_5_strategy', type: 'Strategy', operations: 10 },
                        { id: 'iteration_5_analysis', type: 'Analysis', operations: 8 }
                    ]
                }
            },
            agentEvolution: {
                evolved: ['Generator', 'Evaluator', 'Process Validator'],
                changes: [
                    { agent: 'Generator', type: 'prompt', change: 'Added error handling instructions' },
                    { agent: 'Evaluator', type: 'tools', change: 'Added new validation tool' },
                    { agent: 'Process Validator', type: 'prompt', change: 'Enhanced KB consistency checks' }
                ]
            }
        };

        this.selectedIteration = details;
        return details;
    }

    // 파일 내용 미리보기
    async previewFile(iterationId, fileName) {
        // 실제로는 S3에서 파일을 가져와야 함
        const mockContent = {
            'Task_Plan_Output.json': {
                timestamp: '2026-03-30T14:23:45Z',
                iteration: iterationId,
                tasks: [
                    {
                        id: 'task_001',
                        name: 'Generate Character Design Document',
                        agent: 'Designer',
                        status: 'completed',
                        duration_ms: 12340,
                        output: {
                            document_path: '/workspace/P1_Task_Request/character_design.md',
                            kb_entities_created: 5
                        }
                    },
                    {
                        id: 'task_002',
                        name: 'Analyze Design Consistency',
                        agent: 'Analyzer',
                        status: 'completed',
                        duration_ms: 8976,
                        output: {
                            analysis_path: '/workspace/P3_Task_Analysis/consistency_report.md',
                            issues_found: 2,
                            recommendations: 3
                        }
                    }
                ]
            },
            'Evaluation_Result.json': {
                timestamp: '2026-03-30T14:45:12Z',
                iteration: iterationId,
                overall_score: 91.7,
                scores: {
                    completeness: 94,
                    quality: 88,
                    efficiency: 92,
                    consistency: 93
                },
                passed: true,
                recommendations: [
                    'Consider optimizing Generator prompts for faster execution',
                    'KB consistency checks could be more comprehensive'
                ]
            },
            'KB_Updates.json': {
                timestamp: '2026-03-30T15:30:21Z',
                iteration: iterationId,
                art_kb: {
                    total_operations: 143,
                    creates: 98,
                    updates: 45,
                    deletes: 0,
                    entities: [
                        {
                            entity_id: 'character_design_20260330_001',
                            entity_type: 'DesignDocument',
                            operation: 'create',
                            metadata: {
                                source_agent: 'Designer',
                                task_id: 'task_001'
                            }
                        }
                    ]
                },
                meta_kb: {
                    total_operations: 102,
                    creates: 58,
                    updates: 44,
                    deletes: 0
                }
            }
        };

        return mockContent[fileName] || { error: 'File not found' };
    }

    // S3 URL 생성
    getS3Url(path) {
        return `${this.baseUrl}/${path}`;
    }

    // 파일 크기 포맷
    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    // 날짜 포맷
    formatDate(dateString) {
        return new Date(dateString).toLocaleString();
    }

    // HTML 렌더링
    renderIterationsList() {
        const html = this.iterations.map(iteration => `
            <div class="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition-all"
                 onclick="viewIterationDetails('${iteration.id}')">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="font-bold text-lg">${iteration.id.replace('_', ' ').toUpperCase()}</h3>
                        <p class="text-sm text-gray-600">${iteration.date}</p>
                    </div>
                    <span class="px-2 py-1 rounded text-xs ${
                        iteration.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                    }">
                        ${iteration.status}
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-2 text-sm">
                    <div>Tasks: <span class="font-semibold">${iteration.summary.total_tasks}</span></div>
                    <div>Success: <span class="font-semibold">${iteration.summary.success_rate}%</span></div>
                    <div>KB Created: <span class="font-semibold">${iteration.summary.kb_entities_created}</span></div>
                    <div>KB Updated: <span class="font-semibold">${iteration.summary.kb_entities_updated}</span></div>
                </div>
                <div class="mt-2">
                    <span class="text-xs text-gray-500">
                        ${Object.keys(iteration.files).length} files •
                        Agents evolved: ${iteration.summary.agents_evolved}
                    </span>
                </div>
            </div>
        `).join('');

        return html;
    }

    // 이터레이션 상세 정보 렌더링
    renderIterationDetails(details) {
        if (!details) return '<p>No details available</p>';

        return `
            <div class="space-y-6">
                <!-- Header -->
                <div class="border-b pb-4">
                    <h2 class="text-2xl font-bold">${details.id.replace('_', ' ').toUpperCase()}</h2>
                    <p class="text-gray-600">${details.date} • ${Object.keys(details.files).length} files</p>
                </div>

                <!-- Summary Cards -->
                <div class="grid grid-cols-4 gap-4">
                    <div class="bg-blue-50 p-4 rounded">
                        <p class="text-sm text-gray-600">Total Tasks</p>
                        <p class="text-2xl font-bold">${details.summary.total_tasks}</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded">
                        <p class="text-sm text-gray-600">Success Rate</p>
                        <p class="text-2xl font-bold">${details.summary.success_rate}%</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded">
                        <p class="text-sm text-gray-600">KB Updates</p>
                        <p class="text-2xl font-bold">${details.summary.kb_entities_created + details.summary.kb_entities_updated}</p>
                    </div>
                    <div class="bg-yellow-50 p-4 rounded">
                        <p class="text-sm text-gray-600">Evolved Agents</p>
                        <p class="text-2xl font-bold">${details.summary.agents_evolved}</p>
                    </div>
                </div>

                <!-- Files -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">S3 Files</h3>
                    <div class="space-y-2">
                        ${Object.entries(details.files).map(([name, file]) => `
                            <div class="flex justify-between items-center p-3 border rounded hover:bg-gray-50">
                                <div>
                                    <span class="font-medium">${name}</span>
                                    <span class="text-sm text-gray-500 ml-2">
                                        ${this.formatFileSize(file.size)}
                                    </span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <span class="text-xs text-gray-500">
                                        ${this.formatDate(file.modified)}
                                    </span>
                                    <button onclick="previewS3File('${details.id}', '${name}')"
                                            class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Task Distribution -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-lg font-semibold mb-3">Tasks by Phase</h3>
                        <div class="space-y-2">
                            ${Object.entries(details.taskPlan.byPhase).map(([phase, count]) => `
                                <div class="flex justify-between p-2 bg-gray-50 rounded">
                                    <span>${phase}</span>
                                    <span class="font-semibold">${count}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-3">Tasks by Agent</h3>
                        <div class="space-y-2">
                            ${Object.entries(details.taskPlan.byAgent).map(([agent, count]) => `
                                <div class="flex justify-between p-2 bg-gray-50 rounded">
                                    <span>${agent}</span>
                                    <span class="font-semibold">${count}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Evaluation Scores -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">Evaluation Scores</h3>
                    <div class="grid grid-cols-4 gap-4">
                        ${Object.entries(details.evaluation.scores).map(([metric, score]) => `
                            <div class="text-center">
                                <div class="relative pt-1">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                                        <div style="width:${score}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                                            score >= 90 ? 'bg-green-500' :
                                            score >= 80 ? 'bg-blue-500' :
                                            'bg-yellow-500'
                                        }"></div>
                                    </div>
                                </div>
                                <p class="text-sm mt-1">${metric}</p>
                                <p class="font-bold">${score}%</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Agent Evolution -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">Agent Evolution</h3>
                    <div class="space-y-2">
                        ${details.agentEvolution.changes.map(change => `
                            <div class="p-3 border-l-4 border-blue-500 bg-blue-50">
                                <p class="font-medium">${change.agent}</p>
                                <p class="text-sm text-gray-600">
                                    <span class="font-medium">${change.type}:</span> ${change.change}
                                </p>
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
    module.exports = S3Browser;
}