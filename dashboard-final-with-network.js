// Art Task Plan Pipeline - Final Dashboard with Network Visualization for KB pages
// Complete KB structure and S3 content viewer with network visualization

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
            totalEntities: 2313,
            totalRelations: 728,
            structured: 60,
            atomicFacts: 1544,
            backend: "AWS Neptune"
        }
    },

    // Real Art Task Plan KB Entities
    artKbEntities: {
        // 1. Pipeline Configuration (25 entities)
        pipelineConfig: [
            // Agents (8)
            { entity_id: "atp_agent_orchestrator", type: "agent", role: "총괄", description: "파이프라인 전체를 2-phase로 조율" },
            { entity_id: "atp_agent_designer", type: "agent", role: "설계", description: "방법론 자산(프롬프트/기준표/지표/컨셉) 생성" },
            { entity_id: "atp_agent_generator", type: "agent", role: "생성", description: "게임 1개 단위로 trial_1~trial_5 Task Plan 생성" },
            { entity_id: "atp_agent_evaluator", type: "agent", role: "평가", description: "Task Plan 평가 및 교차/역방향 검증 수행" },
            { entity_id: "atp_agent_analyzer", type: "agent", role: "분석", description: "평가 결과 기반 이터레이션 표준 문서 생성" },
            { entity_id: "atp_agent_process_validator", type: "agent", role: "검증", description: "postmortem 모드로 전체 과정 검증" },
            { entity_id: "atp_agent_evolver", type: "agent", role: "개선", description: "실패 원인 분석 후 에이전트 프롬프트 수정" },
            { entity_id: "atp_agent_protocols", type: "agent", role: "규약", description: "에이전트 규약 요약" },

            // Path Variables (2)
            { entity_id: "atp_path_exp_root", type: "path", template: "iterations/iteration_{iteration}" },
            { entity_id: "atp_path_repo_root", type: "path", template: "Repository/Art_Task_Plan" },

            // Pipeline Steps (7)
            { entity_id: "atp_pipeline_execution_order_6_steps", type: "step", order: 0, name: "전체 실행 순서" },
            { entity_id: "atp_pipeline_step_01_designer", type: "step", order: 1, name: "방법론 자산 준비" },
            { entity_id: "atp_pipeline_step_02_analyzer_early", type: "step", order: 2, name: "표준문서 3개 생성" },
            { entity_id: "atp_pipeline_step_03_generator", type: "step", order: 3, name: "Task Plan 생성" },
            { entity_id: "atp_pipeline_step_04_evaluator", type: "step", order: 4, name: "교차/역방향 검증" },
            { entity_id: "atp_pipeline_step_05_analyzer_late", type: "step", order: 5, name: "표준문서 5개 생성" },
            { entity_id: "atp_pipeline_step_06_process_validator", type: "step", order: 6, name: "postmortem 검증" }
        ],

        // 2. Evaluation Results - iter8 Run 2 (25 entities)
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

    // KB Relations
    kbRelations: {
        artKb: [
            { type: "SAME_BATCH", count: 48, meaning: "같은 게임/이터레이션의 평가 결과 묶음" },
            { type: "PRODUCES", count: 47, meaning: "Task Plan → Trial 결과 (생성 관계)" },
            { type: "EVALUATED_BY", count: 47, meaning: "Trial 결과 → 평가 (레거시)" },
            { type: "belongs_to", count: 38, meaning: "엔티티가 특정 실행에 소속" },
            { type: "evaluated", count: 25, meaning: "Harness가 Task Plan을 평가" },
            { type: "generated_by", count: 12, meaning: "Task Plan → Generator 스레드" }
        ],
        metaKb: [
            { type: "occurred_in", count: 1, meaning: "인시던트가 해당 실행에서 발생" },
            { type: "analyzes", count: 1, meaning: "분석이 해당 실행을 분석" },
            { type: "applied_to", count: 1, meaning: "전략이 해당 실행에 적용" },
            { type: "belongs_to", count: 1, meaning: "평가 요약이 해당 실행에 소속" }
        ]
    },

    // Current network visualization state
    currentKBView: 'radial',
    networkSvg: null,
    networkZoom: null,

    // Initialize the dashboard
    init() {
        console.log('Initializing Art Task Plan Final Dashboard');
        this.bindEvents();
        this.loadOverview();
    },

    // Bind events
    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                e.currentTarget.classList.add('active');

                const view = e.currentTarget.getAttribute('data-view');
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
            });
        });
    },

    // Load Art Task Plan KB with Network Visualization
    loadArtKB() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="kb-header">
                <h2>Art Task Plan KB - Network Visualization</h2>
                <div class="kb-stats">
                    <div class="stat">
                        <div class="label">Total Entities</div>
                        <div class="value">${this.kbConfig.artKb.totalEntities.toLocaleString()}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Atomic Facts</div>
                        <div class="value">${this.kbConfig.artKb.atomicFacts.toLocaleString()}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Relations</div>
                        <div class="value">${this.kbConfig.artKb.totalRelations.toLocaleString()}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Success Rate</div>
                        <div class="value">96%</div>
                    </div>
                </div>
            </div>
            <div class="controls" style="margin: 20px 0; text-align: center;">
                <button class="btn active" onclick="DashboardApp.switchKBView('radial')" style="padding: 8px 16px; margin: 0 5px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Radial View</button>
                <button class="btn" onclick="DashboardApp.switchKBView('force')" style="padding: 8px 16px; margin: 0 5px; background: rgba(59, 130, 246, 0.2); color: #3b82f6; border: 1px solid #3b82f6; border-radius: 4px; cursor: pointer;">Force Network</button>
                <button class="btn" onclick="DashboardApp.resetZoom()" style="padding: 8px 16px; margin: 0 5px; background: rgba(59, 130, 246, 0.2); color: #3b82f6; border: 1px solid #3b82f6; border-radius: 4px; cursor: pointer;">Reset Zoom</button>
            </div>
            <div id="art-kb-network" style="width: 100%; height: 700px; border-radius: 12px; background: linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%);"></div>
        `;

        setTimeout(() => {
            this.initRadialNetwork('art-kb-network', 'art');
        }, 100);
    },

    // Load Meta Iteration KB with Network Visualization
    loadMetaKB() {
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="kb-header">
                <h2>Meta Iteration KB - Network Visualization</h2>
                <div class="kb-stats">
                    <div class="stat">
                        <div class="label">Total Entities</div>
                        <div class="value">${this.kbConfig.metaKb.totalEntities.toLocaleString()}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Atomic Facts</div>
                        <div class="value">${this.kbConfig.metaKb.atomicFacts.toLocaleString()}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Relations</div>
                        <div class="value">${this.kbConfig.metaKb.totalRelations.toLocaleString()}</div>
                    </div>
                    <div class="stat">
                        <div class="label">Improvement</div>
                        <div class="value">+37%</div>
                    </div>
                </div>
            </div>
            <div class="controls" style="margin: 20px 0; text-align: center;">
                <button class="btn active" onclick="DashboardApp.switchKBView('radial')" style="padding: 8px 16px; margin: 0 5px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Radial View</button>
                <button class="btn" onclick="DashboardApp.switchKBView('force')" style="padding: 8px 16px; margin: 0 5px; background: rgba(59, 130, 246, 0.2); color: #3b82f6; border: 1px solid #3b82f6; border-radius: 4px; cursor: pointer;">Force Network</button>
                <button class="btn" onclick="DashboardApp.resetZoom()" style="padding: 8px 16px; margin: 0 5px; background: rgba(59, 130, 246, 0.2); color: #3b82f6; border: 1px solid #3b82f6; border-radius: 4px; cursor: pointer;">Reset Zoom</button>
            </div>
            <div id="meta-kb-network" style="width: 100%; height: 700px; border-radius: 12px; background: linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%);"></div>
        `;

        setTimeout(() => {
            this.initRadialNetwork('meta-kb-network', 'meta');
        }, 100);
    },

    // Switch KB View
    switchKBView(viewType) {
        this.currentKBView = viewType;

        // Update button states
        document.querySelectorAll('.controls .btn').forEach(btn => {
            btn.style.background = 'rgba(59, 130, 246, 0.2)';
            btn.style.color = '#3b82f6';
            btn.style.border = '1px solid #3b82f6';
        });
        event.target.style.background = '#3b82f6';
        event.target.style.color = 'white';
        event.target.style.border = 'none';

        // Determine which KB is active
        const container = document.querySelector('#art-kb-network') || document.querySelector('#meta-kb-network');
        if (!container) return;

        const kbType = container.id === 'art-kb-network' ? 'art' : 'meta';

        if (viewType === 'radial') {
            this.initRadialNetwork(container.id, kbType);
        } else {
            this.initForceNetwork(container.id, kbType);
        }
    },

    // Reset zoom
    resetZoom() {
        if (this.networkSvg && this.networkZoom) {
            this.networkSvg.transition().duration(750).call(this.networkZoom.transform, d3.zoomIdentity);
        }
    },

    // Initialize Radial Network
    initRadialNetwork(containerId, kbType) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear existing
        container.innerHTML = '';

        const width = container.clientWidth;
        const height = 700;
        const centerX = width / 2;
        const centerY = height / 2;

        // Create SVG
        this.networkSvg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const g = this.networkSvg.append('g')
            .attr('transform', `translate(${centerX}, ${centerY})`);

        // Add zoom
        this.networkZoom = d3.zoom()
            .scaleExtent([0.3, 5])
            .on('zoom', (event) => {
                g.attr('transform', `translate(${centerX}, ${centerY}) scale(${event.transform.k})`);
            });

        this.networkSvg.call(this.networkZoom);

        // Generate data
        const data = this.generateRadialData(kbType);

        // Create hierarchy
        const root = d3.hierarchy(data)
            .sum(d => d.value || 1);

        // Create radial tree layout
        const treeLayout = d3.tree()
            .size([2 * Math.PI, Math.min(width, height) / 2 - 150])
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
                if (d.depth === 0) return 35;
                if (d.depth === 1) return 25;
                if (d.depth === 2) return 15;
                return 10;
            })
            .style('fill', d => colorScheme[d.data.type] || '#6b7280')
            .style('stroke', '#fff')
            .style('stroke-width', 2)
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
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
                if (d.depth === 0) return '16px';
                if (d.depth === 1) return '14px';
                if (d.depth === 2) return '12px';
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
                .style('z-index', '10000')
                .html(`
                    <div style="font-weight: 600; color: #60a5fa; margin-bottom: 8px;">${d.data.name}</div>
                    <div style="color: #94a3b8;">Type: ${d.data.type}</div>
                    <div style="color: #94a3b8;">Depth: Level ${d.depth}</div>
                    ${d.data.value ? `<div style="color: #10b981; margin-top: 4px;">Value: ${d.data.value}</div>` : ''}
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
        }

        function hideTooltip() {
            d3.selectAll('.kb-tooltip').remove();
        }
    },

    // Generate radial data
    generateRadialData(kbType) {
        if (kbType === 'art') {
            return {
                name: 'Art Task Plan KB',
                type: 'root',
                children: [
                    {
                        name: 'Iterations (0-8)',
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
                                        children: Array(5).fill().map((_, i) => ({
                                            name: `Trial ${i+1}: PASS`,
                                            type: 'atomic_fact'
                                        }))
                                    },
                                    {
                                        name: 'Pico_Echo',
                                        type: 'task_plan',
                                        children: [{ name: 'All 5 Trials PASS', type: 'atomic_fact' }]
                                    },
                                    {
                                        name: 'reflect_academy',
                                        type: 'task_plan',
                                        children: [
                                            { name: 'Trial 1: FAIL', type: 'harness' },
                                            { name: '4 Trials PASS', type: 'atomic_fact' }
                                        ]
                                    },
                                    { name: 'slip_down: 5/5', type: 'task_plan' },
                                    { name: 'umbra_scale: 5/5', type: 'task_plan' }
                                ]
                            },
                            { name: 'Iter 7 (100%)', type: 'iteration', value: '25/25 PASS' },
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
                        name: 'Pipeline Agents',
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
                        name: 'Harness Results',
                        type: 'category',
                        children: [
                            { name: 'CDR: 92%', type: 'harness' },
                            { name: 'Umbra: 88%', type: 'harness' },
                            { name: 'Eclipse: 95%', type: 'harness' },
                            { name: 'Pico: 91%', type: 'harness' }
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
    },

    // Force network layout (alternative view)
    initForceNetwork(containerId, kbType) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear existing
        container.innerHTML = '';

        const width = container.clientWidth;
        const height = 700;

        // Create SVG
        this.networkSvg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const g = this.networkSvg.append('g');

        // Add zoom
        this.networkZoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        this.networkSvg.call(this.networkZoom);

        // Generate force network data
        const { nodes, links } = this.generateForceData(kbType);

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

        // Create simulation
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(120))
            .force('charge', d3.forceManyBody().strength(-800))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(50));

        // Draw links
        const link = g.append('g')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', '#374151')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', 2);

        // Draw nodes
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
                if (d.type === 'task_plan') return 25;
                return 20;
            })
            .attr('fill', d => colorScheme[d.type] || '#6b7280')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .style('cursor', 'pointer');

        // Add labels
        nodeGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', d => d.type === 'root' ? 55 : 35)
            .text(d => d.name)
            .style('fill', '#fff')
            .style('font-size', '11px');

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
            d.fx = null;
            d.fy = null;
        }
    },

    // Generate force network data
    generateForceData(kbType) {
        if (kbType === 'art') {
            const nodes = [
                {id: 'root', name: 'Art Task Plan KB', type: 'root'},
                {id: 'iter8', name: 'Iteration 8 (96%)', type: 'iteration'},
                {id: 'iter7', name: 'Iteration 7 (100%)', type: 'iteration'},
                {id: 'orchestrator', name: 'Orchestrator', type: 'pipeline'},
                {id: 'designer', name: 'Designer', type: 'pipeline'},
                {id: 'generator', name: 'Generator', type: 'pipeline'},
                {id: 'cdr', name: 'Chrome_Dino_Runner', type: 'task_plan'},
                {id: 'pico', name: 'Pico_Echo', type: 'task_plan'},
                {id: 'reflect', name: 'reflect_academy', type: 'task_plan'}
            ];

            const links = [
                {source: 'root', target: 'iter8'},
                {source: 'root', target: 'iter7'},
                {source: 'root', target: 'orchestrator'},
                {source: 'orchestrator', target: 'designer'},
                {source: 'orchestrator', target: 'generator'},
                {source: 'iter8', target: 'cdr'},
                {source: 'iter8', target: 'pico'},
                {source: 'iter8', target: 'reflect'}
            ];

            return { nodes, links };
        } else {
            const nodes = [
                {id: 'root', name: 'Meta Iteration KB', type: 'root'},
                {id: 'meta1', name: 'Meta Iter 1', type: 'iteration'},
                {id: 'meta2', name: 'Meta Iter 2', type: 'iteration'},
                {id: 'prompt_evol', name: 'Prompt Evolution', type: 'strategy'},
                {id: 'trend', name: 'Trend Analysis', type: 'analysis'}
            ];

            const links = [
                {source: 'root', target: 'meta1'},
                {source: 'root', target: 'meta2'},
                {source: 'meta1', target: 'prompt_evol'},
                {source: 'meta2', target: 'trend'}
            ];

            return { nodes, links };
        }
    },

    // Other existing methods (loadOverview, loadIterations, etc.) remain the same...
    // [Include all other existing methods from the original dashboard-final.js]
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DashboardApp.init());
} else {
    DashboardApp.init();
}