// Azle API Integration Module
// Azle 플랫폼과 직접 통신하여 실시간 데이터 가져오기

class AzleAPI {
    constructor(apiToken) {
        this.baseURL = 'https://agent.atoz.krafton.io/api';
        this.apiToken = apiToken || localStorage.getItem('azle_api_token');
        this.headers = {
            'Authorization': `Bearer ${this.apiToken}`,
            'Content-Type': 'application/json'
        };
    }

    // API 토큰 설정
    setApiToken(token) {
        this.apiToken = token;
        localStorage.setItem('azle_api_token', token);
        this.headers.Authorization = `Bearer ${token}`;
    }

    // 에이전트 목록 가져오기
    async getAgents() {
        try {
            const response = await fetch(`${this.baseURL}/agents?prefix=art_task_plan`, {
                method: 'GET',
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // 데이터 변환
            return data.agents.map(agent => ({
                name: agent.type.replace('art_task_plan_', '').replace(/_/g, ' ').toUpperCase(),
                type: agent.type,
                model: agent.settings?.model || 'gpt-5.4',
                template: agent.template || 'lm_agent_v3',
                tools: agent.settings?.tools || [],
                tools_count: agent.settings?.tools?.length || 0,
                phase: this.determinePhase(agent.type),
                status: agent.status || 'active',
                version: agent.version || 1,
                last_modified: agent.updated_at
            }));
        } catch (error) {
            console.error('Failed to fetch agents:', error);
            return this.getFallbackAgents();
        }
    }

    // 스레드 실행 상태 가져오기
    async getThreads(limit = 20) {
        try {
            const response = await fetch(`${this.baseURL}/threads?status=all&limit=${limit}&sort=desc`, {
                method: 'GET',
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            return data.threads.map(thread => ({
                thread_id: thread.id,
                status: thread.status.toLowerCase(),
                phase: thread.current_agent?.replace('art_task_plan_', '').replace(/_/g, ' ') || 'Unknown',
                started_at: thread.created_at,
                duration_minutes: thread.duration ? thread.duration / 60000 : null,
                agent: thread.current_agent,
                progress: thread.progress || 0,
                error: thread.error
            }));
        } catch (error) {
            console.error('Failed to fetch threads:', error);
            return [];
        }
    }

    // KB 통계 가져오기
    async getKBStats(kbId) {
        try {
            const response = await fetch(`${this.baseURL}/kb/${kbId}/stats`, {
                method: 'GET',
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            return {
                id: kbId,
                total_entities: data.total_entities || 0,
                relations: data.total_relations || 0,
                categories: data.entity_types || {},
                growth: {
                    daily: data.growth_daily || 0,
                    weekly: data.growth_weekly || 0,
                    monthly: data.growth_monthly || 0
                },
                last_updated: data.last_updated
            };
        } catch (error) {
            console.error('Failed to fetch KB stats:', error);
            return null;
        }
    }

    // 최근 KB 엔티티 가져오기
    async getRecentKBEntities(kbId, limit = 10) {
        try {
            const response = await fetch(`${this.baseURL}/kb/${kbId}/entities?limit=${limit}&sort=desc`, {
                method: 'GET',
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            return data.entities.map(entity => ({
                entity_id: entity.entity_id,
                type: entity.entity_type,
                created_at: entity.created_at,
                metadata: entity.metadata,
                size: JSON.stringify(entity).length
            }));
        } catch (error) {
            console.error('Failed to fetch KB entities:', error);
            return [];
        }
    }

    // 이벤트 스트림 (서버 전송 이벤트)
    subscribeToEvents(onMessage, onError) {
        const eventSource = new EventSource(`${this.baseURL}/events/stream`, {
            headers: this.headers
        });

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                onMessage(data);
            } catch (error) {
                console.error('Failed to parse event:', error);
            }
        };

        eventSource.onerror = (error) => {
            console.error('EventSource error:', error);
            if (onError) onError(error);
        };

        return eventSource; // 나중에 close() 호출 가능
    }

    // 에이전트별 phase 결정
    determinePhase(agentType) {
        const phaseMap = {
            'orchestrator': 'Meta Controller',
            'designer': 'Phase 1',
            'analyzer': 'Phase 1 & 2',
            'generator': 'Phase 1',
            'evaluator': 'Phase 1',
            'process_validator': 'Phase 2',
            'agent_evolver': 'Phase 2',
            'evolver_reviewer': 'Phase 2',
            'monitor': 'Parallel',
            'kb_retriever': 'Support',
            'kb_writer': 'KB Management',
            'meta_kb_writer': 'KB Management',
            'kb_manager': 'KB Management',
            'meta_kb_manager': 'KB Management'
        };

        for (const [key, phase] of Object.entries(phaseMap)) {
            if (agentType.includes(key)) {
                return phase;
            }
        }

        return 'Unknown';
    }

    // Fallback 데이터
    getFallbackAgents() {
        return [
            { name: 'Orchestrator', type: 'art_task_plan_orchestrator', model: 'gpt-5.4', tools_count: 14, phase: 'Meta Controller', status: 'active' },
            { name: 'Designer', type: 'art_task_plan_designer', model: 'gpt-5.4', tools_count: 7, phase: 'Phase 1', status: 'active' },
            { name: 'Analyzer', type: 'art_task_plan_analyzer', model: 'gpt-5.4', tools_count: 8, phase: 'Phase 1 & 2', status: 'active' },
            { name: 'Generator', type: 'art_task_plan_generator', model: 'gpt-5.4', tools_count: 9, phase: 'Phase 1', status: 'active' },
            { name: 'Evaluator', type: 'art_task_plan_evaluator', model: 'gpt-5.4', tools_count: 7, phase: 'Phase 1', status: 'active' },
            { name: 'Process Validator', type: 'art_task_plan_process_validator', model: 'gpt-5.4', tools_count: 8, phase: 'Phase 2', status: 'active' },
            { name: 'Agent Evolver', type: 'art_task_plan_agent_evolver', model: 'gpt-5.4', tools_count: 8, phase: 'Phase 2', status: 'active' },
            { name: 'Evolver Reviewer', type: 'art_task_plan_evolver_reviewer', model: 'gpt-5.4', tools_count: 7, phase: 'Phase 2', status: 'active' },
            { name: 'Monitor', type: 'art_task_plan_monitor', model: 'gpt-4.1', tools_count: 6, phase: 'Parallel', status: 'active' },
            { name: 'Kb Retriever', type: 'art_task_plan_kb_retriever', model: 'gpt-5.4', tools_count: 4, phase: 'Support', status: 'active' }
        ];
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AzleAPI;
}