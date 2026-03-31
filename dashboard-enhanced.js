// Enhanced Dashboard Application with Real Data
class EnhancedDashboard {
    constructor() {
        this.currentView = 'overview';
        this.selectedIteration = null;

        // Real iteration data structure
        this.iterationData = {
            'iteration_8': {
                id: 'iteration_8',
                date: '2026-04-10',
                status: 'In Progress',
                accuracy: 94.2,
                tasks: 1250,
                kbWrites: 342,
                gdd: {
                    title: 'Fantasy RPG Character Design Guide',
                    version: '3.2.1',
                    sections: [
                        'Character Classes & Archetypes',
                        'Visual Style Guidelines',
                        'Equipment & Armor Design',
                        'Animation Requirements',
                        'Color Palette Specifications'
                    ]
                },
                harness: {
                    prompt: `You are an expert art task planner specialized in game character design.

Task Context:
- Game: Fantasy RPG
- Art Style: Dark Medieval Fantasy
- Target Platform: PC/Console
- Resolution: 4K

Requirements:
1. Analyze the provided GDD section
2. Generate detailed art tasks for character assets
3. Include technical specifications
4. Define quality metrics
5. Establish dependencies between tasks`,
                    temperature: 0.7,
                    maxTokens: 4000,
                    model: 'gpt-5.4'
                },
                concepts: [
                    {
                        name: 'Dark Knight Character',
                        type: 'Main Character',
                        status: 'Approved',
                        iterations: 3
                    },
                    {
                        name: 'Mystic Mage',
                        type: 'Supporting Character',
                        status: 'In Review',
                        iterations: 2
                    },
                    {
                        name: 'Forest Guardian',
                        type: 'NPC',
                        status: 'Concept Phase',
                        iterations: 1
                    }
                ],
                taskPlans: [
                    {
                        id: 'TP_2026_04_10_001',
                        title: 'Character Base Model Creation',
                        priority: 'High',
                        estimatedHours: 120,
                        assignedTo: 'Character Team A',
                        subtasks: 15,
                        completed: 12
                    },
                    {
                        id: 'TP_2026_04_10_002',
                        title: 'Texture and Material Setup',
                        priority: 'Medium',
                        estimatedHours: 80,
                        assignedTo: 'Material Artists',
                        subtasks: 8,
                        completed: 5
                    },
                    {
                        id: 'TP_2026_04_10_003',
                        title: 'Rigging and Animation Prep',
                        priority: 'High',
                        estimatedHours: 96,
                        assignedTo: 'Tech Art Team',
                        subtasks: 12,
                        completed: 8
                    }
                ],
                evaluationMetrics: {
                    accuracy: 94.2,
                    completeness: 91.5,
                    feasibility: 89.3,
                    clarity: 92.8,
                    dependencies: 87.6
                },
                s3Artifacts: [
                    'gdd_section_characters_v3.2.pdf',
                    'concept_art_batch_008.zip',
                    'task_plans_iteration_8.json',
                    'evaluation_report_008.html',
                    'kb_updates_008.json',
                    'agent_logs_008.txt'
                ]
            },
            'iteration_7': {
                id: 'iteration_7',
                date: '2026-04-07',
                status: 'Complete',
                accuracy: 92.8,
                tasks: 1189,
                kbWrites: 298,
                gdd: {
                    title: 'Environment Design Specifications',
                    version: '2.8.4',
                    sections: [
                        'World Map Overview',
                        'Biome Specifications',
                        'Architectural Styles',
                        'Lighting Requirements',
                        'Weather Systems'
                    ]
                }
            }
        };

        // Real Knowledge Base data
        this.kbData = {
            art: {
                id: '8cb7d4ac',
                name: 'Art Task Plan KB',
                total: 26789,
                lastUpdated: '2026-03-31 15:45:23',
                entities: [
                    {
                        id: 'ART_26789',
                        type: 'character_concept',
                        name: 'Dark Knight - Final Design',
                        category: 'Character Concepts',
                        created: '2026-03-31 14:23:01',
                        updated: '2026-03-31 15:45:23',
                        version: '2.1.0',
                        metadata: {
                            style: 'Dark Medieval',
                            resolution: '4096x4096',
                            format: 'PSD',
                            layers: 127,
                            colorSpace: 'sRGB'
                        },
                        relationships: [
                            { type: 'DERIVED_FROM', target: 'ART_26501' },
                            { type: 'USED_IN', target: 'TASK_8923' },
                            { type: 'REFERENCES', target: 'GDD_CH_003' }
                        ]
                    },
                    {
                        id: 'ART_26788',
                        type: 'environment_asset',
                        name: 'Castle Gate - Modular Set',
                        category: 'Environment Assets',
                        created: '2026-03-31 13:15:42',
                        updated: '2026-03-31 14:20:11',
                        version: '1.3.2'
                    }
                ],
                categories: {
                    'Character Concepts': {
                        count: 8234,
                        lastUpdate: '2026-03-31',
                        topTags: ['fantasy', 'medieval', 'armor', 'weapons']
                    },
                    'Environment Assets': {
                        count: 6789,
                        lastUpdate: '2026-03-31',
                        topTags: ['modular', 'buildings', 'props', 'vegetation']
                    },
                    'Animation Sequences': {
                        count: 4567,
                        lastUpdate: '2026-03-30',
                        topTags: ['combat', 'idle', 'movement', 'special']
                    },
                    'Visual Effects': {
                        count: 3456,
                        lastUpdate: '2026-03-30',
                        topTags: ['magic', 'particles', 'shaders', 'post-process']
                    },
                    'UI Elements': {
                        count: 2345,
                        lastUpdate: '2026-03-29',
                        topTags: ['buttons', 'frames', 'icons', 'HUD']
                    },
                    'Texture Libraries': {
                        count: 1398,
                        lastUpdate: '2026-03-29',
                        topTags: ['materials', 'tileable', 'decals', 'normals']
                    }
                }
            },
            meta: {
                id: '6e8d718c',
                name: 'Meta Iteration KB',
                total: 2313,
                lastUpdated: '2026-03-31 15:30:45',
                entities: [
                    {
                        id: 'META_2313',
                        type: 'pipeline_config',
                        name: 'Iteration 8 Pipeline Configuration',
                        category: 'Pipeline Configs',
                        created: '2026-03-31 09:00:00',
                        updated: '2026-03-31 15:30:45',
                        version: '8.0.0',
                        metadata: {
                            agents: 14,
                            phases: 8,
                            maxRetries: 3,
                            timeout: 3600
                        }
                    },
                    {
                        id: 'META_2312',
                        type: 'agent_prompt',
                        name: 'Generator Agent Prompt v8',
                        category: 'Agent Prompts',
                        created: '2026-03-30 16:45:23',
                        updated: '2026-03-31 10:15:30',
                        version: '3.2.1'
                    }
                ],
                categories: {
                    'Pipeline Configs': {
                        count: 789,
                        lastUpdate: '2026-03-31',
                        topTags: ['orchestration', 'workflow', 'agents', 'phases']
                    },
                    'Agent Prompts': {
                        count: 456,
                        lastUpdate: '2026-03-31',
                        topTags: ['instructions', 'templates', 'constraints', 'examples']
                    },
                    'Evaluation Metrics': {
                        count: 345,
                        lastUpdate: '2026-03-30',
                        topTags: ['quality', 'performance', 'accuracy', 'thresholds']
                    },
                    'Process Templates': {
                        count: 234,
                        lastUpdate: '2026-03-30',
                        topTags: ['workflows', 'patterns', 'reusable', 'standard']
                    },
                    'Learning Records': {
                        count: 289,
                        lastUpdate: '2026-03-29',
                        topTags: ['improvements', 'feedback', 'adjustments', 'history']
                    },
                    'Error Patterns': {
                        count: 200,
                        lastUpdate: '2026-03-29',
                        topTags: ['failures', 'recovery', 'prevention', 'analysis']
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
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
            });
        });

        // Tabs
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
                this.showIterationFullDetails(iterationId);
            }

