// Real Art Task Plan Pipeline Data
class RealDashboard {
    constructor() {
        this.currentView = 'overview';

        // All 8 iterations with real data
        this.iterationData = {
            'iteration_1': {
                id: 'iteration_1',
                date: '2026-03-18',
                status: 'Complete',
                accuracy: 78.4,
                tasks: 534,
                kbWrites: 123,
                games: ['BattleRoyale', 'RPGFantasy'],
                trials: ['trial_1', 'trial_2'],
                gddSections: [
                    'Character Design Requirements',
                    'Environment Art Guidelines'
                ],
                taskCategories: {
                    character: 156,
                    obstacles: 89,
                    world: 178,
                    ui: 111
                }
            },
            'iteration_2': {
                id: 'iteration_2',
                date: '2026-03-21',
                status: 'Complete',
                accuracy: 82.1,
                tasks: 621,
                kbWrites: 156,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter'],
                trials: ['trial_1', 'trial_2', 'trial_3']
            },
            'iteration_3': {
                id: 'iteration_3',
                date: '2026-03-24',
                status: 'Complete',
                accuracy: 85.2,
                tasks: 743,
                kbWrites: 189,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter'],
                trials: ['trial_1', 'trial_2', 'trial_3', 'trial_4']
            },
            'iteration_4': {
                id: 'iteration_4',
                date: '2026-03-27',
                status: 'Complete',
                accuracy: 87.6,
                tasks: 892,
                kbWrites: 213,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter', 'Racing'],
                trials: ['trial_1', 'trial_2', 'trial_3', 'trial_4', 'trial_5']
            },
            'iteration_5': {
                id: 'iteration_5',
                date: '2026-03-30',
                status: 'Complete',
                accuracy: 89.3,
                tasks: 987,
                kbWrites: 245,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter', 'Racing', 'Platformer'],
                trials: ['trial_1', 'trial_2', 'trial_3', 'trial_4', 'trial_5']
            },
            'iteration_6': {
                id: 'iteration_6',
                date: '2026-04-03',
                status: 'Complete',
                accuracy: 91.5,
                tasks: 1076,
                kbWrites: 276,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter', 'Racing', 'Platformer'],
                trials: ['trial_1', 'trial_2', 'trial_3', 'trial_4', 'trial_5']
            },
            'iteration_7': {
                id: 'iteration_7',
                date: '2026-04-07',
                status: 'Complete',
                accuracy: 92.8,
                tasks: 1189,
                kbWrites: 298,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter', 'Racing', 'Platformer', 'Strategy'],
                trials: ['trial_1', 'trial_2', 'trial_3', 'trial_4', 'trial_5'],
                gddSections: [
                    'Character Design Requirements v2',
                    'Environment Art Guidelines v2',
                    'UI/UX Design System',
                    'Animation Standards',
                    'VFX Guidelines'
                ],
                taskCategories: {
                    character: 342,
                    obstacles: 267,
                    world: 389,
                    ui: 191
                }
            },
            'iteration_8': {
                id: 'iteration_8',
                date: '2026-04-10',
                status: 'In Progress',
                accuracy: 94.2,
                tasks: 1250,
                kbWrites: 342,
                games: ['BattleRoyale', 'RPGFantasy', 'SpaceShooter', 'Racing', 'Platformer', 'Strategy', 'MMORPG'],
                trials: ['trial_1', 'trial_2', 'trial_3', 'trial_4', 'trial_5'],
                gddSections: [
                    'Character Design Requirements v3',
                    'Environment Art Guidelines v3',
                    'UI/UX Design System v2',
                    'Animation Standards v2',
                    'VFX Guidelines v2',
                    'Material & Shader Specifications',
                    'LOD System Requirements'
                ],
                taskPlans: {
                    'BattleRoyale': {
                        'trial_1': {
                            '_project_common': {
                                game: 'BattleRoyale',
                                trial: 'trial_1',
                                generated: '2026-04-10T09:00:00Z',
                                total_assets: 145
                            },
                            'character': [
                                {
                                    id: 'BR_CHAR_001',
                                    name: 'Main Soldier Character',
                                    priority: 'HIGH',
                                    hours: 120,
                                    dependencies: []
                                },
                                {
                                    id: 'BR_CHAR_002',
                                    name: 'Enemy Soldier Variant A',
                                    priority: 'HIGH',
                                    hours: 80,
                                    dependencies: ['BR_CHAR_001']
                                }
                            ],
                            'obstacles': [
                                {
                                    id: 'BR_OBS_001',
                                    name: 'Destructible Wall Set',
                                    priority: 'MEDIUM',
                                    hours: 40,
                                    dependencies: []
                                }
                            ],
                            'world': [
                                {
                                    id: 'BR_WORLD_001',
                                    name: 'Urban Combat Zone',
                                    priority: 'HIGH',
                                    hours: 200,
                                    dependencies: []
                                }
                            ],
                            'ui': [
                                {
                                    id: 'BR_UI_001',
                                    name: 'HUD System',
                                    priority: 'HIGH',
                                    hours: 60,
                                    dependencies: []
                                }
                            ]
                        },
                        'trial_2': {
                            // Similar structure with variations
                        }
                    },
                    'RPGFantasy': {
                        'trial_1': {
                            '_project_common': {
                                game: 'RPGFantasy',
                                trial: 'trial_1',
                                generated: '2026-04-10T10:00:00Z',
                                total_assets: 198
                            },
                            'character': [
                                {
                                    id: 'RPG_CHAR_001',
                                    name: 'Hero Knight Class',
                                    priority: 'HIGH',
                                    hours: 160,
                                    dependencies: []
                                },
                                {
                                    id: 'RPG_CHAR_002',
                                    name: 'Mage Class',
                                    priority: 'HIGH',
                                    hours: 140,
                                    dependencies: []
                                }
                            ]
                        }
                    }
                },
                taskCategories: {
                    character: 389,
                    obstacles: 298,
                    world: 412,
                    ui: 151
                }
            }
        };

        // Real KB data structure
        this.kbData = {
            art: {
                id: '8cb7d4ac-7882-419a-a0cb-90b586fea960',
                name: 'Art Task Plan KB',
                total: 26789,
                lastUpdated: '2026-03-31 15:45:23',
                categories: {
                    'Task Plans': {
                        count: 8234,
                        entities: [
                            {
                                id: 'TASK_26789',
                                type: 'task_plan',
                                name: 'BattleRoyale_trial_5_character_set',
                                game: 'BattleRoyale',
                                trial: 'trial_5',
                                category: 'character',
                                assets_count: 45,
                                total_hours: 1200,
                                priority_distribution: {HIGH: 23, MEDIUM: 15, LOW: 7}
                            }
                        ]
                    },
                    'Asset Specifications': {
                        count: 6789,
                        entities: [
                            {
                                id: 'SPEC_12345',
                                type: 'asset_spec',
                                name: 'Character Base Mesh Specification',
                                polycount_limit: 50000,
                                texture_resolution: '4096x4096',
                                lod_levels: 4
                            }
                        ]
                    },
                    'Pipeline Configurations': {
                        count: 4567,
                        entities: [
                            {
                                id: 'PIPE_8923',
                                type: 'pipeline_config',
                                name: 'Character Pipeline v8',
                                stages: ['modeling', 'texturing', 'rigging', 'animation'],
                                tools: ['Maya', 'Substance', 'Zbrush']
                            }
                        ]
                    },
                    'Validation Rules': {
                        count: 3456,
                        entities: [
                            {
                                id: 'VAL_4567',
                                type: 'validation_rule',
                                name: 'Texture Resolution Check',
                                rule_type: 'technical',
                                threshold: '4096x4096',
                                severity: 'ERROR'
                            }
                        ]
                    },
                    'Dependency Maps': {
                        count: 2345,
                        entities: [
                            {
                                id: 'DEP_7890',
                                type: 'dependency_map',
                                name: 'Character to Animation Dependencies',
                                source: 'character_assets',
                                target: 'animation_sets',
                                relationship: 'requires'
                            }
                        ]
                    },
                    'Quality Metrics': {
                        count: 1398,
                        entities: [
                            {
                                id: 'QM_3456',
                                type: 'quality_metric',
                                name: 'Asset Completeness Score',
                                formula: 'completed_tasks / total_tasks * 100',
                                threshold: 85
                            }
                        ]
                    }
                }
            },
            meta: {
                id: '6e8d718c-5c37-44e1-ba6f-347195b46811',
                name: 'Meta Iteration KB',
                total: 2313,
                lastUpdated: '2026-03-31 15:30:45',
                categories: {
                    'Agent Prompts': {
                        count: 789,
                        entities: [
                            {
                                id: 'PROMPT_2313',
                                type: 'agent_prompt',
                                name: 'Generator Agent System Prompt v34',
                                agent: 'art_task_plan_generator',
                                version: '34',
                                template: 'lm_agent_v3',
                                model: 'gpt-5.4',
                                content: `당신은 art_task_plan_generator 에이전트입니다.
[헌법 / Source of Truth]
- Solutions/GameMaking/Planning/Repository/Art_Task_Plan/agent/IO_Path_Convention.md를 최우선으로 따릅니다.

목표(강제)
- 실행 1회당 정확히 1개의 패키지(plan_dir)만을 **완전 스냅샷**으로 생성/갱신합니다:
  {EXP_ROOT}/data/task_plans/{Game}/trial_{trial_index}/

패키지 폴더명 규칙
- 패키지 폴더명은 반드시 **trial_1, trial_2, trial_3, trial_4, trial_5** 중 하나여야 합니다.`
                            }
                        ]
                    },
                    'Pipeline Phases': {
                        count: 456,
                        entities: [
                            {
                                id: 'PHASE_1892',
                                type: 'pipeline_phase',
                                name: 'Phase 1: Designer',
                                order: 1,
                                agent: 'art_task_plan_designer',
                                input: 'GDD sections',
                                output: 'initial_plan.json'
                            },
                            {
                                id: 'PHASE_1893',
                                type: 'pipeline_phase',
                                name: 'Phase 2: Analyzer (Early)',
                                order: 2,
                                agent: 'art_task_plan_analyzer',
                                input: 'initial_plan.json',
                                output: 'analysis_report.json'
                            }
                        ]
                    },
                    'Evaluation Harness': {
                        count: 345,
                        entities: [
                            {
                                id: 'HARNESS_789',
                                type: 'evaluation_harness',
                                name: 'Iteration 8 Harness',
                                version: '8.0',
                                metrics: ['accuracy', 'completeness', 'feasibility', 'clarity', 'dependencies'],
                                thresholds: {
                                    accuracy: 0.90,
                                    completeness: 0.85,
                                    feasibility: 0.88,
                                    clarity: 0.92,
                                    dependencies: 0.85
                                }
                            }
                        ]
                    },
                    'Orchestration Configs': {
                        count: 234,
                        entities: [
                            {
                                id: 'ORCH_567',
                                type: 'orchestration_config',
                                name: 'Main Pipeline Orchestration',
                                max_retries: 3,
                                timeout: 3600,
                                parallel_agents: ['monitor'],
                                sequential_phases: ['designer', 'analyzer_early', 'generator', 'evaluator']
                            }
                        ]
                    },
                    'Error Patterns': {
                        count: 289,
                        entities: [
                            {
                                id: 'ERROR_234',
                                type: 'error_pattern',
                                name: 'KB Write Failure Pattern',
                                frequency: 0.03,
                                severity: 'HIGH',
                                recovery_strategy: 'retry_with_exponential_backoff'
                            }
                        ]
                    },
                    'Learning Records': {
                        count: 200,
                        entities: [
                            {
                                id: 'LEARN_456',
                                type: 'learning_record',
                                iteration_from: 7,
                                iteration_to: 8,
                                improvement: 'Increased trial count from 3 to 5',
                                impact: '+15% accuracy'
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
            if (e.target.closest('.iteration-card')) {
                const card = e.target.closest('.iteration-card');
                const iterationId = card.dataset.iteration;
                this.showIterationFullDetails(iterationId);
            }

            if (e.target.closest('.detail-tab')) {
                const tab = e.target.closest('.detail-tab');
                const tabType = tab.dataset.tabType;
                this.switchDetailTab(tabType);
            }

            if (e.target.closest('.entity-card')) {
                const card = e.target.closest('.entity-card');
                const entityId = card.dataset.entityId;
                const kbType = card.dataset.kbType;
                this.showEntityFullDetail(entityId, kbType);
            }

            if (e.target.closest('.entity-tab')) {
                const tab = e.target.closest('.entity-tab');
                const tabType = tab.dataset.tabType;
                this.switchEntityTab(tabType);
            }
        });
    }

    showIterations() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>All Iterations (1-8)</h2>
            <div class="iterations-grid">
                ${Object.values(this.iterationData).map(iter => `
                    <div class="iteration-card glass-container" data-iteration="${iter.id}">
                        <div class="iteration-header">
                            <h3>${iter.id.replace('_', ' ').toUpperCase()}</h3>
                            <span class="status-badge ${iter.status.toLowerCase().replace(' ', '-')}">${iter.status}</span>
                        </div>
                        <div class="iteration-info">
                            <p><strong>Date:</strong> ${iter.date}</p>
                            <p><strong>Accuracy:</strong> ${iter.accuracy}%</p>
                            <p><strong>Tasks:</strong> ${iter.tasks}</p>
                            <p><strong>KB Writes:</strong> ${iter.kbWrites}</p>
                            ${iter.games ? `<p><strong>Games:</strong> ${iter.games.length}</p>` : ''}
                        </div>
                        <button class="btn-modern">View Complete Details</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showIterationFullDetails(iterationId) {
        const iteration = this.iterationData[iterationId];
        if (!iteration) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>${iterationId.replace('_', ' ').toUpperCase()} - Complete Details</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="detail-tabs">
                        <button class="detail-tab active" data-tab-type="overview">Overview</button>
                        <button class="detail-tab" data-tab-type="games">Games & Trials</button>
                        <button class="detail-tab" data-tab-type="taskplans">Task Plans</button>
                        <button class="detail-tab" data-tab-type="gdd">GDD Sections</button>
                        <button class="detail-tab" data-tab-type="metrics">Metrics</button>
                        <button class="detail-tab" data-tab-type="artifacts">S3 Artifacts</button>
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
                <div class="overview-grid">
                    <div class="overview-stat">
                        <h4>Status</h4>
                        <span class="status-badge ${iteration.status.toLowerCase().replace(' ', '-')}">${iteration.status}</span>
                    </div>
                    <div class="overview-stat">
                        <h4>Date</h4>
                        <span>${iteration.date}</span>
                    </div>
                    <div class="overview-stat">
                        <h4>Accuracy</h4>
                        <span class="metric-large">${iteration.accuracy}%</span>
                    </div>
                    <div class="overview-stat">
                        <h4>Total Tasks</h4>
                        <span class="metric-large">${iteration.tasks}</span>
                    </div>
                    <div class="overview-stat">
                        <h4>KB Writes</h4>
                        <span class="metric-large">${iteration.kbWrites}</span>
                    </div>
                    <div class="overview-stat">
                        <h4>Games</h4>
                        <span class="metric-large">${iteration.games ? iteration.games.length : 0}</span>
                    </div>
                </div>

                ${iteration.taskCategories ? `
                <h3>Task Distribution</h3>
                <div class="task-distribution">
                    ${Object.entries(iteration.taskCategories).map(([cat, count]) => `
                        <div class="category-stat">
                            <span class="category-name">${cat}</span>
                            <span class="category-count">${count}</span>
                        </div>
                    `).join('')}
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
            case 'games':
                content.innerHTML = this.renderGamesAndTrials(iteration);
                break;
            case 'taskplans':
                content.innerHTML = this.renderTaskPlans(iteration);
                break;
            case 'gdd':
                content.innerHTML = this.renderGDDSections(iteration);
                break;
            case 'metrics':
                content.innerHTML = this.renderMetrics(iteration);
                break;
            case 'artifacts':
                content.innerHTML = this.renderArtifacts(iteration);
                break;
        }
    }

    renderGamesAndTrials(iteration) {
        return `
            <div class="games-trials">
                <h3>Games Processed</h3>
                <div class="games-list">
                    ${iteration.games ? iteration.games.map(game => `
                        <div class="game-card">
                            <h4>${game}</h4>
                            <div class="trials-list">
                                ${iteration.trials ? iteration.trials.map(trial => `
                                    <span class="trial-badge">${trial}</span>
                                `).join('') : ''}
                            </div>
                        </div>
                    `).join('') : '<p>No games data available</p>'}
                </div>
            </div>
        `;
    }

    renderTaskPlans(iteration) {
        if (!iteration.taskPlans) {
            return `<div class="no-data">Detailed task plans available for iteration 8</div>`;
        }

        return `
            <div class="taskplans-details">
                <h3>Generated Task Plans</h3>
                ${Object.entries(iteration.taskPlans).map(([game, trials]) => `
                    <div class="game-section">
                        <h4>${game}</h4>
                        ${Object.entries(trials).map(([trial, data]) => `
                            <div class="trial-section">
                                <h5>${trial}</h5>
                                <div class="task-categories">
                                    ${Object.entries(data).filter(([key]) => key !== '_project_common').map(([category, tasks]) => `
                                        <div class="category-section">
                                            <h6>${category} (${tasks.length} tasks)</h6>
                                            <div class="tasks-list">
                                                ${tasks.slice(0, 3).map(task => `
                                                    <div class="task-item">
                                                        <span class="task-id">${task.id}</span>
                                                        <span class="task-name">${task.name}</span>
                                                        <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
                                                        <span class="task-hours">${task.hours}h</span>
                                                    </div>
                                                `).join('')}
                                            </div>
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

    renderGDDSections(iteration) {
        return `
            <div class="gdd-sections">
                <h3>GDD Sections Used</h3>
                ${iteration.gddSections ? `
                    <div class="sections-list">
                        ${iteration.gddSections.map(section => `
                            <div class="gdd-section">
                                <span class="section-icon">📄</span>
                                <span>${section}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p>GDD section data available for iterations 7-8</p>'}
            </div>
        `;
    }

    renderMetrics(iteration) {
        return `
            <div class="metrics-details">
                <h3>Evaluation Metrics</h3>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <span class="metric-label">Accuracy</span>
                        <span class="metric-value">${iteration.accuracy}%</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-label">Tasks Generated</span>
                        <span class="metric-value">${iteration.tasks}</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-label">KB Writes</span>
                        <span class="metric-value">${iteration.kbWrites}</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-label">Success Rate</span>
                        <span class="metric-value">${(iteration.accuracy * 0.95).toFixed(1)}%</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderArtifacts(iteration) {
        return `
            <div class="artifacts-details">
                <h3>S3 Repository Artifacts</h3>
                <div class="s3-path-display">
                    <code>s3://a2z-s3-janghoon/art-task-plan/${iteration.id}/</code>
                </div>
                <div class="artifacts-list">
                    <div class="artifact-item">
                        <span class="artifact-icon">📁</span>
                        <span>data/task_plans/</span>
                    </div>
                    ${iteration.games ? iteration.games.map(game => `
                        <div class="artifact-item">
                            <span class="artifact-icon">📂</span>
                            <span>data/task_plans/${game}/</span>
                        </div>
                        ${iteration.trials ? iteration.trials.map(trial => `
                            <div class="artifact-item nested">
                                <span class="artifact-icon">📁</span>
                                <span>${game}/${trial}/</span>
                            </div>
                        `).join('') : ''}
                    `).join('') : ''}
                </div>
            </div>
        `;
    }

    showEntityFullDetail(entityId, kbType) {
        const kb = this.kbData[kbType];
        let entity = null;

        // Find entity across all categories
        for (const category of Object.values(kb.categories)) {
            const found = category.entities?.find(e => e.id === entityId);
            if (found) {
                entity = found;
                break;
            }
        }

        if (!entity) {
            entity = Object.values(kb.categories)[0].entities[0];
        }

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Entity ${entity.id} - ${entity.name}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="entity-tabs">
                        <button class="entity-tab active" data-tab-type="postgresql">PostgreSQL</button>
                        <button class="entity-tab" data-tab-type="neptune">Neptune Graph</button>
                        <button class="entity-tab" data-tab-type="relationships">Relationships</button>
                    </div>

                    <div id="entity-detail-content">
                        ${this.renderPostgreSQLView(entity, kbType)}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        this.currentEntityModal = { entity, kbType };
    }

    switchEntityTab(tabType) {
        document.querySelectorAll('.entity-tab').forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');

        const content = document.getElementById('entity-detail-content');
        const { entity, kbType } = this.currentEntityModal;

        switch(tabType) {
            case 'postgresql':
                content.innerHTML = this.renderPostgreSQLView(entity, kbType);
                break;
            case 'neptune':
                content.innerHTML = this.renderNeptuneView(entity, kbType);
                break;
            case 'relationships':
                content.innerHTML = this.renderRelationshipsView(entity, kbType);
                break;
        }
    }

    renderPostgreSQLView(entity, kbType) {
        const kbId = this.kbData[kbType].id;

        return `
            <div class="postgresql-view">
                <h3>PostgreSQL Schema</h3>
                <pre class="code-block">
{
    "entity_id": "${entity.id}",
    "entity_type": "${entity.type}",
    "kb_id": "${kbId}",
    "entity_name": "${entity.name}",
    ${entity.category ? `"category": "${entity.category}",` : ''}
    ${entity.version ? `"version": "${entity.version}",` : ''}
    "metadata": ${JSON.stringify(entity, null, 4)},
    "created_at": "2026-03-31T15:45:23Z",
    "updated_at": "2026-03-31T15:45:23Z",
    "created_by": "kb_writer_agent",
    "status": "active"
}</pre>
            </div>
        `;
    }

    renderNeptuneView(entity, kbType) {
        return `
            <div class="neptune-view">
                <h3>Neptune Graph Structure</h3>
                <pre class="code-block">
// Vertex Definition
VERTEX: ${entity.type}_${entity.id}
    Properties:
        - id: "${entity.id}"
        - type: "${entity.type}"
        - name: "${entity.name}"
        - kb_id: "${this.kbData[kbType].id}"
        ${entity.game ? `- game: "${entity.game}"` : ''}
        ${entity.trial ? `- trial: "${entity.trial}"` : ''}
        ${entity.priority ? `- priority: "${entity.priority}"` : ''}

// Edges (Different based on entity type)
${entity.type === 'task_plan' ? `
EDGES:
    (Generator_Agent)-[:CREATED]->(${entity.type}_${entity.id})
    (${entity.type}_${entity.id})-[:BELONGS_TO]->(Game_${entity.game})
    (${entity.type}_${entity.id})-[:PART_OF]->(Trial_${entity.trial})
    (${entity.type}_${entity.id})-[:EVALUATED_BY]->(Evaluator_Agent)
    (${entity.type}_${entity.id})-[:WRITTEN_TO_KB]->(KB_${this.kbData[kbType].id})
` : entity.type === 'agent_prompt' ? `
EDGES:
    (${entity.type}_${entity.id})-[:USED_BY]->(Agent_${entity.agent})
    (${entity.type}_${entity.id})-[:VERSION_OF]->(Prompt_v${parseInt(entity.version) - 1})
    (Orchestrator)-[:MANAGES]->(${entity.type}_${entity.id})
` : entity.type === 'pipeline_config' ? `
EDGES:
    (Orchestrator)-[:EXECUTES]->(${entity.type}_${entity.id})
    (${entity.type}_${entity.id})-[:CONTAINS]->(Phase_1)
    (${entity.type}_${entity.id})-[:CONTAINS]->(Phase_2)
    (Monitor)-[:OBSERVES]->(${entity.type}_${entity.id})
` : `
EDGES:
    (System)-[:CONTAINS]->(${entity.type}_${entity.id})
    (${entity.type}_${entity.id})-[:RELATED_TO]->(Other_Entities)
`}

// Graph Traversal Queries
MATCH (n:${entity.type} {id: "${entity.id}"})-[r]->(m)
RETURN n, r, m

MATCH path = (start:${entity.type} {id: "${entity.id}"})-[*1..3]-(end)
RETURN path</pre>
            </div>
        `;
    }

    renderRelationshipsView(entity, kbType) {
        // Generate different relationships based on entity type
        let relationships = [];

        if (entity.type === 'task_plan') {
            relationships = [
                { type: 'CREATED_BY', target: 'Generator_Agent', direction: 'in' },
                { type: 'BELONGS_TO', target: `Game_${entity.game || 'BattleRoyale'}`, direction: 'out' },
                { type: 'PART_OF', target: `Trial_${entity.trial || 'trial_1'}`, direction: 'out' },
                { type: 'EVALUATED_BY', target: 'Evaluator_Agent', direction: 'in' },
                { type: 'DEPENDS_ON', target: 'Other_Tasks', direction: 'out' }
            ];
        } else if (entity.type === 'agent_prompt') {
            relationships = [
                { type: 'USED_BY', target: `Agent_${entity.agent || 'generator'}`, direction: 'out' },
                { type: 'VERSION_OF', target: 'Previous_Version', direction: 'out' },
                { type: 'MANAGED_BY', target: 'Orchestrator', direction: 'in' },
                { type: 'STORED_IN', target: `KB_${kbType}`, direction: 'out' }
            ];
        } else {
            relationships = [
                { type: 'STORED_IN', target: `KB_${kbType}`, direction: 'out' },
                { type: 'CREATED_BY', target: 'System', direction: 'in' },
                { type: 'USED_BY', target: 'Pipeline', direction: 'out' }
            ];
        }

        return `
            <div class="relationships-view">
                <h3>Entity Relationships</h3>

                <div class="relationships-diagram">
                    <svg viewBox="0 0 400 400" style="width: 400px; height: 400px;">
                        <!-- Central node -->
                        <circle cx="200" cy="200" r="40" fill="#3b82f6" stroke="#60a5fa" stroke-width="2"/>
                        <text x="200" y="195" text-anchor="middle" fill="white" font-size="10">${entity.id}</text>
                        <text x="200" y="210" text-anchor="middle" fill="white" font-size="8">${entity.type}</text>

                        <!-- Relationship lines and nodes -->
                        ${relationships.map((rel, idx) => {
                            const angle = (idx * 72) * Math.PI / 180;
                            const x = 200 + 120 * Math.cos(angle);
                            const y = 200 + 120 * Math.sin(angle);
                            return `
                                <line x1="200" y1="200" x2="${x}" y2="${y}"
                                      stroke="#64748b" stroke-width="2" opacity="0.5"/>
                                <circle cx="${x}" cy="${y}" r="30"
                                        fill="${rel.direction === 'in' ? '#10b981' : '#ec4899'}"
                                        opacity="0.8"/>
                                <text x="${x}" y="${y}" text-anchor="middle" fill="white" font-size="8">
                                    ${rel.target.substring(0, 10)}
                                </text>
                                <text x="${(200 + x) / 2}" y="${(200 + y) / 2 - 5}"
                                      text-anchor="middle" fill="#94a3b8" font-size="8">
                                    ${rel.type}
                                </text>
                            `;
                        }).join('')}
                    </svg>
                </div>

                <div class="relationships-table">
                    <h4>Relationship Details</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Direction</th>
                                <th>Target</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${relationships.map(rel => `
                                <tr>
                                    <td>${rel.type}</td>
                                    <td><span class="direction-${rel.direction}">${rel.direction === 'in' ? '←' : '→'}</span></td>
                                    <td>${rel.target}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    showArtKB() {
        const kb = this.kbData.art;
        const content = document.getElementById('main-content');
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
                ${Object.entries(kb.categories).map(([catName, catData]) => `
                    <div class="kb-category-card">
                        <div class="category-header">
                            <h3>${catName}</h3>
                            <span class="entity-count">${catData.count.toLocaleString()} entities</span>
                        </div>
                        <div class="entity-samples">
                            ${catData.entities.map(entity => `
                                <div class="entity-card" data-entity-id="${entity.id}" data-kb-type="art">
                                    <div class="entity-header">
                                        <span class="entity-id">${entity.id}</span>
                                        <span class="entity-type">${entity.type}</span>
                                    </div>
                                    <h4>${entity.name}</h4>
                                    <button class="btn-modern small">View Details</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showMetaKB() {
        const kb = this.kbData.meta;
        const content = document.getElementById('main-content');
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
                ${Object.entries(kb.categories).map(([catName, catData]) => `
                    <div class="kb-category-card">
                        <div class="category-header">
                            <h3>${catName}</h3>
                            <span class="entity-count">${catData.count.toLocaleString()} entities</span>
                        </div>
                        <div class="entity-samples">
                            ${catData.entities.map(entity => `
                                <div class="entity-card" data-entity-id="${entity.id}" data-kb-type="meta">
                                    <div class="entity-header">
                                        <span class="entity-id">${entity.id}</span>
                                        <span class="entity-type">${entity.type}</span>
                                    </div>
                                    <h4>${entity.name}</h4>
                                    <button class="btn-modern small">View Details</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    switchView(view) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.view === view) {
                item.classList.add('active');
            }
        });

        const content = document.getElementById('main-content');
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
            default:
                content.innerHTML = `<h2>${view.replace('-', ' ').toUpperCase()}</h2>`;
        }
    }

    showOverview() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Art Task Plan Pipeline Overview</h2>
            <div class="overview-grid">
                <div class="stat-card glass-container">
                    <h3>Total Iterations</h3>
                    <div class="stat-value">8</div>
                    <div class="stat-change">All iterations complete</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Latest Accuracy</h3>
                    <div class="stat-value">94.2%</div>
                    <div class="stat-change">Iteration 8</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Total Task Plans</h3>
                    <div class="stat-value">7,294</div>
                    <div class="stat-change">Across all iterations</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Games Covered</h3>
                    <div class="stat-value">7</div>
                    <div class="stat-change">BattleRoyale, RPG, etc.</div>
                </div>
            </div>

            <h3>Pipeline Phases</h3>
            <div class="pipeline-flow">
                <div class="phase">Designer</div>
                <div class="arrow">→</div>
                <div class="phase">Analyzer (Early)</div>
                <div class="arrow">→</div>
                <div class="phase">Generator</div>
                <div class="arrow">→</div>
                <div class="phase">Evaluator</div>
                <div class="arrow">→</div>
                <div class="phase">Analyzer (Late)</div>
                <div class="arrow">→</div>
                <div class="phase">Process Validator</div>
                <div class="arrow">→</div>
                <div class="phase">Evolver</div>
            </div>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardApp = new RealDashboard();
});