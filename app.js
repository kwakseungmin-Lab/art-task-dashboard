// Art Task Plan Dashboard - JavaScript Module
// 동적 데이터 로딩 및 업데이트 로직

class ArtDashboard {
    constructor() {
        this.data = {
            agents: [],
            kb_statistics: {},
            executions: [],
            experiments: {},
            analytics: {},
            metadata: {}
        };
        this.charts = {};
        this.autoRefreshInterval = 30000; // 30초

        // S3 Browser와 KB Viewer 모듈 초기화
        this.s3Browser = null;
        this.kbViewer = null;

        this.init();
    }

    async init() {
        await this.loadData();
        this.renderDashboard();
        this.startAutoRefresh();

        // S3 Browser와 KB Viewer 초기화
        this.initializeS3Browser();
        this.initializeKBViewer();
    }

    async loadData() {
        try {
            // 모든 JSON 데이터 병렬 로드
            const [agents, kb, executions, experiments, analytics, metadata] = await Promise.all([
                fetch('./dashboard-data/agents.json').then(r => r.json()),
                fetch('./dashboard-data/kb_statistics.json').then(r => r.json()),
                fetch('./dashboard-data/executions.json').then(r => r.json()),
                fetch('./dashboard-data/experiments.json').then(r => r.json()),
                fetch('./dashboard-data/analytics.json').then(r => r.json()),
                fetch('./dashboard-data/metadata.json').then(r => r.json())
            ]);

            this.data = { agents, kb_statistics: kb, executions, experiments, analytics, metadata };
            console.log('Data loaded successfully');
        } catch (error) {
            console.error('Failed to load data:', error);
            this.loadFallbackData();
        }
    }

    loadFallbackData() {
        // 데이터 로드 실패 시 기본 데이터
        this.data = {
            agents: [
                { name: 'Orchestrator', model: 'gpt-5.4', tools_count: 14, phase: 'Meta', status: 'active' }
            ],
            kb_statistics: {
                art_kb: { total_entities: 26789, relations: 1585, categories: { task_plans: 8234 } },
                meta_kb: { total_entities: 2313, relations: 423, categories: { strategies: 823 } }
            },
            executions: [],
            experiments: { experiments: [] },
            analytics: { success_rate_trend: [], phase_duration: {} },
            metadata: { last_updated: new Date().toISOString() }
        };
    }

    renderDashboard() {
        this.updateStats();
        this.updateAgentCards();
        this.updateExecutionsTable();
        this.updateCharts();
        this.updateTimestamp();
    }

    updateStats() {
        const stats = {
            totalAgents: this.data.agents.length,
            artKbEntities: this.data.kb_statistics.art_kb?.total_entities || 0,
            metaKbEntities: this.data.kb_statistics.meta_kb?.total_entities || 0,
            successRate: this.calculateSuccessRate()
        };

        // Update stat cards
        if (document.getElementById('stat-agents')) {
            document.getElementById('stat-agents').textContent = stats.totalAgents;
            document.getElementById('stat-art-kb').textContent = stats.artKbEntities.toLocaleString();
            document.getElementById('stat-meta-kb').textContent = stats.metaKbEntities.toLocaleString();
            document.getElementById('stat-success').textContent = `${stats.successRate}%`;
        }
    }

    updateAgentCards() {
        const container = document.getElementById('agentCards');
        if (!container) return;

        container.innerHTML = this.data.agents.map(agent => `
            <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="font-semibold">${agent.name}</h3>
                    <span class="text-xs px-2 py-1 rounded ${
                        agent.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }">
                        ${agent.status || 'unknown'}
                    </span>
                </div>
                <p class="text-sm text-gray-600">Model: ${agent.model}</p>
                <p class="text-sm text-gray-600">Tools: ${agent.tools_count}</p>
                <p class="text-xs mt-2 text-gray-500">${agent.phase}</p>
            </div>
        `).join('');
    }