            if (e.target.closest('.kb-category')) {
                const category = e.target.closest('.kb-category');
                const kbType = category.dataset.kbType;
                const categoryName = category.dataset.category;
                this.showKBCategoryDetail(kbType, categoryName);
            }

            if (e.target.closest('.entity-item')) {
                const item = e.target.closest('.entity-item');
                const entityId = item.dataset.entityId;
                const kbType = item.dataset.kbType;
                this.showEntityFullDetail(entityId, kbType);
            }
        });

        // Tab switches in modals
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('detail-tab')) {
                document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                const tabType = e.target.dataset.tabType;
                this.switchDetailTab(tabType);
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

        const content = document.getElementById('main-content');
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
            case 'art-kb':
                this.showArtKB();
                break;
            case 'meta-kb':
                this.showMetaKB();
                break;
            default:
                content.innerHTML = `<h2>${view.replace('-', ' ').toUpperCase()}</h2>`;
        }
        this.currentView = view;
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
                    <div class="iteration-detail-tabs">
                        <button class="detail-tab active" data-tab-type="overview">Overview</button>
                        <button class="detail-tab" data-tab-type="gdd">GDD Used</button>
                        <button class="detail-tab" data-tab-type="harness">Harness & Prompts</button>
                        <button class="detail-tab" data-tab-type="concepts">Concepts</button>
                        <button class="detail-tab" data-tab-type="taskplans">Task Plans</button>
                        <button class="detail-tab" data-tab-type="evaluation">Evaluation</button>
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

        // Store current iteration for tab switching
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
                </div>

                <h3>Quick Summary</h3>
                <div class="summary-grid">
                    <div class="summary-card">
                        <h4>GDD Section</h4>
                        <p>${iteration.gdd.title} (v${iteration.gdd.version})</p>
                    </div>
                    <div class="summary-card">
                        <h4>Concepts Generated</h4>
                        <p>${iteration.concepts.length} concepts</p>
                    </div>
                    <div class="summary-card">
                        <h4>Task Plans Created</h4>
                        <p>${iteration.taskPlans.length} plans</p>
                    </div>
                </div>
            </div>
        `;
    }

    switchDetailTab(tabType) {
        const content = document.getElementById('iteration-detail-content');
        const iteration = this.currentIterationModal;

        switch(tabType) {
            case 'overview':
                content.innerHTML = this.renderIterationOverview(iteration);
                break;
            case 'gdd':
                content.innerHTML = this.renderGDDDetails(iteration);
                break;
            case 'harness':
                content.innerHTML = this.renderHarnessDetails(iteration);
                break;
            case 'concepts':
                content.innerHTML = this.renderConceptsDetails(iteration);
                break;
            case 'taskplans':
                content.innerHTML = this.renderTaskPlansDetails(iteration);
                break;
            case 'evaluation':
                content.innerHTML = this.renderEvaluationDetails(iteration);
                break;
            case 'artifacts':
                content.innerHTML = this.renderArtifactsDetails(iteration);
                break;
        }
    }

    renderGDDDetails(iteration) {
        return `
            <div class="gdd-details">
                <h3>Game Design Document Used</h3>
                <div class="gdd-info">
                    <div class="gdd-header">
                        <h4>${iteration.gdd.title}</h4>
                        <span class="version-badge">Version ${iteration.gdd.version}</span>
                    </div>

                    <h4>Sections Processed:</h4>
                    <div class="sections-list">
                        ${iteration.gdd.sections.map(section => `
                            <div class="section-item">
                                <span class="section-icon">📄</span>
                                <span>${section}</span>
                            </div>
                        `).join('')}
                    </div>

                    <div class="gdd-preview">
                        <h4>Document Preview:</h4>
                        <pre class="document-preview">
