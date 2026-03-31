// Art Task Plan Dashboard - Interactive Application
class DashboardApp {
    constructor() {
        this.currentView = 'overview';
        this.selectedIteration = null;
        this.selectedAgent = null;
        this.kbData = {
            art: {
                total: 26789,
                categories: {
                    'Character Concepts': 8234,
                    'Environment Assets': 6789,
                    'Animation Sequences': 4567,
                    'Visual Effects': 3456,
                    'UI Elements': 2345,
                    'Texture Libraries': 1398
                }
            },
            meta: {
                total: 2313,
                categories: {
                    'Pipeline Configs': 789,
                    'Agent Prompts': 456,
                    'Evaluation Metrics': 345,
                    'Process Templates': 234,
                    'Learning Records': 289,
                    'Error Patterns': 200
                }
            }
        };

        this.iterations = [
            { id: 'iteration_8', date: '2026-04-10', status: 'In Progress', accuracy: 94.2, tasks: 1250, kbWrites: 342 },
            { id: 'iteration_7', date: '2026-04-07', status: 'Complete', accuracy: 92.8, tasks: 1189, kbWrites: 298 },
            { id: 'iteration_6', date: '2026-04-03', status: 'Complete', accuracy: 91.5, tasks: 1076, kbWrites: 276 },
            { id: 'iteration_5', date: '2026-03-30', status: 'Complete', accuracy: 89.3, tasks: 987, kbWrites: 245 },
            { id: 'iteration_4', date: '2026-03-27', status: 'Complete', accuracy: 87.6, tasks: 892, kbWrites: 213 },
            { id: 'iteration_3', date: '2026-03-24', status: 'Complete', accuracy: 85.2, tasks: 743, kbWrites: 189 },
            { id: 'iteration_2', date: '2026-03-21', status: 'Complete', accuracy: 82.1, tasks: 621, kbWrites: 156 },
            { id: 'iteration_1', date: '2026-03-18', status: 'Complete', accuracy: 78.4, tasks: 534, kbWrites: 123 }
        ];

        this.agents = [
            { name: 'Orchestrator', role: 'Meta Controller', status: 'active', tasks: 3421 },
            { name: 'Designer', role: 'Task Designer', status: 'active', tasks: 892 },
            { name: 'Analyzer', role: 'Analysis Agent', status: 'active', tasks: 1654 },
            { name: 'Generator', role: 'Plan Generator', status: 'active', tasks: 743 },
            { name: 'Evaluator', role: 'Quality Check', status: 'active', tasks: 567 },
            { name: 'Process Validator', role: 'Validation', status: 'idle', tasks: 234 },
            { name: 'Evolver', role: 'Evolution Agent', status: 'active', tasks: 189 },
            { name: 'Evolver Reviewer', role: 'Review Agent', status: 'idle', tasks: 156 },
            { name: 'Monitor', role: 'System Monitor', status: 'active', tasks: 4567 },
            { name: 'Art KB Writer', role: 'KB Management', status: 'active', tasks: 234 },
            { name: 'Meta KB Writer', role: 'Meta KB', status: 'idle', tasks: 178 },
            { name: 'KB Retriever', role: 'Data Retrieval', status: 'active', tasks: 892 },
            { name: 'KB Manager', role: 'KB Operations', status: 'idle', tasks: 345 },
            { name: 'Agent Evolver', role: 'Self Modification', status: 'idle', tasks: 67 }
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initCharts();
        this.showOverview();
    }

    setupEventListeners() {
        // Navigation clicks
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
            });
        });

        // Tab clicks
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // Card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.iteration-card')) {
                const card = e.target.closest('.iteration-card');
                const iterationId = card.dataset.iteration;
                this.showIterationDetails(iterationId);
            }

            if (e.target.closest('.agent-card')) {
                const card = e.target.closest('.agent-card');
                const agentName = card.dataset.agent;
                this.showAgentDetails(agentName);
            }

            if (e.target.closest('.kb-category')) {
                const category = e.target.closest('.kb-category');
                const kbType = category.dataset.kbType;
                const categoryName = category.dataset.category;
                this.showKBCategory(kbType, categoryName);
            }
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });
        }
    }

    switchView(view) {
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.view === view) {
                item.classList.add('active');
            }
        });

        // Update content
        const content = document.getElementById('main-content');
        switch(view) {
            case 'overview':
                this.showOverview();
                break;
            case 'iterations':
                this.showIterations();
                break;
            case 'agents':
                this.showAgents();
                break;
            case 'knowledge-base':
                this.showKnowledgeBase();
                break;
            case 's3-browser':
                this.showS3Browser();
                break;
            case 'analytics':
                this.showAnalytics();
                break;
        }

        this.currentView = view;
    }

    switchTab(tabName) {
        // Update active tab
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            }
        });

        // Update tab content
        const content = document.getElementById('tab-content');
        switch(tabName) {
            case 'pipeline':
                this.showPipelineFlow();
                break;
            case 'metrics':
                this.showMetrics();
                break;
            case 'logs':
                this.showLogs();
                break;
        }
    }

    showOverview() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="overview-grid">
                <div class="stat-card glass-container">
                    <h3>Total Iterations</h3>
                    <div class="stat-value">8</div>
                    <div class="stat-change">+1 this week</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Active Agents</h3>
                    <div class="stat-value">14</div>
                    <div class="stat-change">${this.agents.filter(a => a.status === 'active').length} running</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>KB Entities</h3>
                    <div class="stat-value">${(this.kbData.art.total + this.kbData.meta.total).toLocaleString()}</div>
                    <div class="stat-change">+1,234 today</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Success Rate</h3>
                    <div class="stat-value">94.2%</div>
                    <div class="stat-change">↑ 2.3%</div>
                </div>
            </div>

            <div class="chart-section">
                <h2>Pipeline Performance</h2>
                <canvas id="performance-chart"></canvas>
            </div>

            <div class="recent-activity">
                <h2>Recent Activity</h2>
                <div class="activity-list">
                    ${this.generateActivityList()}
                </div>
            </div>
        `;

        this.initPerformanceChart();
    }

    showIterations() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Iteration History</h2>
            <div class="iterations-grid">
                ${this.iterations.map(iter => `
                    <div class="iteration-card glass-container" data-iteration="${iter.id}">
                        <div class="iteration-header">
                            <h3>${iter.id.replace('_', ' ').toUpperCase()}</h3>
                            <span class="status-badge ${iter.status.toLowerCase().replace(' ', '-')}">${iter.status}</span>
                        </div>
                        <div class="iteration-stats">
                            <div class="stat">
                                <span class="label">Date</span>
                                <span class="value">${iter.date}</span>
                            </div>
                            <div class="stat">
                                <span class="label">Accuracy</span>
                                <span class="value">${iter.accuracy}%</span>
                            </div>
                            <div class="stat">
                                <span class="label">Tasks</span>
                                <span class="value">${iter.tasks}</span>
                            </div>
                            <div class="stat">
                                <span class="label">KB Writes</span>
                                <span class="value">${iter.kbWrites}</span>
                            </div>
                        </div>
                        <button class="btn-modern view-details">View Details</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showIterationDetails(iterationId) {
        const iteration = this.iterations.find(i => i.id === iterationId);
        if (!iteration) return;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content glass-container">
                <div class="modal-header">
                    <h2>${iteration.id.replace('_', ' ').toUpperCase()} Details</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="detail-grid">
                        <div class="detail-section">
                            <h3>Performance Metrics</h3>
                            <div class="metrics-list">
                                <div class="metric-item">
                                    <span>Accuracy</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${iteration.accuracy}%"></div>
                                    </div>
                                    <span>${iteration.accuracy}%</span>
                                </div>
                                <div class="metric-item">
                                    <span>Task Completion</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 89%"></div>
                                    </div>
                                    <span>89%</span>
                                </div>
                                <div class="metric-item">
                                    <span>Error Rate</span>
                                    <div class="progress-bar error">
                                        <div class="progress-fill" style="width: 5.8%"></div>
                                    </div>
                                    <span>5.8%</span>
                                </div>
                            </div>
                        </div>

                        <div class="detail-section">
                            <h3>S3 Artifacts</h3>
                            <div class="artifact-list">
                                <div class="artifact-item">📁 task_plans_${iteration.id}.json</div>
                                <div class="artifact-item">📁 evaluation_results_${iteration.id}.json</div>
                                <div class="artifact-item">📁 kb_updates_${iteration.id}.json</div>
                                <div class="artifact-item">📁 agent_logs_${iteration.id}.txt</div>
                            </div>
                        </div>

                        <div class="detail-section">
                            <h3>Agent Performance</h3>
                            <canvas id="agent-performance-${iterationId}"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        // Init chart
        this.initAgentPerformanceChart(iterationId);
    }

    showAgents() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Agent Status</h2>
            <div class="agents-grid">
                ${this.agents.map(agent => `
                    <div class="agent-card neu-card" data-agent="${agent.name}">
                        <div class="agent-header">
                            <h3>${agent.name}</h3>
                            <span class="status-indicator ${agent.status}"></span>
                        </div>
                        <div class="agent-info">
                            <p class="role">${agent.role}</p>
                            <div class="agent-stats">
                                <div class="stat">
                                    <span class="label">Tasks</span>
                                    <span class="value">${agent.tasks}</span>
                                </div>
                                <div class="stat">
                                    <span class="label">Status</span>
                                    <span class="value ${agent.status}">${agent.status}</span>
                                </div>
                            </div>
                        </div>
                        <button class="btn-modern">Configure</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showAgentDetails(agentName) {
        const agent = this.agents.find(a => a.name === agentName);
        if (!agent) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content glass-container">
                <div class="modal-header">
                    <h2>${agent.name} Configuration</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="config-section">
                        <h3>Agent Information</h3>
                        <div class="config-grid">
                            <div class="config-item">
                                <label>Template</label>
                                <input type="text" value="lm_agent_v3" readonly>
                            </div>
                            <div class="config-item">
                                <label>Model</label>
                                <input type="text" value="gpt-5.4" readonly>
                            </div>
                            <div class="config-item">
                                <label>Status</label>
                                <select>
                                    <option ${agent.status === 'active' ? 'selected' : ''}>active</option>
                                    <option ${agent.status === 'idle' ? 'selected' : ''}>idle</option>
                                    <option ${agent.status === 'stopped' ? 'selected' : ''}>stopped</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="config-section">
                        <h3>Performance Metrics</h3>
                        <div class="metrics-grid">
                            <div class="metric-card">
                                <span class="metric-label">Tasks Completed</span>
                                <span class="metric-value">${agent.tasks}</span>
                            </div>
                            <div class="metric-card">
                                <span class="metric-label">Success Rate</span>
                                <span class="metric-value">92.3%</span>
                            </div>
                            <div class="metric-card">
                                <span class="metric-label">Avg Response Time</span>
                                <span class="metric-value">1.2s</span>
                            </div>
                            <div class="metric-card">
                                <span class="metric-label">Errors</span>
                                <span class="metric-value">23</span>
                            </div>
                        </div>
                    </div>

                    <div class="config-section">
                        <h3>Recent Logs</h3>
                        <div class="log-viewer">
                            <div class="log-entry success">[${new Date().toISOString()}] Task completed successfully</div>
                            <div class="log-entry info">[${new Date().toISOString()}] Processing task #${agent.tasks}</div>
                            <div class="log-entry warning">[${new Date().toISOString()}] High memory usage detected</div>
                            <div class="log-entry info">[${new Date().toISOString()}] KB write operation completed</div>
                        </div>
                    </div>

                    <div class="modal-actions">
                        <button class="btn-modern">Save Configuration</button>
                        <button class="btn-modern secondary">Restart Agent</button>
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

    showKnowledgeBase() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Knowledge Base Explorer</h2>

            <div class="kb-search">
                <input type="text" id="kb-search" placeholder="Search entities..." class="search-input">
            </div>

            <div class="kb-container">
                <div class="kb-section">
                    <h3>Art Task Plan KB (${this.kbData.art.total.toLocaleString()} entities)</h3>
                    <div class="kb-categories">
                        ${Object.entries(this.kbData.art.categories).map(([cat, count]) => `
                            <div class="kb-category glass-container" data-kb-type="art" data-category="${cat}">
                                <div class="category-header">
                                    <span class="category-name">${cat}</span>
                                    <span class="category-count">${count.toLocaleString()}</span>
                                </div>
                                <div class="category-progress">
                                    <div class="progress-fill" style="width: ${(count/this.kbData.art.total*100).toFixed(1)}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="kb-section">
                    <h3>Meta Iteration KB (${this.kbData.meta.total.toLocaleString()} entities)</h3>
                    <div class="kb-categories">
                        ${Object.entries(this.kbData.meta.categories).map(([cat, count]) => `
                            <div class="kb-category glass-container" data-kb-type="meta" data-category="${cat}">
                                <div class="category-header">
                                    <span class="category-name">${cat}</span>
                                    <span class="category-count">${count.toLocaleString()}</span>
                                </div>
                                <div class="category-progress">
                                    <div class="progress-fill" style="width: ${(count/this.kbData.meta.total*100).toFixed(1)}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    showKBCategory(kbType, categoryName) {
        const categoryData = this.kbData[kbType].categories[categoryName];

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content glass-container large">
                <div class="modal-header">
                    <h2>${categoryName} - ${kbType.toUpperCase()} KB</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="entity-viewer">
                        <div class="entity-list">
                            ${this.generateSampleEntities(categoryName, 20).map(entity => `
                                <div class="entity-item" data-entity-id="${entity.id}">
                                    <div class="entity-header">
                                        <span class="entity-id">#${entity.id}</span>
                                        <span class="entity-type">${entity.type}</span>
                                    </div>
                                    <div class="entity-content">
                                        <h4>${entity.name}</h4>
                                        <p>${entity.description}</p>
                                        <div class="entity-meta">
                                            <span>Created: ${entity.created}</span>
                                            <span>Updated: ${entity.updated}</span>
                                            <span>Version: ${entity.version}</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div class="entity-detail" id="entity-detail">
                            <h3>Select an entity to view details</h3>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Entity click handler
        modal.querySelectorAll('.entity-item').forEach(item => {
            item.onclick = () => {
                const entityId = item.dataset.entityId;
                this.showEntityDetail(entityId);
            };
        });

        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    showEntityDetail(entityId) {
        const detail = document.getElementById('entity-detail');
        detail.innerHTML = `
            <h3>Entity #${entityId}</h3>
            <div class="detail-tabs">
                <button class="tab active">PostgreSQL</button>
                <button class="tab">Neptune Graph</button>
                <button class="tab">Relationships</button>
            </div>
            <div class="detail-content">
                <h4>PostgreSQL Schema</h4>
                <pre class="code-block">
{
    "entity_id": "${entityId}",
    "entity_type": "art_asset",
    "metadata": {
        "name": "Character Concept Art",
        "category": "character",
        "tags": ["fantasy", "warrior", "concept"],
        "created_by": "art_generator_agent",
        "workflow_id": "wf_2026_03_31_001"
    },
    "content": {
        "description": "High-fantasy warrior character design",
        "style_guide": "Dark medieval aesthetic",
        "color_palette": ["#2C3E50", "#E74C3C", "#95A5A6"],
        "resolution": "4096x4096",
        "format": "PSD"
    },
    "versioning": {
        "version": "2.1.0",
        "previous_version": "2.0.3",
        "change_log": "Updated armor design"
    }
}</pre>

                <h4>Neptune Graph Structure</h4>
                <pre class="code-block">
VERTEX: Entity_${entityId}
  Properties:
    - type: "art_asset"
    - category: "character"
    - status: "approved"

EDGES:
  - CREATED_BY -> Agent_Generator
  - PART_OF -> Iteration_8
  - REFERENCES -> Entity_${parseInt(entityId) - 1}
  - USED_IN -> TaskPlan_892
  - EVALUATED_BY -> Agent_Evaluator</pre>
            </div>
        `;
    }

    showS3Browser() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>S3 Repository Browser</h2>
            <div class="s3-browser">
                <div class="s3-path">
                    <span>s3://a2z-s3-janghoon/art-task-plan/</span>
                </div>

                <div class="s3-grid">
                    ${this.iterations.map(iter => `
                        <div class="s3-folder" data-iteration="${iter.id}">
                            <div class="folder-icon">📁</div>
                            <div class="folder-name">${iter.id}/</div>
                            <div class="folder-meta">
                                <span>${iter.date}</span>
                                <span>4 files</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div id="s3-file-list" class="s3-file-list"></div>
            </div>
        `;

        // Folder click handler
        document.querySelectorAll('.s3-folder').forEach(folder => {
            folder.onclick = () => {
                const iterationId = folder.dataset.iteration;
                this.showS3Files(iterationId);
            };
        });
    }

    showS3Files(iterationId) {
        const fileList = document.getElementById('s3-file-list');
        fileList.innerHTML = `
            <h3>Files in ${iterationId}/</h3>
            <div class="file-grid">
                <div class="file-item">
                    <span class="file-icon">📄</span>
                    <span class="file-name">task_plans.json</span>
                    <span class="file-size">2.4 MB</span>
                    <button class="btn-modern small">Download</button>
                </div>
                <div class="file-item">
                    <span class="file-icon">📄</span>
                    <span class="file-name">evaluation_results.json</span>
                    <span class="file-size">1.8 MB</span>
                    <button class="btn-modern small">Download</button>
                </div>
                <div class="file-item">
                    <span class="file-icon">📄</span>
                    <span class="file-name">kb_updates.json</span>
                    <span class="file-size">892 KB</span>
                    <button class="btn-modern small">Download</button>
                </div>
                <div class="file-item">
                    <span class="file-icon">📄</span>
                    <span class="file-name">agent_logs.txt</span>
                    <span class="file-size">3.2 MB</span>
                    <button class="btn-modern small">Download</button>
                </div>
            </div>
        `;
    }

    showAnalytics() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Analytics Dashboard</h2>
            <div class="analytics-grid">
                <div class="chart-container glass-container">
                    <h3>Accuracy Trend</h3>
                    <canvas id="accuracy-chart"></canvas>
                </div>
                <div class="chart-container glass-container">
                    <h3>Task Distribution</h3>
                    <canvas id="task-chart"></canvas>
                </div>
                <div class="chart-container glass-container">
                    <h3>Agent Utilization</h3>
                    <canvas id="utilization-chart"></canvas>
                </div>
                <div class="chart-container glass-container">
                    <h3>KB Growth</h3>
                    <canvas id="kb-growth-chart"></canvas>
                </div>
            </div>
        `;

        this.initAnalyticsCharts();
    }

    generateActivityList() {
        const activities = [
            { time: '2 minutes ago', action: 'Iteration 8 started', type: 'info' },
            { time: '15 minutes ago', action: 'KB Writer completed 342 updates', type: 'success' },
            { time: '1 hour ago', action: 'Evaluator detected quality issue', type: 'warning' },
            { time: '2 hours ago', action: 'Generator produced 123 task plans', type: 'info' },
            { time: '3 hours ago', action: 'Monitor alert: High memory usage', type: 'error' }
        ];

        return activities.map(activity => `
            <div class="activity-item ${activity.type}">
                <span class="activity-time">${activity.time}</span>
                <span class="activity-action">${activity.action}</span>
            </div>
        `).join('');
    }

    generateSampleEntities(category, count) {
        const entities = [];
        for (let i = 0; i < count; i++) {
            entities.push({
                id: Math.floor(Math.random() * 10000) + 1000,
                type: category.toLowerCase().replace(' ', '_'),
                name: `${category} Entity ${i + 1}`,
                description: `Sample entity for ${category} with various attributes and metadata`,
                created: '2026-03-30 14:23:01',
                updated: '2026-03-31 09:45:12',
                version: `1.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 20)}`
            });
        }
        return entities;
    }

    performSearch(query) {
        if (!query) return;

        console.log(`Searching for: ${query}`);
        // Implement actual search logic here
    }

    showPipelineFlow() {
        const content = document.getElementById('tab-content');
        content.innerHTML = `
            <div class="pipeline-flow">
                <div class="pipeline-stage">Designer</div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-stage">Analyzer (Early)</div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-stage">Generator</div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-stage">Evaluator</div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-stage">Analyzer (Late)</div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-stage">Process Validator</div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-stage">Evolver</div>
            </div>
        `;
    }

    showMetrics() {
        const content = document.getElementById('tab-content');
        content.innerHTML = `
            <div class="metrics-dashboard">
                <canvas id="metrics-chart"></canvas>
            </div>
        `;
        this.initMetricsChart();
    }

    showLogs() {
        const content = document.getElementById('tab-content');
        content.innerHTML = `
            <div class="log-viewer">
                <div class="log-entry info">[2026-03-31 15:30:23] System initialized</div>
                <div class="log-entry success">[2026-03-31 15:30:45] All agents connected</div>
                <div class="log-entry info">[2026-03-31 15:31:02] Starting iteration 8</div>
                <div class="log-entry warning">[2026-03-31 15:32:15] High latency detected</div>
                <div class="log-entry info">[2026-03-31 15:33:21] KB write operation initiated</div>
            </div>
        `;
    }

    initCharts() {
        // Initialize Chart.js with dark theme
        Chart.defaults.color = '#e1e8ed';
        Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';
    }

    initPerformanceChart() {
        const ctx = document.getElementById('performance-chart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.iterations.map(i => i.id.replace('iteration_', 'Iter ')).reverse(),
                datasets: [{
                    label: 'Accuracy',
                    data: this.iterations.map(i => i.accuracy).reverse(),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    initAgentPerformanceChart(iterationId) {
        const ctx = document.getElementById(`agent-performance-${iterationId}`);
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Designer', 'Analyzer', 'Generator', 'Evaluator', 'Evolver'],
                datasets: [{
                    label: 'Tasks Completed',
                    data: [234, 456, 345, 289, 167],
                    backgroundColor: '#8b5cf6'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    initMetricsChart() {
        const ctx = document.getElementById('metrics-chart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Speed', 'Accuracy', 'Coverage', 'Quality', 'Efficiency'],
                datasets: [{
                    label: 'Current',
                    data: [85, 94, 78, 91, 88],
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.2)'
                }, {
                    label: 'Target',
                    data: [90, 95, 85, 95, 90],
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)'
                }]
            }
        });
    }

    initAnalyticsCharts() {
        // Accuracy trend
        const accuracyCtx = document.getElementById('accuracy-chart');
        if (accuracyCtx) {
            new Chart(accuracyCtx, {
                type: 'line',
                data: {
                    labels: this.iterations.map(i => i.date).reverse(),
                    datasets: [{
                        label: 'Accuracy %',
                        data: this.iterations.map(i => i.accuracy).reverse(),
                        borderColor: '#3b82f6',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                    }]
                }
            });
        }

        // Task distribution
        const taskCtx = document.getElementById('task-chart');
        if (taskCtx) {
            new Chart(taskCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Completed', 'In Progress', 'Failed', 'Pending'],
                    datasets: [{
                        data: [1234, 234, 45, 123],
                        backgroundColor: ['#10b981', '#3b82f6', '#ef4444', '#6b7280']
                    }]
                }
            });
        }

        // Agent utilization
        const utilizationCtx = document.getElementById('utilization-chart');
        if (utilizationCtx) {
            new Chart(utilizationCtx, {
                type: 'bar',
                data: {
                    labels: this.agents.slice(0, 6).map(a => a.name),
                    datasets: [{
                        label: 'Utilization %',
                        data: [89, 76, 92, 84, 71, 88],
                        backgroundColor: '#8b5cf6'
                    }]
                }
            });
        }

        // KB growth
        const kbCtx = document.getElementById('kb-growth-chart');
        if (kbCtx) {
            new Chart(kbCtx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Art KB',
                        data: [15000, 18000, 22000, 26789],
                        borderColor: '#ec4899'
                    }, {
                        label: 'Meta KB',
                        data: [800, 1200, 1800, 2313],
                        borderColor: '#06b6d4'
                    }]
                }
            });
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardApp = new DashboardApp();
});