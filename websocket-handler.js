// WebSocket Real-time Updates Handler
// 실시간 이벤트 처리 및 대시보드 업데이트

class WebSocketHandler {
    constructor(dashboard, apiUrl = 'wss://agent.atoz.krafton.io/ws') {
        this.dashboard = dashboard;
        this.apiUrl = apiUrl;
        this.ws = null;
        this.reconnectInterval = 5000; // 5초
        this.maxReconnectAttempts = 5;
        this.reconnectAttempts = 0;
        this.eventHandlers = new Map();
        this.isConnected = false;

        // 기본 이벤트 핸들러 등록
        this.registerDefaultHandlers();
    }

    // WebSocket 연결
    connect(apiToken) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            console.log('WebSocket already connected');
            return;
        }

        try {
            // API 토큰을 쿼리 파라미터로 전달
            const wsUrl = `${this.apiUrl}?token=${apiToken}`;
            this.ws = new WebSocket(wsUrl);

            this.ws.onopen = () => this.onOpen();
            this.ws.onmessage = (event) => this.onMessage(event);
            this.ws.onerror = (error) => this.onError(error);
            this.ws.onclose = () => this.onClose();

        } catch (error) {
            console.error('Failed to create WebSocket:', error);
            this.scheduleReconnect();
        }
    }

    // 연결 성공
    onOpen() {
        console.log('WebSocket connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;

        // 연결 성공 UI 업데이트
        this.updateConnectionStatus('connected');

        // 구독할 이벤트 타입 전송
        this.subscribe([
            'thread.started',
            'thread.completed',
            'thread.failed',
            'agent.status_changed',
            'kb.entity_created',
            'kb.entity_updated',
            'experiment.started',
            'experiment.completed'
        ]);
    }

    // 메시지 수신
    onMessage(event) {
        try {
            const data = JSON.parse(event.data);
            console.log('WebSocket message received:', data);

            // 이벤트 타입별 처리
            if (this.eventHandlers.has(data.type)) {
                this.eventHandlers.get(data.type)(data);
            }

            // 대시보드 업데이트
            this.updateDashboard(data);

        } catch (error) {
            console.error('Failed to process WebSocket message:', error);
        }
    }

    // 에러 처리
    onError(error) {
        console.error('WebSocket error:', error);
        this.updateConnectionStatus('error');
    }

    // 연결 종료
    onClose() {
        console.log('WebSocket disconnected');
        this.isConnected = false;
        this.updateConnectionStatus('disconnected');

        // 재연결 시도
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.scheduleReconnect();
        }
    }

    // 재연결 스케줄링
    scheduleReconnect() {
        this.reconnectAttempts++;
        console.log(`Scheduling reconnect attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);

        setTimeout(() => {
            if (!this.isConnected) {
                console.log('Attempting to reconnect...');
                const token = localStorage.getItem('azle_api_token');
                if (token) {
                    this.connect(token);
                }
            }
        }, this.reconnectInterval);
    }

    // 이벤트 구독
    subscribe(eventTypes) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                action: 'subscribe',
                events: eventTypes
            }));
        }
    }

    // 이벤트 구독 해제
    unsubscribe(eventTypes) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                action: 'unsubscribe',
                events: eventTypes
            }));
        }
    }

    // 기본 이벤트 핸들러 등록
    registerDefaultHandlers() {
        // Thread 이벤트
        this.eventHandlers.set('thread.started', (data) => {
            this.addNotification('info', `Thread ${data.thread_id} started`);
            this.updateExecutionRow(data.thread_id, 'running');
        });

        this.eventHandlers.set('thread.completed', (data) => {
            this.addNotification('success', `Thread ${data.thread_id} completed`);
            this.updateExecutionRow(data.thread_id, 'success');
        });

        this.eventHandlers.set('thread.failed', (data) => {
            this.addNotification('error', `Thread ${data.thread_id} failed: ${data.error}`);
            this.updateExecutionRow(data.thread_id, 'failed');
        });

        // Agent 이벤트
        this.eventHandlers.set('agent.status_changed', (data) => {
            this.updateAgentStatus(data.agent_type, data.new_status);
        });

        // KB 이벤트
        this.eventHandlers.set('kb.entity_created', (data) => {
            this.updateKBStats(data.kb_id, 'increment');
            this.addNotification('info', `New KB entity created: ${data.entity_id}`);
        });

        this.eventHandlers.set('kb.entity_updated', (data) => {
            this.addNotification('info', `KB entity updated: ${data.entity_id}`);
        });

        // Experiment 이벤트
        this.eventHandlers.set('experiment.started', (data) => {
            this.addNotification('info', `Experiment started: ${data.experiment_name}`);
        });

        this.eventHandlers.set('experiment.completed', (data) => {
            this.addNotification('success', `Experiment completed: ${data.experiment_name} (Improvement: ${data.improvement})`);
        });
    }

    // 대시보드 업데이트
    updateDashboard(data) {
        // 실행 상태 업데이트
        if (data.type.startsWith('thread.')) {
            this.dashboard.loadData().then(() => {
                this.dashboard.updateExecutionsTable();
            });
        }

        // KB 통계 업데이트
        if (data.type.startsWith('kb.')) {
            this.dashboard.loadData().then(() => {
                this.dashboard.updateStats();
                this.dashboard.updateCharts();
            });
        }

        // 에이전트 상태 업데이트
        if (data.type === 'agent.status_changed') {
            this.dashboard.loadData().then(() => {
                this.dashboard.updateAgentCards();
            });
        }
    }

    // 실행 테이블 행 업데이트
    updateExecutionRow(threadId, status) {
        const row = document.querySelector(`[data-thread-id="${threadId}"]`);
        if (row) {
            const statusCell = row.querySelector('.status-cell');
            if (statusCell) {
                const statusIcon = status === 'success' ? '🟢' :
                                  status === 'running' ? '🟡' : '🔴';
                const pulseClass = status === 'running' ? 'pulse' : '';
                statusCell.innerHTML = `<span class="${pulseClass}">${statusIcon}</span>`;
            }
        }
    }

    // 에이전트 상태 업데이트
    updateAgentStatus(agentType, newStatus) {
        const card = document.querySelector(`[data-agent-type="${agentType}"]`);
        if (card) {
            const statusBadge = card.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = newStatus;
                statusBadge.className = `status-badge ${
                    newStatus === 'active' ? 'bg-green-100 text-green-800' :
                    newStatus === 'idle' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-600'
                }`;
            }
        }
    }

    // KB 통계 업데이트
    updateKBStats(kbId, action) {
        const statElement = document.getElementById(
            kbId.includes('8cb7d4ac') ? 'stat-art-kb' : 'stat-meta-kb'
        );

        if (statElement && action === 'increment') {
            const currentValue = parseInt(statElement.textContent.replace(/,/g, ''));
            statElement.textContent = (currentValue + 1).toLocaleString();

            // 애니메이션 효과
            statElement.classList.add('text-green-600', 'font-bold');
            setTimeout(() => {
                statElement.classList.remove('text-green-600', 'font-bold');
            }, 1000);
        }
    }

    // 알림 추가
    addNotification(type, message) {
        // 알림 컨테이너 생성 (없으면)
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.className = 'fixed top-20 right-4 z-50 space-y-2';
            document.body.appendChild(container);
        }

        // 알림 생성
        const notification = document.createElement('div');
        notification.className = `p-4 rounded-lg shadow-lg max-w-sm animate-slide-in ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            type === 'warning' ? 'bg-yellow-500 text-white' :
            'bg-blue-500 text-white'
        }`;

        notification.innerHTML = `
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium">${message}</p>
                <button onclick="this.parentElement.parentElement.remove()"
                        class="ml-4 text-white hover:text-gray-200">
                    ✕
                </button>
            </div>
        `;

        container.appendChild(notification);

        // 5초 후 자동 제거
        setTimeout(() => {
            notification.classList.add('animate-slide-out');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // 연결 상태 UI 업데이트
    updateConnectionStatus(status) {
        const indicator = document.getElementById('ws-status-indicator');
        if (!indicator) {
            // 상태 표시기 생성
            const nav = document.querySelector('nav');
            if (nav) {
                const statusDiv = document.createElement('div');
                statusDiv.id = 'ws-status-indicator';
                statusDiv.className = 'flex items-center space-x-2 text-sm';
                nav.querySelector('.flex.items-center.space-x-4').prepend(statusDiv);
            }
        }

        const statusIndicator = document.getElementById('ws-status-indicator');
        if (statusIndicator) {
            const statusClass = status === 'connected' ? 'bg-green-500' :
                              status === 'disconnected' ? 'bg-red-500' :
                              status === 'error' ? 'bg-yellow-500' : 'bg-gray-500';

            statusIndicator.innerHTML = `
                <span class="w-2 h-2 rounded-full ${statusClass}"></span>
                <span class="text-gray-600">
                    ${status === 'connected' ? 'Live' :
                      status === 'disconnected' ? 'Offline' :
                      status === 'error' ? 'Error' : 'Connecting...'}
                </span>
            `;
        }
    }

    // 연결 종료
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.isConnected = false;
        this.reconnectAttempts = 0;
    }

    // 커스텀 이벤트 핸들러 등록
    on(eventType, handler) {
        this.eventHandlers.set(eventType, handler);
    }

    // 이벤트 핸들러 제거
    off(eventType) {
        this.eventHandlers.delete(eventType);
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slide-in {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slide-out {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .animate-slide-in { animation: slide-in 0.3s ease-out; }
    .animate-slide-out { animation: slide-out 0.3s ease-out; }
`;
document.head.appendChild(style);

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebSocketHandler;
}