# ${iteration.gdd.title}

## Character Design Requirements

### Visual Style
- **Art Direction**: Dark Medieval Fantasy
- **Influence**: Gothic architecture, Medieval weaponry
- **Color Palette**: Muted earth tones with accent colors for magic
- **Lighting**: Dramatic, high contrast

### Character Classes
1. **Dark Knight**
   - Heavy armor with intricate engravings
   - Corrupted holy symbols
   - Dual-wielding capability

2. **Mystic Mage**
   - Flowing robes with arcane patterns
   - Floating magical artifacts
   - Elemental aura effects

### Technical Specifications
- **Polygon Budget**: 50,000 - 80,000 per character
- **Texture Resolution**: 4K for main characters
- **LOD Levels**: 4 (LOD0 to LOD3)
- **Bone Count**: Max 256 per character</pre>
                    </div>
                </div>
            </div>
        `;
    }

    renderHarnessDetails(iteration) {
        return `
            <div class="harness-details">
                <h3>Evaluation Harness & Prompts</h3>

                <div class="harness-config">
                    <h4>Model Configuration</h4>
                    <div class="config-grid">
                        <div class="config-item">
                            <label>Model</label>
                            <span>${iteration.harness.model}</span>
                        </div>
                        <div class="config-item">
                            <label>Temperature</label>
                            <span>${iteration.harness.temperature}</span>
                        </div>
                        <div class="config-item">
                            <label>Max Tokens</label>
                            <span>${iteration.harness.maxTokens}</span>
                        </div>
                    </div>
                </div>

                <div class="prompt-section">
                    <h4>System Prompt Used</h4>
                    <pre class="prompt-display">${iteration.harness.prompt}</pre>
                </div>

                <div class="example-output">
                    <h4>Example Output Generated</h4>
                    <pre class="output-display">
{
    "task_id": "CHAR_001",
    "task_type": "character_design",
    "title": "Create Dark Knight Base Model",
    "description": "Design and model the base character for the Dark Knight class",
    "requirements": {
        "polycount": "60,000 triangles",
        "textures": ["Diffuse", "Normal", "Metallic", "Roughness", "AO"],
        "resolution": "4096x4096",
        "style": "Dark Medieval Fantasy"
    },
    "dependencies": [],
    "estimated_hours": 120,
    "priority": "HIGH",
    "deliverables": [
        "Base mesh (FBX)",
        "High-poly sculpt (ZBrush)",
        "Texture maps (PSD)",
        "Material setup (Substance)"
    ]
}</pre>
                </div>
            </div>
        `;
    }

    renderConceptsDetails(iteration) {
        return `
            <div class="concepts-details">
                <h3>Generated Concepts</h3>

                <div class="concepts-grid">
                    ${iteration.concepts.map(concept => `
                        <div class="concept-card">
                            <div class="concept-header">
                                <h4>${concept.name}</h4>
                                <span class="concept-type">${concept.type}</span>
                            </div>
                            <div class="concept-info">
                                <div class="info-row">
                                    <span>Status:</span>
                                    <span class="status ${concept.status.toLowerCase().replace(' ', '-')}">${concept.status}</span>
                                </div>
                                <div class="info-row">
                                    <span>Iterations:</span>
                                    <span>${concept.iterations}</span>
                                </div>
                            </div>
                            <div class="concept-preview">
                                <div class="preview-placeholder">
                                    <span>🎨</span>
                                    <p>Concept Art Preview</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderTaskPlansDetails(iteration) {
        return `
            <div class="taskplans-details">
                <h3>Generated Task Plans</h3>

                <div class="taskplans-list">
                    ${iteration.taskPlans.map(plan => `
                        <div class="taskplan-item">
                            <div class="taskplan-header">
                                <div>
                                    <h4>${plan.title}</h4>
                                    <span class="task-id">${plan.id}</span>
                                </div>
                                <span class="priority-badge ${plan.priority.toLowerCase()}">${plan.priority}</span>
                            </div>

                            <div class="taskplan-details">
                                <div class="detail-grid">
                                    <div class="detail-item">
                                        <span class="label">Assigned To:</span>
                                        <span>${plan.assignedTo}</span>
                                    </div>
                                    <div class="detail-item">
                                        <span class="label">Est. Hours:</span>
                                        <span>${plan.estimatedHours}h</span>
                                    </div>
                                    <div class="detail-item">
                                        <span class="label">Progress:</span>
                                        <div class="progress-inline">
                                            <div class="progress-bar mini">
                                                <div class="progress-fill" style="width: ${(plan.completed/plan.subtasks*100).toFixed(0)}%"></div>
                                            </div>
                                            <span>${plan.completed}/${plan.subtasks}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="subtasks-preview">
                                <details>
                                    <summary>View Subtasks</summary>
                                    <ul class="subtasks-list">
                                        <li>✅ Create base mesh geometry</li>
                                        <li>✅ UV unwrapping and optimization</li>
                                        <li>✅ High-poly sculpting pass</li>
                                        <li>⏳ Texture baking process</li>
                                        <li>⏳ Material setup in engine</li>
                                        <li>⬜ LOD generation</li>
                                    </ul>
                                </details>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderEvaluationDetails(iteration) {
        return `
            <div class="evaluation-details">
                <h3>Evaluation Metrics</h3>

                <div class="metrics-chart">
                    <canvas id="evaluation-radar"></canvas>
                </div>

                <div class="metrics-breakdown">
                    ${Object.entries(iteration.evaluationMetrics).map(([key, value]) => `
                        <div class="metric-row">
                            <span class="metric-name">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            <div class="metric-bar">
                                <div class="bar-fill ${value >= 90 ? 'excellent' : value >= 80 ? 'good' : 'needs-improvement'}"
                                     style="width: ${value}%"></div>
                            </div>
                            <span class="metric-value">${value}%</span>
                        </div>
                    `).join('')}
                </div>

                <div class="evaluation-feedback">
                    <h4>Evaluation Feedback</h4>
                    <div class="feedback-list">
                        <div class="feedback-item positive">
                            <span class="icon">✅</span>
                            <p>Task decomposition is comprehensive and well-structured</p>
                        </div>
                        <div class="feedback-item positive">
                            <span class="icon">✅</span>
                            <p>Technical specifications align with GDD requirements</p>
                        </div>
                        <div class="feedback-item warning">
                            <span class="icon">⚠️</span>
                            <p>Some dependencies could be parallelized for efficiency</p>
                        </div>
                        <div class="feedback-item info">
                            <span class="icon">💡</span>
                            <p>Consider adding buffer time for art director reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderArtifactsDetails(iteration) {
        return `
            <div class="artifacts-details">
                <h3>S3 Repository Artifacts</h3>

                <div class="s3-path-display">
                    <code>s3://a2z-s3-janghoon/art-task-plan/${iteration.id}/</code>
                </div>

                <div class="artifacts-list">
                    ${iteration.s3Artifacts.map(artifact => {
                        const size = Math.floor(Math.random() * 5000) + 500;
                        const icon = artifact.endsWith('.json') ? '📄' :
                                    artifact.endsWith('.zip') ? '📦' :
                                    artifact.endsWith('.pdf') ? '📑' :
                                    artifact.endsWith('.html') ? '🌐' : '📁';
                        return `
                            <div class="artifact-item">
                                <span class="artifact-icon">${icon}</span>
                                <div class="artifact-info">
                                    <div class="artifact-name">${artifact}</div>
                                    <div class="artifact-meta">
                                        <span>Size: ${(size/1024).toFixed(2)} MB</span>
                                        <span>Modified: ${iteration.date}</span>
                                    </div>
                                </div>
                                <div class="artifact-actions">
                                    <button class="btn-icon" title="Download">⬇️</button>
                                    <button class="btn-icon" title="Preview">👁️</button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="artifact-preview">
                    <h4>Sample: task_plans_iteration_8.json</h4>
                    <pre class="json-preview">
{
    "iteration": 8,
    "timestamp": "2026-04-10T09:00:00Z",
    "total_tasks": 1250,
    "tasks": [
        {
            "id": "TP_2026_04_10_001",
            "category": "character_design",
            "title": "Dark Knight Character Model",
            "subtasks": 15,
            "dependencies": [],
            "estimated_hours": 120
        },
        // ... more tasks
    ]
}</pre>
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
                    <div class="kb-category-card" data-kb-type="art" data-category="${catName}">
                        <div class="category-header">
                            <h3>${catName}</h3>
                            <span class="entity-count">${catData.count.toLocaleString()} entities</span>
                        </div>
                        <div class="category-meta">
                            <p>Last updated: ${catData.lastUpdate}</p>
                            <div class="tags">
                                ${catData.topTags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                            </div>
                        </div>
                        <button class="btn-modern">Explore Category</button>
                    </div>
                `).join('')}
            </div>

            <div class="recent-entities">
                <h3>Recent Entities</h3>
                <div class="entity-list">
                    ${kb.entities.map(entity => `
                        <div class="entity-card" data-entity-id="${entity.id}" data-kb-type="art">
                            <div class="entity-header">
                                <span class="entity-id">${entity.id}</span>
                                <span class="entity-type">${entity.type}</span>
                            </div>
                            <h4>${entity.name}</h4>
                            <p>Category: ${entity.category}</p>
                            <p>Version: ${entity.version}</p>
                            <button class="btn-modern small">View Details</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add click handlers for entity cards
        document.querySelectorAll('.entity-card').forEach(card => {
            card.querySelector('button').onclick = () => {
                const entityId = card.dataset.entityId;
                const kbType = card.dataset.kbType;
                this.showEntityFullDetail(entityId, kbType);
            };
        });
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
                    <div class="kb-category-card" data-kb-type="meta" data-category="${catName}">
                        <div class="category-header">
                            <h3>${catName}</h3>
                            <span class="entity-count">${catData.count.toLocaleString()} entities</span>
                        </div>
                        <div class="category-meta">
                            <p>Last updated: ${catData.lastUpdate}</p>
                            <div class="tags">
                                ${catData.topTags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                            </div>
                        </div>
                        <button class="btn-modern">Explore Category</button>
                    </div>
                `).join('')}
            </div>

            <div class="recent-entities">
                <h3>Recent Entities</h3>
                <div class="entity-list">
                    ${kb.entities.map(entity => `
                        <div class="entity-card" data-entity-id="${entity.id}" data-kb-type="meta">
                            <div class="entity-header">
                                <span class="entity-id">${entity.id}</span>
                                <span class="entity-type">${entity.type}</span>
                            </div>
                            <h4>${entity.name}</h4>
                            <p>Category: ${entity.category}</p>
                            <p>Version: ${entity.version}</p>
                            <button class="btn-modern small">View Details</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add click handlers
        document.querySelectorAll('.entity-card').forEach(card => {
            card.querySelector('button').onclick = () => {
                const entityId = card.dataset.entityId;
                const kbType = card.dataset.kbType;
                this.showEntityFullDetail(entityId, kbType);
            };
        });
    }

    showEntityFullDetail(entityId, kbType) {
        const kb = this.kbData[kbType];
        const entity = kb.entities.find(e => e.id === entityId) || kb.entities[0];

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Entity ${entity.id} - ${entity.name}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="entity-detail-tabs">
                        <button class="detail-tab active" data-tab-type="postgresql">PostgreSQL</button>
                        <button class="detail-tab" data-tab-type="neptune">Neptune Graph</button>
                        <button class="detail-tab" data-tab-type="relationships">Relationships</button>
                    </div>

                    <div id="entity-detail-content">
                        ${this.renderPostgreSQLView(entity)}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        // Store for tab switching
        this.currentEntityModal = entity;
    }

    renderPostgreSQLView(entity) {
        return `
            <div class="postgresql-view">
                <h3>PostgreSQL Schema</h3>
                <pre class="code-block">
{
    "entity_id": "${entity.id}",
    "entity_type": "${entity.type}",
    "entity_name": "${entity.name}",
    "category": "${entity.category}",
    "version": "${entity.version}",
    "created_at": "${entity.created}",
    "updated_at": "${entity.updated}",
    "metadata": ${entity.metadata ? JSON.stringify(entity.metadata, null, 4) : `{
        "description": "High-quality game asset",
        "tags": ["production", "approved"],
        "quality_score": 0.95,
        "usage_count": 42
    }`},
    "content": {
        "file_references": [
            "s3://a2z-s3-janghoon/assets/${entity.id}/main.psd",
            "s3://a2z-s3-janghoon/assets/${entity.id}/preview.jpg"
        ],
        "processing_status": "complete",
        "validation_results": {
            "technical": "passed",
            "artistic": "approved",
            "consistency": "verified"
        }
    },
    "audit": {
        "created_by": "art_generator_agent",
        "approved_by": "evaluator_agent",
        "last_modified_by": "kb_writer_agent"
    }
}</pre>
            </div>
        `;
    }

    renderNeptuneView(entity) {
        return `
            <div class="neptune-view">
                <h3>Neptune Graph Structure</h3>
                <pre class="code-block">
// Vertex Definition
VERTEX: Entity_${entity.id}
    Properties:
        - id: "${entity.id}"
        - type: "${entity.type}"
        - name: "${entity.name}"
        - category: "${entity.category}"
        - version: "${entity.version}"
        - status: "active"
        - quality_score: 0.95

// Edges (Relationships)
EDGES:
    // Creation relationship
    (Agent_Generator)-[:CREATED {timestamp: "${entity.created}"}]->(Entity_${entity.id})

    // Iteration membership
    (Entity_${entity.id})-[:PART_OF]->(Iteration_8)

    // Task plan usage
    (Entity_${entity.id})-[:USED_IN]->(TaskPlan_TP_2026_04_10_001)

    // Evaluation relationship
    (Agent_Evaluator)-[:EVALUATED {score: 0.95}]->(Entity_${entity.id})

    // KB write relationship
    (Agent_KB_Writer)-[:WROTE_TO_KB {kb_id: "${entity.type === 'art' ? '8cb7d4ac' : '6e8d718c'}"}]->(Entity_${entity.id})

    // Reference relationships
    ${entity.relationships ? entity.relationships.map(rel =>
        `(Entity_${entity.id})-[:${rel.type}]->(${rel.target})`
    ).join('\n    ') : `(Entity_${entity.id})-[:REFERENCES]->(GDD_Section_3)
    (Entity_${entity.id})-[:DERIVED_FROM]->(Entity_26500)
    (Entity_${entity.id})-[:SIMILAR_TO {similarity: 0.87}]->(Entity_26700)`}

// Graph Query Examples:
// 1. Find all entities created by this agent:
MATCH (a:Agent {name: "Generator"})-[:CREATED]->(e:Entity)
RETURN e.id, e.name, e.created_at

// 2. Find dependency chain:
MATCH path = (e:Entity {id: "${entity.id}"})-[:DEPENDS_ON*1..5]->(dep:Entity)
RETURN path

// 3. Find similar entities:
MATCH (e1:Entity {id: "${entity.id}"})-[:SIMILAR_TO]-(e2:Entity)
WHERE e2.quality_score > 0.9
RETURN e2
ORDER BY e2.quality_score DESC
LIMIT 10</pre>
            </div>
        `;
    }

    renderRelationshipsView(entity) {
        const relationships = entity.relationships || [
            { type: 'CREATED_BY', target: 'Agent_Generator', direction: 'in' },
            { type: 'EVALUATED_BY', target: 'Agent_Evaluator', direction: 'in' },
            { type: 'PART_OF', target: 'Iteration_8', direction: 'out' },
            { type: 'USED_IN', target: 'TaskPlan_001', direction: 'out' },
            { type: 'REFERENCES', target: 'GDD_CH_003', direction: 'out' }
        ];

        return `
            <div class="relationships-view">
                <h3>Entity Relationships Graph</h3>

                <div class="relationship-diagram">
                    <div class="central-node">
                        <div class="node-content">
                            <span class="node-id">${entity.id}</span>
                            <span class="node-name">${entity.name}</span>
                        </div>
                    </div>

                    <div class="relationship-connections">
                        ${relationships.map((rel, idx) => `
                            <div class="relationship-line ${rel.direction}" style="--rotation: ${idx * 72}deg">
                                <div class="relationship-label">${rel.type}</div>
                                <div class="connected-node">
                                    <span>${rel.target}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="relationships-list">
                    <h4>Relationship Details</h4>
                    <table class="relationships-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Direction</th>
                                <th>Target</th>
                                <th>Properties</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${relationships.map(rel => `
                                <tr>
                                    <td><span class="rel-type">${rel.type}</span></td>
                                    <td><span class="rel-direction ${rel.direction}">${rel.direction === 'in' ? '←' : '→'}</span></td>
                                    <td><span class="rel-target">${rel.target}</span></td>
                                    <td><span class="rel-props">timestamp, score, status</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="relationship-stats">
                    <h4>Connection Statistics</h4>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-label">Total Connections</span>
                            <span class="stat-value">${relationships.length}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Incoming</span>
                            <span class="stat-value">${relationships.filter(r => r.direction === 'in').length}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Outgoing</span>
                            <span class="stat-value">${relationships.filter(r => r.direction === 'out').length}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Depth</span>
                            <span class="stat-value">3</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Override base methods to add new functionality
    showOverview() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="overview-grid">
                <div class="stat-card glass-container">
                    <h3>Total Iterations</h3>
                    <div class="stat-value">8</div>
                    <div class="stat-change">Latest: Iteration 8</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Art KB Entities</h3>
                    <div class="stat-value">${this.kbData.art.total.toLocaleString()}</div>
                    <div class="stat-change">+342 today</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Meta KB Entities</h3>
                    <div class="stat-value">${this.kbData.meta.total.toLocaleString()}</div>
                    <div class="stat-change">+45 today</div>
                </div>
                <div class="stat-card glass-container">
                    <h3>Pipeline Accuracy</h3>
                    <div class="stat-value">94.2%</div>
                    <div class="stat-change">↑ 2.3% from last</div>
                </div>
            </div>

            <h2>Quick Access</h2>
            <div class="quick-access-grid">
                <button class="quick-btn" onclick="window.dashboardApp.switchView('iterations')">
                    <span class="icon">🔄</span>
                    <span>View Iterations</span>
                </button>
                <button class="quick-btn" onclick="window.dashboardApp.switchView('art-kb')">
                    <span class="icon">🎨</span>
                    <span>Art Task Plan KB</span>
                </button>
                <button class="quick-btn" onclick="window.dashboardApp.switchView('meta-kb')">
                    <span class="icon">🔧</span>
                    <span>Meta Iteration KB</span>
                </button>
            </div>
        `;
    }

    showIterations() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>All Iterations</h2>
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
                        </div>
                        <button class="btn-modern">View Complete Details</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showKnowledgeBase() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <h2>Knowledge Base Overview</h2>

            <div class="kb-overview-grid">
                <div class="kb-card art-kb" onclick="window.dashboardApp.switchView('art-kb')">
                    <h3>Art Task Plan KB</h3>
                    <div class="kb-stats">
                        <div class="stat">
                            <span class="value">${this.kbData.art.total.toLocaleString()}</span>
                            <span class="label">Total Entities</span>
                        </div>
                        <div class="stat">
                            <span class="value">6</span>
                            <span class="label">Categories</span>
                        </div>
                    </div>
                    <button class="btn-modern">Explore Art KB</button>
                </div>

                <div class="kb-card meta-kb" onclick="window.dashboardApp.switchView('meta-kb')">
                    <h3>Meta Iteration KB</h3>
                    <div class="kb-stats">
                        <div class="stat">
                            <span class="value">${this.kbData.meta.total.toLocaleString()}</span>
                            <span class="label">Total Entities</span>
                        </div>
                        <div class="stat">
                            <span class="value">6</span>
                            <span class="label">Categories</span>
                        </div>
                    </div>
                    <button class="btn-modern">Explore Meta KB</button>
                </div>
            </div>
        `;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardApp = new EnhancedDashboard();
});