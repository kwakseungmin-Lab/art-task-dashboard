// Improved KB Network Visualization
// Better spacing, smaller nodes, clearer layout

const KBNetworkImproved = {
    // Initialize improved network visualization
    initNetwork(containerId, kbType = 'art') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const width = container.offsetWidth || 1200;
        const height = container.offsetHeight || 800;

        // Clear existing
        d3.select(`#${containerId}`).selectAll('*').remove();

        // Create SVG with zoom
        const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const g = svg.append('g');

        // Zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        // Generate hierarchical data with better structure
        const data = this.generateHierarchicalData(kbType);

        // Create tree layout with MORE SPACING
        const treeLayout = d3.tree()
            .size([2 * Math.PI, Math.min(width, height) / 2 - 150]) // Increased radius
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

        const root = d3.hierarchy(data);
        treeLayout(root);

        // Transform to center
        const centerX = width / 2;
        const centerY = height / 2;

        // Draw links with thinner lines
        const link = g.append('g')
            .attr('fill', 'none')
            .attr('stroke', '#374151')
            .attr('stroke-opacity', 0.3)
            .attr('stroke-width', 1)
            .selectAll('path')
            .data(root.links())
            .join('path')
            .attr('d', d3.linkRadial()
                .angle(d => d.x)
                .radius(d => d.y * 1.5)) // Increased spacing
            .attr('transform', `translate(${centerX},${centerY})`);

        // Draw nodes with SMALLER circles
        const node = g.append('g')
            .selectAll('circle')
            .data(root.descendants())
            .join('g')
            .attr('transform', d => `translate(${centerX + d.y * 1.5 * Math.cos(d.x - Math.PI / 2)},${centerY + d.y * 1.5 * Math.sin(d.x - Math.PI / 2)})`);

        // Smaller node circles (3-8px based on depth)
        node.append('circle')
            .attr('fill', d => this.getNodeColor(d.data.type))
            .attr('r', d => {
                if (d.depth === 0) return 8; // Root
                if (d.depth === 1) return 6; // Categories
                if (d.depth === 2) return 4; // Sub-categories
                return 3; // Leaf nodes
            })
            .attr('stroke', '#fff')
            .attr('stroke-width', 1);

        // Labels only for important nodes
        node.filter(d => d.depth <= 2) // Only show labels for root and first 2 levels
            .append('text')
            .attr('dy', '0.31em')
            .attr('x', d => d.x < Math.PI === !d.children ? 10 : -10)
            .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
            .attr('transform', d => ((d.x < Math.PI) === !d.children ? '' : 'rotate(180)'))
            .text(d => d.data.name)
            .style('font-size', d => d.depth === 0 ? '12px' : '10px')
            .style('fill', '#94a3b8');

        // Add hover effect
        node.append('title')
            .text(d => `${d.data.name}\nType: ${d.data.type}\nValue: ${d.data.value || 'N/A'}`);

        // Interactive hover
        node.on('mouseover', function(event, d) {
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', function() {
                    const currentR = d3.select(this).attr('r');
                    return parseFloat(currentR) * 1.5;
                })
                .attr('stroke-width', 2);
        })
        .on('mouseout', function(event, d) {
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', d => {
                    if (d.depth === 0) return 8;
                    if (d.depth === 1) return 6;
                    if (d.depth === 2) return 4;
                    return 3;
                })
                .attr('stroke-width', 1);
        });

        // Initial zoom to fit
        svg.call(zoom.transform, d3.zoomIdentity.scale(0.8));
    },

    // Generate hierarchical data with better structure
    generateHierarchicalData(kbType) {
        const isMetaKb = kbType === 'meta';

        return {
            name: isMetaKb ? 'Meta KB' : 'Art KB',
            type: 'root',
            children: [
                {
                    name: 'Pipeline Agents',
                    type: 'category',
                    children: this.generateAgentNodes(isMetaKb)
                },
                {
                    name: 'Iterations',
                    type: 'category',
                    children: this.generateIterationNodes()
                },
                {
                    name: 'Game Results',
                    type: 'category',
                    children: this.generateGameNodes()
                },
                {
                    name: 'Methodology',
                    type: 'category',
                    children: this.generateMethodologyNodes()
                }
            ]
        };
    },

    generateAgentNodes(isMetaKb) {
        const agents = isMetaKb ?
            ['Meta_Orchestrator', 'Strategy_Designer', 'Pattern_Analyzer', 'Evolution_Tracker', 'Performance_Monitor'] :
            ['Orchestrator', 'Designer', 'Analyzer', 'Generator', 'Evaluator', 'Process_Validator', 'Evolver'];

        return agents.map(agent => ({
            name: agent,
            type: 'agent',
            value: 1
        }));
    },

    generateIterationNodes() {
        return Array.from({length: 9}, (_, i) => ({
            name: `Iter ${i}`,
            type: 'iteration',
            value: i === 8 ? 96 : i === 7 ? 100 : i * 12,
            children: [
                { name: `${i === 8 ? 24 : i === 7 ? 25 : Math.floor(i * 3)}/25 Pass`, type: 'result', value: 1 }
            ]
        }));
    },

    generateGameNodes() {
        const games = ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'];
        return games.map(game => ({
            name: game.replace(/_/g, ' '),
            type: 'game',
            children: Array.from({length: 5}, (_, i) => ({
                name: `Trial ${i + 1}`,
                type: 'trial',
                value: 1
            }))
        }));
    },

    generateMethodologyNodes() {
        return Array.from({length: 8}, (_, i) => ({
            name: `v${i + 1}`,
            type: 'methodology',
            value: 1
        }));
    },

    getNodeColor(type) {
        const colors = {
            root: '#8b5cf6',
            category: '#3b82f6',
            agent: '#3b82f6',
            iteration: '#10b981',
            game: '#f59e0b',
            trial: '#fbbf24',
            evaluation: '#ef4444',
            methodology: '#06b6d4',
            result: '#22c55e',
            default: '#64748b'
        };
        return colors[type] || colors.default;
    }
};

