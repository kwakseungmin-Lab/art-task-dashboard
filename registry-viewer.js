// Registry Viewer for Art Task Dashboard
// 자동으로 Registry 데이터를 읽어서 대시보드에 표시

const RegistryViewer = {
    registryData: null,

    async loadRegistry() {
        try {
            // Master registry 로드
            const response = await fetch('registry/master_registry.json');
            if (!response.ok) {
                console.log('No registry found yet');
                return null;
            }

            this.registryData = await response.json();
            return this.registryData;
        } catch (error) {
            console.log('Registry not available:', error);
            return null;
        }
    },

    renderRegistryView() {
        const content = document.getElementById('main-content');

        if (!this.registryData || !this.registryData.entries) {
            content.innerHTML = `
                <div class="registry-empty">
                    <h2>📊 Registry가 아직 비어있습니다</h2>
                    <p>Iteration이 완료되면 자동으로 등록됩니다.</p>
                </div>
            `;
            return;
        }

        // 최신 순으로 정렬
        const entries = [...this.registryData.entries].reverse();

        content.innerHTML = `
            <div class="registry-container">
                <div class="registry-header">
                    <h2>🏆 Art Task Plan Registry</h2>
                    <p>모든 Iteration 결과가 자동으로 기록됩니다</p>
                    <p class="last-updated">마지막 업데이트: ${new Date(this.registryData.last_updated).toLocaleString()}</p>
                </div>

                <div class="registry-stats">
                    <div class="stat-card highlight">
                        <h3>Total Iterations</h3>
                        <div class="stat-value">${entries.length}</div>
                    </div>
                    <div class="stat-card">
                        <h3>Latest Pass Rate</h3>
                        <div class="stat-value">${entries[0]?.scores?.pass_rate?.toFixed(1) || 0}%</div>
                    </div>
                    <div class="stat-card">
                        <h3>Average Score</h3>
                        <div class="stat-value">${this.calculateAverage(entries)}%</div>
                    </div>
                </div>

                <div class="registry-timeline">
                    <h3>📈 Performance Timeline</h3>
                    <canvas id="registry-chart" width="800" height="300"></canvas>
                </div>

                <div class="registry-entries">
                    <h3>📋 Registry Entries</h3>
                    ${entries.map(entry => this.renderEntry(entry)).join('')}
                </div>
            </div>

            <style>
                .registry-container {
                    padding: 20px;
                }
                .registry-header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .registry-header h2 {
                    font-size: 32px;
                    color: #3b82f6;
                    margin-bottom: 10px;
                }
                .last-updated {
                    color: #8b92a9;
                    font-size: 12px;
                }
                .registry-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .stat-card.highlight {
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                }
                .stat-card.highlight .stat-value {
                    font-size: 48px;
                }
                .registry-timeline {
                    background: rgba(26, 31, 46, 0.5);
                    padding: 20px;
                    border-radius: 12px;
                    margin-bottom: 30px;
                }
                .registry-entries {
                    background: rgba(26, 31, 46, 0.3);
                    padding: 20px;
                    border-radius: 12px;
                }
                .registry-entry {
                    background: rgba(15, 20, 25, 0.6);
                    padding: 20px;
                    margin: 15px 0;
                    border-radius: 8px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                    transition: all 0.3s ease;
                }
                .registry-entry:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
                    border-color: rgba(59, 130, 246, 0.4);
                }
                .entry-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .entry-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #60a5fa;
                }
                .entry-status {
                    padding: 4px 12px;
                    background: #10b981;
                    color: white;
                    border-radius: 12px;
                    font-size: 12px;
                }
                .entry-metrics {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 15px;
                    margin-bottom: 15px;
                }
                .metric {
                    text-align: center;
                }
                .metric-label {
                    color: #8b92a9;
                    font-size: 12px;
                }
                .metric-value {
                    color: #e1e8ed;
                    font-size: 18px;
                    font-weight: 600;
                }
                .entry-games {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 10px;
                }
                .game-tag {
                    padding: 4px 8px;
                    background: rgba(139, 92, 246, 0.2);
                    color: #a78bfa;
                    border-radius: 4px;
                    font-size: 12px;
                }
                .entry-footer {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                .view-details-btn {
                    padding: 8px 16px;
                    background: rgba(59, 130, 246, 0.2);
                    color: #60a5fa;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .view-details-btn:hover {
                    background: rgba(59, 130, 246, 0.3);
                    transform: translateY(-1px);
                }
                .timestamp {
                    color: #6b7280;
                    font-size: 12px;
                    align-self: center;
                }
            </style>
        `;

        // 차트 그리기
        setTimeout(() => this.drawChart(entries), 100);
    },

    renderEntry(entry) {
        const date = new Date(entry.timestamp);
        const timeAgo = this.getTimeAgo(date);

        return `
            <div class="registry-entry">
                <div class="entry-header">
                    <div class="entry-title">Iteration ${entry.iteration}</div>
                    <span class="entry-status">${entry.status}</span>
                </div>
                <div class="entry-metrics">
                    <div class="metric">
                        <div class="metric-label">Pass Rate</div>
                        <div class="metric-value">${entry.scores.pass_rate.toFixed(1)}%</div>
                    </div>
                    <div class="metric">
                        <div class="metric-label">Games</div>
                        <div class="metric-value">${entry.games.length}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-label">Gate</div>
                        <div class="metric-value">${entry.metrics.coverage_gate}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-label">Registry ID</div>
                        <div class="metric-value">${entry.id.substring(0, 8)}...</div>
                    </div>
                </div>
                <div class="entry-games">
                    ${entry.games.map(game => `<span class="game-tag">${game}</span>`).join('')}
                </div>
                <div class="entry-footer">
                    <button class="view-details-btn" onclick="window.open('${entry.dashboard_url}')">
                        View Details →
                    </button>
                    <span class="timestamp">${timeAgo}</span>
                </div>
            </div>
        `;
    },

    calculateAverage(entries) {
        if (!entries.length) return 0;
        const sum = entries.reduce((acc, e) => acc + (e.scores?.pass_rate || 0), 0);
        return (sum / entries.length).toFixed(1);
    },

    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) return interval + " years ago";

        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + " months ago";

        interval = Math.floor(seconds / 86400);
        if (interval > 1) return interval + " days ago";

        interval = Math.floor(seconds / 3600);
        if (interval > 1) return interval + " hours ago";

        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + " minutes ago";

        return "just now";
    },

    drawChart(entries) {
        const canvas = document.getElementById('registry-chart');
        if (!canvas) return;

        // Skip if Chart.js is not loaded
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded yet, skipping chart drawing');
            return;
        }

        const ctx = canvas.getContext('2d');
        const data = entries.map(e => ({
            x: `Iter ${e.iteration}`,
            y: e.scores.pass_rate
        })).reverse();

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.x),
                datasets: [{
                    label: 'Pass Rate (%)',
                    data: data.map(d => d.y),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
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
                            color: '#8b92a9',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#8b92a9'
                        }
                    }
                }
            }
        });
    }
};

// Export
if (typeof window !== 'undefined') {
    window.RegistryViewer = RegistryViewer;
}