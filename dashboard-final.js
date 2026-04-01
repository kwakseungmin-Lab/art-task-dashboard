// Art Task Plan Pipeline Dashboard - Complete Implementation
const Dashboard = {
    currentView: 'iterations',

    // Initialize dashboard
    init() {
        this.setupEventListeners();
        this.loadIterationsView();
    },

    // Set up event listeners
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            // Navigation items
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                });
            });
        });
    },

    // Load iterations view (main dashboard)
    loadIterationsView() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="overview-container">
                <div class="left-section">
                    <div class="iterations-grid">
                        ${this.generateIterationCards()}
                    </div>
                    <div class="pipeline-overview">
                        <h3>Pipeline Architecture</h3>
                        <div class="pipeline-diagram">
                            <div class="agent-flow">
                                <span class="agent-node">Orchestrator</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Designer</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Analyzer(E)</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Generator</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Evaluator</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Analyzer(L)</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Process Validator</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Evolver</span>
                                <span class="flow-arrow">→</span>
                                <span class="agent-node">Evolver Reviewer</span>
                            </div>
                            <div class="kb-writers">
                                <span class="kb-node">Art KB Writer</span>
                                <span class="kb-node">Meta KB Writer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="kb-panel">
                        <h3 style="color: #3b82f6; font-size: 20px; margin-bottom: 15px;">🗄️ Art Task Plan KB (26,789 entities)</h3>
                        <iframe src="kb-network-complete.html?kb=art" frameborder="0" style="width: 100%; height: calc(50vh - 80px); min-height: 450px; border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.4);"></iframe>
                    </div>
                    <div class="kb-panel">
                        <h3 style="color: #10b981; font-size: 20px; margin-bottom: 15px;">🔄 Meta Iteration KB (8,032 entities)</h3>
                        <iframe src="kb-network-complete.html?kb=meta" frameborder="0" style="width: 100%; height: calc(50vh - 80px); min-height: 450px; border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.4);"></iframe>
                    </div>
                </div>
            </div>
            <style>
                .overview-container {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    gap: 20px;
                    height: calc(100vh - 100px);
                    padding: 15px;
                }
                .left-section {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    overflow-y: auto;
                }
                .right-section {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    overflow-y: auto;
                    padding-right: 10px;
                }
                .kb-panel {
                    background: rgba(15, 20, 25, 0.8);
                    border: 2px solid rgba(59, 130, 246, 0.2);
                    border-radius: 10px;
                    padding: 15px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s;
                }
                .kb-panel:hover {
                    border-color: rgba(59, 130, 246, 0.5);
                    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.1);
                }
                .kb-panel h3 {
                    margin: 0 0 12px 0;
                    font-weight: 600;
                }
            </style>
        `;
    },

    // Generate iteration cards with complete information
    generateIterationCards() {
        const iterations = [
            { num: 0, pass: 0, status: 'FAIL', games: 0, date: '2026-03-20' },
            { num: 1, pass: 12, status: 'FAIL', games: 5, date: '2026-03-21' },
            { num: 2, pass: 28, status: 'FAIL', games: 5, date: '2026-03-22' },
            { num: 3, pass: 44, status: 'FAIL', games: 5, date: '2026-03-23' },
            { num: 4, pass: 56, status: 'FAIL', games: 5, date: '2026-03-24' },
            { num: 5, pass: 72, status: 'FAIL', games: 5, date: '2026-03-24' },
            { num: 6, pass: 84, status: 'PASS', games: 5, date: '2026-03-25' },
            { num: 7, pass: 100, status: 'PASS', games: 5, date: '2026-03-25' },
            { num: 8, pass: 96, status: 'PASS', games: 5, date: '2026-03-25', hasIssue: true }
        ];

        return iterations.map(iter => `
            <div class="iteration-card ${iter.status.toLowerCase()} ${iter.hasIssue ? 'has-issue' : ''}"
                 onclick="window.dashboard.showIterationDetails(${iter.num})"
                 style="cursor: pointer;">
                <div class="iteration-header">
                    <h3>Iteration ${iter.num}</h3>
                    <span class="status-badge ${iter.status.toLowerCase()}">${iter.status}</span>
                </div>
                <div class="iteration-stats">
                    <div class="stat">
                        <span class="label">Pass Rate</span>
                        <span class="value">${iter.pass}%</span>
                    </div>
                    <div class="stat">
                        <span class="label">Games</span>
                        <span class="value">${iter.games}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Date</span>
                        <span class="value">${iter.date}</span>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${iter.pass}%"></div>
                </div>
                ${iter.hasIssue ? '<div class="issue-note">reflect_academy trial_1 failed</div>' : ''}
            </div>
        `).join('');
    },

    // Show iteration details
    showIterationDetails(iterationNum) {
        const content = document.getElementById('main-content');

        // Define games and trials
        const games = [
            'Chrome_Dino_Runner',
            'Pico_Echo',
            'reflect_academy',
            'slip_down',
            'umbra_scale'
        ];

        const trials = [1, 2, 3, 4, 5];

        content.innerHTML = `
            <div class="iteration-detail-header">
                <button class="btn-back" onclick="window.dashboard.loadIterationsView()">← Back to Iterations</button>
                <h2>Iteration ${iterationNum} - Detailed Results</h2>
            </div>

            <div class="games-grid">
                ${games.map(game => `
                    <div class="game-card">
                        <h3>${game.replace(/_/g, ' ')}</h3>
                        <div class="trials-list">
                            ${trials.map(trial => {
                                const status = (iterationNum === 8 && game === 'reflect_academy' && trial === 1) ? 'FAIL' : 'PASS';
                                return `
                                    <div class="trial-item ${status.toLowerCase()}">
                                        <span>Trial ${trial}</span>
                                        <span class="trial-status">${status}</span>
                                        <button class="btn-view-json"
                                                onclick="window.dashboard.showTaskPlanFiles(${iterationNum}, '${game}', ${trial})">
                                            View Task Plans
                                        </button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="iteration-stats-detail">
                <div class="stat-card">
                    <h4>Overall Pass Rate</h4>
                    <div class="big-number">${iterationNum === 8 ? '96' : iterationNum === 7 ? '100' : iterationNum === 6 ? '84' : '0'}%</div>
                </div>
                <div class="stat-card">
                    <h4>Total Trials</h4>
                    <div class="big-number">25</div>
                </div>
                <div class="stat-card">
                    <h4>Passed Trials</h4>
                    <div class="big-number">${iterationNum === 8 ? '24' : iterationNum === 7 ? '25' : iterationNum === 6 ? '21' : '0'}</div>
                </div>
                <div class="stat-card">
                    <h4>Failed Trials</h4>
                    <div class="big-number">${iterationNum === 8 ? '1' : '0'}</div>
                </div>
            </div>
        `;
    },

    // Show Task Plan files for a specific trial
    showTaskPlanFiles(iterationNum, gameName, trialNum) {
        const content = document.getElementById('main-content');

        // Define the base path for this trial
        const basePath = `Solutions/GameMaking/Planning/experiments/iterations/iteration_${iterationNum}/data/task_plans/${gameName}/trial_${trialNum}/`;

        // Define all possible files for a trial
        const files = [
            '_project_common.json',
            'character/dino_runner_core.json',
            'character/dino_low_profile.json',
            'obstacles/cactus_single.json',
            'obstacles/cactus_pair_cluster.json',
            'obstacles/cactus_triplet_cluster.json',
            'obstacles/pterodactyl_flap_sheet.json',
            'world/sky_day_field.json',
            'world/cloud_pass_small.json',
            'world/ground_runner_strip.json',
            'world/ground_pebble_overlay.json',
            'ui/game_over_message.json',
            'ui/restart_hint_label.json',
            'ui/score_digits_font.json',
            'ui/score_rack_panel.json'
        ];

        content.innerHTML = `
            <div class="task-plan-header">
                <button class="btn-back" onclick="window.dashboard.showIterationDetails(${iterationNum})">← Back to Iteration ${iterationNum}</button>
                <h2>${gameName.replace(/_/g, ' ')} - Trial ${trialNum} Task Plans</h2>
                <div class="path-info">Path: ${basePath}</div>
            </div>

            <div class="task-plan-container">
                <div class="file-selector">
                    <h3>Select JSON File:</h3>
                    <select id="file-dropdown" onchange="window.dashboard.viewTaskPlanJSON('${basePath}' + this.value)" style="width: 100%; padding: 8px; background: #1a1f2e; color: #e1e8ed; border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 6px;">
                        <option value="_project_common.json">📄 _project_common.json (Main)</option>
                        <option value="character/dino_runner_core.json">🦖 character/dino_runner_core.json</option>
                        <option value="character/dino_low_profile.json">🦖 character/dino_low_profile.json</option>
                        <option value="obstacles/cactus_single.json">🚧 obstacles/cactus_single.json</option>
                        <option value="obstacles/cactus_pair_cluster.json">🚧 obstacles/cactus_pair_cluster.json</option>
                        <option value="obstacles/cactus_triplet_cluster.json">🚧 obstacles/cactus_triplet_cluster.json</option>
                        <option value="obstacles/pterodactyl_flap_sheet.json">🚧 obstacles/pterodactyl_flap_sheet.json</option>
                        <option value="world/sky_day_field.json">🌍 world/sky_day_field.json</option>
                        <option value="world/cloud_pass_small.json">🌍 world/cloud_pass_small.json</option>
                        <option value="world/ground_runner_strip.json">🌍 world/ground_runner_strip.json</option>
                        <option value="world/ground_pebble_overlay.json">🌍 world/ground_pebble_overlay.json</option>
                        <option value="ui/game_over_message.json">🎨 ui/game_over_message.json</option>
                        <option value="ui/restart_hint_label.json">🎨 ui/restart_hint_label.json</option>
                        <option value="ui/score_digits_font.json">🎨 ui/score_digits_font.json</option>
                        <option value="ui/score_rack_panel.json">🎨 ui/score_rack_panel.json</option>
                    </select>
                </div>

                <div id="json-viewer" class="json-viewer-centered">
                    <div class="viewer-placeholder">
                        <p>Select a file above to view its complete JSON content</p>
                    </div>
                </div>
            </div>

            <style>
                .task-plan-header {
                    margin-bottom: 30px;
                }
                .path-info {
                    font-family: monospace;
                    color: #8b92a9;
                    margin-top: 10px;
                    padding: 10px;
                    background: rgba(59, 130, 246, 0.05);
                    border-radius: 6px;
                    font-size: 12px;
                }
                .task-plan-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    height: calc(100vh - 100px);
                    padding: 20px;
                }
                .file-browser {
                    background: rgba(15, 20, 25, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 10px;
                    overflow-y: auto;
                    font-size: 11px;
                }
                .file-browser h3 {
                    margin: 0 0 10px 0;
                    color: #e1e8ed;
                    font-size: 14px;
                }
                .file-item {
                    display: flex;
                    align-items: center;
                    padding: 6px 8px;
                    margin-bottom: 3px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid transparent;
                    border-radius: 4px;
                    transition: all 0.2s;
                    cursor: pointer;
                }
                .file-item:hover {
                    background: rgba(59, 130, 246, 0.1);
                    border-color: rgba(59, 130, 246, 0.3);
                }
                .file-item.active {
                    background: rgba(59, 130, 246, 0.2);
                    border-color: #3b82f6;
                }
                .file-item.main-file {
                    background: rgba(16, 185, 129, 0.1);
                    border-color: rgba(16, 185, 129, 0.3);
                }
                .file-icon {
                    margin-right: 8px;
                    font-size: 14px;
                }
                .file-name {
                    flex: 1;
                    font-family: monospace;
                    font-size: 11px;
                    color: #e1e8ed;
                }
                .file-badge {
                    background: #10b981;
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 10px;
                    text-transform: uppercase;
                }
                .file-selector {
                    width: 100%;
                    max-width: 800px;
                    background: rgba(15, 20, 25, 0.8);
                    padding: 15px;
                    border-radius: 8px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                }
                .file-selector h3 {
                    margin: 0 0 10px 0;
                    color: #3b82f6;
                    font-size: 16px;
                }
                .json-viewer-centered {
                    background: rgba(15, 20, 25, 0.95);
                    border: 2px solid rgba(59, 130, 246, 0.4);
                    border-radius: 10px;
                    padding: 30px;
                    overflow-y: auto;
                    position: relative;
                    width: 90%;
                    max-width: 1400px;
                    height: calc(100vh - 250px);
                    min-height: 600px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                    margin: 0 auto;
                }
                .viewer-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: #8b92a9;
                    font-size: 16px;
                }
                .file-stats {
                    background: rgba(15, 20, 25, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 15px 20px;
                    margin-top: 20px;
                    display: flex;
                    gap: 30px;
                }
                .file-stats .stat {
                    color: #8b92a9;
                    font-size: 13px;
                }
                .file-stats .stat strong {
                    color: #e1e8ed;
                }
            </style>
        `;

        // Auto-load the main file
        this.viewTaskPlanJSON(basePath + '_project_common.json');
    },

    // View Task Plan JSON content - COMPLETE FILE
    viewTaskPlanJSON(filepath) {
        const viewer = document.getElementById('json-viewer') || document.querySelector('.json-viewer-centered');
        const filename = filepath.split('/').pop();

        console.log('viewTaskPlanJSON called with:', filepath, 'filename:', filename);

        // Load actual complete JSON content
        let jsonContent;

        // Use ActualJSONLoader if available
        if (typeof ActualJSONLoader !== 'undefined') {
            jsonContent = ActualJSONLoader.getJSON(filename);
            console.log('Loaded JSON from ActualJSONLoader:', jsonContent);
        } else {
            // Fallback if ActualJSONLoader not available
            jsonContent = {
                "error": "ActualJSONLoader not found",
                "filename": filename,
                "message": "Please ensure actual-json-loader.js is loaded"
            };
        }

        // Display the JSON with syntax highlighting
        const jsonString = JSON.stringify(jsonContent, null, 2);
        const highlightedJson = jsonString
            .replace(/(".*?":\s*".*?")/g, '<span style="color: #a5d6ff;">$1</span>')
            .replace(/(".*?":\s*)(\d+)/g, '$1<span style="color: #79c0ff;">$2</span>')
            .replace(/(".*?":\s*)(true|false)/g, '$1<span style="color: #ff7b72;">$2</span>')
            .replace(/(".*?":\s*)(null)/g, '$1<span style="color: #8b949e;">$2</span>');

        viewer.innerHTML = `
            <div class="json-header">
                <h3 style="font-size: 20px; color: #3b82f6;">📄 ${filename}</h3>
                <button class="btn-copy" onclick="navigator.clipboard.writeText(JSON.stringify(${JSON.stringify(jsonContent)}, null, 2))">
                    📋 Copy JSON
                </button>
            </div>
            <pre class="json-content">${highlightedJson}</pre>
            ${this.getJsonViewerStyles()}
        `;

        // Highlight the active file
        document.querySelectorAll('.file-item').forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('.file-name').textContent === filename) {
                item.classList.add('active');
            }
        });
    },

    // Get JSON viewer styles
    getJsonViewerStyles() {
        return `
            <style>
                .json-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .json-header h3 {
                    margin: 0;
                    color: #e1e8ed;
                    font-family: monospace;
                    font-size: 16px;
                }
                .json-content {
                    background: #0a0e1a;
                    padding: 30px;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow-x: auto;
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 2;
                    color: #e1e8ed;
                    min-height: 600px;
                    max-height: calc(100vh - 200px);
                    overflow-y: auto;
                    white-space: pre;
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
            <div class="s3-viewer">
                <h2>S3 Bucket Explorer</h2>
                <div class="s3-info">
                    <p>📁 Bucket: art-task-plan-outputs</p>
                    <p>🔗 Region: us-west-2</p>
                    <p>📊 Total Objects: 2,456</p>
                </div>
                <div class="s3-tree">
                    <!-- S3 bucket structure would go here -->
                </div>
            </div>
        `;
    },

    // Load Unified View - 3 panels
    loadUnifiedView() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="unified-header">
                <h2>Unified Dashboard - Complete View</h2>
                <div class="layout-controls">
                    <button onclick="window.dashboard.changeLayout('horizontal')" class="layout-btn active">Horizontal</button>
                    <button onclick="window.dashboard.changeLayout('vertical')" class="layout-btn">Vertical</button>
                    <button onclick="window.dashboard.changeLayout('grid')" class="layout-btn">Grid</button>
                </div>
            </div>
            <div id="unified-container" class="unified-container horizontal">
                <div class="panel panel-main">
                    <div class="panel-header">Main Dashboard</div>
                    <iframe src="index.html" frameborder="0"></iframe>
                </div>
                <div class="panel panel-art">
                    <div class="panel-header">Art Task Plan KB</div>
                    <iframe src="kb-network-complete.html?kb=art" frameborder="0"></iframe>
                </div>
                <div class="panel panel-meta">
                    <div class="panel-header">Meta Iteration KB</div>
                    <iframe src="kb-network-complete.html?kb=meta" frameborder="0"></iframe>
                </div>
            </div>
            <style>
                .unified-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding: 15px;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 8px;
                }
                .layout-controls {
                    display: flex;
                    gap: 10px;
                }
                .layout-btn {
                    padding: 8px 16px;
                    background: rgba(59, 130, 246, 0.1);
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    color: #8b92a9;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .layout-btn.active,
                .layout-btn:hover {
                    background: rgba(59, 130, 246, 0.2);
                    color: #3b82f6;
                    border-color: #3b82f6;
                }
                .unified-container {
                    display: grid;
                    gap: 15px;
                    height: calc(100vh - 200px);
                }
                .unified-container.horizontal {
                    grid-template-columns: repeat(3, 1fr);
                }
                .unified-container.vertical {
                    grid-template-rows: repeat(3, 1fr);
                }
                .unified-container.grid {
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                }
                .unified-container.grid .panel-main {
                    grid-column: 1 / 3;
                }
                .panel {
                    background: rgba(15, 20, 25, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .panel-header {
                    padding: 10px 15px;
                    background: rgba(255, 255, 255, 0.05);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    font-weight: 600;
                    color: #e1e8ed;
                }
                .panel iframe {
                    flex: 1;
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        `;
    },

    // Change unified view layout
    changeLayout(layout) {
        const container = document.getElementById('unified-container');
        container.className = `unified-container ${layout}`;

        document.querySelectorAll('.layout-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Active state handled above
    }
};

// Make dashboard globally accessible
window.dashboard = Dashboard;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    Dashboard.init();
});