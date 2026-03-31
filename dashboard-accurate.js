// Art Task Plan Pipeline - Accurate Data Dashboard
class AccurateDashboard {
    constructor() {
        this.currentView = 'overview';

        // 실제 이터레이션 0-8 데이터
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
                    notes: 'First prototype using markdown format'
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
                    notes: 'Tested different prompt designs'
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
                    notes: 'First JSON-based task plans'
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
                automation: 'First automated pipeline'
            },
            'iteration_4': {
                id: 'iteration_4',
                date: '2024-04-08',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo'],
                trials: 10,
                harness: 'v4',
                pass_rate: '70%',
                automation: 'Improved agent coordination'
            },
            'iteration_5': {
                id: 'iteration_5',
                date: '2024-04-15',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy'],
                trials: 15,
                harness: 'v5',
                pass_rate: '80%',
                automation: 'KB integration added'
            },
            'iteration_6': {
                id: 'iteration_6',
                date: '2024-04-22',
                status: 'Complete',
                games: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down'],
                trials: 20,
                harness: 'v6',
                pass_rate: '85%',
                automation: 'Process Validator added'
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
                    total: 25
                }
            }
        };

        // 실제 KB 구조
        this.kbData = {
            art: {
                id: '8cb7d4ac-7882-419a-a0cb-90b586fea960',
                name: 'Art Task Plan KB',
                total: 26789,
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
                                assets: {
                                    character: 5,
                                    obstacles: 4,
                                    world: 4,
                                    ui: 4
                                }
                            },
                            {
                                id: 'TASK_PLAN_002',
                                type: 'task_package',
                                game: 'Pico_Echo',
                                trial: 'trial_1',
                                iteration: 8,
                                assets: {
                                    character: 10,
                                    obstacles: 3,
                                    world: 6,
                                    ui: 5
                                }
                            }
                        ]
                    },
                    'Evaluation Results': {
                        count: 8000,
                        description: 'Harness evaluation results for each trial',
                        entities: [
                            {
                                id: 'EVAL_001',
                                type: 'evaluation_report',
                                game: 'Chrome_Dino_Runner',
                                trial: 'trial_1',
                                harness: 'v8',
                                verdict: 'PASS',
                                scores: {
                                    invariance: 93.04,
                                    structurality: 95.00,
                                    completeness: 100.00,
                                    reference_integrity: 99.00
                                }
                            }
                        ]
                    },
                    'Bad Plan Archive': {
                        count: 3500,
                        description: 'Previous iteration plans evaluated with newer harnesses',
                        entities: [
                            {
                                id: 'BAD_PLAN_001',
                                type: 'bad_plan',
                                source_iteration: 3,
                                evaluated_harness: 'v8',
                                verdict: 'FAIL',
                                immediate_fail: 'IF-1'
                            }
                        ]
                    },
                    'Process Validation': {
                        count: 1500,
                        description: 'Process validation reports and logs',
                        entities: [
                            {
                                id: 'PROC_VAL_001',
                                type: 'validation_report',
                                iteration: 8,
                                phase: 'generator',
                                status: 'SUCCESS',
                                duration: '45 seconds'
                            }
                        ]
                    },
                    'Iteration Metrics': {
                        count: 1289,
                        description: 'Aggregated metrics per iteration',
                        entities: [
                            {
                                id: 'METRIC_001',
                                type: 'iteration_metric',
                                iteration: 8,
                                total_tasks: 1250,
                                kb_writes: 342,
                                pass_rate: 0.96
                            }
                        ]
                    }
                }
            },
            meta: {
                id: '6e8d718c-5c37-44e1-ba6f-347195b46811',
                name: 'Meta Iteration KB',
                total: 2313,
                categories: {
                    'Agent Prompts': {
                        count: 456,
                        description: 'System prompts for each agent',
                        entities: [
                            {
                                id: 'PROMPT_001',
                                type: 'agent_prompt',
                                agent: 'art_task_plan_generator',
                                version: 'v34',
                                template: 'lm_agent_v3',
                                model: 'gpt-5.4'
                            },
                            {
                                id: 'PROMPT_002',
                                type: 'agent_prompt',
                                agent: 'art_task_plan_evaluator',
                                version: 'v21',
                                template: 'lm_agent_v3',
                                model: 'gpt-5.4'
                            }
                        ]
                    },
                    'Pipeline Phases': {
                        count: 234,
                        description: 'Pipeline execution phases and order',
                        entities: [
                            {
                                id: 'PHASE_001',
                                type: 'pipeline_phase',
                                phase: 'Phase 1',
                                agents: ['Designer', 'Analyzer (early)', 'Generator', 'KB Writer'],
                                orchestrator: 'art_task_plan_orchestrator phase=1'
                            },
                            {
                                id: 'PHASE_002',
                                type: 'pipeline_phase',
                                phase: 'Phase 2',
                                agents: ['Evaluator', 'Analyzer (late)', 'Process Validator', 'Evolver'],
                                orchestrator: 'art_task_plan_orchestrator phase=2'
                            }
                        ]
                    },
                    'Evaluation Harness': {
                        count: 389,
                        description: 'Harness versions and evaluation rules',
                        entities: [
                            {
                                id: 'HARNESS_001',
                                type: 'evaluation_harness',
                                version: 'v8',
                                immediate_fails: ['IF-1', 'IF-2', 'IF-3', 'IF-4', 'IF-5', 'IF-6', 'IF-7', 'IF-8', 'IF-9', 'IF-10', 'IF-11', 'IF-12'],
                                metrics: ['invariance', 'structurality', 'completeness', 'reference_integrity']
                            }
                        ]
                    },
                    'Iteration Documents': {
                        count: 567,
                        description: 'Iteration goal, plan, results, retrospective documents',
                        entities: [
                            {
                                id: 'DOC_001',
                                type: 'iteration_doc',
                                iteration: 8,
                                document: 'Iteration_8_goal.md',
                                author: 'art_task_plan_designer'
                            },
                            {
                                id: 'DOC_002',
                                type: 'iteration_doc',
                                iteration: 8,
                                document: 'Iteration_8_results.md',
                                author: 'art_task_plan_analyzer'
                            }
                        ]
                    },
                    'Learning Records': {
                        count: 345,
                        description: 'Improvements and lessons learned',
                        entities: [
                            {
                                id: 'LEARN_001',
                                type: 'learning_record',
                                from_iteration: 7,
                                to_iteration: 8,
                                improvement: 'Contract hardening with stricter IF rules',
                                impact: 'Reduced false positives'
                            }
                        ]
                    },
                    'Error Patterns': {
                        count: 312,
                        description: 'Common error patterns and recovery strategies',
                        entities: [
                            {
                                id: 'ERROR_001',
                                type: 'error_pattern',
                                pattern: 'IF-4 violation',
                                cause: 'Reference phrase in runtime_notes',
                                frequency: 0.04,
                                mitigation: 'Stricter prompt constraints'
                            }
                        ]
                    }
                }
            }
        };

        // 실제 S3 구조
        this.s3Structure = {
            bucket: 's3://dev-gamelift-assets-859616339670-use1/',
            paths: {
                gdd_source: 'ideation/{exp_id}/{game_name}/',
                task_plans: 'planning/Art_Task_Plan/iteration_{N}/',
                eval_reports: 'planning/Evaluation_Reports/iteration_{N}/',
                kb_registry: 'planning/KB_Registry/iteration_{N}/'
            }
        };

        // 실제 게임 리스트
        this.games = [
            'Chrome_Dino_Runner',
            'Pico_Echo',
            'reflect_academy',
            'slip_down',
            'umbra_scale'
        ];

        // 실제 에이전트 리스트
        this.agents = [
            { name: 'Orchestrator', role: 'Meta Controller', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Designer', role: 'Methodology Design', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Analyzer (Early)', role: 'Phase 1 Analysis', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Generator', role: 'Task Plan Generation', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Evaluator', role: 'Quality Evaluation', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Analyzer (Late)', role: 'Phase 2 Analysis', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Process Validator', role: 'Process Validation', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Evolver', role: 'Prompt Evolution', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Evolver Reviewer', role: 'Evolution Review', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'Monitor', role: 'System Monitoring', template: 'lm_agent_v3', model: 'gpt-4.1' },
            { name: 'Art KB Writer', role: 'Art KB Management', template: 'kb_console_agent_v1', model: 'gpt-5.4' },
            { name: 'Meta KB Writer', role: 'Meta KB Management', template: 'kb_console_agent_v1', model: 'gpt-5.4' },
            { name: 'KB Retriever', role: 'KB Query Agent', template: 'lm_agent_v3', model: 'gpt-5.4' },
            { name: 'KB Manager', role: 'KB Operations', template: 'lm_agent_v3', model: 'gpt-5.4' }
        ];

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
                this.showIterationDetails(iterationId);
            }

            if (e.target.closest('.detail-tab')) {
                const tab = e.target.closest('.detail-tab');
                const tabType = tab.dataset.tabType;
                this.switchDetailTab(tabType);
            }

            if (e.target.closest('.kb-category-card')) {
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
            case 'knowledge-base':
                this.showKnowledgeBase();
                break;
            case 'agents':
                this.showAgents();
                break;
            case 's3-structure':
                this.showS3Structure();
                break;
        }
    }

    showOverview() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Art Task Plan Pipeline Overview</h2>

            <div class="stats-grid">
                <div class="stat-card glass-container">
                    <h3>Total Iterations</h3>
                    <div class="stat-value">9</div>
                    <div class="stat-change">Iteration 0-8</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Games Covered</h3>
                    <div class="stat-value">5</div>
                    <div class="stat-change">${this.games.join(', ')}</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Latest Pass Rate</h3>
                    <div class="stat-value">96%</div>
                    <div class="stat-change">24/25 PASS (Iteration 8)</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Total Agents</h3>
                    <div class="stat-value">14</div>
                    <div class="stat-change">11 LM + 2 KB + 1 Monitor</div>
                </div>
            </div>

            <h3>Pipeline Flow</h3>
            <div class="pipeline-flow">
                <div class="phase-container">
                    <h4>Phase 1 (Orchestrator)</h4>
                    <div class="pipeline-stages">
                        <span class="stage">Designer</span>
                        <span class="arrow">→</span>
                        <span class="stage">Analyzer (Early)</span>
                        <span class="arrow">→</span>
                        <span class="stage">Generator</span>
                        <span class="arrow">→</span>
                        <span class="stage">KB Writer</span>
                    </div>
                </div>

                <div class="phase-container">
                    <h4>Phase 2 (Orchestrator)</h4>
                    <div class="pipeline-stages">
                        <span class="stage">Evaluator</span>
                        <span class="arrow">→</span>
                        <span class="stage">Analyzer (Late)</span>
                        <span class="arrow">→</span>
                        <span class="stage">Process Validator</span>
                        <span class="arrow">→</span>
                        <span class="stage">Evolver</span>
                        <span class="arrow">→</span>
                        <span class="stage">Evolver Reviewer</span>
                    </div>
                </div>

                <div class="phase-container">
                    <h4>Parallel Agent</h4>
                    <div class="pipeline-stages">
                        <span class="stage">Monitor (Slack Alerts)</span>
                    </div>
                </div>
            </div>

            <h3>Recent Iteration Results</h3>
            <div class="recent-iterations">
                ${Object.values(this.iterationData).slice(-3).reverse().map(iter => `
                    <div class="iteration-summary">
                        <h4>${iter.id.replace('_', ' ').toUpperCase()}</h4>
                        ${iter.pass_rate ? `
                            <p>Pass Rate: <strong>${iter.pass_rate}</strong></p>
                            ${iter.fail_details ? `<p class="fail-detail">⚠️ ${iter.fail_details}</p>` : ''}
                        ` : ''}
                        ${iter.metrics ? `
                            <div class="mini-metrics">
                                <span>Invariance: ${iter.metrics.invariance}%</span>
                                <span>Structurality: ${iter.metrics.structurality}%</span>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
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
                            ${iter.game ? `<p><strong>Game:</strong> ${iter.game}</p>` : ''}
                            ${iter.games ? `<p><strong>Games:</strong> ${iter.games.length} games</p>` : ''}
                            ${iter.trials ? `<p><strong>Trials:</strong> ${iter.trials}</p>` : ''}
                            ${iter.harness ? `<p><strong>Harness:</strong> ${iter.harness}</p>` : ''}
                            ${iter.pass_rate ? `<p><strong>Pass Rate:</strong> ${iter.pass_rate}</p>` : ''}
                        </div>
                        <button class="btn-modern">View Details</button>
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
                        <button class="detail-tab" data-tab-type="structure">Data Structure</button>
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
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Date</label>
                        <value>${iteration.date}</value>
                    </div>
                    <div class="detail-item">
                        <label>Status</label>
                        <value>${iteration.status}</value>
                    </div>
                    ${iteration.game ? `
                        <div class="detail-item">
                            <label>Game</label>
                            <value>${iteration.game}</value>
                        </div>
                    ` : ''}
                    ${iteration.games ? `
                        <div class="detail-item">
                            <label>Games</label>
                            <value>${iteration.games.join(', ')}</value>
                        </div>
                    ` : ''}
                    ${iteration.trials ? `
                        <div class="detail-item">
                            <label>Trials</label>
                            <value>${iteration.trials}</value>
                        </div>
                    ` : ''}
                    ${iteration.harness ? `
                        <div class="detail-item">
                            <label>Harness Version</label>
                            <value>${iteration.harness}</value>
                        </div>
                    ` : ''}
                    ${iteration.pass_rate ? `
                        <div class="detail-item">
                            <label>Pass Rate</label>
                            <value class="${iteration.pass_rate === '100%' ? 'success' : ''}">${iteration.pass_rate}</value>
                        </div>
                    ` : ''}
                </div>

                ${iteration.metrics ? `
                    <h3>Evaluation Metrics</h3>
                    <div class="metrics-grid">
                        ${Object.entries(iteration.metrics).map(([key, value]) => `
                            <div class="metric-item">
                                <span class="metric-label">${key.replace('_', ' ').toUpperCase()}</span>
                                <span class="metric-value">${value}%</span>
                                <div class="metric-bar">
                                    <div class="metric-fill" style="width: ${value}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${iteration.fail_details ? `
                    <div class="fail-details">
                        <h3>⚠️ Failure Details</h3>
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
            case 'structure':
                content.innerHTML = this.renderDataStructure(iteration);
                break;
            case 'results':
                content.innerHTML = this.renderResults(iteration);
                break;
            case 'artifacts':
                content.innerHTML = this.renderArtifacts(iteration);
                break;
        }
    }

    renderDataStructure(iteration) {
        return `
            <div class="data-structure">
                <h3>Task Plan Structure</h3>
                <pre class="code-block">
experiments/iterations/${iteration.id}/
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_goal.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_plan.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_progress.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_results.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_retrospective.md
${iteration.automation ? `├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_automation_goal.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_automation_results.md
├── ${iteration.id.charAt(0).toUpperCase() + iteration.id.slice(1)}_automation_review.md` : ''}
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
    ├── eval_results/
    │   └── harness_${iteration.harness || 'vX'}/
    │       └── [evaluation reports]
    └── bad_plan/
        └── [regression tests]</pre>
            </div>
        `;
    }

    renderResults(iteration) {
        return `
            <div class="results-section">
                <h3>Iteration Results</h3>
                ${iteration.results ? `
                    <div class="results-summary">
                        ${iteration.results.pass_count ? `
                            <div class="result-stat">
                                <span class="label">Pass Count</span>
                                <span class="value success">${iteration.results.pass_count}/${iteration.results.total}</span>
                            </div>
                        ` : ''}
                        ${iteration.results.verdict ? `
                            <div class="result-stat">
                                <span class="label">Verdict</span>
                                <span class="value">${iteration.results.verdict}</span>
                            </div>
                        ` : ''}
                        ${iteration.results.notes ? `
                            <div class="result-notes">
                                <p>${iteration.results.notes}</p>
                            </div>
                        ` : ''}
                    </div>
                ` : '<p>No detailed results available</p>'}
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
                    <div class="artifact-item">
                        <span class="icon">📁</span>
                        <span>Evaluation_Reports/${iteration.id}/</span>
                    </div>
                    <div class="artifact-item">
                        <span class="icon">📁</span>
                        <span>KB_Registry/${iteration.id}/</span>
                    </div>
                </div>

                <h4>Local Repository</h4>
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

    showKnowledgeBase() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Knowledge Base Overview</h2>

            <div class="kb-overview">
                <div class="kb-summary glass-container">
                    <h3>Art Task Plan KB</h3>
                    <div class="kb-info">
                        <p><strong>ID:</strong> ${this.kbData.art.id}</p>
                        <p><strong>Total Entities:</strong> ${this.kbData.art.total.toLocaleString()}</p>
                    </div>
                    <div class="kb-categories">
                        ${Object.entries(this.kbData.art.categories).map(([name, data]) => `
                            <div class="kb-category-card" data-kb-type="art" data-category="${name}">
                                <h4>${name}</h4>
                                <p class="count">${data.count.toLocaleString()} entities</p>
                                <p class="description">${data.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="kb-summary glass-container">
                    <h3>Meta Iteration KB</h3>
                    <div class="kb-info">
                        <p><strong>ID:</strong> ${this.kbData.meta.id}</p>
                        <p><strong>Total Entities:</strong> ${this.kbData.meta.total.toLocaleString()}</p>
                    </div>
                    <div class="kb-categories">
                        ${Object.entries(this.kbData.meta.categories).map(([name, data]) => `
                            <div class="kb-category-card" data-kb-type="meta" data-category="${name}">
                                <h4>${name}</h4>
                                <p class="count">${data.count.toLocaleString()} entities</p>
                                <p class="description">${data.description}</p>
                            </div>
                        `).join('')}
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
                            <div class="entity-item">
                                <div class="entity-header">
                                    <span class="entity-id">${entity.id}</span>
                                    <span class="entity-type">${entity.type}</span>
                                </div>
                                <div class="entity-details">
                                    ${Object.entries(entity).filter(([key]) => !['id', 'type'].includes(key)).map(([key, value]) => `
                                        <div class="entity-field">
                                            <span class="field-name">${key}:</span>
                                            <span class="field-value">${typeof value === 'object' ? JSON.stringify(value) : value}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    showAgents() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Agent Configuration</h2>

            <div class="agents-grid">
                ${this.agents.map(agent => `
                    <div class="agent-card glass-container">
                        <h3>${agent.name}</h3>
                        <div class="agent-info">
                            <p><strong>Role:</strong> ${agent.role}</p>
                            <p><strong>Template:</strong> ${agent.template}</p>
                            <p><strong>Model:</strong> ${agent.model}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="agent-flow">
                <h3>Agent Execution Flow</h3>
                <ol>
                    <li><strong>Orchestrator (Phase 1)</strong> coordinates:
                        <ul>
                            <li>Designer → creates methodology</li>
                            <li>Analyzer (Early) → writes goal, plan</li>
                            <li>Generator → creates task plans</li>
                            <li>KB Writer → saves to Art KB</li>
                        </ul>
                    </li>
                    <li><strong>Orchestrator (Phase 2)</strong> coordinates:
                        <ul>
                            <li>Evaluator → evaluates task plans</li>
                            <li>Analyzer (Late) → writes results, retrospective</li>
                            <li>Process Validator → validates process</li>
                            <li>Evolver → evolves prompts</li>
                            <li>Evolver Reviewer → reviews changes</li>
                        </ul>
                    </li>
                    <li><strong>Monitor</strong> runs in parallel → sends Slack alerts</li>
                </ol>
            </div>
        `;
    }

    showS3Structure() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>S3 Repository Structure</h2>

            <div class="s3-structure">
                <div class="s3-info">
                    <h3>Bucket</h3>
                    <code>${this.s3Structure.bucket}</code>
                </div>

                <div class="s3-paths">
                    <h3>Path Structure</h3>
                    <div class="path-list">
                        <div class="path-item">
                            <h4>GDD Source (Input)</h4>
                            <code>${this.s3Structure.paths.gdd_source}</code>
                            <p>Original GDD documents from ideation pipeline</p>
                        </div>

                        <div class="path-item">
                            <h4>Task Plans (Output)</h4>
                            <code>${this.s3Structure.paths.task_plans}</code>
                            <p>Generated task plan packages for each iteration</p>
                        </div>

                        <div class="path-item">
                            <h4>Evaluation Reports (Output)</h4>
                            <code>${this.s3Structure.paths.eval_reports}</code>
                            <p>Harness evaluation results and bad plan analyses</p>
                        </div>

                        <div class="path-item">
                            <h4>KB Registry (Output)</h4>
                            <code>${this.s3Structure.paths.kb_registry}</code>
                            <p>Knowledge base snapshots and registry documents</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardApp = new AccurateDashboard();
});