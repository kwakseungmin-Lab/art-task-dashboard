// Art Task Plan Pipeline - Full Detail Dashboard with KB Relationships and S3 Artifacts
class FullDetailDashboard {
    constructor() {
        this.currentView = 'overview';

        // Complete iteration data with all S3 artifacts
        this.iterationData = {
            'iteration_0': {
                id: 'iteration_0',
                date: '2024-03-10',
                status: 'Complete',
                games: ['Chrome_Dino_Runner'],
                trials: 3,
                taskPlanType: 'Markdown-based prototypes',
                harness: 'Manual evaluation',
                s3_artifacts: {
                    task_plans: 'N/A - Markdown prototypes',
                    evaluation: 'Manual review documents'
                },
                results: {
                    verdict: 'Initial baseline',
                    accuracy: 'N/A',
                    notes: 'First prototype using markdown format'
                }
            },
            'iteration_1': {
                id: 'iteration_1',
                date: '2024-03-17',
                status: 'Complete',
                games: ['Chrome_Dino_Runner'],
                trials: 3,
                taskPlanType: 'Prompt design experiments',
                harness: 'Manual evaluation',
                s3_artifacts: {
                    task_plans: 'N/A - Prompt experiments',
                    evaluation: 'Manual review documents'
                },
                results: {
                    verdict: 'Improved structure',
                    accuracy: 'N/A',
                    notes: 'Tested different prompt designs'
                }
            },
            'iteration_2': {
                id: 'iteration_2',
                date: '2024-03-24',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo'],
                trials: 10,
                harness: 'v2',
                s3_artifacts: {
                    task_plans: [
                        's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_2/chrome_dino/',
                        's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_2/pico_echo/'
                    ],
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_2/',
                    local_files: [
                        'chrome_dino_art_task_plan/Art_Task_Plan_trial_1.json',
                        'chrome_dino_art_task_plan/Art_Task_Plan_trial_2.json',
                        'chrome_dino_art_task_plan/Art_Task_Plan_trial_3.json',
                        'chrome_dino_art_task_plan/Art_Task_Plan_trial_4.json',
                        'pico_echo_art_task_plan/Art_Task_Plan_trial_1.json',
                        'pico_echo_art_task_plan/Art_Task_Plan_trial_2.json',
                        'pico_echo_art_task_plan/Art_Task_Plan_trial_3.json',
                        'pico_echo_art_task_plan/Art_Task_Plan_trial_4.json'
                    ]
                },
                results: {
                    verdict: 'PASS',
                    accuracy: '65%',
                    pass_count: 6,
                    fail_count: 4,
                    total: 10
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
                s3_artifacts: {
                    task_plans: [
                        's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Chrome_Dino_Runner/',
                        's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Pico_Echo/'
                    ],
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_3/',
                    structure: {
                        'Chrome_Dino_Runner': {
                            'trial_1': {
                                '_project_common.json': 'Project metadata',
                                'characters/': ['player_idle.json', 'player_run.json', 'player_jump.json', 'player_duck.json', 'player_dead.json', 'cactus_*.json', 'pterodactyl_*.json'],
                                'environment/': ['background.json', 'ground.json', 'cloud_*.json'],
                                'obstacles/': ['cactus_*.json', 'pterodactyl_*.json'],
                                'ui/': ['game_over_screen.json', 'score_display.json']
                            }
                        }
                    }
                },
                results: {
                    pass_count: 6,
                    fail_count: 4,
                    total: 10,
                    details: {
                        'Chrome_Dino_Runner': { pass: 3, fail: 2 },
                        'Pico_Echo': { pass: 3, fail: 2 }
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
                s3_artifacts: {
                    task_plans: 's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_4/',
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_4/'
                },
                results: {
                    pass_count: 7,
                    fail_count: 3,
                    total: 10
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
                s3_artifacts: {
                    task_plans: 's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_5/',
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_5/'
                },
                results: {
                    pass_count: 12,
                    fail_count: 3,
                    total: 15
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
                s3_artifacts: {
                    task_plans: 's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_6/',
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_6/'
                },
                results: {
                    pass_count: 17,
                    fail_count: 3,
                    total: 20
                }
            },
            'iteration_7': {
                id: 'iteration_7',
                date: '2024-04-29',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'cosmos_heracles', 'olympus_step', 'ricochet_conspiracy'],
                trials: 25,
                harness: 'v7',
                pass_rate: '100%',
                metrics: {
                    invariance: 91.52,
                    structurality: 94.26,
                    completeness: 100.00,
                    reference_integrity: 99.20
                },
                s3_artifacts: {
                    task_plans: 's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_7/',
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_7/',
                    kb_registry: 's3://dev-gamelift-assets-859616339670-use1/planning/KB_Registry/iteration_7/',
                    bad_plan: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_7/bad_plan/'
                },
                results: {
                    pass_count: 25,
                    fail_count: 0,
                    total: 25,
                    primary_benchmark_pass_rate: '100%',
                    by_game: {
                        'Chrome_Dino_Runner': {
                            pass: 5, fail: 0,
                            avg_invariance: 96.92,
                            avg_structurality: 95.40,
                            avg_completeness: 100.0,
                            avg_ref_integrity: 100.0
                        },
                        'Pico_Echo': {
                            pass: 5, fail: 0,
                            avg_invariance: 80.85,
                            avg_structurality: 91.00,
                            avg_completeness: 100.0,
                            avg_ref_integrity: 100.0
                        },
                        'cosmos_heracles': {
                            pass: 5, fail: 0,
                            avg_invariance: 90.40,
                            avg_structurality: 92.92,
                            avg_completeness: 100.0,
                            avg_ref_integrity: 98.0
                        },
                        'olympus_step': {
                            pass: 5, fail: 0,
                            avg_invariance: 95.31,
                            avg_structurality: 95.57,
                            avg_completeness: 100.0,
                            avg_ref_integrity: 98.0
                        },
                        'ricochet_conspiracy': {
                            pass: 5, fail: 0,
                            avg_invariance: 94.14,
                            avg_structurality: 96.40,
                            avg_completeness: 100.0,
                            avg_ref_integrity: 100.0
                        }
                    },
                    perfect_iteration: true,
                    key_achievements: [
                        'All IF-9/IF-8/IF-4 incidents eliminated',
                        'Package traceability 25/25 완전 달성',
                        'Completeness 100% for all trials'
                    ]
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
                s3_artifacts: {
                    task_plans: 's3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_8/',
                    evaluation: 's3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_8/',
                    kb_registry: 's3://dev-gamelift-assets-859616339670-use1/planning/KB_Registry/iteration_8/'
                },
                results: {
                    pass_count: 24,
                    fail_count: 1,
                    total: 25,
                    by_game: {
                        'Chrome_Dino_Runner': { pass: 5, fail: 0 },
                        'Pico_Echo': { pass: 5, fail: 0 },
                        'reflect_academy': {
                            pass: 4, fail: 1,
                            failure_details: 'Trial 1: IF-4 violation - Reference phrase in runtime_notes'
                        },
                        'slip_down': { pass: 5, fail: 0 },
                        'umbra_scale': { pass: 5, fail: 0 }
                    }
                }
            }
        };

        // KB Data with relationships
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
                        relationships: [
                            { from: 'Task Plans', to: 'Evaluation Results', type: 'evaluated_by' },
                            { from: 'Task Plans', to: 'Iteration Metrics', type: 'measured_in' }
                        ],
                        entities: this.generateTaskPlanEntities()
                    },
                    'Evaluation Results': {
                        count: 5234,
                        description: 'Harness evaluation reports and metrics',
                        relationships: [
                            { from: 'Evaluation Results', to: 'Bad Plan Archive', type: 'archives_failures' },
                            { from: 'Evaluation Results', to: 'Process Validation', type: 'triggers' }
                        ],
                        entities: this.generateEvaluationEntities()
                    },
                    'Bad Plan Archive': {
                        count: 3456,
                        description: 'Failed plans for regression testing',
                        relationships: [
                            { from: 'Bad Plan Archive', to: 'Agent Evolution', type: 'informs' }
                        ],
                        entities: this.generateBadPlanEntities()
                    },
                    'Process Validation': {
                        count: 2345,
                        description: 'Process validation checks and reports',
                        relationships: [
                            { from: 'Process Validation', to: 'Iteration Metrics', type: 'contributes_to' }
                        ],
                        entities: this.generateValidationEntities()
                    },
                    'Iteration Metrics': {
                        count: 1987,
                        description: 'Performance metrics per iteration',
                        relationships: [
                            { from: 'Iteration Metrics', to: 'Agent Evolution', type: 'drives' }
                        ],
                        entities: this.generateMetricEntities()
                    },
                    'Agent Evolution': {
                        count: 1657,
                        description: 'Prompt evolution history and improvements',
                        relationships: [
                            { from: 'Agent Evolution', to: 'Task Plans', type: 'improves_generation' }
                        ],
                        entities: this.generateEvolutionEntities()
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
                        relationships: [
                            { from: 'Agent Prompts', to: 'Pipeline Phases', type: 'used_in' },
                            { from: 'Agent Prompts', to: 'Learning Records', type: 'evolves_from' }
                        ],
                        entities: this.generatePromptEntities()
                    },
                    'Pipeline Phases': {
                        count: 523,
                        description: 'Pipeline execution phases and orchestration',
                        relationships: [
                            { from: 'Pipeline Phases', to: 'Iteration Documents', type: 'documented_in' }
                        ],
                        entities: this.generatePhaseEntities()
                    },
                    'Evaluation Harness': {
                        count: 445,
                        description: 'Evaluation harness versions and configurations',
                        relationships: [
                            { from: 'Evaluation Harness', to: 'Agent Prompts', type: 'validates' }
                        ],
                        entities: this.generateHarnessEntities()
                    },
                    'Iteration Documents': {
                        count: 367,
                        description: 'Iteration planning and results documents',
                        relationships: [
                            { from: 'Iteration Documents', to: 'Learning Records', type: 'analyzed_in' }
                        ],
                        entities: this.generateDocumentEntities()
                    },
                    'Learning Records': {
                        count: 236,
                        description: 'Improvements and lessons learned',
                        relationships: [
                            { from: 'Learning Records', to: 'Agent Prompts', type: 'improves' }
                        ],
                        entities: this.generateLearningEntities()
                    }
                }
            }
        };

        // S3 Structure
        this.s3Structure = {
            bucket: 's3://dev-gamelift-assets-859616339670-use1/',
            paths: {
                ideation: 'ideation/{exp_id}/{game_name}/',
                planning: {
                    task_plans: 'planning/Art_Task_Plan/iteration_{N}/{Game}/',
                    evaluation: 'planning/Evaluation_Reports/iteration_{N}/',
                    kb_registry: 'planning/KB_Registry/iteration_{N}/'
                }
            },
            file_structure: {
                task_plan_package: {
                    '_project_common.json': 'Game-wide art style and configuration',
                    'character/*.json': 'Character art task definitions',
                    'obstacles/*.json': 'Obstacle art task definitions',
                    'world/*.json': 'World/environment art tasks',
                    'ui/*.json': 'UI element art tasks'
                },
                evaluation_report: {
                    '{Game}_trial{X}_iter{N}_eval_v{H}.json': 'Detailed evaluation results',
                    '{Game}_trial{X}_iter{N}_eval_v{H}.md': 'Human-readable report',
                    'bad_plan/*.json': 'Failed plans for regression testing'
                }
            }
        };

        this.init();
    }

    generateTaskPlanEntities() {
        const games = ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'];
        const entities = [];

        for (let iter = 1; iter <= 8; iter++) {
            for (const game of games.slice(0, Math.min(iter, 5))) {
                for (let trial = 1; trial <= 5; trial++) {
                    entities.push({
                        id: `TASK_PLAN_${iter}_${game}_T${trial}`,
                        type: 'task_package',
                        game: game,
                        trial: `trial_${trial}`,
                        iteration: iter,
                        categories: ['character', 'obstacles', 'world', 'ui'],
                        total_tasks: Math.floor(Math.random() * 20) + 30,
                        total_hours: Math.floor(Math.random() * 100) + 100,
                        s3_path: `planning/Art_Task_Plan/iteration_${iter}/${game}/trial_${trial}/`,
                        status: iter === 8 && game === 'reflect_academy' && trial === 1 ? 'FAILED' : 'PASS'
                    });
                }
            }
        }
        return entities.slice(0, 5);
    }

    generateEvaluationEntities() {
        return [
            {
                id: 'EVAL_8_reflect_T1',
                type: 'evaluation_report',
                iteration: 8,
                game: 'reflect_academy',
                trial: 'trial_1',
                verdict: 'FAIL',
                violation: 'IF-4',
                scores: { invariance: 88, structurality: 92, completeness: 98, reference: 85 },
                s3_path: 'planning/Evaluation_Reports/iteration_8/harness_v8/'
            },
            {
                id: 'EVAL_7_Chrome_T1',
                type: 'evaluation_report',
                iteration: 7,
                game: 'Chrome_Dino_Runner',
                trial: 'trial_1',
                verdict: 'PASS',
                scores: { invariance: 96, structurality: 95, completeness: 100, reference: 100 },
                s3_path: 'planning/Evaluation_Reports/iteration_7/harness_v7/'
            }
        ];
    }

    generateBadPlanEntities() {
        return [
            {
                id: 'BAD_PLAN_001',
                type: 'bad_plan',
                iteration: 8,
                game: 'reflect_academy',
                trial: 'trial_1',
                violation_type: 'IF-4',
                archived_date: '2024-05-06',
                used_for_regression: true
            }
        ];
    }

    generateValidationEntities() {
        return [
            {
                id: 'VAL_ITER8_P1',
                type: 'validation_report',
                iteration: 8,
                phase: 'Phase 1',
                status: 'PASS',
                checks_passed: 45,
                checks_total: 45,
                agent: 'art_task_plan_process_validator'
            }
        ];
    }

    generateMetricEntities() {
        return [
            {
                id: 'METRIC_ITER7',
                type: 'iteration_metric',
                iteration: 7,
                pass_rate: 100,
                avg_invariance: 91.52,
                avg_structurality: 94.26,
                avg_completeness: 100.0,
                avg_ref_integrity: 99.2,
                total_tasks: 1189,
                kb_writes: 298
            },
            {
                id: 'METRIC_ITER8',
                type: 'iteration_metric',
                iteration: 8,
                pass_rate: 96,
                avg_invariance: 91.25,
                avg_structurality: 94.39,
                avg_completeness: 99.77,
                avg_ref_integrity: 97.60,
                total_tasks: 1250,
                kb_writes: 342
            }
        ];
    }

    generateEvolutionEntities() {
        return [
            {
                id: 'EVOL_7_TO_8',
                type: 'evolution_record',
                from_iteration: 7,
                to_iteration: 8,
                agent: 'art_task_plan_generator',
                change_type: 'CONTRACT_HARDENING',
                impact: 'Stricter IF-4 enforcement',
                result: 'PATCHED'
            }
        ];
    }

    generatePromptEntities() {
        return [
            {
                id: 'PROMPT_GEN_V8',
                type: 'agent_prompt',
                agent: 'art_task_plan_generator',
                version: 'v8',
                sections: ['system', 'methodology', 'contracts', 'examples'],
                lines_of_code: 1250,
                last_modified: '2024-05-06'
            }
        ];
    }

    generatePhaseEntities() {
        return [
            {
                id: 'PHASE_1',
                type: 'pipeline_phase',
                phase: 'Phase 1',
                agents: ['Designer', 'Analyzer', 'Generator', 'KB Writer'],
                duration_avg_minutes: 45,
                execution_order: 1
            },
            {
                id: 'PHASE_2',
                type: 'pipeline_phase',
                phase: 'Phase 2',
                agents: ['Evaluator', 'Analyzer', 'Process Validator', 'Evolver'],
                duration_avg_minutes: 60,
                execution_order: 2
            }
        ];
    }

    generateHarnessEntities() {
        return [
            {
                id: 'HARNESS_V8',
                type: 'harness_config',
                version: 'v8',
                rules: ['IF-1', 'IF-2', 'IF-3', 'IF-4', 'IF-5', 'IF-6', 'IF-7', 'IF-8', 'IF-9', 'IF-10', 'IF-11', 'IF-12'],
                weights: { invariance: 0.25, structurality: 0.25, completeness: 0.25, reference: 0.25 },
                strictness: 'HIGH'
            }
        ];
    }

    generateDocumentEntities() {
        return [
            {
                id: 'DOC_ITER8_RESULTS',
                type: 'iteration_doc',
                iteration: 8,
                document: 'Iteration_8_results.md',
                sections: ['Overview', 'Results', 'Analysis', 'Retrospective'],
                author: 'art_task_plan_analyzer'
            }
        ];
    }

    generateLearningEntities() {
        return [
            {
                id: 'LEARN_ITER7',
                type: 'learning_record',
                from_iteration: 6,
                to_iteration: 7,
                improvement: 'Evidence traceability implementation',
                impact: 'PASS rate 76% → 100%',
                key_insight: 'Package manifest coverage critical for quality'
            }
        ];
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
            if (e.target.matches('.iteration-card button, .iteration-card button *')) {
                const card = e.target.closest('.iteration-card');
                const iterationId = card.dataset.iteration;
                this.showIterationDetails(iterationId);
            }

            if (e.target.closest('.detail-tab')) {
                const tab = e.target.closest('.detail-tab');
                const tabType = tab.dataset.tabType;
                this.switchDetailTab(tabType);
            }

            if (e.target.matches('.kb-category-card button, .kb-category-card button *')) {
                const card = e.target.closest('.kb-category-card');
                const kbType = card.dataset.kbType;
                const category = card.dataset.category;
                this.showKBCategoryDetails(kbType, category);
            }

            if (e.target.matches('.view-relationship')) {
                const relationship = e.target.dataset.relationship;
                this.showRelationshipDiagram(relationship);
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
                    <div class="stat-change">Iteration 8 (24/25 PASS)</div>
                </div>
                <div class="stat-card">
                    <h3>Best Performance</h3>
                    <div class="stat-value">100%</div>
                    <div class="stat-change">Iteration 7 (25/25 PASS)</div>
                </div>
                <div class="stat-card">
                    <h3>Total KB Entities</h3>
                    <div class="stat-value">29,102</div>
                    <div class="stat-change">Art KB + Meta KB</div>
                </div>
            </div>

            <h3>S3 Repository Structure</h3>
            <div class="s3-structure glass-container">
                <code class="s3-path">${this.s3Structure.bucket}</code>
                <div class="s3-tree">
                    <div class="tree-item">
                        📁 ideation/
                        <div class="tree-children">
                            └── {exp_id}/{game_name}/ <span class="tree-note">GDD source from ideation pipeline</span>
                        </div>
                    </div>
                    <div class="tree-item">
                        📁 planning/
                        <div class="tree-children">
                            <div>📁 Art_Task_Plan/</div>
                            <div class="tree-children">
                                └── iteration_{0-8}/{Game}/trial_{1-5}/ <span class="tree-note">Generated task plans</span>
                            </div>
                            <div>📁 Evaluation_Reports/</div>
                            <div class="tree-children">
                                └── iteration_{0-8}/harness_v{N}/ <span class="tree-note">Evaluation results</span>
                            </div>
                            <div>📁 KB_Registry/</div>
                            <div class="tree-children">
                                └── iteration_{0-8}/ <span class="tree-note">KB snapshots</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Pipeline Phases</h3>
            <div class="pipeline-flow">
                <span class="phase">Phase 1</span>
                <div class="phase-details">Designer → Analyzer → Generator → KB Writer</div>
                <span class="arrow">→</span>
                <span class="phase">Phase 2</span>
                <div class="phase-details">Evaluator → Analyzer → Validator → Evolver</div>
            </div>

            <h3>KB Entity Relationships</h3>
            <div class="relationship-diagram glass-container">
                <svg width="800" height="400" id="kb-relationship-svg"></svg>
            </div>
        `;

        // Draw relationship diagram
        this.drawRelationshipDiagram();
    }

    drawRelationshipDiagram() {
        const svg = document.getElementById('kb-relationship-svg');
        if (!svg) return;

        svg.innerHTML = `
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
            </defs>

            <!-- Art KB Nodes -->
            <g id="art-kb-nodes">
                <rect x="50" y="50" width="120" height="40" rx="5" fill="#3b82f6" opacity="0.2" stroke="#3b82f6"/>
                <text x="110" y="75" text-anchor="middle" fill="#3b82f6" font-size="12">Task Plans</text>

                <rect x="250" y="50" width="120" height="40" rx="5" fill="#3b82f6" opacity="0.2" stroke="#3b82f6"/>
                <text x="310" y="75" text-anchor="middle" fill="#3b82f6" font-size="12">Evaluation Results</text>

                <rect x="450" y="50" width="120" height="40" rx="5" fill="#3b82f6" opacity="0.2" stroke="#3b82f6"/>
                <text x="510" y="75" text-anchor="middle" fill="#3b82f6" font-size="12">Bad Plan Archive</text>

                <rect x="50" y="150" width="120" height="40" rx="5" fill="#3b82f6" opacity="0.2" stroke="#3b82f6"/>
                <text x="110" y="175" text-anchor="middle" fill="#3b82f6" font-size="12">Process Validation</text>

                <rect x="250" y="150" width="120" height="40" rx="5" fill="#3b82f6" opacity="0.2" stroke="#3b82f6"/>
                <text x="310" y="175" text-anchor="middle" fill="#3b82f6" font-size="12">Iteration Metrics</text>

                <rect x="450" y="150" width="120" height="40" rx="5" fill="#3b82f6" opacity="0.2" stroke="#3b82f6"/>
                <text x="510" y="175" text-anchor="middle" fill="#3b82f6" font-size="12">Agent Evolution</text>
            </g>

            <!-- Relationships -->
            <g id="relationships">
                <line x1="170" y1="70" x2="250" y2="70" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="210" y="60" fill="#94a3b8" font-size="10">evaluated_by</text>

                <line x1="370" y1="70" x2="450" y2="70" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="410" y="60" fill="#94a3b8" font-size="10">archives</text>

                <line x1="310" y1="90" x2="170" y2="150" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="240" y="120" fill="#94a3b8" font-size="10">triggers</text>

                <line x1="170" y1="170" x2="250" y2="170" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="210" y="160" fill="#94a3b8" font-size="10">contributes</text>

                <line x1="370" y1="170" x2="450" y2="170" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="410" y="160" fill="#94a3b8" font-size="10">drives</text>

                <line x1="510" y1="150" x2="110" y2="90" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)" stroke-dasharray="5,5"/>
                <text x="310" y="110" fill="#8b5cf6" font-size="10">improves</text>
            </g>

            <!-- Meta KB Nodes -->
            <g id="meta-kb-nodes">
                <rect x="150" y="250" width="120" height="40" rx="5" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6"/>
                <text x="210" y="275" text-anchor="middle" fill="#8b5cf6" font-size="12">Agent Prompts</text>

                <rect x="350" y="250" width="120" height="40" rx="5" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6"/>
                <text x="410" y="275" text-anchor="middle" fill="#8b5cf6" font-size="12">Learning Records</text>

                <rect x="250" y="330" width="120" height="40" rx="5" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6"/>
                <text x="310" y="355" text-anchor="middle" fill="#8b5cf6" font-size="12">Pipeline Phases</text>
            </g>

            <!-- Meta KB Relationships -->
            <g id="meta-relationships">
                <line x1="270" y1="270" x2="350" y2="270" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="310" y="260" fill="#a78bfa" font-size="10">evolves_from</text>

                <line x1="210" y1="290" x2="280" y2="330" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="245" y="315" fill="#a78bfa" font-size="10">used_in</text>
            </g>
        `;
    }

    showIterations() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>All Iterations (0-8)</h2>
            <div class="iterations-timeline">
                ${Object.values(this.iterationData).map(iter => `
                    <div class="timeline-item ${iter.pass_rate === '100%' ? 'perfect' : ''}">
                        <div class="timeline-date">${iter.date}</div>
                        <div class="timeline-content iteration-card glass-container" data-iteration="${iter.id}">
                            <div class="iteration-header">
                                <h3>${iter.id.replace('_', ' ').toUpperCase()}</h3>
                                <span class="status-badge ${iter.status.toLowerCase()}">${iter.status}</span>
                            </div>
                            <div class="iteration-info">
                                ${iter.games ? `<p><strong>Games:</strong> ${Array.isArray(iter.games) ? iter.games.join(', ') : iter.games}</p>` : ''}
                                ${iter.trials ? `<p><strong>Trials:</strong> ${iter.trials}</p>` : ''}
                                ${iter.pass_rate ? `<p><strong>Pass Rate:</strong> <span class="${iter.pass_rate === '100%' ? 'success' : ''}">${iter.pass_rate}</span></p>` : ''}
                                ${iter.harness ? `<p><strong>Harness:</strong> ${iter.harness}</p>` : ''}
                            </div>
                            <button class="btn-modern small">View Full Details</button>
                        </div>
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

            <h3>Entity Categories & Relationships</h3>
            <div class="kb-categories-detailed">
                ${Object.entries(kb.categories).map(([name, data]) => `
                    <div class="kb-category-card glass-container" data-kb-type="art" data-category="${name}">
                        <div class="category-header">
                            <h3>${name}</h3>
                            <span class="entity-count">${data.count.toLocaleString()} entities</span>
                        </div>

                        <p class="category-description">${data.description}</p>

                        ${data.relationships ? `
                            <div class="category-relationships">
                                <h4>Relationships:</h4>
                                ${data.relationships.map(rel => `
                                    <div class="relationship-item">
                                        <span class="rel-from">${rel.from}</span>
                                        <span class="rel-type">${rel.type}</span>
                                        <span class="rel-to">${rel.to}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div class="entity-grid">
                            ${data.entities.slice(0, 3).map(entity => `
                                <div class="entity-card">
                                    <div class="entity-header">
                                        <span class="entity-id">${entity.id}</span>
                                        <span class="entity-type ${entity.status === 'FAILED' ? 'failed' : ''}">${entity.type}</span>
                                    </div>
                                    ${entity.game ? `<p><strong>Game:</strong> ${entity.game}</p>` : ''}
                                    ${entity.iteration ? `<p><strong>Iteration:</strong> ${entity.iteration}</p>` : ''}
                                    ${entity.trial ? `<p><strong>Trial:</strong> ${entity.trial}</p>` : ''}
                                    ${entity.s3_path ? `<p class="s3-path-small"><code>${entity.s3_path}</code></p>` : ''}
                                </div>
                            `).join('')}
                        </div>

                        <button class="btn-modern small">View All ${name} (${data.count})</button>
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

                        ${data.relationships ? `
                            <div class="category-relationships">
                                <h4>Relationships:</h4>
                                ${data.relationships.map(rel => `
                                    <div class="relationship-item">
                                        <span class="rel-from">${rel.from}</span>
                                        <span class="rel-type">${rel.type}</span>
                                        <span class="rel-to">${rel.to}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div class="entity-grid">
                            ${data.entities.map(entity => `
                                <div class="entity-card">
                                    <div class="entity-header">
                                        <span class="entity-id">${entity.id}</span>
                                        <span class="entity-type">${entity.type}</span>
                                    </div>
                                    ${Object.entries(entity).filter(([key]) => !['id', 'type'].includes(key)).slice(0, 3).map(([key, value]) => `
                                        <p><strong>${key}:</strong> ${value}</p>
                                    `).join('')}
                                </div>
                            `).join('')}
                        </div>

                        <button class="btn-modern small">View All ${name} (${data.count})</button>
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
                    <h2>${iterationId.replace('_', ' ').toUpperCase()} Complete Details</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="detail-tabs">
                        <button class="detail-tab active" data-tab-type="overview">Overview</button>
                        <button class="detail-tab" data-tab-type="s3">S3 Artifacts</button>
                        <button class="detail-tab" data-tab-type="results">Detailed Results</button>
                        <button class="detail-tab" data-tab-type="files">File Structure</button>
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
                            <value class="${iteration.pass_rate === '100%' ? 'success' : ''}">${iteration.pass_rate}</value>
                        </div>
                    ` : ''}
                </div>

                ${iteration.metrics ? `
                    <h3>Evaluation Metrics</h3>
                    <div class="metrics-grid">
                        ${Object.entries(iteration.metrics).map(([key, value]) => `
                            <div class="metric-card">
                                <span class="metric-label">${key.replace('_', ' ')}</span>
                                <span class="metric-value">${value}${typeof value === 'number' ? '%' : ''}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${iteration.results && iteration.results.by_game ? `
                    <h3>Results by Game</h3>
                    <div class="games-results">
                        ${Object.entries(iteration.results.by_game).map(([game, data]) => `
                            <div class="game-result glass-container">
                                <h4>${game}</h4>
                                <div class="game-stats">
                                    <span class="stat">Pass: ${data.pass}</span>
                                    <span class="stat">Fail: ${data.fail}</span>
                                </div>
                                ${data.avg_invariance ? `
                                    <div class="game-metrics">
                                        <p>Invariance: ${data.avg_invariance}%</p>
                                        <p>Structurality: ${data.avg_structurality}%</p>
                                        <p>Completeness: ${data.avg_completeness}%</p>
                                        <p>Ref Integrity: ${data.avg_ref_integrity}%</p>
                                    </div>
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

                ${iteration.results && iteration.results.key_achievements ? `
                    <h3>Key Achievements</h3>
                    <ul class="achievements">
                        ${iteration.results.key_achievements.map(achievement => `
                            <li>✅ ${achievement}</li>
                        `).join('')}
                    </ul>
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
            case 's3':
                content.innerHTML = this.renderS3Artifacts(iteration);
                break;
            case 'results':
                content.innerHTML = this.renderDetailedResults(iteration);
                break;
            case 'files':
                content.innerHTML = this.renderFileStructure(iteration);
                break;
        }
    }

    renderS3Artifacts(iteration) {
        if (!iteration.s3_artifacts) {
            return '<div class="no-data">No S3 artifact data available for this iteration</div>';
        }

        return `
            <div class="s3-artifacts">
                <h3>S3 Artifacts</h3>

                ${iteration.s3_artifacts.task_plans ? `
                    <div class="artifact-section">
                        <h4>Task Plans</h4>
                        ${Array.isArray(iteration.s3_artifacts.task_plans) ?
                            iteration.s3_artifacts.task_plans.map(path => `
                                <div class="s3-path-item">
                                    <code>${path}</code>
                                </div>
                            `).join('') :
                            `<div class="s3-path-item"><code>${iteration.s3_artifacts.task_plans}</code></div>`
                        }
                    </div>
                ` : ''}

                ${iteration.s3_artifacts.evaluation ? `
                    <div class="artifact-section">
                        <h4>Evaluation Reports</h4>
                        <div class="s3-path-item">
                            <code>${iteration.s3_artifacts.evaluation}</code>
                        </div>
                    </div>
                ` : ''}

                ${iteration.s3_artifacts.kb_registry ? `
                    <div class="artifact-section">
                        <h4>KB Registry</h4>
                        <div class="s3-path-item">
                            <code>${iteration.s3_artifacts.kb_registry}</code>
                        </div>
                    </div>
                ` : ''}

                ${iteration.s3_artifacts.bad_plan ? `
                    <div class="artifact-section">
                        <h4>Bad Plan Archive</h4>
                        <div class="s3-path-item">
                            <code>${iteration.s3_artifacts.bad_plan}</code>
                        </div>
                    </div>
                ` : ''}

                ${iteration.s3_artifacts.local_files ? `
                    <div class="artifact-section">
                        <h4>Local Files</h4>
                        <div class="file-list">
                            ${iteration.s3_artifacts.local_files.map(file => `
                                <div class="file-item">
                                    📄 ${file}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderDetailedResults(iteration) {
        if (!iteration.results) {
            return '<div class="no-data">No results data available for this iteration</div>';
        }

        return `
            <div class="detailed-results">
                <h3>Detailed Results</h3>

                ${iteration.results.pass_count !== undefined ? `
                    <div class="results-summary">
                        <div class="result-stat">
                            <span class="label">Pass Count</span>
                            <span class="value ${iteration.results.fail_count === 0 ? 'success' : ''}">${iteration.results.pass_count}/${iteration.results.total}</span>
                        </div>
                        ${iteration.results.fail_count !== undefined ? `
                            <div class="result-stat">
                                <span class="label">Fail Count</span>
                                <span class="value ${iteration.results.fail_count > 0 ? 'fail' : 'success'}">${iteration.results.fail_count}</span>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                ${iteration.results.details ? `
                    <h4>Per-Game Breakdown</h4>
                    <div class="game-breakdown">
                        ${Object.entries(iteration.results.details).map(([game, data]) => `
                            <div class="game-row">
                                <span class="game-name">${game}</span>
                                <span class="game-stats">Pass: ${data.pass} | Fail: ${data.fail}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${iteration.results.verdict ? `
                    <div class="verdict-section">
                        <h4>Verdict</h4>
                        <p>${iteration.results.verdict}</p>
                    </div>
                ` : ''}

                ${iteration.results.notes ? `
                    <div class="notes-section">
                        <h4>Notes</h4>
                        <p>${iteration.results.notes}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderFileStructure(iteration) {
        if (!iteration.s3_artifacts || !iteration.s3_artifacts.structure) {
            return `
                <div class="file-structure">
                    <h3>Standard File Structure</h3>
                    <pre class="code-block">
${iteration.id}/
├── data/
│   ├── task_plans/
│   │   └── {Game}/
│   │       └── trial_{1-5}/
│   │           ├── _project_common.json
│   │           ├── character/
│   │           │   ├── _category_common.json
│   │           │   └── *.json
│   │           ├── obstacles/
│   │           │   ├── _category_common.json
│   │           │   └── *.json
│   │           ├── world/
│   │           │   ├── _category_common.json
│   │           │   └── *.json
│   │           └── ui/
│   │               ├── _category_common.json
│   │               └── *.json
│   ├── eval_results/
│   │   └── harness_v${iteration.harness || 'N'}/
│   │       └── {Game}/
│   │           └── trial_{N}/
│   │               └── evaluation_report.json
│   └── bad_plan/
│       └── *.json
└── documents/
    ├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_goal.md
    ├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_plan.md
    ├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_progress.md
    ├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_results.md
    └── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_retrospective.md</pre>
                </div>
            `;
        }

        return `
            <div class="file-structure">
                <h3>Actual File Structure</h3>
                ${Object.entries(iteration.s3_artifacts.structure).map(([game, trials]) => `
                    <div class="game-structure">
                        <h4>${game}</h4>
                        ${Object.entries(trials).map(([trial, files]) => `
                            <div class="trial-structure">
                                <h5>${trial}</h5>
                                <div class="file-tree">
                                    ${Object.entries(files).map(([path, items]) => `
                                        <div class="tree-item">
                                            ${path.endsWith('/') ? '📁' : '📄'} ${path}
                                            ${Array.isArray(items) ? `
                                                <div class="tree-children">
                                                    ${items.map(item => `<div>└── ${item}</div>`).join('')}
                                                </div>
                                            ` : `<span class="file-desc">${items}</span>`}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
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

                    ${categoryData.relationships ? `
                        <h3>Entity Relationships</h3>
                        <div class="relationships-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>From</th>
                                        <th>Relationship</th>
                                        <th>To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${categoryData.relationships.map(rel => `
                                        <tr>
                                            <td>${rel.from}</td>
                                            <td class="rel-type">${rel.type}</td>
                                            <td>${rel.to}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : ''}

                    <h3>All Entities (Sample)</h3>
                    <div class="entity-list detailed">
                        ${categoryData.entities.map(entity => `
                            <div class="entity-item glass-container">
                                <div class="entity-header">
                                    <span class="entity-id">${entity.id}</span>
                                    <span class="entity-type ${entity.status === 'FAILED' ? 'failed' : ''}">${entity.type}</span>
                                </div>
                                <div class="entity-details">
                                    ${Object.entries(entity).filter(([key]) => !['id', 'type'].includes(key)).map(([key, value]) => `
                                        <div class="entity-field">
                                            <span class="field-name">${key}:</span>
                                            <span class="field-value">${
                                                typeof value === 'object' ?
                                                `<pre>${JSON.stringify(value, null, 2)}</pre>` :
                                                value
                                            }</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <p class="more-entities">Showing ${categoryData.entities.length} of ${categoryData.count.toLocaleString()} total entities</p>
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
    window.dashboardApp = new FullDetailDashboard();

    // Add custom styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Timeline */
        .iterations-timeline {
            position: relative;
            padding-left: 40px;
        }

        .iterations-timeline::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 32px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -34px;
            top: 20px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #3b82f6;
            border: 2px solid #0f1419;
        }

        .timeline-item.perfect::before {
            background: #10b981;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
        }

        .timeline-date {
            position: absolute;
            left: -150px;
            top: 16px;
            color: #64748b;
            font-size: 12px;
            width: 100px;
            text-align: right;
        }

        /* S3 Structure */
        .s3-tree {
            font-family: 'Fira Code', monospace;
            font-size: 13px;
            color: #94a3b8;
            padding: 16px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            margin-top: 16px;
        }

        .tree-item {
            margin: 8px 0;
        }

        .tree-children {
            margin-left: 24px;
            opacity: 0.8;
        }

        .tree-note {
            color: #64748b;
            font-size: 11px;
            margin-left: 8px;
        }

        /* Relationships */
        .relationship-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 6px;
            margin-bottom: 8px;
        }

        .rel-from, .rel-to {
            padding: 4px 12px;
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            border-radius: 4px;
            font-size: 12px;
        }

        .rel-type {
            color: #94a3b8;
            font-size: 11px;
            text-transform: uppercase;
        }

        /* Entity Grid */
        .entity-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
            margin: 20px 0;
        }

        .entity-card {
            background: rgba(255, 255, 255, 0.02);
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .entity-card p {
            margin: 4px 0;
            font-size: 12px;
            color: #94a3b8;
        }

        .entity-card strong {
            color: #e1e8ed;
        }

        .s3-path-small {
            font-size: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .entity-type.failed {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
        }

        /* KB Relationships */
        .category-relationships {
            background: rgba(255, 255, 255, 0.02);
            padding: 12px;
            border-radius: 8px;
            margin: 16px 0;
        }

        .category-relationships h4 {
            font-size: 12px;
            color: #94a3b8;
            margin-bottom: 12px;
            text-transform: uppercase;
        }

        /* Phase Details */
        .phase-details {
            font-size: 11px;
            color: #94a3b8;
            margin-top: 4px;
        }

        /* S3 Artifacts */
        .s3-path-item {
            background: #0a0e1a;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 8px;
            border-left: 3px solid #3b82f6;
        }

        .s3-path-item code {
            color: #10b981;
            font-size: 11px;
        }

        .artifact-section {
            margin-bottom: 24px;
        }

        .artifact-section h4 {
            color: #e1e8ed;
            margin-bottom: 12px;
        }

        /* File Structure */
        .file-tree {
            background: rgba(0, 0, 0, 0.3);
            padding: 16px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
        }

        .game-structure {
            margin-bottom: 24px;
        }

        .trial-structure {
            margin-left: 20px;
            margin-bottom: 16px;
        }

        .trial-structure h5 {
            color: #8b5cf6;
            margin-bottom: 8px;
        }

        /* Achievements */
        .achievements {
            list-style: none;
            padding: 0;
        }

        .achievements li {
            padding: 8px 0;
            color: #10b981;
        }

        /* Game Metrics */
        .game-metrics {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 12px;
            font-size: 12px;
        }

        .game-metrics p {
            margin: 4px 0;
            padding: 4px 8px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 4px;
        }

        /* Detailed Entity List */
        .entity-list.detailed {
            display: grid;
            gap: 16px;
        }

        .entity-item {
            padding: 16px;
        }

        .entity-details {
            margin-top: 12px;
        }

        .entity-field {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
            margin-bottom: 8px;
            font-size: 12px;
        }

        .field-name {
            color: #94a3b8;
            text-transform: capitalize;
        }

        .field-value {
            color: #e1e8ed;
        }

        .field-value pre {
            margin: 0;
            font-size: 11px;
            background: rgba(0, 0, 0, 0.3);
            padding: 8px;
            border-radius: 4px;
            overflow-x: auto;
        }

        .more-entities {
            text-align: center;
            color: #64748b;
            font-style: italic;
            margin-top: 20px;
        }
    `;
    document.head.appendChild(style);
});