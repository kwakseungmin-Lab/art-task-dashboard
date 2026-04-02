// Art Task Plan Pipeline Dashboard - Improved with Game Availability
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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h4>Total Entities</h4>
                            <p class="stat-value">26,789</p>
                            <span class="stat-label">Art Task Plan KB</span>
                        </div>
                        <div class="stat-card">
                            <h4>Relations</h4>
                            <p class="stat-value">1,585</p>
                            <span class="stat-label">Knowledge Connections</span>
                        </div>
                        <div class="stat-card">
                            <h4>Success Rate</h4>
                            <p class="stat-value">90.7%</p>
                            <span class="stat-label">Average Pass Rate</span>
                        </div>
                        <div class="stat-card">
                            <h4>Games Tested</h4>
                            <p class="stat-value">9</p>
                            <span class="stat-label">Different Games</span>
                        </div>
                    </div>
                    <div class="performance-chart" style="margin-top: 30px;">
                        <h3>Iteration Performance</h3>
                        <canvas id="performanceChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="kb-networks" style="margin-top: 40px;">
                <h2>Knowledge Base Network Visualization</h2>
                <div class="network-tabs">
                    <button class="tab-btn active" onclick="dashboard.loadKBNetwork('art')">Art Task Plan KB</button>
                    <button class="tab-btn" onclick="dashboard.loadKBNetwork('meta')">Meta Iteration KB</button>
                    <button class="tab-btn" onclick="dashboard.loadKBNetwork('combined')">Combined View</button>
                </div>
                <div id="kb-network" style="width: 100%; height: 600px; background: #1a1f2e; border-radius: 8px; margin-top: 20px;"></div>
            </div>
        `;

        // Initialize chart
        setTimeout(() => this.initPerformanceChart(), 100);
    },

    // Generate iteration cards with accurate game counts
    generateIterationCards() {
        const iterations = [
            { num: 3, status: 'Complete', pass: 75, games: 2 },  // Chrome_Dino_Runner, Pico_Echo
            { num: 4, status: 'Complete', pass: 82, games: 2 },  // Chrome_Dino_Runner, Pico_Echo
            { num: 5, status: 'Complete', pass: 88, games: 2 },  // Chrome_Dino_Runner, Pico_Echo
            { num: 6, status: 'Complete', pass: 91, games: 6 },  // Chrome_Dino_Runner, Pico_Echo, cosmos_heracles, jarl_of_blizzard, olympus_step, ricochet_conspiracy
            { num: 7, status: 'Complete', pass: 94, games: 5 },  // Chrome_Dino_Runner, Pico_Echo, cosmos_heracles, olympus_step, ricochet_conspiracy
            { num: 8, status: 'Complete', pass: 97, games: 5 }   // Chrome_Dino_Runner, Pico_Echo, reflect_academy, slip_down, umbra_scale
        ];

        return iterations.map(iter => `
            <div class="iteration-card"
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
                        <span class="label">Trials</span>
                        <span class="value">5</span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Show iteration details with only available games
    showIterationDetails(iterationNum) {
        const content = document.getElementById('main-content');

        // Get available games for this iteration
        let games = [];
        let unavailableMessage = '';

        if (typeof GameAvailability !== 'undefined') {
            games = GameAvailability.getAvailableGames(iterationNum);
        } else {
            // Hardcoded fallback based on our data
            const gamesByIteration = {
                3: ['Chrome_Dino_Runner', 'Pico_Echo'],
                4: ['Chrome_Dino_Runner', 'Pico_Echo'],
                5: ['Chrome_Dino_Runner', 'Pico_Echo'],
                6: ['Chrome_Dino_Runner', 'Pico_Echo', 'cosmos_heracles', 'jarl_of_blizzard', 'olympus_step', 'ricochet_conspiracy'],
                7: ['Chrome_Dino_Runner', 'Pico_Echo', 'cosmos_heracles', 'olympus_step', 'ricochet_conspiracy'],
                8: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale']
            };
            games = gamesByIteration[iterationNum] || [];
        }

        const trials = [1, 2, 3, 4, 5];

        content.innerHTML = `
            <div class="iteration-detail-header">
                <button class="btn-back" onclick="window.dashboard.loadIterationsView()">← Back to Overview</button>
                <h2>Iteration ${iterationNum} - Task Plan Results</h2>
                <p style="color: #8b92a9;">Available Games: ${games.length} | Trials per Game: ${trials.length}</p>
            </div>

            <div class="games-grid">
                ${games.map(game => `
                    <div class="game-section">
                        <h3>${game.replace(/_/g, ' ')}</h3>
                        <div class="trials-grid">
                            ${trials.map(trial => `
                                <div class="trial-card"
                                     onclick="window.dashboard.showTaskPlanBrowser(${iterationNum}, '${game}', ${trial})"
                                     style="cursor: pointer;">
                                    <span>Trial ${trial}</span>
                                    <span class="view-btn">View →</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>

            ${games.length === 0 ? `
                <div class="no-data-message" style="text-align: center; padding: 40px; color: #ef4444;">
                    <h3>No games available for Iteration ${iterationNum}</h3>
                    <p>This iteration may not have been run yet or data is missing.</p>
                </div>
            ` : ''}

            <style>
                .games-grid {
                    display: grid;
                    gap: 30px;
                    margin-top: 30px;
                }
                .game-section {
                    background: rgba(26, 31, 46, 0.5);
                    border-radius: 12px;
                    padding: 20px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                }
                .game-section h3 {
                    color: #3b82f6;
                    margin-bottom: 15px;
                    text-transform: capitalize;
                }
                .trials-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                }
                .trial-card {
                    background: rgba(59, 130, 246, 0.1);
                    padding: 15px;
                    border-radius: 8px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                }
                .trial-card:hover {
                    background: rgba(59, 130, 246, 0.2);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }
                .view-btn {
                    color: #60a5fa;
                    font-weight: 600;
                }
                .no-data-message {
                    margin-top: 50px;
                }
            </style>
        `;
    },

    // Show Task Plan Browser with game availability check
    showTaskPlanBrowser(iterationNum, gameName, trialNum) {
        const content = document.getElementById('main-content');
        const basePath = `Solutions/GameMaking/Planning/experiments/iterations/iteration_${iterationNum}/data/task_plans/${gameName}/trial_${trialNum}/`;

        // Check if game is available for this iteration
        let isAvailable = true;
        let availabilityMessage = '';

        if (typeof GameAvailability !== 'undefined') {
            isAvailable = GameAvailability.isGameAvailable(iterationNum, gameName);
            if (!isAvailable) {
                availabilityMessage = GameAvailability.getAvailabilityMessage(iterationNum, gameName);
            }
        }

        if (!isAvailable) {
            content.innerHTML = `
                <div class="task-plan-header">
                    <button class="btn-back" onclick="window.dashboard.showIterationDetails(${iterationNum})">← Back to Iteration ${iterationNum}</button>
                    <h2>Game Not Available</h2>
                </div>
                <div class="error-message" style="text-align: center; padding: 40px; color: #ef4444;">
                    <h3>❌ ${availabilityMessage}</h3>
                    <p>Please select a different iteration or game.</p>
                </div>
            `;
            return;
        }

        content.innerHTML = `
            <div class="task-plan-header">
                <button class="btn-back" onclick="window.dashboard.showIterationDetails(${iterationNum})">← Back to Iteration ${iterationNum}</button>
                <h2>${gameName.replace(/_/g, ' ')} - Trial ${trialNum} Task Plans</h2>
                <div class="path-info">Path: ${basePath}</div>
            </div>

            <div class="task-plan-container">
                <div class="file-selector">
                    <h3>Select JSON File (Iteration ${iterationNum} - ${gameName}):</h3>
                    <select id="file-dropdown" onchange="window.dashboard.viewTaskPlanJSON(${iterationNum}, '${gameName}', ${trialNum}, this.value)" style="width: 100%; padding: 8px; background: #1a1f2e; color: #e1e8ed; border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 6px;">
                        ${this.generateFileOptions(gameName, iterationNum)}
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
                    width: 100%;
                    max-width: 1200px;
                    min-height: 600px;
                    background: #1a1f2e;
                    border-radius: 8px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    padding: 20px;
                    overflow: auto;
                    position: relative;
                }
                .viewer-placeholder {
                    color: #8b92a9;
                    text-align: center;
                    padding: 40px;
                }
                .json-content {
                    font-family: 'Fira Code', monospace;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #e1e8ed;
                }
                .error-message {
                    margin-top: 50px;
                }
            </style>
        `;

        // Auto-load the first file after a short delay
        setTimeout(() => {
            this.viewTaskPlanJSON(iterationNum, gameName, trialNum, '_project_common.json');
        }, 100);
    },

    // View Task Plan JSON content with proper error handling
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
                    padding: 60px;
                    color: #8b92a9;
                }
                .spinner {
                    border: 3px solid rgba(59, 130, 246, 0.2);
                    border-top: 3px solid #3b82f6;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;

        let jsonContent = null;

        // Try FixedJSONLoader first (handles GitHub Pages)
        if (typeof FixedJSONLoader !== 'undefined') {
            jsonContent = await FixedJSONLoader.loadJSON(iterationNum, gameName, trialNum, filepath);
            console.log('Loaded JSON via FixedJSONLoader:', jsonContent);
        }
        // Fallback to DynamicJSONLoader (GitHub raw)
        else if (typeof DynamicJSONLoader !== 'undefined') {
            jsonContent = await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, filepath);
            console.log('Loaded JSON from GitHub:', jsonContent);
        } else {
            // Final fallback - error
            jsonContent = {
                error: "No loader available",
                message: "Neither FixedJSONLoader nor DynamicJSONLoader is available"
            };
        }

        // Display the result
        if (jsonContent && jsonContent.error) {
            viewer.innerHTML = `
                <div class="error-state" style="padding: 40px; text-align: center;">
                    <h3 style="color: #ef4444;">❌ Error Loading File</h3>
                    <p style="color: #f87171; margin: 20px 0;">File: ${filename}</p>
                    <p style="color: #fbbf24;">${jsonContent.error}: ${jsonContent.message || 'File not found'}</p>
                    ${jsonContent.hint ? `<p style="color: #60a5fa; margin-top: 20px;">💡 Tip: ${jsonContent.hint}</p>` : ''}
                    ${jsonContent.availableIterations ? `<p style="color: #10b981; margin-top: 20px;">✅ Available in iterations: ${jsonContent.availableIterations.join(', ')}</p>` : ''}
                </div>
            `;
        } else if (jsonContent) {
            // Format and display JSON with syntax highlighting
            const formattedJson = JSON.stringify(jsonContent, null, 2);
            viewer.innerHTML = `
                <div class="json-header" style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">
                    <h4 style="color: #3b82f6; margin: 0;">📄 ${filename}</h4>
                    <p style="color: #8b92a9; margin: 5px 0 0 0; font-size: 12px;">
                        Size: ${formattedJson.length.toLocaleString()} characters |
                        Iteration: ${iterationNum} |
                        Game: ${gameName} |
                        Trial: ${trialNum}
                    </p>
                </div>
                <pre class="json-content" style="margin: 0; white-space: pre-wrap; word-wrap: break-word;">${this.syntaxHighlightJSON(formattedJson)}</pre>
            `;
        } else {
            viewer.innerHTML = `
                <div class="error-state" style="padding: 40px; text-align: center;">
                    <h3 style="color: #ef4444;">❌ Failed to Load</h3>
                    <p style="color: #f87171;">Unable to load ${filename}</p>
                </div>
            `;
        }
    },

    // Generate file options with game availability check
    generateFileOptions(gameName, iterationNum = 8) {
        // Check if GameAvailability is available
        if (typeof GameAvailability !== 'undefined') {
            // Check if game is available for this iteration
            if (!GameAvailability.isGameAvailable(iterationNum, gameName)) {
                const message = GameAvailability.getAvailabilityMessage(iterationNum, gameName);
                return `<option value="" disabled>❌ ${message}</option>`;
            }

            // Get file structure for this game
            const files = GameAvailability.getGameFiles(gameName, iterationNum);

            // Handle error case
            if (files.error) {
                return `<option value="" disabled>❌ ${files.error}</option>`;
            }

            // Start with common file
            let html = '<option value="_project_common.json">📄 _project_common.json (Main Project File)</option>';

            // Add category groups
            for (const [category, fileList] of Object.entries(files)) {
                if (category === 'error' || category === 'availableIterations') continue;

                html += `<optgroup label="${category}">`;
                for (const file of fileList) {
                    const fileName = file.split('/').pop();
                    const emoji = this.getFileEmoji(category);
                    html += `<option value="${file}">${emoji} ${fileName}</option>`;
                }
                html += `</optgroup>`;
            }

            return html;
        }

        // Fallback - just show basic option
        return '<option value="_project_common.json">📄 _project_common.json</option>';
    },

    // Get emoji for file category
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

    // Syntax highlight JSON
    syntaxHighlightJSON(json) {
        return json
            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, (match) => {
                if (match.includes(':')) {
                    return `<span style="color: #60a5fa;">${match}</span>`;  // Keys
                } else {
                    return `<span style="color: #34d399;">${match}</span>`;  // String values
                }
            })
            .replace(/\b(true|false)\b/g, '<span style="color: #f59e0b;">$1</span>')  // Booleans
            .replace(/\b(\d+)\b/g, '<span style="color: #a78bfa;">$1</span>');         // Numbers
    },

    // Initialize performance chart
    initPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Iter 3', 'Iter 4', 'Iter 5', 'Iter 6', 'Iter 7', 'Iter 8'],
                datasets: [{
                    label: 'Pass Rate (%)',
                    data: [75, 82, 88, 91, 94, 97],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#8b92a9'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#8b92a9'
                        }
                    }
                }
            }
        });
    },

    // Load KB Network (placeholder - would integrate with D3.js)
    loadKBNetwork(type) {
        const networkDiv = document.getElementById('kb-network');
        networkDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #8b92a9;">
                <div style="text-align: center;">
                    <h3>${type === 'art' ? 'Art Task Plan KB' : type === 'meta' ? 'Meta Iteration KB' : 'Combined KB'}</h3>
                    <p>Loading network visualization...</p>
                    <p style="margin-top: 20px; color: #60a5fa;">
                        ${type === 'art' ? '26,789 entities | 1,585 relations' :
                          type === 'meta' ? '8,032 entities | 892 relations' :
                          '34,821 total entities | 2,477 relations'}
                    </p>
                </div>
            </div>
        `;
    }
};

// Initialize dashboard when page loads
window.dashboard = Dashboard;
window.addEventListener('DOMContentLoaded', () => {
    Dashboard.init();
});