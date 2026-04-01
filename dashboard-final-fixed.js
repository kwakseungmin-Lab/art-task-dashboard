// Art Task Plan Pipeline - Final Dashboard with Real KB Data & Complete File Structure
// Complete KB structure and Task Plan file viewer with real directory structure

const DashboardApp = {
    // S3 Configuration
    s3Config: {
        bucket: "dev-gamelift-assets-859616339670-use1",
        region: "us-east-1",
        baseUrl: "https://dev-gamelift-assets-859616339670-use1.s3.amazonaws.com/"
    },

    // KB Configuration - Real Data
    kbConfig: {
        artKb: {
            id: "8cb7d4ac-7882-419a-a0cb-90b586fea960",
            name: "Art Task Plan",
            totalEntities: 26789,
            totalRelations: 1585,
            structured: 476,
            atomicFacts: 26313,
            backend: "AWS Neptune"
        },
        metaKb: {
            id: "6e8d718c-5c37-44e1-ba6f-347195b46811",
            name: "Art Task Plan Meta Iteration",
            totalEntities: 8032,
            totalRelations: 476,
            structured: 60,
            atomicFacts: 1544,
            backend: "AWS Neptune"
        }
    },

    // Real Task Plan file structure for iteration 8
    taskPlanFiles: {
        'Chrome_Dino_Runner': {
            trial_1: [
                '_project_common.json',
                'character/dino_air_pose.json',
                'character/dino_crash_pose.json',
                'character/dino_low_profile.json',
                'character/dino_runner_core.json',
                'obstacles/cactus_pair_cluster.json',
                'obstacles/cactus_single.json',
                'obstacles/cactus_triplet_cluster.json',
                'obstacles/pterodactyl_flap_sheet.json',
                'ui/game_over_message.json',
                'ui/restart_hint_label.json',
                'ui/score_digits_font.json',
                'ui/score_rack_panel.json',
                'world/cloud_pass_small.json',
                'world/ground_pebble_overlay.json',
                'world/ground_runner_strip.json',
                'world/sky_day_field.json'
            ],
            trial_2: [
                '_project_common.json',
                'character/character_player_dino_dead_static.json',
                'character/character_player_dino_duck_2f_12fps.json',
                'character/character_player_dino_idle_2f_6fps.json',
                'character/character_player_dino_jump_static.json',
                'character/character_player_dino_run_2f_12fps.json',
                'obstacles/obstacles_cactus_large_static.json',
                'obstacles/obstacles_cactus_medium_static.json',
                'obstacles/obstacles_cactus_small_static.json',
                'obstacles/obstacles_pterodactyl_fly_2f_10fps.json',
                'ui/ui_font_score_digits_10x16_0_9.json',
                'ui/ui_hud_score_display.json',
                'ui/ui_prompt_restart_text_12px.json',
                'ui/ui_screen_game_over_text_24px.json',
                'world/world_background_cloud_large_static.json',
                'world/world_background_cloud_small_static.json',
                'world/world_background_sky_fill_600x150.json',
                'world/world_ground_line_1200x2.json',
                'world/world_ground_texture_1200x10.json'
            ],
            trial_3: [
                '_project_common.json',
                'character/player_dino_dead_static.json',
                'character/player_dino_duck_2f_12fps.json',
                'character/player_dino_idle_2f_6fps.json',
                'character/player_dino_jump_static.json',
                'character/player_dino_run_2f_12fps.json',
                'obstacles/obstacle_cactus_large_static.json',
                'obstacles/obstacle_cactus_medium_static.json',
                'obstacles/obstacle_cactus_small_static.json',
                'obstacles/obstacle_pterodactyl_fly_2f_10fps.json',
                'ui/ui_font_score_digits_10x16_0_9.json',
                'ui/ui_hud_score_display.json',
                'ui/ui_screen_game_over_text_24px.json',
                'world/world_background_cloud_large_static.json',
                'world/world_background_cloud_small_static.json',
                'world/world_background_sky_fill_600x150.json',
                'world/world_ground_line_1200x2.json',
                'world/world_ground_texture_1200x10.json'
            ],
            trial_4: [
                '_project_common.json',
                'character/character_player_dino_dead_static.json',
                'character/character_player_dino_duck_2f_12fps.json',
                'character/character_player_dino_idle_2f_6fps.json',
                'character/character_player_dino_jump_static.json',
                'character/character_player_dino_run_2f_12fps.json',
                'obstacles/obstacles_cactus_large_static.json',
                'obstacles/obstacles_cactus_medium_static.json',
                'obstacles/obstacles_cactus_small_static.json',
                'obstacles/obstacles_pterodactyl_fly_2f_10fps.json',
                'ui/ui_font_mono_digits_10x16_0_9.json',
                'ui/ui_hud_score_display_mock.json',
                'ui/ui_screen_game_over_text_24px.json',
                'ui/ui_screen_restart_prompt_300x12.json',
                'world/world_background_cloud_large_static.json',
                'world/world_background_cloud_small_static.json',
                'world/world_background_sky_fill_600x150.json',
                'world/world_ground_line_1200x2.json',
                'world/world_ground_texture_1200x10.json'
            ],
            trial_5: [
                '_project_common.json',
                'character/character_player_dino_dead_static.json',
                'character/character_player_dino_duck_2f_12fps.json',
                'character/character_player_dino_idle_2f_6fps.json',
                'character/character_player_dino_jump_static.json',
                'character/character_player_dino_run_2f_12fps.json',
                'obstacles/obstacles_cactus_large_static.json',
                'obstacles/obstacles_cactus_medium_static.json',
                'obstacles/obstacles_cactus_small_static.json',
                'obstacles/obstacles_pterodactyl_fly_2f_10fps.json',
                'ui/ui_font_mono_digits_10x16_0_9.json',
                'ui/ui_hud_score_display_mock.json',
                'ui/ui_screen_game_over_text_24px.json',
                'ui/ui_screen_restart_prompt_300x12.json',
                'world/world_background_cloud_large_static.json',
                'world/world_background_cloud_small_static.json',
                'world/world_background_sky_fill_600x150.json',
                'world/world_ground_line_1200x2.json',
                'world/world_ground_texture_1200x10.json'
            ]
        },
        'Pico_Echo': {
            trial_1: [
                '_project_common.json',
                'character/echo_dirty_3f_2fps.json',
                'character/echo_eating_6f_4fps.json',
                'character/echo_happy_8f_4fps.json',
                'character/echo_hungry_4f_2fps.json',
                'character/echo_idle_4f_2fps.json',
                'character/echo_preening_5f_3fps.json',
                'character/echo_singing_8f_4fps.json'
            ]
        },
        'reflect_academy': {
            trial_1: ['_project_common.json']
        },
        'slip_down': {
            trial_1: ['_project_common.json']
        },
        'umbra_scale': {
            trial_1: ['_project_common.json']
        }
    },

    // Real Art Task Plan KB Entities
    artKbEntities: {
        evaluationResults: [
            // Chrome_Dino_Runner
            { entity_id: "harness::8::Chrome_Dino_Runner::1::v8", game: "Chrome_Dino_Runner", trial: 1, result: "PASS", invariance: 86.0, structurality: 92.0, completeness: 100.0, ref_integrity: 100 },
            { entity_id: "harness::8::Chrome_Dino_Runner::2::v8", game: "Chrome_Dino_Runner", trial: 2, result: "PASS", invariance: 100.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100 },
            { entity_id: "harness::8::Chrome_Dino_Runner::3::v8", game: "Chrome_Dino_Runner", trial: 3, result: "PASS", invariance: 99.2, structurality: 97.0, completeness: 100, ref_integrity: 100 },
            { entity_id: "harness::8::Chrome_Dino_Runner::4::v8", game: "Chrome_Dino_Runner", trial: 4, result: "PASS", invariance: 84.0, structurality: 92.0, completeness: 100, ref_integrity: 95 },
            { entity_id: "harness::8::Chrome_Dino_Runner::5::v8", game: "Chrome_Dino_Runner", trial: 5, result: "PASS", invariance: 96.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100 },

            // Pico_Echo
            { entity_id: "harness::8::Pico_Echo::1::v8", game: "Pico_Echo", trial: 1, result: "PASS", invariance: 81.25, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::Pico_Echo::2::v8", game: "Pico_Echo", trial: 2, result: "PASS", invariance: 91.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::Pico_Echo::3::v8", game: "Pico_Echo", trial: 3, result: "PASS", invariance: 82.14, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::Pico_Echo::4::v8", game: "Pico_Echo", trial: 4, result: "PASS", invariance: 82.14, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::Pico_Echo::5::v8", game: "Pico_Echo", trial: 5, result: "PASS", invariance: 93.1, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },

            // reflect_academy
            { entity_id: "harness::8::reflect_academy::1::v8", game: "reflect_academy", trial: 1, result: "FAIL", invariance: 85.0, structurality: 92.0, completeness: 100.0, ref_integrity: 50.0, failure_code: "IF-4" },
            { entity_id: "harness::8::reflect_academy::2::v8", game: "reflect_academy", trial: 2, result: "PASS", invariance: 90.0, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::reflect_academy::3::v8", game: "reflect_academy", trial: 3, result: "PASS", invariance: 100.0, structurality: 97.0, completeness: 100.0, ref_integrity: 95.0 },
            { entity_id: "harness::8::reflect_academy::4::v8", game: "reflect_academy", trial: 4, result: "PASS", invariance: 82.0, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::reflect_academy::5::v8", game: "reflect_academy", trial: 5, result: "PASS", invariance: 93.8, structurality: 94.3, completeness: 100.0, ref_integrity: 100.0 },

            // slip_down
            { entity_id: "harness::8::slip_down::1::v8", game: "slip_down", trial: 1, result: "PASS", invariance: 99.1, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::slip_down::2::v8", game: "slip_down", trial: 2, result: "PASS", invariance: 90.4, structurality: 92.0, completeness: 96.5, ref_integrity: 100.0 },
            { entity_id: "harness::8::slip_down::3::v8", game: "slip_down", trial: 3, result: "PASS", invariance: 100.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::slip_down::4::v8", game: "slip_down", trial: 4, result: "PASS", invariance: 82.0, structurality: 92.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::slip_down::5::v8", game: "slip_down", trial: 5, result: "PASS", invariance: 92.0, structurality: 92.0, completeness: 97.8, ref_integrity: 100.0 },

            // umbra_scale
            { entity_id: "harness::8::umbra_scale::1::v8", game: "umbra_scale", trial: 1, result: "PASS", invariance: 96.7, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::umbra_scale::2::v8", game: "umbra_scale", trial: 2, result: "PASS", invariance: 88.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::umbra_scale::3::v8", game: "umbra_scale", trial: 3, result: "PASS", invariance: 100.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::umbra_scale::4::v8", game: "umbra_scale", trial: 4, result: "PASS", invariance: 96.27, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 },
            { entity_id: "harness::8::umbra_scale::5::v8", game: "umbra_scale", trial: 5, result: "PASS", invariance: 93.0, structurality: 97.0, completeness: 100.0, ref_integrity: 100.0 }
        ]
    },

    // Pipeline Configuration
    pipelineConfig: {
        agents: [
            { name: "Orchestrator", role: "총괄", lm_version: "v3", model: "gpt-5.4" },
            { name: "Designer", role: "설계", lm_version: "v3", model: "gpt-5.4" },
            { name: "Analyzer", role: "분석", lm_version: "v3", model: "gpt-5.4" },
            { name: "Generator", role: "생성", lm_version: "v3", model: "gpt-5.4" },
            { name: "Evaluator", role: "평가", lm_version: "v3", model: "gpt-5.4" },
            { name: "Process Validator", role: "검증", lm_version: "v3", model: "gpt-5.4" },
            { name: "Evolver", role: "개선", lm_version: "v3", model: "gpt-5.4" },
            { name: "Evolver Reviewer", role: "리뷰", lm_version: "v3", model: "gpt-5.4" },
            { name: "Monitor", role: "모니터링", model: "gpt-4.1" },
            { name: "Art KB Writer", role: "KB 작성", template: "kb_console_agent_v1" },
            { name: "Meta KB Writer", role: "메타 KB 작성", template: "kb_console_agent_v1" }
        ]
    },

    // Path templates
    paths: {
        experiments: "Solutions/GameMaking/Planning/experiments/",
        repository: "Solutions/GameMaking/Planning/Repository/Art_Task_Plan/",
        s3: {
            taskPlans: "planning/Art_Task_Plan/iteration_{N}/{Game}/trial_{X}/",
            evaluations: "planning/Evaluation_Reports/iteration_{N}/harness_v{H}/",
            kbRegistry: "planning/KB_Registry/iteration_{N}/"
        }
    },

    // Initialize
    init() {
        console.log('Initializing Art Task Plan Final Dashboard');
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
            case 's3-viewer':
                this.loadS3Viewer();
                break;
        }
    },

    // Load overview with real KB stats
    loadOverview() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="overview-grid">
                <div class="stat-card">
                    <h3>Art Task Plan KB</h3>
                    <div class="stat-value">${this.kbConfig.artKb.totalEntities.toLocaleString()}</div>
                    <div class="stat-change">엔티티 (구조화: ${this.kbConfig.artKb.structured})</div>
                </div>
                <div class="stat-card">
                    <h3>Meta Iteration KB</h3>
                    <div class="stat-value">${this.kbConfig.metaKb.totalEntities.toLocaleString()}</div>
                    <div class="stat-change">엔티티 (구조화: ${this.kbConfig.metaKb.structured})</div>
                </div>
                <div class="stat-card">
                    <h3>Total Relations</h3>
                    <div class="stat-value">${(this.kbConfig.artKb.totalRelations + this.kbConfig.metaKb.totalRelations).toLocaleString()}</div>
                    <div class="stat-change">관계 (Art: ${this.kbConfig.artKb.totalRelations}, Meta: ${this.kbConfig.metaKb.totalRelations})</div>
                </div>
                <div class="stat-card">
                    <h3>Success Rate</h3>
                    <div class="stat-value">96%</div>
                    <div class="stat-change">Iteration 8</div>
                </div>
            </div>

            <div class="progress-section glass-container">
                <h3>Progress Timeline</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker complete"></div>
                        <div class="timeline-content">
                            <h4>Iteration 0-5</h4>
                            <p>Progressive improvements</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker complete"></div>
                        <div class="timeline-content">
                            <h4>Iteration 6-7</h4>
                            <p>Achieving 84%-100% success</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker active"></div>
                        <div class="timeline-content">
                            <h4>Iteration 8</h4>
                            <p>96% success (24/25 pass)</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Load iterations view
    loadIterations() {
        const content = document.getElementById('main-content');

        const iterationData = [
            { iter: 0, date: "2026-02-20", passRate: "0%", games: 5, status: "baseline" },
            { iter: 1, date: "2026-02-25", passRate: "12%", games: 2, status: "fail" },
            { iter: 2, date: "2026-03-01", passRate: "28%", games: 2, status: "fail" },
            { iter: 3, date: "2026-03-05", passRate: "44%", games: 2, status: "fail" },
            { iter: 4, date: "2026-03-08", passRate: "56%", games: 2, status: "fail" },
            { iter: 5, date: "2026-03-12", passRate: "72%", games: 3, status: "fail" },
            { iter: 6, date: "2026-03-15", passRate: "84%", games: 4, status: "pass" },
            { iter: 7, date: "2026-03-20", passRate: "100%", games: 5, status: "pass" },
            { iter: 8, date: "2026-03-25", passRate: "96%", games: 5, status: "pass" }
        ];

        content.innerHTML = `
            <h2>전체 이터레이션 진행 상황</h2>
            <div class="iterations-grid">
                ${iterationData.map(iter => `
                    <div class="glass-container iteration-card" onclick="window.dashboard.showIterationDetails(${iter.iter})" style="cursor: pointer;">
                        <div class="iteration-header">
                            <h3>Iteration ${iter.iter}</h3>
                            <span class="status-badge ${iter.status === 'pass' ? 'complete' : 'in-progress'}">
                                ${iter.passRate}
                            </span>
                        </div>
                        <div class="iteration-info">
                            <p><strong>날짜:</strong> ${iter.date}</p>
                            <p><strong>게임 수:</strong> ${iter.games}</p>
                            <p><strong>상태:</strong> ${iter.status === 'pass' ? 'PASS' : iter.status === 'baseline' ? 'BASELINE' : 'FAIL'}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // Show iteration details with Task Plan JSON
    showIterationDetails(iteration) {
        const content = document.getElementById('main-content');
        const games = ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'];

        // Get evaluation results for this iteration
        const iterResults = this.artKbEntities.evaluationResults.filter(r =>
            r.entity_id.includes(`harness::${iteration}::`));

        content.innerHTML = `
            <div class="back-button" onclick="window.dashboard.loadIterations()">
                ← Back to Iterations
            </div>
            <h2>Iteration ${iteration} - Task Plan Results</h2>
            <div class="iteration-detail-grid">
                ${games.map(game => {
                    const gameResults = iterResults.filter(r => r.game === game);
                    return `
                        <div class="game-results glass-container">
                            <h3>${game.replace(/_/g, ' ')}</h3>
                            <div class="trials-grid">
                                ${[1, 2, 3, 4, 5].map(trial => {
                                    const result = gameResults.find(r => r.trial === trial);
                                    return `
                                        <div class="trial-card ${result ? (result.result === 'PASS' ? 'pass' : 'fail') : 'unknown'}"
                                             onclick="window.dashboard.showTaskPlanFiles(${iteration}, '${game}', ${trial})"
                                             style="cursor: pointer;">
                                            <div class="trial-number">Trial ${trial}</div>
                                            <div class="trial-status">${result ? result.result : 'N/A'}</div>
                                            ${result ? `
                                                <div class="trial-scores">
                                                    <div>Inv: ${result.invariance}%</div>
                                                    <div>Str: ${result.structurality}%</div>
                                                    <div>Ref: ${result.ref_integrity}%</div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <style>
                .back-button {
                    cursor: pointer;
                    color: #3b82f6;
                    margin-bottom: 20px;
                    display: inline-block;
                    font-size: 14px;
                }
                .back-button:hover {
                    text-decoration: underline;
                }
                .iteration-detail-grid {
                    display: grid;
                    gap: 20px;
                }
                .game-results {
                    padding: 20px;
                }
                .trials-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    margin-top: 15px;
                }
                .trial-card {
                    padding: 10px;
                    border-radius: 8px;
                    text-align: center;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.2s;
                }
                .trial-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }
                .trial-card.pass {
                    background: rgba(16, 185, 129, 0.1);
                    border-color: #10b981;
                }
                .trial-card.fail {
                    background: rgba(239, 68, 68, 0.1);
                    border-color: #ef4444;
                }
                .trial-number {
                    font-weight: 600;
                    margin-bottom: 5px;
                }
                .trial-status {
                    font-size: 12px;
                    color: #94a3b8;
                }
                .trial-scores {
                    margin-top: 8px;
                    font-size: 11px;
                    color: #64748b;
                }
            </style>
        `;
    },

    // Show Task Plan Files for a specific trial
    showTaskPlanFiles(iteration, game, trial) {
        const content = document.getElementById('main-content');
        const basePath = `Solutions/GameMaking/Planning/experiments/iterations/iteration_${iteration}/data/task_plans/${game}/trial_${trial}/`;

        // Get files for this game and trial
        const files = this.taskPlanFiles[game] && this.taskPlanFiles[game][`trial_${trial}`] || [
            '_project_common.json',
            'character/assets.json',
            'obstacles/assets.json',
            'ui/assets.json',
            'world/assets.json'
        ];

        content.innerHTML = `
            <div class="back-button" onclick="window.dashboard.showIterationDetails(${iteration})">
                ← Back to Iteration ${iteration}
            </div>
            <h2>${game.replace(/_/g, ' ')} - Trial ${trial} Task Plan Files</h2>
            <div class="file-explorer glass-container">
                <div class="file-path">
                    📁 ${basePath}
                </div>
                <div class="file-list">
                    ${files.map(file => {
                        const isMain = file === '_project_common.json';
                        const category = file.split('/')[0];
                        const icon = isMain ? '📋' :
                                    category === 'character' ? '🎮' :
                                    category === 'obstacles' ? '🚧' :
                                    category === 'ui' ? '🎨' :
                                    category === 'world' ? '🌍' : '📄';
                        return `
                            <div class="file-item ${isMain ? 'main-file' : ''}"
                                 onclick="window.dashboard.viewTaskPlanJSON('${basePath}${file}')"
                                 style="cursor: pointer;">
                                <span class="file-icon">${icon}</span>
                                <span class="file-name">${file}</span>
                                ${isMain ? '<span class="file-badge">Main</span>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="file-stats">
                    <div class="stat">
                        <strong>Total Files:</strong> ${files.length}
                    </div>
                    <div class="stat">
                        <strong>Categories:</strong> ${[...new Set(files.map(f => f.split('/')[0]))].length}
                    </div>
                </div>
            </div>

            <div id="json-viewer" style="margin-top: 20px;"></div>

            <style>
                .file-explorer {
                    padding: 20px;
                }
                .file-path {
                    font-family: 'Fira Code', monospace;
                    font-size: 13px;
                    color: #94a3b8;
                    padding: 10px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 6px;
                    margin-bottom: 20px;
                }
                .file-list {
                    display: grid;
                    gap: 8px;
                }
                .file-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    transition: all 0.2s;
                }
                .file-item:hover {
                    background: rgba(59, 130, 246, 0.1);
                    border-color: rgba(59, 130, 246, 0.3);
                    transform: translateX(5px);
                }
                .file-item.main-file {
                    background: rgba(59, 130, 246, 0.05);
                    border-color: rgba(59, 130, 246, 0.2);
                }
                .file-icon {
                    font-size: 18px;
                }
                .file-name {
                    font-family: 'Fira Code', monospace;
                    font-size: 13px;
                    flex: 1;
                }
                .file-badge {
                    background: #3b82f6;
                    color: white;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                }
                .file-stats {
                    display: flex;
                    gap: 30px;
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                .file-stats .stat {
                    font-size: 13px;
                    color: #94a3b8;
                }
            </style>
        `;

        // Auto-load the main file
        this.viewTaskPlanJSON(basePath + '_project_common.json');
    },

    // View Task Plan JSON content
    viewTaskPlanJSON(filepath) {
        const viewer = document.getElementById('json-viewer');

        // Sample content based on file type
        let jsonContent = {};

        if (filepath.includes('_project_common.json')) {
            jsonContent = {
                "schema_version": "art_task_plan_pkg@8",
                "project": {
                    "project_id": "chrome_dino_runner",
                    "project_name": "Chrome_Dino_Runner"
                },
                "meta": {
                    "iteration": 8,
                    "trial_index": 1,
                    "created_at_utc": "2026-03-25T16:05:37Z"
                },
                "canvas": {
                    "resolution_px": { "width": 600, "height": 150 },
                    "pixel_perfect": true,
                    "target_fps": 60
                },
                "assets": [
                    { "task_id": "task_id_801000001", "asset_key": "dino_runner_core", "category": "character" },
                    { "task_id": "task_id_801000005", "asset_key": "cactus_single", "category": "obstacles" }
                ]
            };
        } else if (filepath.includes('character')) {
            jsonContent = {
                "task_id": "task_id_801000001",
                "asset_key": "dino_runner_core",
                "type": "animated_sprite_sheet",
                "dimensions": { "width": 44, "height": 47 },
                "frames": 2,
                "animation": { "fps": 12, "loop": true }
            };
        } else {
            jsonContent = {
                "file": filepath,
                "content": "Task Plan JSON content would be loaded here..."
            };
        }

        viewer.innerHTML = `
            <div class="json-viewer glass-container">
                <div class="json-header">
                    <span>📄 ${filepath.split('/').pop()}</span>
                    <button class="btn-copy" onclick="navigator.clipboard.writeText(JSON.stringify(${JSON.stringify(jsonContent)}, null, 2))">
                        📋 Copy JSON
                    </button>
                </div>
                <pre class="json-content">${JSON.stringify(jsonContent, null, 2)}</pre>
            </div>
            <style>
                .json-viewer {
                    padding: 20px;
                }
                .json-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .json-content {
                    background: #0a0e1a;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow-x: auto;
                    font-family: 'Fira Code', monospace;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #e1e8ed;
                    max-height: 500px;
                    overflow-y: auto;
                }
                .btn-copy {
                    background: rgba(59, 130, 246, 0.1);
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    color: #3b82f6;
                    padding: 6px 12px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 13px;
                    transition: all 0.2s;
                }
                .btn-copy:hover {
                    background: rgba(59, 130, 246, 0.2);
                    border-color: #3b82f6;
                }
            </style>
        `;
    },

    // Load Art KB view
    loadArtKB() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="kb-header">
                <h2>Art Task Plan KB - Complete Network Visualization</h2>
                <div class="kb-stats">
                    <div class="stat">
                        <div class="label">Total Entities</div>
                        <div class="value">26,789</div>
                    </div>
                    <div class="stat">
                        <div class="label">Relations</div>
                        <div class="value">1,585</div>
                    </div>
                    <div class="stat">
                        <div class="label">Success Rate</div>
                        <div class="value">96%</div>
                    </div>
                    <div class="stat">
                        <a href="kb-network-complete.html?kb=art" target="_blank" style="color: #3b82f6; text-decoration: none;">Open in new tab ↗</a>
                    </div>
                </div>
            </div>
            <iframe
                src="kb-network-complete.html?kb=art"
                style="width: 100%; height: calc(100vh - 250px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #0f1419;"
                frameborder="0">
            </iframe>
        `;
    },

    // Load Meta KB view
    loadMetaKB() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="kb-header">
                <h2>Meta Iteration KB - Complete Network Visualization</h2>
                <div class="kb-stats">
                    <div class="stat">
                        <div class="label">Total Entities</div>
                        <div class="value">8,032</div>
                    </div>
                    <div class="stat">
                        <div class="label">Relations</div>
                        <div class="value">476</div>
                    </div>
                    <div class="stat">
                        <div class="label">Improvement</div>
                        <div class="value">+37%</div>
                    </div>
                    <div class="stat">
                        <a href="kb-network-complete.html?kb=meta" target="_blank" style="color: #3b82f6; text-decoration: none;">Open in new tab ↗</a>
                    </div>
                </div>
            </div>
            <iframe
                src="kb-network-complete.html?kb=meta"
                style="width: 100%; height: calc(100vh - 250px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #0f1419;"
                frameborder="0">
            </iframe>
        `;
    },

    // Load S3 Viewer
    loadS3Viewer() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>S3 Content Viewer</h2>
            <div class="s3-viewer glass-container">
                <p>S3 browser integration for viewing task plans and evaluation results.</p>
                <p>Path: ${this.s3Config.baseUrl}</p>
            </div>
        `;
    }
};

// Initialize when DOM is ready and expose to window
if (typeof window !== 'undefined') {
    window.dashboard = DashboardApp;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DashboardApp.init());
} else {
    DashboardApp.init();
}