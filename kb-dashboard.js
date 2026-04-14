// KB Dashboard Main Logic
// Handles visualization and interaction for Phase 3 KB data

class KBDashboard {
    constructor() {
        this.network = null;
        this.nodes = null;
        this.edges = null;
        this.currentView = 'combined';
        this.physicsEnabled = false;
        this.selectedNode = null;
    }

    // Initialize dashboard
    async init() {
        console.log('Initializing KB Dashboard...');

        // Setup event listeners
        this.setupEventListeners();

        // Load initial data
        await this.loadData('combined');

        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
    }

    // Setup event listeners
    setupEventListeners() {
        // KB selector
        document.querySelectorAll('.kb-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const kb = e.currentTarget.dataset.kb;
                this.switchKB(kb);
            });
        });
    }

    // Switch KB view
    async switchKB(kb) {
        // Update UI
        document.querySelectorAll('.kb-option').forEach(opt => {
            opt.classList.remove('active');
        });
        document.querySelector(`.kb-option[data-kb="${kb}"]`).classList.add('active');

        // Load new data
        this.currentView = kb;
        await this.loadData(kb);
    }

    // Load KB data
    async loadData(view) {
        console.log(`Loading ${view} KB data...`);

        // Show loading
        document.getElementById('loading').style.display = 'block';

        try {
            let graphData;

            if (view === 'combined') {
                graphData = await kbApiClient.getCombinedKBData();
            } else if (view === 'atp') {
                graphData = await kbApiClient.buildNetworkGraph(KBConfig.kbs.atp.id);
            } else if (view === 'meta') {
                graphData = await kbApiClient.buildNetworkGraph(KBConfig.kbs.meta.id);
            }

            // Update network
            this.updateNetwork(graphData);

            // Update stats
            this.updateStats(graphData);

            // Update entity types list
            this.updateEntityTypesList(graphData);

        } catch (error) {
            console.error('Failed to load KB data:', error);
            alert('Failed to load KB data. Please check the console for details.');
        } finally {
            document.getElementById('loading').style.display = 'none';
        }
    }

    // Update network visualization
    updateNetwork(graphData) {
        console.log(`Updating network with ${graphData.nodes.length} nodes and ${graphData.edges.length} edges`);

        // Create DataSets
        this.nodes = new vis.DataSet(graphData.nodes.map(node => ({
            id: node.id,
            label: node.label,
            title: this.createNodeTooltip(node),
            color: {
                background: node.color,
                border: this.darkenColor(node.color),
                highlight: {
                    background: this.lightenColor(node.color),
                    border: node.color
                }
            },
            shape: this.getNodeShape(node.group),
            size: this.getNodeSize(node),
            font: {
                color: '#ffffff',
                size: 12
            },
            ...node.properties
        })));

        this.edges = new vis.DataSet(graphData.edges.map(edge => ({
            id: edge.id,
            from: edge.source,
            to: edge.target,
            label: edge.label,
            title: `${edge.label}`,
            color: {
                color: edge.color || '#666666',
                highlight: edge.color || '#888888'
            },
            arrows: {
                to: {
                    enabled: true,
                    scaleFactor: 0.8
                }
            },
            smooth: {
                type: 'curvedCW',
                roundness: 0.2
            },
            font: {
                size: 10,
                color: '#94a3b8',
                strokeWidth: 3,
                strokeColor: '#0f1419'
            }
        })));

        // Network options
        const options = {
            nodes: {
                borderWidth: 2,
                shadow: true
            },
            edges: {
                width: 2,
                shadow: false,
                smooth: {
                    enabled: true,
                    type: 'dynamic'
                }
            },
            physics: {
                enabled: this.physicsEnabled,
                barnesHut: {
                    gravitationalConstant: -8000,
                    centralGravity: 0.3,
                    springLength: 200,
                    springConstant: 0.04,
                    damping: 0.5
                },
                stabilization: {
                    enabled: true,
                    iterations: 1000
                }
            },
            layout: {
                improvedLayout: true
            },
            interaction: {
                hover: true,
                tooltipDelay: 200,
                hideEdgesOnDrag: true,
                hideNodesOnDrag: false
            }
        };

        // Create or update network
        const container = document.getElementById('network');
        if (!this.network) {
            this.network = new vis.Network(container, {
                nodes: this.nodes,
                edges: this.edges
            }, options);

            // Add event handlers
            this.network.on('click', (params) => {
                if (params.nodes.length > 0) {
                    this.showNodeDetails(params.nodes[0]);
                }
            });

            this.network.on('doubleClick', (params) => {
                if (params.nodes.length > 0) {
                    this.network.focus(params.nodes[0], {
                        scale: 1.5,
                        animation: true
                    });
                }
            });
        } else {
            this.network.setData({
                nodes: this.nodes,
                edges: this.edges
            });
        }
    }

    // Create node tooltip
    createNodeTooltip(node) {
        let tooltip = `<b>${node.label}</b>\n`;
        tooltip += `Type: ${node.type}\n`;
        if (node.kb) {
            tooltip += `KB: ${node.kb}\n`;
        }
        if (node.properties && Object.keys(node.properties).length > 0) {
            tooltip += '\nProperties:\n';
            Object.entries(node.properties).slice(0, 5).forEach(([key, value]) => {
                tooltip += `  ${key}: ${JSON.stringify(value)}\n`;
            });
        }
        return tooltip;
    }

    // Get node shape based on group
    getNodeShape(group) {
        const shapeMap = {
            'execution': 'box',
            'taskplan': 'ellipse',
            'evaluation': 'diamond',
            'version': 'hexagon',
            'iteration': 'circle',
            'evolution': 'star',
            'promotion': 'triangle',
            'policy': 'square',
            'registry': 'dot'
        };
        return shapeMap[group] || 'circle';
    }

    // Get node size based on connections
    getNodeSize(node) {
        // This will be calculated based on actual connections
        // For now, use a default size
        const baseSize = 20;
        if (node.type === 'TaskPlanVersion') {
            return baseSize * 1.5; // Hub nodes are larger
        }
        return baseSize;
    }

    // Show node details
    showNodeDetails(nodeId) {
        const node = this.nodes.get(nodeId);
        if (!node) return;

        const panel = document.getElementById('details-panel');
        const content = document.getElementById('details-content');

        // Build details HTML
        let html = `
            <div class="details-header">
                <h3>${node.label}</h3>
                <div class="details-type">${node.type || 'Unknown Type'}</div>
            </div>
        `;

        // Properties section
        if (node.properties && Object.keys(node.properties).length > 0) {
            html += `
                <div class="details-section">
                    <h4>Properties</h4>
                    ${Object.entries(node.properties).map(([key, value]) => `
                        <div class="property-item">
                            <span class="property-key">${key}:</span>
                            <span class="property-value">${JSON.stringify(value)}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Connected nodes
        const connectedNodes = this.network.getConnectedNodes(nodeId);
        if (connectedNodes.length > 0) {
            html += `
                <div class="details-section">
                    <h4>Connected Nodes (${connectedNodes.length})</h4>
                    ${connectedNodes.slice(0, 10).map(id => {
                        const connectedNode = this.nodes.get(id);
                        return `
                            <div class="property-item">
                                <span class="property-value">${connectedNode.label}</span>
                            </div>
                        `;
                    }).join('')}
                    ${connectedNodes.length > 10 ? `<div style="color: #94a3b8; font-size: 12px; margin-top: 5px;">...and ${connectedNodes.length - 10} more</div>` : ''}
                </div>
            `;
        }

        content.innerHTML = html;
        panel.classList.add('visible');
    }

    // Close details panel
    closeDetails() {
        document.getElementById('details-panel').classList.remove('visible');
    }

    // Update statistics
    updateStats(graphData) {
        const statsContent = document.getElementById('stats-content');

        let html = '';
        if (this.currentView === 'combined') {
            html = `
                <div class="stat-item">
                    <span>Total Entities:</span>
                    <span class="stat-value">${graphData.nodes.length}</span>
                </div>
                <div class="stat-item">
                    <span>Total Relations:</span>
                    <span class="stat-value">${graphData.edges.length}</span>
                </div>
                <div class="stat-item">
                    <span>ATP Entities:</span>
                    <span class="stat-value">${graphData.nodes.filter(n => n.kb === 'ATP').length}</span>
                </div>
                <div class="stat-item">
                    <span>META Entities:</span>
                    <span class="stat-value">${graphData.nodes.filter(n => n.kb === 'META').length}</span>
                </div>
            `;
        } else {
            const kbName = this.currentView.toUpperCase();
            html = `
                <div class="stat-item">
                    <span>Entities:</span>
                    <span class="stat-value">${graphData.nodes.length}</span>
                </div>
                <div class="stat-item">
                    <span>Relations:</span>
                    <span class="stat-value">${graphData.edges.length}</span>
                </div>
                <div class="stat-item">
                    <span>KB:</span>
                    <span class="stat-value">${kbName}</span>
                </div>
            `;
        }

        statsContent.innerHTML = html;
    }

    // Update entity types list
    updateEntityTypesList(graphData) {
        const typeCounts = {};
        graphData.nodes.forEach(node => {
            const type = node.type || 'Unknown';
            typeCounts[type] = (typeCounts[type] || 0) + 1;
        });

        const listEl = document.getElementById('entity-types-list');
        listEl.innerHTML = Object.entries(typeCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([type, count]) => `
                <div class="stat-item" style="font-size: 12px;">
                    <span>${type}:</span>
                    <span class="stat-value">${count}</span>
                </div>
            `).join('');
    }

    // Refresh data
    async refreshData() {
        kbApiClient.clearCache();
        await this.loadData(this.currentView);
    }

    // Reset view
    resetView() {
        if (this.network) {
            this.network.fit({
                animation: true
            });
        }
    }

    // Toggle physics
    togglePhysics() {
        this.physicsEnabled = !this.physicsEnabled;
        if (this.network) {
            this.network.setOptions({
                physics: { enabled: this.physicsEnabled }
            });
        }
    }

    // Clear cache
    clearCache() {
        kbApiClient.clearCache();
        alert('Cache cleared successfully');
    }

    // Change layout
    changeLayout(layout) {
        if (!this.network) return;

        let options = {};

        switch(layout) {
            case 'hierarchical':
                options = {
                    layout: {
                        hierarchical: {
                            direction: 'UD',
                            sortMethod: 'directed',
                            levelSeparation: 150,
                            nodeSpacing: 100
                        }
                    }
                };
                break;
            case 'circular':
                // Arrange nodes in a circle
                const nodeIds = this.nodes.getIds();
                const updates = [];
                const radius = 500;
                nodeIds.forEach((id, index) => {
                    const angle = (2 * Math.PI * index) / nodeIds.length;
                    updates.push({
                        id: id,
                        x: radius * Math.cos(angle),
                        y: radius * Math.sin(angle)
                    });
                });
                this.nodes.update(updates);
                this.network.fit();
                return;
            default:
                options = {
                    layout: {
                        hierarchical: false
                    }
                };
        }

        this.network.setOptions(options);
    }

    // Color utilities
    lightenColor(color) {
        const amount = 20;
        const num = parseInt(color.replace('#', ''), 16);
        const r = Math.min(255, (num >> 16) + amount);
        const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
        const b = Math.min(255, (num & 0x0000FF) + amount);
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }

    darkenColor(color) {
        const amount = 30;
        const num = parseInt(color.replace('#', ''), 16);
        const r = Math.max(0, (num >> 16) - amount);
        const g = Math.max(0, ((num >> 8) & 0x00FF) - amount);
        const b = Math.max(0, (num & 0x0000FF) - amount);
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }
}

// Create global dashboard instance
const dashboard = new KBDashboard();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KBDashboard;
}