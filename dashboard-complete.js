// Art Task Plan Pipeline - Complete Dashboard with Detailed Results
class CompleteDashboard {
    constructor() {
        this.currentView = 'overview';

        // Complete iteration data with detailed results
        this.iterationData = {
            'iteration_0': {
                id: 'iteration_0',
                date: '2024-03-10',
                status: 'Complete',
                game: 'Chrome Dino Runner',
                trials: 3,
                taskPlanType: 'Markdown-based prototypes',
                harness: 'Manual evaluation',
                results: {
                    verdict: 'Initial baseline',
                    accuracy: 'N/A',
                    notes: 'First prototype using markdown format',
                    details: [
                        { trial: 'trial_1', status: 'PROTOTYPE', notes: 'Initial markdown structure' },
                        { trial: 'trial_2', status: 'PROTOTYPE', notes: 'Refined task categories' },
                        { trial: 'trial_3', status: 'PROTOTYPE', notes: 'Added priority levels' }
                    ]
                }
            },
            'iteration_1': {
                id: 'iteration_1',
                date: '2024-03-17',
                status: 'Complete',
                game: 'Chrome Dino Runner',
                trials: 3,
                taskPlanType: 'Prompt design experiments',
                harness: 'Manual evaluation',
                results: {
                    verdict: 'Improved structure',
                    accuracy: 'N/A',
                    notes: 'Tested different prompt designs',
                    details: [
                        { trial: 'trial_1', status: 'TESTED', notes: 'Zero-shot prompting' },
                        { trial: 'trial_2', status: 'TESTED', notes: 'Few-shot with examples' },
                        { trial: 'trial_3', status: 'TESTED', notes: 'Chain-of-thought approach' }
                    ]
                }
            },
            'iteration_2': {
                id: 'iteration_2',
                date: '2024-03-24',
                status: 'Complete',
                game: 'Chrome Dino Runner',
                trials: 3,
                taskPlanType: 'JSON schema introduction',
                harness: 'v2',
                results: {
                    verdict: 'PASS',
                    accuracy: '65%',
                    notes: 'First JSON-based task plans',
                    pass_count: 2,
                    total: 3,
                    details: [
                        { trial: 'trial_1', status: 'PASS', score: 72 },
                        { trial: 'trial_2', status: 'PASS', score: 68 },
                        { trial: 'trial_3', status: 'FAIL', score: 45, error: 'Schema validation failed' }
                    ]
                }
            },
            'iteration_3': {
                id: 'iteration_3',
                date: '2024-04-01',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo'],
                trials: 10,
                harness: 'v3',
                pass_rate: '60%',
                automation: 'First automated pipeline',
                results: {
                    pass_count: 6,
                    fail_count: 4,
                    total: 10,
                    by_game: {
                        'Chrome_Dino_Runner': { pass: 3, fail: 2, trials: ['PASS', 'PASS', 'FAIL', 'PASS', 'FAIL'] },
                        'Pico_Echo': { pass: 3, fail: 2, trials: ['PASS', 'FAIL', 'PASS', 'FAIL', 'PASS'] }
                    }
                }
            },
            'iteration_4': {
                id: 'iteration_4',
                date: '2024-04-08',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo'],
                trials: 10,
                harness: 'v4',
                pass_rate: '70%',
                automation: 'Improved agent coordination',
                results: {
                    pass_count: 7,
                    fail_count: 3,
                    total: 10,
                    by_game: {
                        'Chrome_Dino_Runner': { pass: 4, fail: 1, trials: ['PASS', 'PASS', 'PASS', 'PASS', 'FAIL'] },
                        'Pico_Echo': { pass: 3, fail: 2, trials: ['PASS', 'FAIL', 'PASS', 'FAIL', 'PASS'] }
                    },
                    improvements: ['Better prompt consistency', 'Fixed schema validation issues']
                }
            },
            'iteration_5': {
                id: 'iteration_5',
                date: '2024-04-15',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy'],
                trials: 15,
                harness: 'v5',
                pass_rate: '80%',
                automation: 'KB integration added',
                results: {
                    pass_count: 12,
                    fail_count: 3,
                    total: 15,
                    by_game: {
                        'Chrome_Dino_Runner': { pass: 5, fail: 0, trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'] },
                        'Pico_Echo': { pass: 4, fail: 1, trials: ['PASS', 'PASS', 'PASS', 'FAIL', 'PASS'] },
                        'reflect_academy': { pass: 3, fail: 2, trials: ['PASS', 'FAIL', 'PASS', 'FAIL', 'PASS'] }
                    },
                    kb_writes: 183
                }
            },
            'iteration_6': {
                id: 'iteration_6',
                date: '2024-04-22',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down'],
                trials: 20,
                harness: 'v6',
                pass_rate: '85%',
                automation: 'Process Validator added',
                results: {
                    pass_count: 17,
                    fail_count: 3,
                    total: 20,
                    by_game: {
                        'Chrome_Dino_Runner': { pass: 5, fail: 0, trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'] },
                        'Pico_Echo': { pass: 5, fail: 0, trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'] },
                        'reflect_academy': { pass: 4, fail: 1, trials: ['PASS', 'PASS', 'PASS', 'FAIL', 'PASS'] },
                        'slip_down': { pass: 3, fail: 2, trials: ['PASS', 'FAIL', 'PASS', 'FAIL', 'PASS'] }
                    },
                    validation_metrics: {
                        contract_compliance: 92,
                        structural_integrity: 88
                    }
                }
            },
            'iteration_7': {
                id: 'iteration_7',
                date: '2024-04-29',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'],
                trials: 25,
                harness: 'v7',
                pass_rate: '100%',
                metrics: {
                    invariance: 92.45,
                    structurality: 94.80,
                    completeness: 100.00,
                    reference_integrity: 100.00
                },
                results: {
                    pass_count: 25,
                    fail_count: 0,
                    total: 25,
                    by_game: {
                        'Chrome_Dino_Runner': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 12, obstacles: 8, world: 10, ui: 8 }
                        },
                        'Pico_Echo': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 15, obstacles: 10, world: 12, ui: 10 }
                        },
                        'reflect_academy': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 18, obstacles: 12, world: 15, ui: 12 }
                        },
                        'slip_down': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 10, obstacles: 15, world: 8, ui: 6 }
                        },
                        'umbra_scale': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 20, obstacles: 18, world: 22, ui: 15 }
                        }
                    },
                    perfect_iteration: true
                }
            },
            'iteration_8': {
                id: 'iteration_8',
                date: '2024-05-06',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'],
                trials: 25,
                harness: 'v8',
                pass_rate: '96%',
                fail_details: 'reflect_academy trial1 IF-4 violation',
                metrics: {
                    invariance: 91.25,
                    structurality: 94.39,
                    completeness: 99.77,
                    reference_integrity: 97.60
                },
                results: {
                    pass_count: 24,
                    fail_count: 1,
                    total: 25,
                    by_game: {
                        'Chrome_Dino_Runner': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 14, obstacles: 9, world: 11, ui: 9 },
                            total_hours: 420
                        },
                        'Pico_Echo': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 16, obstacles: 11, world: 13, ui: 11 },
                            total_hours: 480
                        },
                        'reflect_academy': {
                            pass: 4, fail: 1,
                            trials: ['FAIL (IF-4)', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 20, obstacles: 13, world: 16, ui: 13 },
                            total_hours: 560,
                            failure_details: 'Trial 1: Reference phrase detected in runtime_notes'
                        },
                        'slip_down': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 11, obstacles: 16, world: 9, ui: 7 },
                            total_hours: 380
                        },
                        'umbra_scale': {
                            pass: 5, fail: 0,
                            trials: ['PASS', 'PASS', 'PASS', 'PASS', 'PASS'],
                            task_counts: { character: 22, obstacles: 20, world: 24, ui: 17 },
                            total_hours: 640
                        }
                    },
                    kb_writes: 342,
                    total_tasks: 1250,
                    total_hours_estimated: 2480
                }
            }
        };

        // Complete KB data
        this.kbData = {
            art: {
                id: '8cb7d4ac-7882-419a-a0cb-90b586fea960',
                name: 'Art Task Plan KB',
                total: 26789,
                lastUpdated: '2026-03-31 15:45:23',
                categories: {
                    'Task Plans': {
                        count: 12500,
                        description: 'Generated task plan JSON files from all iterations',
                        entities: [
                            {
                                id: 'TASK_PLAN_001',
                                type: 'task_package',
                                game: 'Chrome_Dino_Runner',
                                trial: 'trial_1',
                                iteration: 8,
                                assets: { character: 5, obstacles: 4, world: 4, ui: 4 },
                                total_hours: 120,
                                priority_distribution: { HIGH: 8, MEDIUM: 6, LOW: 3 }
                            },
                            {
                                id: 'TASK_PLAN_002',
                                type: 'task_package',
                                game: 'Pico_Echo',
                                trial: 'trial_3',
                                iteration: 8,
                                assets: { character: 7, obstacles: 5, world: 6, ui: 5 },
                                total_hours: 180,
                                priority_distribution: { HIGH: 12, MEDIUM: 8, LOW: 3 }
                            },
                            {
                                id: 'TASK_PLAN_003',
                                type: 'task_package',
                                game: 'reflect_academy',
                                trial: 'trial_1',
                                iteration: 8,
                                assets: { character: 8, obstacles: 6, world: 7, ui: 6 },
                                total_hours: 220,
                                status: 'FAILED',
                                failure_reason: 'IF-4 violation'
                            }
                        ],
                        sample_structure: {
                            '_project_common.json': 'Project metadata and config',
                            'character/*.json': 'Character art tasks',
                            'obstacles/*.json': 'Obstacle art tasks',
                            'world/*.json': 'Environment art tasks',
                            'ui/*.json': 'UI art tasks'
                        }
                    },
                    'Evaluation Results': {
                        count: 5234,
                        description: 'Harness evaluation reports and metrics',
                        entities: [
                            {
                                id: 'EVAL_001',
                                type: 'evaluation_report',
                                iteration: 8,
                                game: 'Chrome_Dino_Runner',
                                trial: 'trial_1',
                                verdict: 'PASS',
                                scores: { invariance: 92, structurality: 94, completeness: 100 }
                            },
                            {
                                id: 'EVAL_002',
                                type: 'evaluation_report',
                                iteration: 8,
                                game: 'reflect_academy',
                                trial: 'trial_1',
                                verdict: 'FAIL',
                                violation: 'IF-4',
                                details: 'Reference phrase in runtime_notes'
                            }
                        ]
                    },
                    'Bad Plan Archive': {
                        count: 3456,
                        description: 'Failed plans for regression testing',
                        entities: [
                            {
                                id: 'BAD_PLAN_001',
                                type: 'bad_plan',
                                iteration: 8,
                                game: 'reflect_academy',
                                trial: 'trial_1',
                                violation_type: 'IF-4',
                                archived_date: '2024-05-06'
                            }
                        ]
                    },
                    'Process Validation': {
                        count: 2345,
                        description: 'Process validation checks and reports',
                        entities: [
                            {
                                id: 'VAL_001',
                                type: 'validation_report',
                                iteration: 8,
                                phase: 'Phase 1',
                                status: 'PASS',
                                checks_passed: 45,
                                checks_total: 45
                            }
                        ]
                    },
                    'Iteration Metrics': {
                        count: 1987,
                        description: 'Performance metrics per iteration',
                        entities: [
                            {
                                id: 'METRIC_001',
                                type: 'iteration_metric',
                                iteration: 8,
                                pass_rate: 96,
                                avg_task_count: 50,
                                avg_hours: 99.2,
                                kb_writes: 342
                            }
                        ]
                    },
                    'Agent Evolution': {
                        count: 1657,
                        description: 'Prompt evolution history and improvements',
                        entities: [
                            {
                                id: 'EVOL_001',
                                type: 'evolution_record',
                                from_iteration: 7,
                                to_iteration: 8,
                                agent: 'art_task_plan_generator',
                                change_type: 'CONTRACT_HARDENING',
                                impact: 'Stricter IF-4 enforcement'
                            }
                        ]
                    }
                }
            },
            meta: {
                id: '6e8d718c-5c37-44e1-ba6f-347195b46811',
                name: 'Meta Iteration KB',
                total: 2313,
                lastUpdated: '2026-03-31 15:45:23',
                categories: {
                    'Agent Prompts': {
                        count: 742,
                        description: 'Agent system and user prompts',
                        entities: [
                            {
                                id: 'PROMPT_001',
                                type: 'agent_prompt',
                                agent: 'art_task_plan_generator',
                                version: 'v8',
                                sections: ['system', 'methodology', 'contracts', 'examples']
                            }
                        ]
                    },
                    'Pipeline Phases': {
                        count: 523,
                        description: 'Pipeline execution phases and orchestration',
                        entities: [
                            {
                                id: 'PHASE_001',
                                type: 'pipeline_phase',
                                phase: 'Phase 1',
                                agents: ['Designer', 'Analyzer', 'Generator', 'KB Writer'],
                                duration_avg_minutes: 45
                            }
                        ]
                    },
                    'Evaluation Harness': {
                        count: 445,
                        description: 'Evaluation harness versions and configurations',
                        entities: [
                            {
                                id: 'HARNESS_001',
                                type: 'harness_config',
                                version: 'v8',
                                rules: ['IF-1', 'IF-2', 'IF-3', 'IF-4'],
                                weights: { invariance: 0.25, structurality: 0.25, completeness: 0.25, reference: 0.25 }
                            }
                        ]
                    },
                    'Iteration Documents': {
                        count: 367,
                        description: 'Iteration planning and results documents',
                        entities: [
                            {
                                id: 'DOC_001',
                                type: 'iteration_doc',
                                iteration: 8,
                                document: 'Iteration_8_results.md',
                                sections: ['Overview', 'Results', 'Analysis', 'Retrospective']
                            }
                        ]
                    },
                    'Learning Records': {
                        count: 236,
                        description: 'Improvements and lessons learned',
                        entities: [
                            {
                                id: 'LEARN_001',
                                type: 'learning_record',
                                from_iteration: 7,
                                to_iteration: 8,
                                improvement: 'Contract hardening',
                                impact: 'Reduced false positives'
                            }
                        ]
                    }
                }
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showOverview();
    }

    setupEventListeners() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
            });
        });

        document.addEventListener('click', (e) => {
            // Iteration card click
            if (e.target.matches('.iteration-card button, .iteration-card button *')) {
                const card = e.target.closest('.iteration-card');
                const iterationId = card.dataset.iteration;
                this.showIterationDetails(iterationId);
            }

            // Detail tab click
            if (e.target.closest('.detail-tab')) {
                const tab = e.target.closest('.detail-tab');
                const tabType = tab.dataset.tabType;
                this.switchDetailTab(tabType);
            }

            // KB category click
            if (e.target.matches('.kb-category-card button, .kb-category-card button *')) {
                const card = e.target.closest('.kb-category-card');
                const kbType = card.dataset.kbType;
                const category = card.dataset.category;
                this.showKBCategoryDetails(kbType, category);
            }
        });
    }

    switchView(view) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.view === view) {
                item.classList.add('active');
            }
        });

        switch(view) {
            case 'overview':
                this.showOverview();
                break;
            case 'iterations':
                this.showIterations();
                break;
            case 'art-kb':
                this.showArtKB();
                break;
            case 'meta-kb':
                this.showMetaKB();
                break;
        }
    }

    showOverview() {
        const content = document.getElementById('main-content');
        const latestIteration = this.iterationData['iteration_8'];

        content.innerHTML = `
            <h2>Art Task Plan Pipeline Overview</h2>

            <div class="overview-grid">
                <div class="stat-card">
                    <h3>Total Iterations</h3>
                    <div class="stat-value">9</div>
                    <div class="stat-change">Iterations 0-8 complete</div>
                </div>
                <div class="stat-card">
                    <h3>Latest Accuracy</h3>
                    <div class="stat-value">96%</div>
                    <div class="stat-change">Iteration 8</div>
                </div>
                <div class="stat-card">
                    <h3>Total Task Plans</h3>
                    <div class="stat-value">1,250</div>
                    <div class="stat-change">Across all iterations</div>
                </div>
                <div class="stat-card">
                    <h3>Games Covered</h3>
                    <div class="stat-value">5</div>
                    <div class="stat-change">25 trials total</div>
                </div>
            </div>

            <h3>Pipeline Phases</h3>
            <div class="pipeline-flow">
                <span class="phase">Designer</span>
                <span class="arrow">→</span>
                <span class="phase">Analyzer (Early)</span>
                <span class="arrow">→</span>
                <span class="phase">Generator</span>
                <span class="arrow">→</span>
                <span class="phase">Evaluator</span>
                <span class="arrow">→</span>
                <span class="phase">Analyzer (Late)</span>
                <span class="arrow">→</span>
                <span class="phase">Process Validator</span>
                <span class="arrow">→</span>
                <span class="phase">Evolver</span>
            </div>
        `;
    }

    showIterations() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>All Iterations (0-8)</h2>
            <div class="iterations-grid">
                ${Object.values(this.iterationData).map(iter => `
                    <div class="iteration-card glass-container" data-iteration="${iter.id}">
                        <div class="iteration-header">
                            <h3>${iter.id.replace('_', ' ').toUpperCase()}</h3>
                            <span class="status-badge ${iter.status.toLowerCase()}">${iter.status}</span>
                        </div>
                        <div class="iteration-info">
                            <p><strong>Date:</strong> ${iter.date}</p>
                            ${iter.pass_rate ? `<p><strong>Pass Rate:</strong> ${iter.pass_rate}</p>` : ''}
                            ${iter.games ? `<p><strong>Games:</strong> ${iter.games.length}</p>` : ''}
                            ${iter.trials ? `<p><strong>Trials:</strong> ${iter.trials}</p>` : ''}
                            ${iter.results && iter.results.total ? `<p><strong>Results:</strong> ${iter.results.pass_count}/${iter.results.total} PASS</p>` : ''}
                        </div>
                        <button class="btn-modern small">View Details</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showArtKB() {
        const content = document.getElementById('main-content');
        const kb = this.kbData.art;

        content.innerHTML = `
            <h2>Art Task Plan Knowledge Base</h2>

            <div class="kb-header">
                <div class="kb-stats">
                    <div class="stat">
                        <span class="label">Total Entities</span>
                        <span class="value">${kb.total.toLocaleString()}</span>
                    </div>
                    <div class="stat">
                        <span class="label">KB ID</span>
                        <span class="value">${kb.id}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Last Updated</span>
                        <span class="value">${kb.lastUpdated}</span>
                    </div>
                </div>
            </div>

            <div class="kb-categories-detailed">
                ${Object.entries(kb.categories).map(([name, data]) => `
                    <div class="kb-category-card glass-container" data-kb-type="art" data-category="${name}">
                        <div class="category-header">
                            <h3>${name}</h3>
                            <span class="entity-count">${data.count.toLocaleString()} entities</span>
                        </div>

                        <p class="category-description">${data.description}</p>

                        ${data.entities && data.entities.length > 0 ? `
                            <div class="entity-samples">
                                ${data.entities.slice(0, 2).map(entity => `
                                    <div class="entity-card">
                                        <div class="entity-header">
                                            <span class="entity-id">${entity.id}</span>
                                            <span class="entity-type">${entity.type}</span>
                                        </div>
                                        <h4>${entity.game || entity.agent || entity.iteration || 'Entity Details'}</h4>
                                        ${entity.trial ? `<p>Trial: ${entity.trial}</p>` : ''}
                                        ${entity.verdict ? `<p>Verdict: <strong>${entity.verdict}</strong></p>` : ''}
                                        ${entity.status ? `<p>Status: <strong>${entity.status}</strong></p>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <button class="btn-modern small">View All ${name}</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showMetaKB() {
        const content = document.getElementById('main-content');
        const kb = this.kbData.meta;

        content.innerHTML = `
            <h2>Meta Iteration Knowledge Base</h2>

            <div class="kb-header">
                <div class="kb-stats">
                    <div class="stat">
                        <span class="label">Total Entities</span>
                        <span class="value">${kb.total.toLocaleString()}</span>
                    </div>
                    <div class="stat">
                        <span class="label">KB ID</span>
                        <span class="value">${kb.id}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Last Updated</span>
                        <span class="value">${kb.lastUpdated}</span>
                    </div>
                </div>
            </div>

            <div class="kb-categories-detailed">
                ${Object.entries(kb.categories).map(([name, data]) => `
                    <div class="kb-category-card glass-container" data-kb-type="meta" data-category="${name}">
                        <div class="category-header">
                            <h3>${name}</h3>
                            <span class="entity-count">${data.count.toLocaleString()} entities</span>
                        </div>

                        <p class="category-description">${data.description}</p>

                        ${data.entities && data.entities.length > 0 ? `
                            <div class="entity-samples">
                                ${data.entities.map(entity => `
                                    <div class="entity-card">
                                        <div class="entity-header">
                                            <span class="entity-id">${entity.id}</span>
                                            <span class="entity-type">${entity.type}</span>
                                        </div>
                                        <h4>${entity.agent || entity.phase || entity.version || entity.iteration || 'Entity Details'}</h4>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <button class="btn-modern small">View All ${name}</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showIterationDetails(iterationId) {
        const iteration = this.iterationData[iterationId];
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>${iterationId.replace('_', ' ').toUpperCase()} Details</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="detail-tabs">
                        <button class="detail-tab active" data-tab-type="overview">Overview</button>
                        <button class="detail-tab" data-tab-type="data">Data Structure</button>
                        <button class="detail-tab" data-tab-type="results">Results</button>
                        <button class="detail-tab" data-tab-type="artifacts">Artifacts</button>
                    </div>

                    <div id="iteration-detail-content">
                        ${this.renderIterationOverview(iteration)}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        this.currentIterationModal = iteration;
    }

    renderIterationOverview(iteration) {
        return `
            <div class="iteration-overview">
                <h3>Basic Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Date</label>
                        <value>${iteration.date}</value>
                    </div>
                    <div class="info-item">
                        <label>Status</label>
                        <value>${iteration.status}</value>
                    </div>
                    ${iteration.harness ? `
                        <div class="info-item">
                            <label>Harness</label>
                            <value>${iteration.harness}</value>
                        </div>
                    ` : ''}
                    ${iteration.pass_rate ? `
                        <div class="info-item">
                            <label>Pass Rate</label>
                            <value>${iteration.pass_rate}</value>
                        </div>
                    ` : ''}
                </div>

                ${iteration.metrics ? `
                    <h3>Evaluation Metrics</h3>
                    <div class="metrics-grid">
                        ${Object.entries(iteration.metrics).map(([key, value]) => `
                            <div class="metric-card">
                                <span class="metric-label">${key.replace('_', ' ')}</span>
                                <span class="metric-value">${value}%</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${iteration.fail_details ? `
                    <div class="alert alert-warning">
                        <h4>⚠️ Failure Details</h4>
                        <p>${iteration.fail_details}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    switchDetailTab(tabType) {
        document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');

        const content = document.getElementById('iteration-detail-content');
        const iteration = this.currentIterationModal;

        switch(tabType) {
            case 'overview':
                content.innerHTML = this.renderIterationOverview(iteration);
                break;
            case 'data':
                content.innerHTML = this.renderDataStructure(iteration);
                break;
            case 'results':
                content.innerHTML = this.renderDetailedResults(iteration);
                break;
            case 'artifacts':
                content.innerHTML = this.renderArtifacts(iteration);
                break;
        }
    }

    renderDetailedResults(iteration) {
        if (!iteration.results) {
            return '<div class="no-data">No results data available for this iteration</div>';
        }

        const results = iteration.results;

        return `
            <div class="results-section">
                <h3>Iteration Results</h3>

                ${results.pass_count !== undefined ? `
                    <div class="results-summary">
                        <div class="result-stat">
                            <span class="label">Pass Count</span>
                            <span class="value ${results.fail_count === 0 ? 'success' : ''}">${results.pass_count}/${results.total}</span>
                        </div>
                        ${results.verdict ? `
                            <div class="result-stat">
                                <span class="label">Verdict</span>
                                <span class="value">${results.verdict}</span>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                ${results.by_game ? `
                    <h3>Results by Game</h3>
                    <div class="games-results">
                        ${Object.entries(results.by_game).map(([game, data]) => `
                            <div class="game-result glass-container">
                                <h4>${game}</h4>
                                <div class="game-stats">
                                    <span class="stat">Pass: ${data.pass}</span>
                                    <span class="stat">Fail: ${data.fail}</span>
                                </div>

                                ${data.trials ? `
                                    <div class="trials-list">
                                        ${data.trials.map((result, idx) => `
                                            <span class="trial-badge ${result.includes('PASS') ? 'success' : 'fail'}">
                                                Trial ${idx + 1}: ${result}
                                            </span>
                                        `).join('')}
                                    </div>
                                ` : ''}

                                ${data.task_counts ? `
                                    <div class="task-distribution">
                                        ${Object.entries(data.task_counts).map(([category, count]) => `
                                            <div class="category-stat">
                                                <span class="category-name">${category}</span>
                                                <span class="category-count">${count}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}

                                ${data.total_hours ? `
                                    <p class="total-hours">Estimated Hours: ${data.total_hours}</p>
                                ` : ''}

                                ${data.failure_details ? `
                                    <div class="failure-details">
                                        <p>⚠️ ${data.failure_details}</p>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${results.details ? `
                    <h3>Trial Details</h3>
                    <div class="trial-details">
                        ${results.details.map(detail => `
                            <div class="trial-detail">
                                <span class="trial-name">${detail.trial}</span>
                                <span class="trial-status ${detail.status === 'PASS' ? 'success' : 'fail'}">${detail.status}</span>
                                ${detail.score ? `<span class="trial-score">Score: ${detail.score}</span>` : ''}
                                ${detail.notes ? `<span class="trial-notes">${detail.notes}</span>` : ''}
                                ${detail.error ? `<span class="trial-error">Error: ${detail.error}</span>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${results.kb_writes ? `
                    <div class="kb-writes-info">
                        <h4>KB Writes</h4>
                        <p>${results.kb_writes} entities written</p>
                    </div>
                ` : ''}

                ${results.total_tasks ? `
                    <div class="task-stats">
                        <h4>Task Statistics</h4>
                        <p>Total Tasks: ${results.total_tasks}</p>
                        ${results.total_hours_estimated ? `<p>Total Hours: ${results.total_hours_estimated}</p>` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderDataStructure(iteration) {
        return `
            <div class="data-structure">
                <h3>File Structure</h3>
                <pre class="code-block">
experiments/iterations/${iteration.id}/
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_goal.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_plan.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_progress.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_results.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_retrospective.md
└── data/
    ├── task_plans/
    │   ${iteration.games ? iteration.games.map(game => `├── ${game}/
    │   │   ├── trial_1/
    │   │   │   ├── _project_common.json
    │   │   │   ├── character/*.json
    │   │   │   ├── obstacles/*.json
    │   │   │   ├── world/*.json
    │   │   │   └── ui/*.json
    │   │   └── trial_5/`).join('\n    │   ') : '└── [Game folders]'}
    └── eval_results/
        └── harness_${iteration.harness || 'vX'}/</pre>
            </div>
        `;
    }

    renderArtifacts(iteration) {
        return `
            <div class="artifacts-section">
                <h3>S3 Artifacts</h3>
                <div class="s3-path">
                    <code>s3://dev-gamelift-assets-859616339670-use1/planning/</code>
                </div>

                <div class="artifact-list">
                    <div class="artifact-item">
                        <span class="icon">📁</span>
                        <span>Art_Task_Plan/${iteration.id}/</span>
                    </div>
                    <div class="artifact-item nested">
                        <span class="icon">📄</span>
                        <span>task_plans/*.json</span>
                    </div>
                    <div class="artifact-item nested">
                        <span class="icon">📄</span>
                        <span>evaluation_report.json</span>
                    </div>
                    <div class="artifact-item">
                        <span class="icon">📁</span>
                        <span>Evaluation_Reports/${iteration.id}/</span>
                    </div>
                    <div class="artifact-item">
                        <span class="icon">📁</span>
                        <span>KB_Registry/${iteration.id}/</span>
                    </div>
                </div>

                <h3>GitHub Repository</h3>
                <div class="artifact-list">
                    <div class="artifact-item">
                        <span class="icon">📂</span>
                        <span>experiments/iterations/${iteration.id}/</span>
                    </div>
                    <div class="artifact-item">
                        <span class="icon">📄</span>
                        <span>Repository/Art_Task_Plan/Task_Plan_Output/${iteration.id}/</span>
                    </div>
                </div>
            </div>
        `;
    }

    showKBCategoryDetails(kbType, category) {
        const kbData = this.kbData[kbType];
        const categoryData = kbData.categories[category];

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>${category} - ${kbData.name}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p class="category-description">${categoryData.description}</p>
                    <p><strong>Total Entities:</strong> ${categoryData.count.toLocaleString()}</p>

                    <h3>Sample Entities</h3>
                    <div class="entity-list">
                        ${categoryData.entities.map(entity => `
                            <div class="entity-item glass-container">
                                <div class="entity-header">
                                    <span class="entity-id">${entity.id}</span>
                                    <span class="entity-type">${entity.type}</span>
                                </div>
                                <div class="entity-details">
                                    ${Object.entries(entity).filter(([key]) => !['id', 'type'].includes(key)).map(([key, value]) => `
                                        <div class="entity-field">
                                            <span class="field-name">${key}:</span>
                                            <span class="field-value">${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    ${categoryData.sample_structure ? `
                        <h3>Data Structure</h3>
                        <div class="structure-info">
                            ${Object.entries(categoryData.sample_structure).map(([key, desc]) => `
                                <div class="structure-item">
                                    <code>${key}</code>
                                    <span>${desc}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardApp = new CompleteDashboard();
});