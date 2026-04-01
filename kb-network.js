// KB Network Visualization Module
const KBNetwork = {
    // Initialize network visualization
    init(containerId, kbType = 'art') {
        console.log('Initializing KB Network:', containerId, kbType);

        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }

        // Clear existing content
        container.innerHTML = '';

        // Get dimensions
        const width = container.clientWidth || 1000;
        const height = 600;

        // Create SVG
        const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#0a0e1a');

        const g = svg.append('g');

        // Add zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        // Generate nodes and links based on KB type
        let { nodes, links } = this.generateKBData(kbType);

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
            pipeline: '#3b82f6'
        };

        // Create force simulation
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(120))
            .force('charge', d3.forceManyBody().strength(-800))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(50));

        // Add links
        const link = g.append('g')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', d => {
                if (d.type === 'influences') return '#60a5fa';
                if (d.type === 'contains') return '#10b981';
                if (d.type === 'evaluates') return '#ef4444';
                return '#374151';
            })
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', d => d.type ? 3 : 2);

        // Add nodes
        const nodeGroup = g.append('g')
            .selectAll('g')
            .data(nodes)
            .enter().append('g')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        // Add circles
        nodeGroup.append('circle')
            .attr('r', d => {
                if (d.type === 'root') return 40;
                if (d.type === 'iteration') return 30;
                if (d.type === 'task_plan') return 20;
                if (d.type === 'atomic_fact') return 12;
                return 18;
            })
            .attr('fill', d => colorScheme[d.type] || '#6b7280')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .style('cursor', 'pointer');

        // Add labels
        nodeGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', d => {
                if (d.type === 'root') return 55;
                if (d.type === 'iteration') return 45;
                return 35;
            })
            .text(d => d.name)
            .style('fill', '#fff')
            .style('font-size', d => d.type === 'root' ? '14px' : '11px')
            .style('font-weight', d => d.type === 'root' ? '600' : '400');

        // Add hover effects
        nodeGroup.on('mouseover', function(event, d) {
            // Highlight connected links
            link.style('opacity', l => {
                return (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1;
            });

            // Show tooltip
            const tooltip = d3.select('body').append('div')
                .attr('class', 'network-tooltip')
                .style('position', 'absolute')
                .style('background', 'rgba(26, 31, 46, 0.95)')
                .style('border', '1px solid #3b82f6')
                .style('border-radius', '6px')
                .style('padding', '10px')
                .style('color', '#e1e8ed')
                .style('font-size', '12px')
                .style('pointer-events', 'none')
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');

            tooltip.html(`
                <strong>${d.name}</strong><br>
                Type: ${d.type}<br>
                ID: ${d.id}
                ${d.value ? `<br>Value: ${d.value}` : ''}
            `);
        }).on('mouseout', function() {
            link.style('opacity', 0.6);
            d3.selectAll('.network-tooltip').remove();
        });

        // Update positions on tick
        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            nodeGroup
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            if (!d.fixed) {
                d.fx = null;
                d.fy = null;
            }
        }
    },

    // Generate KB data based on type
    generateKBData(kbType) {
        if (kbType === 'art') {
            return this.generateArtKBData();
        } else {
            return this.generateMetaKBData();
        }
    },

    // Generate Art Task Plan KB data
    generateArtKBData() {
        const nodes = [
            {id: 'art_root', name: 'Art Task Plan KB', type: 'root', fixed: true},

            // Iterations
            {id: 'iter8', name: 'Iteration 8 (96%)', type: 'iteration'},
            {id: 'iter7', name: 'Iteration 7 (80%)', type: 'iteration'},
            {id: 'iter6', name: 'Iteration 6 (44%)', type: 'iteration'},
            {id: 'iter5', name: 'Iteration 5 (37%)', type: 'iteration'},

            // Pipeline Components
            {id: 'orchestrator', name: 'Orchestrator', type: 'pipeline'},
            {id: 'designer', name: 'Designer', type: 'pipeline'},
            {id: 'analyzer', name: 'Analyzer', type: 'pipeline'},
            {id: 'generator', name: 'Generator', type: 'pipeline'},
            {id: 'evaluator', name: 'Evaluator', type: 'pipeline'},

            // Task Plans for Iteration 8
            {id: 'cdr_trial1', name: 'CDR Trial 1', type: 'task_plan'},
            {id: 'cdr_trial2', name: 'CDR Trial 2', type: 'task_plan'},
            {id: 'umbra_trial1', name: 'Umbra Trial 1', type: 'task_plan'},
            {id: 'eclipse_trial1', name: 'Eclipse Trial 1', type: 'task_plan'},
            {id: 'pico_trial1', name: 'Pico Trial 1', type: 'task_plan'},

            // Harness Results
            {id: 'harness_cdr1', name: 'CDR Harness: 92%', type: 'harness'},
            {id: 'harness_umbra1', name: 'Umbra Harness: 88%', type: 'harness'},
            {id: 'harness_eclipse1', name: 'Eclipse Harness: 95%', type: 'harness'},

            // Methodology & Strategy
            {id: 'method8', name: 'Methodology v8', type: 'methodology'},
            {id: 'strategy8', name: 'Strategy Iter 8', type: 'strategy'},
            {id: 'analysis8', name: 'Analysis Iter 8', type: 'analysis'},

            // Atomic Facts
            {id: 'fact_success', name: '24/25 Pass Pattern', type: 'atomic_fact', value: '96%'},
            {id: 'fact_cdr', name: 'CDR High Performance', type: 'atomic_fact', value: '92%'},
            {id: 'fact_improve', name: 'Improvement +16%', type: 'atomic_fact', value: 'vs iter7'}
        ];

        const links = [
            // Root connections
            {source: 'art_root', target: 'iter8'},
            {source: 'art_root', target: 'iter7'},
            {source: 'art_root', target: 'iter6'},
            {source: 'art_root', target: 'iter5'},

            // Pipeline connections
            {source: 'art_root', target: 'orchestrator'},
            {source: 'orchestrator', target: 'designer'},
            {source: 'orchestrator', target: 'analyzer'},
            {source: 'orchestrator', target: 'generator'},
            {source: 'orchestrator', target: 'evaluator'},

            // Iteration 8 connections
            {source: 'iter8', target: 'cdr_trial1'},
            {source: 'iter8', target: 'cdr_trial2'},
            {source: 'iter8', target: 'umbra_trial1'},
            {source: 'iter8', target: 'eclipse_trial1'},
            {source: 'iter8', target: 'pico_trial1'},

            // Harness connections
            {source: 'cdr_trial1', target: 'harness_cdr1', type: 'evaluates'},
            {source: 'umbra_trial1', target: 'harness_umbra1', type: 'evaluates'},
            {source: 'eclipse_trial1', target: 'harness_eclipse1', type: 'evaluates'},

            // Methodology & Strategy
            {source: 'iter8', target: 'method8'},
            {source: 'iter8', target: 'strategy8'},
            {source: 'iter8', target: 'analysis8'},

            // Analysis to facts
            {source: 'analysis8', target: 'fact_success', type: 'contains'},
            {source: 'harness_cdr1', target: 'fact_cdr', type: 'contains'},
            {source: 'analysis8', target: 'fact_improve', type: 'contains'},

            // Cross-references
            {source: 'method8', target: 'strategy8', type: 'influences'},
            {source: 'generator', target: 'cdr_trial1', type: 'generates'},
            {source: 'evaluator', target: 'harness_cdr1', type: 'evaluates'}
        ];

        return { nodes, links };
    },

    // Generate Meta Iteration KB data
    generateMetaKBData() {
        const nodes = [
            {id: 'meta_root', name: 'Meta Iteration KB', type: 'root', fixed: true},

            // Meta Iterations
            {id: 'meta1', name: 'Meta Iteration 1', type: 'iteration'},
            {id: 'meta2', name: 'Meta Iteration 2', type: 'iteration'},

            // Evolution Strategies
            {id: 'evol_prompt', name: 'Prompt Evolution', type: 'strategy'},
            {id: 'evol_method', name: 'Method Evolution', type: 'strategy'},
            {id: 'evol_harness', name: 'Harness Evolution', type: 'strategy'},

            // Analyses
            {id: 'trend_analysis', name: 'Trend Analysis', type: 'analysis'},
            {id: 'pattern_analysis', name: 'Pattern Recognition', type: 'analysis'},
            {id: 'perf_analysis', name: 'Performance Analysis', type: 'analysis'},

            // Insights
            {id: 'insight_cdr', name: 'CDR Success Pattern', type: 'atomic_fact', value: '94% avg'},
            {id: 'insight_improve', name: 'Steady Improvement', type: 'atomic_fact', value: '+37% total'},
            {id: 'insight_prompt', name: 'Prompt Optimization', type: 'atomic_fact', value: 'v8 best'}
        ];

        const links = [
            // Root connections
            {source: 'meta_root', target: 'meta1'},
            {source: 'meta_root', target: 'meta2'},

            // Meta 1 connections
            {source: 'meta1', target: 'evol_prompt'},
            {source: 'meta1', target: 'evol_method'},
            {source: 'meta1', target: 'evol_harness'},

            // Meta 2 connections
            {source: 'meta2', target: 'trend_analysis'},
            {source: 'meta2', target: 'pattern_analysis'},
            {source: 'meta2', target: 'perf_analysis'},

            // Analysis to insights
            {source: 'pattern_analysis', target: 'insight_cdr', type: 'contains'},
            {source: 'trend_analysis', target: 'insight_improve', type: 'contains'},
            {source: 'evol_prompt', target: 'insight_prompt', type: 'contains'},

            // Cross-references
            {source: 'evol_prompt', target: 'pattern_analysis', type: 'influences'},
            {source: 'trend_analysis', target: 'evol_method', type: 'influences'}
        ];

        return { nodes, links };
    }
};

// Export for use in dashboard
if (typeof window !== 'undefined') {
    window.KBNetwork = KBNetwork;
}