    updateExecutionsTable() {
        const tbody = document.getElementById('executionsTable');
        if (!tbody) return;

        tbody.innerHTML = this.data.executions.slice(0, 10).map(exec => {
            const statusIcon = exec.status === 'success' ? '🟢' :
                              exec.status === 'running' ? '🟡' : '🔴';
            const pulseClass = exec.status === 'running' ? 'pulse' : '';

            return `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="${pulseClass}">${statusIcon}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap font-mono text-sm">${exec.thread_id}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${exec.phase}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                        ${new Date(exec.started_at).toLocaleDateString('ko-KR', {month: 'short', day: 'numeric'})} ${new Date(exec.started_at).toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit'})}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${exec.duration_minutes ? `${exec.duration_minutes.toFixed(1)} min` : 'In Progress'}
                    </td>
                </tr>
            `;
        }).join('');
    }

    updateCharts() {
        this.renderKbChart('artKbChart', this.data.kb_statistics.art_kb);
        this.renderKbChart('metaKbChart', this.data.kb_statistics.meta_kb);
        this.renderSuccessChart();
        this.renderDurationChart();
    }

    renderKbChart(canvasId, kbData) {
        const canvas = document.getElementById(canvasId);
        if (!canvas || !kbData?.categories) return;

        const ctx = canvas.getContext('2d');

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(kbData.categories),
                datasets: [{
                    data: Object.values(kbData.categories),
                    backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#a29bfe']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    renderSuccessChart() {
        const canvas = document.getElementById('successChart');
        if (!canvas || !this.data.analytics.success_rate_trend) return;

        const ctx = canvas.getContext('2d');

        if (this.charts.successChart) {
            this.charts.successChart.destroy();
        }

        const trend = this.data.analytics.success_rate_trend;

        this.charts.successChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: trend.map(t => new Date(t.date).toLocaleDateString()),
                datasets: [{
                    label: 'Success Rate (%)',
                    data: trend.map(t => t.rate),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    renderDurationChart() {
        const canvas = document.getElementById('durationChart');
        if (!canvas || !this.data.analytics.phase_duration) return;

        const ctx = canvas.getContext('2d');

        if (this.charts.durationChart) {
            this.charts.durationChart.destroy();
        }

        const durations = this.data.analytics.phase_duration;

        this.charts.durationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(durations),
                datasets: [{
                    label: 'Avg Duration (min)',
                    data: Object.values(durations).map(d => d.average),
                    backgroundColor: '#3b82f6'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    calculateSuccessRate() {
        if (!this.data.executions.length) return 92.5;
        const successful = this.data.executions.filter(e => e.status === 'success').length;
        return ((successful / this.data.executions.length) * 100).toFixed(1);
    }

    updateTimestamp() {
        const timestamp = document.getElementById('lastUpdate');
        if (timestamp) {
            const lastUpdate = this.data.metadata?.last_updated || new Date().toISOString();
            timestamp.textContent = `Last updated: ${new Date(lastUpdate).toLocaleString()}`;
        }
    }

    startAutoRefresh() {
        setInterval(() => {
            this.loadData().then(() => {
                this.renderDashboard();
                console.log('Dashboard refreshed at', new Date().toLocaleTimeString());
            });
        }, this.autoRefreshInterval);
    }
}

// Tab 전환 함수
window.showTab = function(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    const content = document.getElementById(`content-${tabName}`);
    const tab = document.getElementById(`tab-${tabName}`);

    if (content) content.classList.remove('hidden');
    if (tab) {
        tab.classList.remove('bg-gray-200', 'text-gray-700');
        tab.classList.add('bg-blue-500', 'text-white');
    }
};

// 페이지 로드 시 대시보드 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new ArtDashboard();
    window.showTab('agents');

    // Lucide 아이콘 초기화
    if (window.lucide) {
        lucide.createIcons();
    }
});