// Force-directed layout alternative
KBNetworkImproved.initForceNetwork = function(containerId, kbType = 'art') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const width = container.offsetWidth || 1200;
    const height = container.offsetHeight || 800;

    // Clear existing
    d3.select(`#${containerId}`).selectAll('*').remove();

    // Create SVG
    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const g = svg.append('g');

    // Generate network data
    const nodes = this.generateForceNodes(kbType);
    const links = this.generateForceLinks(nodes);

    // Create force simulation with better spacing
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(80))
        .force('charge', d3.forceManyBody().strength(-300)) // Increased repulsion
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(30)); // Prevent overlap

    // Draw links
    const link = g.append('g')
        .attr('stroke', '#374151')
        .attr('stroke-opacity', 0.3)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', 1);

    // Draw nodes with smaller circles
    const node = g.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    node.append('circle')
        .attr('r', d => {
            if (d.group === 1) return 8; // Agents
            if (d.group === 2) return 6; // Iterations
            return 4; // Others
        })
        .attr('fill', d => this.getNodeColor(d.type));

    node.append('text')
        .text(d => d.name)
        .style('font-size', '10px')
        .style('fill', '#94a3b8')
        .attr('dx', 12)
        .attr('dy', 4);

    // Update positions on tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    // Zoom
    const zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);
};

KBNetworkImproved.generateForceNodes = function(kbType) {
    const nodes = [];
    let id = 0;

    // Add agents
    const agents = kbType === 'meta' ?
        ['Meta_Orchestrator', 'Strategy_Designer', 'Pattern_Analyzer'] :
        ['Orchestrator', 'Designer', 'Analyzer', 'Generator', 'Evaluator'];

    agents.forEach(agent => {
        nodes.push({
            id: `agent_${id++}`,
            name: agent,
            type: 'agent',
            group: 1
        });
    });

    // Add iterations
    for (let i = 0; i <= 8; i++) {
        nodes.push({
            id: `iter_${id++}`,
            name: `Iteration ${i}`,
            type: 'iteration',
            group: 2
        });
    }

    // Add games
    ['Chrome Dino', 'Pico Echo', 'Reflect Academy', 'Slip Down', 'Umbra Scale'].forEach(game => {
        nodes.push({
            id: `game_${id++}`,
            name: game,
            type: 'game',
            group: 3
        });
    });

    return nodes;
};

KBNetworkImproved.generateForceLinks = function(nodes) {
    const links = [];

    // Connect agents in pipeline
    for (let i = 0; i < nodes.filter(n => n.type === 'agent').length - 1; i++) {
        links.push({
            source: `agent_${i}`,
            target: `agent_${i + 1}`
        });
    }

    // Connect iterations
    const iterNodes = nodes.filter(n => n.type === 'iteration');
    for (let i = 0; i < iterNodes.length - 1; i++) {
        links.push({
            source: iterNodes[i].id,
            target: iterNodes[i + 1].id
        });
    }

    return links;
};

// Export for use
if (typeof window !== 'undefined') {
    window.KBNetworkImproved = KBNetworkImproved;
}