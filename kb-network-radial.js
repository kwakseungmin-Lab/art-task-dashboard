// KB Network Radial Visualization Module
const KBNetworkRadial = {
    // Initialize radial network visualization
    init(containerId, kbType = 'art') {
        console.log('Initializing KB Radial Network:', containerId, kbType);

        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }

        // Clear existing content
        container.innerHTML = '';

        // Get dimensions
        const width = Math.min(container.clientWidth || 900, 900);
        const height = 700;
        const centerX = width / 2;
        const centerY = height / 2;

        // Create SVG
        const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', 'linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%)');

        const g = svg.append('g')
            .attr('transform', `translate(${centerX}, ${centerY})`);

        // Add zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.3, 5])
            .on('zoom', (event) => {
                g.attr('transform', `translate(${centerX}, ${centerY}) scale(${event.transform.k})`);
            });

        svg.call(zoom);

        // Generate radial layout data
        const data = this.generateRadialData(kbType);

        // Create hierarchy
        const root = d3.hierarchy(data)
            .sum(d => d.value || 1);

        // Create radial tree layout
        const treeLayout = d3.tree()
            .size([2 * Math.PI, Math.min(width, height) / 2 - 100])
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

        treeLayout(root);

        // Color scheme
        const colorScheme = {
            root: '#9333ea',
            iteration: '#f59e0b',
            task_plan: '#60a5fa',
            harness: '#ef4444',
            methodology: '#10b981',
            strategy: '#a855f7',
            analysis: '#ec4899',
            atomic_fact: '#6b7280',
            pipeline: '#3b82f6',
            category: '#22d3ee'
        };

        // Draw links
        const link = g.selectAll('.link')
            .data(root.links())
            .enter().append('path')
            .attr('class', 'link')
            .attr('d', d3.linkRadial()
                .angle(d => d.x)
                .radius(d => d.y))
            .style('fill', 'none')
            .style('stroke', '#374151')
            .style('stroke-opacity', 0.4)
            .style('stroke-width', 1.5);

        // Draw nodes
        const node = g.selectAll('.node')
            .data(root.descendants())
            .enter().append('g')
            .attr('class', d => `node ${d.data.type}`)
            .attr('transform', d => `
                rotate(${d.x * 180 / Math.PI - 90})
                translate(${d.y},0)
            `);

        // Add circles
        node.append('circle')
            .attr('r', d => {
                if (d.depth === 0) return 30;  // Root
                if (d.depth === 1) return 20;  // Categories
                if (d.depth === 2) return 12;  // Sub-categories
                return 8;  // Leaves
            })
            .style('fill', d => colorScheme[d.data.type] || '#6b7280')
            .style('stroke', '#fff')
            .style('stroke-width', 2)
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                // Highlight path to root
                highlightPath(d);
                showTooltip(event, d);
            })
            .on('mouseout', function() {
                resetHighlight();
                hideTooltip();
            });

        // Add text labels
        node.append('text')
            .attr('dy', '0.31em')
            .attr('x', d => d.x < Math.PI === !d.children ? 6 : -6)
            .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
            .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
            .text(d => d.data.name)
            .style('font-size', d => {
                if (d.depth === 0) return '14px';
                if (d.depth === 1) return '12px';
                return '10px';
            })
            .style('fill', '#e1e8ed')
            .style('font-weight', d => d.depth <= 1 ? '600' : '400');

        // Helper functions
        function highlightPath(node) {
            const ancestors = node.ancestors();

            link.style('stroke', d => {
                if (ancestors.includes(d.source) && ancestors.includes(d.target)) {
                    return '#60a5fa';
                }
                return '#374151';
            })
            .style('stroke-opacity', d => {
                if (ancestors.includes(d.source) && ancestors.includes(d.target)) {
                    return 1;
                }
                return 0.2;
            })
            .style('stroke-width', d => {
                if (ancestors.includes(d.source) && ancestors.includes(d.target)) {
                    return 3;
                }
                return 1.5;
            });
        }

        function resetHighlight() {
            link.style('stroke', '#374151')
                .style('stroke-opacity', 0.4)
                .style('stroke-width', 1.5);
        }

        function showTooltip(event, d) {
            const tooltip = d3.select('body').append('div')
                .attr('class', 'kb-tooltip')
                .style('position', 'absolute')
                .style('background', 'rgba(26, 31, 46, 0.98)')
                .style('border', '1px solid #3b82f6')
                .style('border-radius', '8px')
                .style('padding', '12px')
                .style('color', '#e1e8ed')
                .style('font-size', '13px')
                .style('pointer-events', 'none')
                .style('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.4)')
                .style('z-index', 10000);

            let content = `
                <div style="font-weight: 600; color: #60a5fa; margin-bottom: 8px;">${d.data.name}</div>
                <div style="color: #94a3b8;">Type: ${d.data.type}</div>
                <div style="color: #94a3b8;">Depth: Level ${d.depth}</div>
            `;

            if (d.data.value) {
                content += `<div style="color: #10b981; margin-top: 4px;">Value: ${d.data.value}</div>`;
            }

            if (d.data.count) {
                content += `<div style="color: #f59e0b; margin-top: 4px;">Count: ${d.data.count}</div>`;
            }

            tooltip.html(content)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
        }

        function hideTooltip() {
            d3.selectAll('.kb-tooltip').remove();
        }

        // Add center label
        g.append('text')
            .attr('class', 'center-label')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .text(kbType === 'art' ? 'Art Task Plan KB' : 'Meta Iteration KB')
            .style('font-size', '16px')
            .style('font-weight', '700')
            .style('fill', '#fff');

        // Add stats around the center
        if (kbType === 'art') {
            const stats = [
                { label: '26,789', desc: 'Entities' },
                { label: '1,585', desc: 'Relations' },
                { label: '96%', desc: 'Success' }
            ];

            stats.forEach((stat, i) => {
                const angle = (i * 120 - 90) * Math.PI / 180;
                const radius = 60;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const statGroup = g.append('g')
                    .attr('transform', `translate(${x}, ${y})`);

                statGroup.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('dy', '-0.3em')
                    .text(stat.label)
                    .style('font-size', '20px')
                    .style('font-weight', '700')
                    .style('fill', '#60a5fa');

                statGroup.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('dy', '1em')
                    .text(stat.desc)
                    .style('font-size', '11px')
                    .style('fill', '#94a3b8');
            });
        }
    },

    // Generate hierarchical data for radial layout
    generateRadialData(kbType) {
        if (kbType === 'art') {
            return {
                name: 'Art Task Plan KB\n26,789 entities',
                type: 'root',
                children: [
                    {
                        name: 'Iterations (9)',
                        type: 'category',
                        children: [
                            {
                                name: 'Iter 8 (96%)',
                                type: 'iteration',
                                value: '24/25 PASS',
                                children: [
                                    {
                                        name: 'Chrome_Dino_Runner',
                                        type: 'task_plan',
                                        children: [
                                            { name: 'Trial 1: PASS', type: 'atomic_fact' },
                                            { name: 'Trial 2: PASS', type: 'atomic_fact' },
                                            { name: 'Trial 3: PASS', type: 'atomic_fact' },
                                            { name: 'Trial 4: PASS', type: 'atomic_fact' },
                                            { name: 'Trial 5: PASS', type: 'atomic_fact' }
                                        ]
                                    },
                                    {
                                        name: 'Pico_Echo',
                                        type: 'task_plan',
                                        children: [
                                            { name: 'All 5 Trials PASS', type: 'atomic_fact' }
                                        ]
                                    },
                                    {
                                        name: 'reflect_academy',
                                        type: 'task_plan',
                                        children: [
                                            { name: 'Trial 1: FAIL (IF-4)', type: 'harness' },
                                            { name: '4 Trials PASS', type: 'atomic_fact' }
                                        ]
                                    },
                                    { name: 'slip_down: 5/5', type: 'task_plan' },
                                    { name: 'umbra_scale: 5/5', type: 'task_plan' }
                                ]
                            },
                            {
                                name: 'Iter 7 (100%)',
                                type: 'iteration',
                                value: '25/25 PASS',
                                children: [
                                    { name: '5 Games', type: 'task_plan' },
                                    { name: '25 Trials', type: 'task_plan' },
                                    { name: 'All PASS', type: 'atomic_fact' }
                                ]
                            },
                            { name: 'Iter 6 (84%)', type: 'iteration' },
                            { name: 'Iter 5 (72%)', type: 'iteration' },
                            { name: 'Iter 4 (56%)', type: 'iteration' },
                            { name: 'Iter 3 (44%)', type: 'iteration' },
                            { name: 'Iter 2 (28%)', type: 'iteration' },
                            { name: 'Iter 1 (12%)', type: 'iteration' },
                            { name: 'Iter 0 (Baseline)', type: 'iteration' }
                        ]
                    },
                    {
                        name: 'Pipeline',
                        type: 'category',
                        children: [
                            { name: 'Orchestrator', type: 'pipeline' },
                            { name: 'Designer', type: 'pipeline' },
                            { name: 'Analyzer', type: 'pipeline' },
                            { name: 'Generator', type: 'pipeline' },
                            { name: 'Evaluator', type: 'pipeline' },
                            { name: 'Process Validator', type: 'pipeline' },
                            { name: 'Evolver', type: 'pipeline' }
                        ]
                    },
                    {
                        name: 'Methodology',
                        type: 'category',
                        children: [
                            { name: 'v8 Latest', type: 'methodology' },
                            { name: 'v7 Previous', type: 'methodology' },
                            { name: 'v6 Archive', type: 'methodology' }
                        ]
                    },
                    {
                        name: 'Harness Results',
                        type: 'category',
                        children: [
                            { name: 'CDR: 92%', type: 'harness' },
                            { name: 'Umbra: 88%', type: 'harness' },
                            { name: 'Eclipse: 95%', type: 'harness' },
                            { name: 'Pico: 91%', type: 'harness' },
                            { name: 'Nebula: 94%', type: 'harness' }
                        ]
                    },
                    {
                        name: 'Analysis',
                        type: 'category',
                        children: [
                            { name: 'Performance Trends', type: 'analysis' },
                            { name: 'Success Patterns', type: 'analysis' },
                            { name: 'Failure Analysis', type: 'analysis' }
                        ]
                    },
                    {
                        name: 'Atomic Facts',
                        type: 'category',
                        children: [
                            { name: '26,313 Facts', type: 'atomic_fact' },
                            { name: 'High Confidence', type: 'atomic_fact' },
                            { name: 'Validated', type: 'atomic_fact' }
                        ]
                    }
                ]
            };
        } else {
            return {
                name: 'Meta Iteration KB',
                type: 'root',
                children: [
                    {
                        name: 'Meta Iterations',
                        type: 'category',
                        children: [
                            { name: 'Meta Iter 1', type: 'iteration' },
                            { name: 'Meta Iter 2', type: 'iteration' }
                        ]
                    },
                    {
                        name: 'Evolution',
                        type: 'category',
                        children: [
                            { name: 'Prompt Evolution', type: 'strategy' },
                            { name: 'Method Evolution', type: 'strategy' },
                            { name: 'Harness Evolution', type: 'strategy' }
                        ]
                    },
                    {
                        name: 'Analysis',
                        type: 'category',
                        children: [
                            { name: 'Trend Analysis', type: 'analysis' },
                            { name: 'Pattern Recognition', type: 'analysis' },
                            { name: 'Performance Analysis', type: 'analysis' }
                        ]
                    },
                    {
                        name: 'Insights',
                        type: 'category',
                        children: [
                            { name: '+37% Improvement', type: 'atomic_fact' },
                            { name: 'CDR Excellence', type: 'atomic_fact' },
                            { name: 'Optimization Success', type: 'atomic_fact' }
                        ]
                    }
                ]
            };
        }
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.KBNetworkRadial = KBNetworkRadial;
}