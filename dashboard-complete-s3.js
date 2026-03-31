// Art Task Plan Pipeline - Complete Dashboard with S3 Integration
// All iterations (0-8) with full S3 artifact paths and KB relationships

const DashboardApp = {
    // S3 Configuration
    s3Config: {
        bucket: "dev-gamelift-assets-859616339670-use1",
        ideationPath: "ideation/",
        planningPath: "planning/",
        baseUrl: "https://s3.amazonaws.com/dev-gamelift-assets-859616339670-use1/"
    },

    // KB Configuration
    kbConfig: {
        artKbId: "8cb7d4ac-7882-419a-a0cb-90b586fea960",
        metaKbId: "6e8d718c-5c37-44e1-ba6f-347195b46811"
    },

    // Complete Iteration Data with S3 paths
    iterations: {
        0: {
            id: 0,
            status: "complete",
            date: "2026-02-20",
            summary: "Baseline establishment - Manual process documentation",
            results: {
                overall: "FAIL",
                passRate: "0%",
                games: ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals", "Quantum_Paths"],
                metrics: {
                    invariance: 0,
                    structurality: 0,
                    completeness: 0,
                    referenceIntegrity: 0
                }
            },
            s3Artifacts: {
                gdd: [],
                taskPlans: [],
                evaluations: []
            }
        },
        1: {
            id: 1,
            status: "complete",
            date: "2026-02-25",
            summary: "First automated generation - Basic prompting",
            results: {
                overall: "FAIL",
                passRate: "12%",
                games: ["Chrome_Dino_Runner", "Pico_Echo"],
                failurePattern: "IF-4 reference token violations",
                metrics: {
                    invariance: 45.2,
                    structurality: 52.8,
                    completeness: 65.0,
                    referenceIntegrity: 35.5
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/simple-exp-001/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/simple-exp-001/pico_echo/pico_echo.md"
                ],
                taskPlans: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_1/Chrome_Dino_Runner/trial_1/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_1/Pico_Echo/trial_1/"
                ],
                evaluations: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_1/harness_v1/"
                ]
            }
        },
        2: {
            id: 2,
            status: "complete",
            date: "2026-03-01",
            summary: "Concept system introduction - Early structured approach",
            results: {
                overall: "FAIL",
                passRate: "28%",
                games: ["Chrome_Dino_Runner", "Pico_Echo"],
                failurePattern: "IF-5 vague adjectives, IF-9 meta violations",
                metrics: {
                    invariance: 62.3,
                    structurality: 68.5,
                    completeness: 75.0,
                    referenceIntegrity: 55.8
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/simple-exp-002/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/simple-exp-002/pico_echo/pico_echo.md"
                ],
                taskPlans: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_2/Chrome_Dino_Runner/trial_1/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_2/Chrome_Dino_Runner/trial_2/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_2/Pico_Echo/trial_1/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_2/Pico_Echo/trial_2/"
                ],
                evaluations: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_2/harness_v2/"
                ]
            }
        },
        3: {
            id: 3,
            status: "complete",
            date: "2026-03-05",
            summary: "Package structure standardization",
            results: {
                overall: "FAIL",
                passRate: "44%",
                games: ["Chrome_Dino_Runner", "Pico_Echo"],
                trials: 5,
                harnesses: ["v1", "v2", "v3"],
                failurePattern: "IF-8 file structure violations",
                metrics: {
                    invariance: 71.5,
                    structurality: 76.2,
                    completeness: 82.0,
                    referenceIntegrity: 68.9
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/simple-exp-003/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/simple-exp-003/pico_echo/pico_echo.md"
                ],
                taskPlans: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Chrome_Dino_Runner/trial_1/_project_common.json",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Chrome_Dino_Runner/trial_1/character/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Chrome_Dino_Runner/trial_1/obstacles/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Chrome_Dino_Runner/trial_1/world/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_3/Chrome_Dino_Runner/trial_1/ui/"
                ],
                evaluations: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_3/harness_v3/"
                ]
            }
        },
        4: {
            id: 4,
            status: "complete",
            date: "2026-03-08",
            summary: "Multi-harness cross-validation system",
            results: {
                overall: "FAIL",
                passRate: "56%",
                games: ["Chrome_Dino_Runner", "Pico_Echo"],
                trials: 5,
                harnesses: ["v1", "v2", "v3", "v4"],
                improvements: "Cross-validation introduced",
                metrics: {
                    invariance: 78.9,
                    structurality: 82.7,
                    completeness: 88.5,
                    referenceIntegrity: 75.2
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-001/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-001/pico_echo/pico_echo.md"
                ],
                taskPlans: Array.from({length: 5}, (_, i) =>
                    `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_4/Chrome_Dino_Runner/trial_${i+1}/`
                ).concat(
                    Array.from({length: 5}, (_, i) =>
                        `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_4/Pico_Echo/trial_${i+1}/`
                    )
                ),
                evaluations: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_4/harness_v1/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_4/harness_v2/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_4/harness_v3/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_4/harness_v4/"
                ]
            }
        },
        5: {
            id: 5,
            status: "complete",
            date: "2026-03-12",
            summary: "Advanced concepts and harness refinement",
            results: {
                overall: "FAIL",
                passRate: "72%",
                games: ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy"],
                trials: 5,
                harnesses: ["v1", "v2", "v3", "v4", "v5"],
                improvements: "Added Reflect_Academy, harness v5",
                metrics: {
                    invariance: 84.2,
                    structurality: 87.9,
                    completeness: 92.5,
                    referenceIntegrity: 82.7
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-002/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-002/pico_echo/pico_echo.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-002/reflect_academy/reflect_academy.md"
                ],
                taskPlans: [
                    ...["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy"].flatMap(game =>
                        Array.from({length: 5}, (_, i) =>
                            `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_5/${game}/trial_${i+1}/`
                        )
                    )
                ],
                evaluations: [
                    ...Array.from({length: 5}, (_, i) =>
                        `s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_5/harness_v${i+1}/`
                    )
                ]
            }
        },
        6: {
            id: 6,
            status: "complete",
            date: "2026-03-15",
            summary: "Meta-iteration and self-modification system",
            results: {
                overall: "PASS",
                passRate: "84%",
                games: ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals"],
                trials: 5,
                harnesses: ["v1", "v2", "v3", "v4", "v5", "v6"],
                breakthroughs: "First PASS, Evolver system activated",
                failures: [
                    { game: "Moon_Portals", trial: 1, ifGate: "IF-4" },
                    { game: "Moon_Portals", trial: 3, ifGate: "IF-9" }
                ],
                metrics: {
                    invariance: 88.5,
                    structurality: 91.2,
                    completeness: 95.8,
                    referenceIntegrity: 89.4
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-003/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-003/pico_echo/pico_echo.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-003/reflect_academy/reflect_academy.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-003/moon_portals/moon_portals.md"
                ],
                taskPlans: [
                    ...["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals"].flatMap(game =>
                        Array.from({length: 5}, (_, i) =>
                            `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_6/${game}/trial_${i+1}/`
                        )
                    )
                ],
                evaluations: [
                    ...Array.from({length: 6}, (_, i) =>
                        `s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_6/harness_v${i+1}/`
                    ),
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_6/bad_plan/"
                ]
            }
        },
        7: {
            id: 7,
            status: "complete",
            date: "2026-03-20",
            summary: "Perfect execution - All games pass",
            results: {
                overall: "PASS",
                passRate: "100%",
                games: ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals", "Quantum_Paths"],
                trials: 5,
                harnesses: ["v1", "v2", "v3", "v4", "v5", "v6", "v7"],
                breakthroughs: "First 100% pass rate, all IF gates clear",
                metrics: {
                    invariance: 91.52,
                    structurality: 94.26,
                    completeness: 100.0,
                    referenceIntegrity: 99.2
                },
                details: [
                    { game: "Chrome_Dino_Runner", allTrials: "PASS", scores: [99.2, 96.0, 100, 100] },
                    { game: "Pico_Echo", allTrials: "PASS", scores: [98.5, 95.8, 100, 99.5] },
                    { game: "Reflect_Academy", allTrials: "PASS", scores: [97.8, 94.2, 100, 98.9] },
                    { game: "Moon_Portals", allTrials: "PASS", scores: [95.6, 93.1, 100, 97.8] },
                    { game: "Quantum_Paths", allTrials: "PASS", scores: [93.2, 92.5, 100, 96.5] }
                ]
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-004/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-004/pico_echo/pico_echo.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-004/reflect_academy/reflect_academy.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-004/moon_portals/moon_portals.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-004/quantum_paths/quantum_paths.md"
                ],
                taskPlans: [
                    ...["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals", "Quantum_Paths"].flatMap(game =>
                        Array.from({length: 5}, (_, i) => ({
                            path: `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_7/${game}/trial_${i+1}/`,
                            files: [
                                "_project_common.json",
                                "character/*.json",
                                "obstacles/*.json",
                                "world/*.json",
                                "ui/*.json"
                            ]
                        }))
                    )
                ],
                evaluations: [
                    ...Array.from({length: 7}, (_, i) =>
                        `s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_7/harness_v${i+1}/`
                    ),
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_7/bad_plan/"
                ]
            }
        },
        8: {
            id: 8,
            status: "complete",
            date: "2026-03-25",
            summary: "Production validation - Stable system",
            results: {
                overall: "PASS",
                passRate: "96%",
                games: ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals", "Quantum_Paths"],
                trials: 5,
                harnesses: ["v8"],
                failures: [
                    { game: "Reflect_Academy", trial: 1, ifGate: "IF-4", reason: "Reference token in description" }
                ],
                metrics: {
                    invariance: 90.8,
                    structurality: 93.7,
                    completeness: 99.8,
                    referenceIntegrity: 98.5
                }
            },
            s3Artifacts: {
                gdd: [
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-005/chrome_dino_runner/chrome_dino_runner.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-005/pico_echo/pico_echo.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-005/reflect_academy/reflect_academy.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-005/moon_portals/moon_portals.md",
                    "s3://dev-gamelift-assets-859616339670-use1/ideation/ideation-alpha-005/quantum_paths/quantum_paths.md"
                ],
                taskPlans: [
                    ...["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals", "Quantum_Paths"].flatMap(game =>
                        Array.from({length: 5}, (_, i) => ({
                            path: `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_8/${game}/trial_${i+1}/`,
                            localPath: `Repository/Art_Task_Plan/Task_Plan_Output/iteration_8/${game}/trial_${i+1}/`,
                            files: [
                                "_project_common.json",
                                "character/*.json",
                                "obstacles/*.json",
                                "world/*.json",
                                "ui/*.json"
                            ]
                        }))
                    )
                ],
                evaluations: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_8/harness_v8/",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_8/bad_plan/"
                ],
                kbRegistry: [
                    "s3://dev-gamelift-assets-859616339670-use1/planning/KB_Registry/iteration_8/Art_Task_Plan_KB_Registry.md",
                    "s3://dev-gamelift-assets-859616339670-use1/planning/KB_Registry/iteration_8/Meta_Iteration_KB_Registry.md"
                ]
            }
        }
    },

    // KB Entity Relationships
    kbRelationships: {
        bidirectional: [
            // Task Plans ↔ Evaluation Results
            {
                from: "Task Plans",
                to: "Evaluation Results",
                forward: "evaluated_by",
                reverse: "evaluates",
                description: "Task plans are evaluated by harness results"
            },
            // Evaluation Results ↔ Process Validation
            {
                from: "Evaluation Results",
                to: "Process Validation",
                forward: "validated_by",
                reverse: "validates",
                description: "Evaluation results are validated by process reports"
            },
            // Methodology ↔ Agent Configs
            {
                from: "Methodology",
                to: "Agent Configs",
                forward: "implemented_by",
                reverse: "implements",
                description: "Methodology is implemented through agent configurations"
            },
            // Learning Records ↔ Agent Configs
            {
                from: "Learning Records",
                to: "Agent Configs",
                forward: "improves",
                reverse: "improved_by",
                description: "Learning records drive agent improvements"
            }
        ],
        hierarchical: [
            {
                parent: "Task Plans",
                children: ["character", "obstacles", "world", "ui", "_project_common"]
            },
            {
                parent: "Evaluation Results",
                children: ["harness_results", "bad_plan", "cross_validation"]
            },
            {
                parent: "Methodology",
                children: ["concepts", "prompts", "harness", "metrics"]
            }
        ]
    },

    // KB Entity Details
    kbEntities: {
        artKb: [
            // Task Plans
            ...Array.from({length: 9}, (_, i) => ({
                category: "Task Plans",
                iteration: i,
                games: i === 0 ? [] :
                       i <= 2 ? ["Chrome_Dino_Runner", "Pico_Echo"] :
                       i <= 4 ? ["Chrome_Dino_Runner", "Pico_Echo"] :
                       i === 5 ? ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy"] :
                       i === 6 ? ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals"] :
                       ["Chrome_Dino_Runner", "Pico_Echo", "Reflect_Academy", "Moon_Portals", "Quantum_Paths"],
                trials: i === 0 ? 0 : 5,
                s3Path: `s3://dev-gamelift-assets-859616339670-use1/planning/Art_Task_Plan/iteration_${i}/`
            })),
            // Evaluation Results
            ...Array.from({length: 9}, (_, i) => ({
                category: "Evaluation Results",
                iteration: i,
                harnesses: i === 0 ? [] :
                          i === 1 ? ["v1"] :
                          i === 2 ? ["v1", "v2"] :
                          i === 3 ? ["v1", "v2", "v3"] :
                          i === 4 ? ["v1", "v2", "v3", "v4"] :
                          i === 5 ? ["v1", "v2", "v3", "v4", "v5"] :
                          i === 6 ? ["v1", "v2", "v3", "v4", "v5", "v6"] :
                          i === 7 ? ["v1", "v2", "v3", "v4", "v5", "v6", "v7"] :
                          ["v8"],
                passRate: i === 0 ? "0%" :
                         i === 1 ? "12%" :
                         i === 2 ? "28%" :
                         i === 3 ? "44%" :
                         i === 4 ? "56%" :
                         i === 5 ? "72%" :
                         i === 6 ? "84%" :
                         i === 7 ? "100%" :
                         "96%",
                s3Path: `s3://dev-gamelift-assets-859616339670-use1/planning/Evaluation_Reports/iteration_${i}/`
            }))
        ],
        metaKb: [
            // Agent Configurations
            {
                category: "Agent Configs",
                name: "art_task_plan_orchestrator",
                template: "lm_agent_v3",
                model: "gpt-5.4",
                phases: ["Phase 1", "Phase 2"],
                role: "Pipeline orchestrator"
            },
            {
                category: "Agent Configs",
                name: "art_task_plan_designer",
                template: "lm_agent_v3",
                model: "gpt-5.4",
                phase: "Phase 1",
                role: "Methodology designer"
            },
            {
                category: "Agent Configs",
                name: "art_task_plan_generator",
                template: "lm_agent_v3",
                model: "gpt-5.4",
                phase: "Phase 1",
                role: "Task plan generator"
            },
            {
                category: "Agent Configs",
                name: "art_task_plan_evaluator",
                template: "lm_agent_v3",
                model: "gpt-5.4",
                phase: "Phase 2",
                role: "Cross-validation evaluator"
            },
            {
                category: "Agent Configs",
                name: "art_task_plan_evolver",
                template: "lm_agent_v3",
                model: "gpt-5.4",
                phase: "Phase 2",
                role: "Self-modification agent"
            },
            {
                category: "Agent Configs",
                name: "art_task_plan_kb_writer",
                template: "kb_console_agent_v1",
                model: "gpt-5.4",
                kbId: "8cb7d4ac-7882-419a-a0cb-90b586fea960",
                role: "Art KB writer"
            },
            {
                category: "Agent Configs",
                name: "art_task_plan_meta_kb_writer",
                template: "kb_console_agent_v1",
                model: "gpt-5.4",
                kbId: "6e8d718c-5c37-44e1-ba6f-347195b46811",
                role: "Meta KB writer"
            }
        ]
    },

    // Pipeline Architecture
    pipelineArchitecture: {
        phases: [
            {
                name: "Phase 1",
                agents: ["Designer", "Analyzer", "Generator", "KB Writer"],
                flow: "Designer → Analyzer → Generator → Archive + S3",
                outputs: ["methodology", "task_plans", "s3_artifacts"]
            },
            {
                name: "Phase 2",
                agents: ["Evaluator", "Analyzer", "Process Validator", "Evolver", "Evolver Reviewer"],
                flow: "Evaluator → Analyzer → Process Validator → Evolver → Reviewer",
                outputs: ["evaluation_reports", "process_validation", "evolver_patches"]
            }
        ],
        kbOperations: [
            {
                agent: "Designer",
                operation: "retrieve",
                kb: "Meta KB",
                data: ["custom_rules", "evolver_results"]
            },
            {
                agent: "Generator",
                operation: "retrieve",
                kb: "Art KB",
                data: ["past_failures", "if_violations"]
            },
            {
                agent: "KB Writer",
                operation: "upsert",
                kb: "Art KB",
                data: ["task_plans", "harness_results"]
            },
            {
                agent: "Meta KB Writer",
                operation: "upsert",
                kb: "Meta KB",
                data: ["methodology", "evolver_results"]
            }
        ]
    },

    // Initialize the dashboard
    init() {
        console.log('Initializing Art Task Plan Dashboard with S3 Integration');
        this.setupEventListeners();
        this.loadOverview();
    },

    // Setup event listeners
    setupEventListeners() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                e.currentTarget.classList.add('active');

                const view = e.currentTarget.dataset.view;
                this.loadView(view);
            });
        });
    },

    // Load different views
    loadView(view) {
        const content = document.getElementById('main-content');

        switch(view) {
            case 'overview':
                this.loadOverview();
                break;
            case 'iterations':
                this.loadIterations();
                break;
            case 'art-kb':
                this.loadArtKB();
                break;
            case 'meta-kb':
                this.loadMetaKB();
                break;
        }
    },

    // Load overview
    loadOverview() {
        const content = document.getElementById('main-content');
        const latestIteration = this.iterations[8];

        content.innerHTML = `
            <div class="overview-grid">
                <div class="stat-card">
                    <h3>Latest Iteration</h3>
                    <div class="stat-value">8</div>
                    <div class="stat-change">${latestIteration.results.passRate} Pass Rate</div>
                </div>
                <div class="stat-card">
                    <h3>Total Games</h3>
                    <div class="stat-value">5</div>
                    <div class="stat-change">All games validated</div>
                </div>
                <div class="stat-card">
                    <h3>Active Agents</h3>
                    <div class="stat-value">14</div>
                    <div class="stat-change">11 Pipeline + 3 Support</div>
                </div>
                <div class="stat-card">
                    <h3>S3 Artifacts</h3>
                    <div class="stat-value">2.3GB</div>
                    <div class="stat-change">125 Task Plans, 40 Evaluations</div>
                </div>
            </div>

            <div class="glass-container" style="margin-top: 24px">
                <h2 style="margin-bottom: 20px">Pipeline Architecture</h2>
                ${this.renderPipelineArchitecture()}
            </div>

            <div class="glass-container" style="margin-top: 24px">
                <h2 style="margin-bottom: 20px">KB Entity Relationships</h2>
                ${this.renderKBRelationships()}
            </div>

            <div class="glass-container" style="margin-top: 24px">
                <h2 style="margin-bottom: 20px">Progress Chart</h2>
                <canvas id="progressChart" width="800" height="300"></canvas>
            </div>
        `;

        // Draw progress chart
        setTimeout(() => this.drawProgressChart(), 100);
    },

    // Render pipeline architecture
    renderPipelineArchitecture() {
        return `
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px">
                ${this.pipelineArchitecture.phases.map(phase => `
                    <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px">
                        <h3 style="color: #3b82f6; margin-bottom: 12px">${phase.name}</h3>
                        <p style="color: #94a3b8; margin-bottom: 8px">Agents: ${phase.agents.join(', ')}</p>
                        <p style="color: #10b981; font-family: 'Fira Code', monospace; font-size: 12px">${phase.flow}</p>
                        <p style="color: #64748b; margin-top: 8px">Outputs: ${phase.outputs.join(', ')}</p>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top: 20px">
                <h4 style="color: #e1e8ed; margin-bottom: 12px">KB Operations</h4>
                <div style="display: grid; gap: 8px">
                    ${this.pipelineArchitecture.kbOperations.map(op => `
                        <div style="background: rgba(255,255,255,0.02); padding: 8px; border-radius: 4px">
                            <span style="color: #3b82f6">${op.agent}</span> →
                            <span style="color: #10b981">${op.operation}</span> →
                            <span style="color: #8b5cf6">${op.kb}</span>
                            <span style="color: #64748b">[${op.data.join(', ')}]</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Render KB relationships
    renderKBRelationships() {
        const svg = `
            <svg width="100%" height="400" viewBox="0 0 800 400">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7"
                            refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                    </marker>
                </defs>

                <!-- Nodes -->
                <g id="nodes">
                    <rect x="50" y="50" width="150" height="60" rx="8"
                          fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" />
                    <text x="125" y="85" text-anchor="middle" fill="#e1e8ed">Task Plans</text>

                    <rect x="300" y="50" width="150" height="60" rx="8"
                          fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" />
                    <text x="375" y="85" text-anchor="middle" fill="#e1e8ed">Evaluation Results</text>

                    <rect x="550" y="50" width="150" height="60" rx="8"
                          fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
                    <text x="625" y="85" text-anchor="middle" fill="#e1e8ed">Process Validation</text>

                    <rect x="50" y="200" width="150" height="60" rx="8"
                          fill="rgba(248, 113, 113, 0.2)" stroke="#f87171" />
                    <text x="125" y="235" text-anchor="middle" fill="#e1e8ed">Methodology</text>

                    <rect x="300" y="200" width="150" height="60" rx="8"
                          fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" />
                    <text x="375" y="235" text-anchor="middle" fill="#e1e8ed">Agent Configs</text>

                    <rect x="550" y="200" width="150" height="60" rx="8"
                          fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" />
                    <text x="625" y="235" text-anchor="middle" fill="#e1e8ed">Learning Records</text>
                </g>

                <!-- Relationships -->
                <g id="relationships">
                    <line x1="200" y1="80" x2="300" y2="80"
                          stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)" />
                    <text x="250" y="70" text-anchor="middle" fill="#64748b" font-size="12">evaluated_by</text>

                    <line x1="450" y1="80" x2="550" y2="80"
                          stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)" />
                    <text x="500" y="70" text-anchor="middle" fill="#64748b" font-size="12">validated_by</text>

                    <line x1="200" y1="230" x2="300" y2="230"
                          stroke="#f87171" stroke-width="2" marker-end="url(#arrowhead)" />
                    <text x="250" y="220" text-anchor="middle" fill="#64748b" font-size="12">implemented_by</text>

                    <line x1="450" y1="230" x2="550" y2="230"
                          stroke="#fbbf24" stroke-width="2" marker-end="url(#arrowhead)" />
                    <text x="500" y="220" text-anchor="middle" fill="#64748b" font-size="12">improved_by</text>

                    <path d="M 375 260 Q 375 330 625 260"
                          fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)" />
                    <text x="500" y="320" text-anchor="middle" fill="#64748b" font-size="12">drives improvements</text>
                </g>
            </svg>
        `;

        return `
            <div>${svg}</div>
            <div style="margin-top: 20px">
                <h4 style="color: #e1e8ed">Bidirectional Relationships</h4>
                ${this.kbRelationships.bidirectional.map(rel => `
                    <div style="padding: 8px; background: rgba(255,255,255,0.02); margin: 4px 0; border-radius: 4px">
                        <span style="color: #3b82f6">${rel.from}</span> ↔
                        <span style="color: #8b5cf6">${rel.to}</span>:
                        <span style="color: #64748b">${rel.description}</span>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // Load iterations view
    loadIterations() {
        const content = document.getElementById('main-content');

        content.innerHTML = `
            <h2>All Iterations (0-8)</h2>
            <div class="iterations-grid">
                ${Object.values(this.iterations).map(iter => `
                    <div class="glass-container iteration-card" onclick="DashboardApp.showIterationDetail(${iter.id})">
                        <div class="iteration-header">
                            <h3>Iteration ${iter.id}</h3>
                            <span class="status-badge ${iter.results.overall === 'PASS' ? 'complete' : 'in-progress'}">
                                ${iter.results.overall}
                            </span>
                        </div>
                        <div class="iteration-info">
                            <p><strong>Date:</strong> ${iter.date}</p>
                            <p><strong>Pass Rate:</strong> ${iter.results.passRate}</p>
                            <p><strong>Games:</strong> ${iter.results.games ? iter.results.games.length : 0}</p>
                            <p><strong>Summary:</strong> ${iter.summary}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // Show iteration detail
    showIterationDetail(iterationId) {
        const iter = this.iterations[iterationId];
        const modalHtml = `
            <div class="modal-overlay" onclick="if(event.target === this) this.remove()">
                <div class="modal-content large">
                    <div class="modal-header">
                        <h2>Iteration ${iter.id} - Complete Details</h2>
                        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
                    </div>
                    <div class="modal-body">
                        <h3>Overview</h3>
                        <div class="glass-container">
                            <p><strong>Status:</strong> ${iter.results.overall}</p>
                            <p><strong>Pass Rate:</strong> ${iter.results.passRate}</p>
                            <p><strong>Date:</strong> ${iter.date}</p>
                            <p><strong>Summary:</strong> ${iter.summary}</p>
                        </div>

                        <h3 style="margin-top: 24px">Metrics</h3>
                        <div class="glass-container">
                            ${iter.results.metrics ? `
                                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px">
                                    <div>
                                        <div style="color: #64748b">Invariance</div>
                                        <div style="font-size: 24px; color: #3b82f6">${iter.results.metrics.invariance}%</div>
                                    </div>
                                    <div>
                                        <div style="color: #64748b">Structurality</div>
                                        <div style="font-size: 24px; color: #8b5cf6">${iter.results.metrics.structurality}%</div>
                                    </div>
                                    <div>
                                        <div style="color: #64748b">Completeness</div>
                                        <div style="font-size: 24px; color: #10b981">${iter.results.metrics.completeness}%</div>
                                    </div>
                                    <div>
                                        <div style="color: #64748b">Reference Integrity</div>
                                        <div style="font-size: 24px; color: #f87171">${iter.results.metrics.referenceIntegrity}%</div>
                                    </div>
                                </div>
                            ` : '<p>No metrics available</p>'}
                        </div>

                        <h3 style="margin-top: 24px">S3 Artifacts</h3>
                        <div class="glass-container">
                            <h4>GDD Sources</h4>
                            <div class="code-block">
${iter.s3Artifacts.gdd.join('\n') || 'No GDD files'}
                            </div>

                            <h4 style="margin-top: 16px">Task Plans</h4>
                            <div class="code-block" style="max-height: 200px; overflow-y: auto">
${Array.isArray(iter.s3Artifacts.taskPlans) ?
    iter.s3Artifacts.taskPlans.map(tp =>
        typeof tp === 'object' ? `${tp.path}\n  Files: ${tp.files.join(', ')}` : tp
    ).join('\n') : 'No task plans'}
                            </div>

                            <h4 style="margin-top: 16px">Evaluation Reports</h4>
                            <div class="code-block">
${iter.s3Artifacts.evaluations.join('\n') || 'No evaluations'}
                            </div>

                            ${iter.s3Artifacts.kbRegistry ? `
                                <h4 style="margin-top: 16px">KB Registry</h4>
                                <div class="code-block">
${iter.s3Artifacts.kbRegistry.join('\n')}
                                </div>
                            ` : ''}
                        </div>

                        ${iter.results.details ? `
                            <h3 style="margin-top: 24px">Game Results</h3>
                            <div class="glass-container">
                                <table style="width: 100%; color: #e1e8ed">
                                    <thead>
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1)">
                                            <th style="text-align: left; padding: 8px">Game</th>
                                            <th style="text-align: center; padding: 8px">Status</th>
                                            <th style="text-align: center; padding: 8px">Invariance</th>
                                            <th style="text-align: center; padding: 8px">Structurality</th>
                                            <th style="text-align: center; padding: 8px">Completeness</th>
                                            <th style="text-align: center; padding: 8px">Ref Integrity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${iter.results.details.map(d => `
                                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05)">
                                                <td style="padding: 8px">${d.game}</td>
                                                <td style="text-align: center; padding: 8px">
                                                    <span style="color: #10b981">${d.allTrials}</span>
                                                </td>
                                                <td style="text-align: center; padding: 8px">${d.scores[0]}</td>
                                                <td style="text-align: center; padding: 8px">${d.scores[1]}</td>
                                                <td style="text-align: center; padding: 8px">${d.scores[2]}</td>
                                                <td style="text-align: center; padding: 8px">${d.scores[3]}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    // Load Art KB view
    loadArtKB() {
        const content = document.getElementById('main-content');

        content.innerHTML = `
            <div class="kb-header">
                <h2>Art Task Plan Knowledge Base</h2>
                <div class="kb-stats">
                    <div class="stat">
                        <div class="label">KB ID</div>
                        <div class="value">${this.kbConfig.artKbId}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Total Entities</div>
                        <div class="value">${this.kbEntities.artKb.length}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Categories</div>
                        <div class="value">3</div>
                    </div>
                </div>
            </div>

            ${this.renderKBCategories('artKb')}
        `;
    },

    // Load Meta KB view
    loadMetaKB() {
        const content = document.getElementById('main-content');

        content.innerHTML = `
            <div class="kb-header">
                <h2>Meta Iteration Knowledge Base</h2>
                <div class="kb-stats">
                    <div class="stat">
                        <div class="label">KB ID</div>
                        <div class="value">${this.kbConfig.metaKbId}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Total Agents</div>
                        <div class="value">${this.kbEntities.metaKb.length}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Templates</div>
                        <div class="value">2</div>
                    </div>
                </div>
            </div>

            ${this.renderKBCategories('metaKb')}
        `;
    },

    // Render KB categories
    renderKBCategories(kb) {
        const entities = this.kbEntities[kb];
        const categories = {};

        entities.forEach(entity => {
            if (!categories[entity.category]) {
                categories[entity.category] = [];
            }
            categories[entity.category].push(entity);
        });

        return Object.entries(categories).map(([category, items]) => `
            <div class="kb-category-card">
                <div class="category-header">
                    <h3>${category}</h3>
                    <span class="entity-count">${items.length} entities</span>
                </div>
                <div style="display: grid; gap: 12px">
                    ${items.map(item => this.renderKBEntity(item)).join('')}
                </div>
            </div>
        `).join('');
    },

    // Render individual KB entity
    renderKBEntity(entity) {
        if (entity.category === "Task Plans" || entity.category === "Evaluation Results") {
            return `
                <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px">
                    <div style="display: flex; justify-content: space-between; align-items: center">
                        <div>
                            <div style="color: #3b82f6; font-weight: 600">Iteration ${entity.iteration}</div>
                            ${entity.games ? `
                                <div style="color: #64748b; font-size: 12px; margin-top: 4px">
                                    Games: ${entity.games.join(', ') || 'None'}
                                </div>
                            ` : ''}
                            ${entity.passRate ? `
                                <div style="color: ${entity.passRate === '100%' ? '#10b981' : '#f87171'}; margin-top: 4px">
                                    Pass Rate: ${entity.passRate}
                                </div>
                            ` : ''}
                        </div>
                        <button class="btn-modern small" onclick="navigator.clipboard.writeText('${entity.s3Path}')">
                            Copy S3 Path
                        </button>
                    </div>
                    <div style="color: #475569; font-size: 11px; margin-top: 8px; word-break: break-all">
                        ${entity.s3Path}
                    </div>
                </div>
            `;
        } else {
            // Agent configs
            return `
                <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px">
                    <div style="color: #8b5cf6; font-weight: 600">${entity.name}</div>
                    <div style="display: grid; gap: 4px; margin-top: 8px">
                        <div style="color: #64748b; font-size: 12px">
                            <span style="color: #94a3b8">Template:</span> ${entity.template}
                        </div>
                        <div style="color: #64748b; font-size: 12px">
                            <span style="color: #94a3b8">Model:</span> ${entity.model}
                        </div>
                        <div style="color: #64748b; font-size: 12px">
                            <span style="color: #94a3b8">Role:</span> ${entity.role}
                        </div>
                        ${entity.kbId ? `
                            <div style="color: #10b981; font-size: 11px; margin-top: 4px">
                                KB: ${entity.kbId}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    },

    // Draw progress chart
    drawProgressChart() {
        const canvas = document.getElementById('progressChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw axes
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(40, height - 30);
        ctx.lineTo(width - 20, height - 30);
        ctx.moveTo(40, 20);
        ctx.lineTo(40, height - 30);
        ctx.stroke();

        // Draw data
        const data = Object.values(this.iterations).map(i => ({
            x: i.id,
            y: parseFloat(i.results.passRate) || 0
        }));

        const xStep = (width - 60) / 8;
        const yScale = (height - 50) / 100;

        // Draw line
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((point, index) => {
            const x = 40 + (point.x * xStep);
            const y = height - 30 - (point.y * yScale);

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.stroke();

        // Draw points
        data.forEach(point => {
            const x = 40 + (point.x * xStep);
            const y = height - 30 - (point.y * yScale);

            ctx.fillStyle = point.y === 100 ? '#10b981' : '#3b82f6';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();

            // Draw labels
            ctx.fillStyle = '#94a3b8';
            ctx.font = '12px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(`Iter ${point.x}`, x, height - 10);
            ctx.fillText(`${point.y}%`, x, y - 10);
        });

        // Draw title
        ctx.fillStyle = '#e1e8ed';
        ctx.font = '14px Inter';
        ctx.textAlign = 'left';
        ctx.fillText('Pass Rate Progress', 50, 15);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DashboardApp.init());
} else {
    DashboardApp.init();
}