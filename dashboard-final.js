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
            { num: 8, pass: 96, status: 'PASS', games: 5, date: '2026-03-25', hasIssue: true },
            { num: 9, pass: 98, status: 'PASS', games: 5, date: '2026-04-02' }
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


        content.innerHTML = `
            <div class="task-plan-header">
                <button class="btn-back" onclick="window.dashboard.showIterationDetails(${iterationNum})">← Back to Iteration ${iterationNum}</button>
                <h2>${gameName.replace(/_/g, ' ')} - Trial ${trialNum} Task Plans</h2>
                <div class="path-info">Path: ${basePath}</div>
            </div>

            <div class="task-plan-container">
                <div class="file-selector">
                    <h3>Select JSON File (Iteration ${iterationNum} - ${gameName} - Trial ${trialNum}):</h3>
                    <select id="file-dropdown" onchange="window.dashboard.viewTaskPlanJSON(${iterationNum}, '${gameName}', ${trialNum}, this.value)" style="width: 100%; padding: 8px; background: #1a1f2e; color: #e1e8ed; border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 6px;">
                        ${this.generateFileOptions(gameName, iterationNum, trialNum)}
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
                    height: 400px;
                    color: #8b92a9;
                    font-size: 20px;
                }
            </style>
        `;

        // Auto-load the main file - clear any previous content first
        const viewer = document.getElementById('json-viewer');
        if (viewer) {
            viewer.innerHTML = `
                <div class="viewer-placeholder">
                    <p>Loading _project_common.json...</p>
                </div>
            `;
        }
        // Delay to ensure DOM is ready
        setTimeout(() => {
            this.viewTaskPlanJSON(iterationNum, gameName, trialNum, '_project_common.json');
        }, 100);
    },

    // View Task Plan JSON content - DYNAMIC LOADING
    async viewTaskPlanJSON(iterationNum, gameName, trialNum, filepath) {
        const viewer = document.getElementById('json-viewer') || document.querySelector('.json-viewer-centered');
        const filename = filepath.split('/').pop();

        console.log('viewTaskPlanJSON called:', iterationNum, gameName, trialNum, filepath);

        // Show loading state
        viewer.innerHTML = `
            <div class="loading-state">
                <div class="spinner"></div>
                <p>Loading ${filename} from iteration_${iterationNum}/${gameName}/trial_${trialNum}...</p>
            </div>
            <style>
                .loading-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 400px;
                    color: #8b92a9;
                }
                .spinner {
                    border: 3px solid rgba(59, 130, 246, 0.1);
                    border-radius: 50%;
                    border-top: 3px solid #3b82f6;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;

        let jsonContent;

        // Try LocalJSONLoader first (local repository data)
        if (typeof LocalJSONLoader !== 'undefined') {
            jsonContent = await LocalJSONLoader.loadJSON(iterationNum, gameName, trialNum, filename);
            console.log('Loaded JSON:', jsonContent);
        }
        // Fallback to DynamicJSONLoader (GitHub)
        else if (typeof DynamicJSONLoader !== 'undefined') {
            jsonContent = await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, filename);
            console.log('Loaded JSON from GitHub:', jsonContent);
        } else {
            // Final fallback
            jsonContent = {
                "error": "No JSON loader found",
                "filename": filename,
                "message": "Please ensure json loaders are loaded"
            };
        }

        // Check if it's an error response
        if (jsonContent.error) {
            viewer.innerHTML = `
                <div class="error-container" style="padding: 40px; text-align: center;">
                    <h3 style="color: #ff7b72; margin-bottom: 20px;">❌ Error Loading File</h3>
                    <p style="color: #8b92a9; margin-bottom: 10px;">File: ${filename}</p>
                    <p style="color: #8b92a9; margin-bottom: 20px;">${jsonContent.error}: ${jsonContent.message || 'File not found'}</p>
                    <div style="background: rgba(255, 123, 114, 0.1); border: 1px solid rgba(255, 123, 114, 0.3); border-radius: 8px; padding: 15px; margin-top: 20px;">
                        <p style="color: #ffa657; font-size: 14px;">💡 Tip: This file may not exist for this game/iteration combination.</p>
                        <p style="color: #8b92a9; font-size: 12px; margin-top: 10px;">Try selecting a different file from the dropdown above.</p>
                    </div>
                </div>
                ${this.getJsonViewerStyles()}
            `;
            return;
        }

        // Display the JSON with syntax highlighting
        const jsonString = JSON.stringify(jsonContent, null, 2);
        const highlightedJson = jsonString
            .replace(/(".*?":\s*".*?")/g, '<span style="color: #a5d6ff;">$1</span>')
            .replace(/(".*?":\s*)(\d+)/g, '$1<span style="color: #79c0ff;">$2</span>')
            .replace(/(".*?":\s*)(true|false)/g, '$1<span style="color: #ff7b72;">$2</span>')
            .replace(/(".*?":\s*)(null)/g, '$1<span style="color: #8b949e;">$2</span>');

        // Get total lines and size
        const lineCount = jsonString.split('\n').length;
        const sizeKB = (JSON.stringify(jsonContent).length / 1024).toFixed(2);

        viewer.innerHTML = `
            <div class="json-header">
                <h3 style="font-size: 20px; color: #3b82f6;">📄 ${filename}</h3>
                <div style="display: flex; align-items: center; gap: 20px;">
                    <span style="color: #8b92a9; font-size: 14px;">
                        Lines: ${lineCount} | Size: ${sizeKB} KB
                    </span>
                    <button class="btn-copy" onclick="navigator.clipboard.writeText(JSON.stringify(${JSON.stringify(jsonContent)}, null, 2))">
                        📋 Copy JSON
                    </button>
                </div>
            </div>
            <pre class="json-content">${highlightedJson}</pre>
            ${this.getJsonViewerStyles()}
        `;

        console.log(`Displayed JSON: ${filename}, Lines: ${lineCount}, Size: ${sizeKB}KB`);

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
                    margin-bottom: 30px;
                    padding: 20px;
                    background: rgba(59, 130, 246, 0.1);
                    border-radius: 8px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                }
                .json-header h3 {
                    margin: 0;
                    color: #3b82f6;
                    font-family: 'Inter', sans-serif;
                    font-size: 24px;
                    font-weight: 600;
                }
                .json-content {
                    background: #0a0e1a;
                    padding: 40px;
                    border-radius: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow-x: auto;
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 1.8;
                    color: #e1e8ed;
                    min-height: 500px;
                    max-height: calc(100vh - 280px);
                    overflow-y: auto;
                    white-space: pre-wrap;
                    word-wrap: break-word;
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

    // Generate file options for dropdown based on game type
    getFileEmoji(category) {
        const emojiMap = {
            'Character': '🦖',
            'Obstacles': '🌵',
            'World': '🌍',
            'UI': '📊',
            'Items': '🍎',
            'Mirrors': '🪞'
        };
        return emojiMap[category] || '📄';
    },

    generateFileOptions(gameName, iterationNum = 8, trialNum = 1) {
        // Use CompleteFileManifest if available
        if (typeof CompleteFileManifest !== 'undefined' && typeof getFilesForTrial !== 'undefined') {
            const files = getFilesForTrial(iterationNum, gameName, trialNum);

            if (!files) {
                return `<option value="" disabled>❌ No files found for ${gameName} - Iteration ${iterationNum} - Trial ${trialNum}</option>`;
            }

            // Start with common file
            let html = '';
            if (files['_project_common']) {
                html += '<option value="_project_common.json">📄 _project_common.json (Main Project File)</option>';
            }

            // Add category groups
            const categories = ['Character', 'Obstacles', 'World', 'UI', 'Ui', 'Items', 'Mirrors'];
            categories.forEach(category => {
                const fileList = files[category];
                if (fileList && fileList.length > 0) {
                    const displayCategory = category === 'Ui' ? 'UI' : category;
                    html += `<optgroup label="${displayCategory}">`;
                    for (const file of fileList) {
                        const fileName = file.split('/').pop();
                        const emoji = this.getFileEmoji(displayCategory);
                        html += `<option value="${file}">${emoji} ${fileName}</option>`;
                    }
                    html += `</optgroup>`;
                }
            });

            if (html === '') {
                return '<option value="" disabled>❌ No files available</option>';
            }

            return html;
        }

        // Fallback if CompleteFileManifest not available
        let html = '<option value="_project_common.json">📄 _project_common.json (Main Project File)</option>';

        if (gameName === 'Chrome_Dino_Runner') {
            html += `
                <optgroup label="Character (캐릭터)">
                    <option value="character/dino_runner_core.json">🦖 dino_runner_core.json (달리기 애니메이션)</option>
                    <option value="character/dino_air_pose.json">🦖 dino_air_pose.json (점프 자세)</option>
                    <option value="character/dino_low_profile.json">🦖 dino_low_profile.json (숙이기 자세)</option>
                    <option value="character/dino_crash_pose.json">🦖 dino_crash_pose.json (충돌 자세)</option>
                </optgroup>
                <optgroup label="Obstacles (장애물)">
                    <option value="obstacles/cactus_single.json">🌵 cactus_single.json (작은 선인장)</option>
                    <option value="obstacles/cactus_pair_cluster.json">🌵 cactus_pair_cluster.json (중간 선인장)</option>
                    <option value="obstacles/cactus_triplet_cluster.json">🌵 cactus_triplet_cluster.json (큰 선인장)</option>
                    <option value="obstacles/pterodactyl_flap_sheet.json">🦅 pterodactyl_flap_sheet.json (익룡)</option>
                </optgroup>
                <optgroup label="World (배경)">
                    <option value="world/sky_day_field.json">☁️ sky_day_field.json (하늘 배경)</option>
                    <option value="world/ground_runner_strip.json">🏃 ground_runner_strip.json (땅)</option>
                    <option value="world/ground_pebble_overlay.json">🪨 ground_pebble_overlay.json (자갈)</option>
                    <option value="world/cloud_pass_small.json">☁️ cloud_pass_small.json (구름)</option>
                </optgroup>
                <optgroup label="UI (인터페이스)">
                    <option value="ui/score_digits_font.json">🔢 score_digits_font.json (점수 폰트)</option>
                    <option value="ui/score_rack_panel.json">📊 score_rack_panel.json (점수판)</option>
                    <option value="ui/game_over_message.json">💀 game_over_message.json (게임오버)</option>
                    <option value="ui/restart_hint_label.json">🔄 restart_hint_label.json (재시작)</option>
                </optgroup>
            `;
        } else if (gameName === 'Pico_Echo') {
            html += `
                <optgroup label="Character">
                    <option value="character/echo_idle_4f_2fps.json">🦜 echo_idle_4f_2fps.json</option>
                    <option value="character/echo_happy_8f_4fps.json">🦜 echo_happy_8f_4fps.json</option>
                    <option value="character/echo_hungry_4f_2fps.json">🦜 echo_hungry_4f_2fps.json</option>
                    <option value="character/echo_eating_6f_4fps.json">🦜 echo_eating_6f_4fps.json</option>
                    <option value="character/echo_dirty_3f_2fps.json">🦜 echo_dirty_3f_2fps.json</option>
                    <option value="character/echo_preening_5f_3fps.json">🦜 echo_preening_5f_3fps.json</option>
                    <option value="character/echo_singing_8f_4fps.json">🦜 echo_singing_8f_4fps.json</option>
                </optgroup>
                <optgroup label="Items">
                    <option value="items/fruit_apple.json">🍎 fruit_apple.json</option>
                    <option value="items/fruit_orange.json">🍊 fruit_orange.json</option>
                    <option value="items/fruit_grape.json">🍇 fruit_grape.json</option>
                    <option value="items/water_bowl.json">💧 water_bowl.json</option>
                    <option value="items/bath_spray.json">🚿 bath_spray.json</option>
                </optgroup>
                <optgroup label="World">
                    <option value="world/cage_background.json">🏠 cage_background.json</option>
                    <option value="world/perch.json">🪵 perch.json</option>
                    <option value="world/feeder.json">🥣 feeder.json</option>
                </optgroup>
                <optgroup label="UI">
                    <option value="ui/hunger_meter.json">🍽️ hunger_meter.json</option>
                    <option value="ui/happiness_meter.json">😊 happiness_meter.json</option>
                    <option value="ui/cleanliness_meter.json">🧼 cleanliness_meter.json</option>
                    <option value="ui/action_buttons.json">🎮 action_buttons.json</option>
                </optgroup>
            `;
        } else if (gameName === 'umbra_scale') {
            html += `
                <optgroup label="Character">
                    <option value="character/umbra_player_core_states.json">👤 umbra_player_core_states.json</option>
                    <option value="character/umbra_echo_marker.json">👻 umbra_echo_marker.json</option>
                </optgroup>
                <optgroup label="Obstacles">
                    <option value="obstacles/balance_scale_rig.json">⚖️ balance_scale_rig.json</option>
                    <option value="obstacles/mirror_reflector_panel.json">🪞 mirror_reflector_panel.json</option>
                    <option value="obstacles/moving_light_emitter.json">💡 moving_light_emitter.json</option>
                    <option value="obstacles/prism_splitter_glass.json">💎 prism_splitter_glass.json</option>
                </optgroup>
                <optgroup label="World">
                    <option value="world/twilight_tower_tileset.json">🏰 twilight_tower_tileset.json</option>
                    <option value="world/shadow_safe_zone_overlay.json">🌑 shadow_safe_zone_overlay.json</option>
                    <option value="world/exit_door_ladder_set.json">🚪 exit_door_ladder_set.json</option>
                </optgroup>
                <optgroup label="UI">
                    <option value="ui/exposure_balance_hud.json">📊 exposure_balance_hud.json</option>
                    <option value="ui/floor_clear_rank_panel.json">🏆 floor_clear_rank_panel.json</option>
                    <option value="ui/light_path_preview_overlay.json">✨ light_path_preview_overlay.json</option>
                </optgroup>
            `;
        } else if (gameName === 'slip_down') {
            html += `
                <optgroup label="Character">
                    <option value="character/player_slip_slide_states.json">🏂 player_slip_slide_states.json</option>
                </optgroup>
                <optgroup label="Obstacles">
                    <option value="obstacles/platform_breakable_wood.json">🪵 platform_breakable_wood.json</option>
                    <option value="obstacles/spike_hazard_upward.json">🔺 spike_hazard_upward.json</option>
                </optgroup>
                <optgroup label="World">
                    <option value="world/infinite_tower_tileset.json">🏢 infinite_tower_tileset.json</option>
                </optgroup>
                <optgroup label="UI">
                    <option value="ui/descent_timer_display.json">⏱️ descent_timer_display.json</option>
                </optgroup>
            `;
        } else if (gameName === 'reflect_academy') {
            html += `
                <optgroup label="Character">
                    <option value="character/player_wizard_states.json">🧙 player_wizard_states.json</option>
                </optgroup>
                <optgroup label="Mirrors">
                    <option value="mirrors/mirror_crystal_pivot.json">🔮 mirror_crystal_pivot.json</option>
                    <option value="mirrors/mirror_splitter_prism.json">💎 mirror_splitter_prism.json</option>
                </optgroup>
                <optgroup label="World">
                    <option value="world/academy_hall_tileset.json">🏛️ academy_hall_tileset.json</option>
                </optgroup>
                <optgroup label="UI">
                    <option value="ui/spell_charge_indicator.json">⚡ spell_charge_indicator.json</option>
                </optgroup>
            `;
        } else if (gameName === 'cosmos_heracles') {
            html += `
                <optgroup label="Character">
                    <option value="character/character.player.heracles_form_64x96.json">⚔️ heracles_form_64x96.json</option>
                    <option value="character/character.boss.cyclops_state_sheet.json">👁️ cyclops_state_sheet.json</option>
                    <option value="character/character.boss.hydra_state_sheet.json">🐉 hydra_state_sheet.json</option>
                    <option value="character/character.enemy.cerberus_state_sheet.json">🐕 cerberus_state_sheet.json</option>
                </optgroup>
                <optgroup label="Obstacles">
                    <option value="obstacles/obstacles.pillar.standard_sheet.json">🏛️ pillar_standard_sheet.json</option>
                    <option value="obstacles/obstacles.pillar.rotating_sheet.json">🌀 pillar_rotating_sheet.json</option>
                </optgroup>
                <optgroup label="World">
                    <option value="world/world.background.zone1_corridor_parallax.json">🏛️ zone1_corridor_parallax.json</option>
                    <option value="world/world.floor.star_floor_strip.json">⭐ star_floor_strip.json</option>
                </optgroup>
                <optgroup label="UI">
                    <option value="ui/ui.hud.hp_hearts_row.json">❤️ hp_hearts_row.json</option>
                    <option value="ui/ui.hud.score_zone_header.json">📊 score_zone_header.json</option>
                </optgroup>
            `;
        } else if (gameName === 'olympus_step' || gameName === 'ricochet_conspiracy' || gameName === 'jarl_of_blizzard') {
            // Games from iterations 6-7 with similar structure
            html += `
                <optgroup label="Files">
                    <option value="_project_common.json">📄 Project file only available</option>
                </optgroup>
            `;
        } else {
            // Generic fallback for other games
            html += `
                <optgroup label="Available Files">
                    <option value="">Please check available files for this game</option>
                </optgroup>
            `;
        }

        return html;
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