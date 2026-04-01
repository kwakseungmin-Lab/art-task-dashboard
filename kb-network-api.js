// KB Network API Integration and Complete Visualization
// API로 실제 KB 데이터 조회 및 완전한 네트워크 시각화

const KBNetworkAPI = {
    // KB API Configuration
    config: {
        apiBase: 'https://api.a2z-team.com/kb/v1', // 실제 API 엔드포인트로 변경 필요
        artKbId: '8cb7d4ac-7882-419a-a0cb-90b586fea960',
        metaKbId: '6e8d718c-5c37-44e1-ba6f-347195b46811',
        authToken: null // 필요시 인증 토큰 설정
    },

    // KB 엔티티 조회 API
    async fetchKBEntities(kbId, limit = 1000, offset = 0) {
        // 현재는 항상 Mock 데이터를 사용 (실제 API 준비되면 주석 해제)
        return this.getMockKBData(kbId);

        /* 실제 API 사용시 주석 해제
        try {
            const url = `${this.config.apiBase}/kb/${kbId}/entities?limit=${limit}&offset=${offset}`;
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.config.authToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Failed to fetch KB entities:', error);
            // Fallback to mock data for demonstration
            return this.getMockKBData(kbId);
        }
        */
    },

    // KB 관계 조회 API
    async fetchKBRelations(kbId, limit = 1000, offset = 0) {
        // 현재는 항상 Mock 데이터를 사용 (실제 API 준비되면 주석 해제)
        return this.getMockRelations(kbId);

        /* 실제 API 사용시 주석 해제
        try {
            const url = `${this.config.apiBase}/kb/${kbId}/relations?limit=${limit}&offset=${offset}`;
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.config.authToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Failed to fetch KB relations:', error);
            return this.getMockRelations(kbId);
        }
        */
    },

    // 전체 KB 데이터 조회 (페이징 처리)
    async fetchCompleteKBData(kbId) {
        const batchSize = 1000;
        let allEntities = [];
        let allRelations = [];
        let offset = 0;
        let hasMore = true;

        // 엔티티 조회 (페이징)
        while (hasMore) {
            const batch = await this.fetchKBEntities(kbId, batchSize, offset);
            if (batch.entities && batch.entities.length > 0) {
                allEntities = allEntities.concat(batch.entities);
                offset += batchSize;
                hasMore = batch.hasMore || false;
            } else {
                hasMore = false;
            }
        }

        // 관계 조회 (페이징)
        offset = 0;
        hasMore = true;
        while (hasMore) {
            const batch = await this.fetchKBRelations(kbId, batchSize, offset);
            if (batch.relations && batch.relations.length > 0) {
                allRelations = allRelations.concat(batch.relations);
                offset += batchSize;
                hasMore = batch.hasMore || false;
            } else {
                hasMore = false;
            }
        }

        return {
            entities: allEntities,
            relations: allRelations,
            stats: {
                totalEntities: allEntities.length,
                totalRelations: allRelations.length,
                entityTypes: this.countByType(allEntities),
                relationTypes: this.countRelationTypes(allRelations)
            }
        };
    },

    // Mock 데이터 생성 (API 없을 때 사용)
    getMockKBData(kbId) {
        const entities = [];

        // Meta KB인지 Art KB인지 구분
        const isMetaKb = kbId === this.config.metaKbId;

        if (isMetaKb) {
            // Meta KB 전용 에이전트
            const metaAgents = [
                'Meta_Orchestrator', 'Strategy_Designer', 'Pattern_Analyzer',
                'Evolution_Tracker', 'Performance_Monitor'
            ];

            metaAgents.forEach(agent => {
                entities.push({
                    id: `meta_agent_${agent.toLowerCase()}`,
                    type: 'agent',
                    name: agent,
                    properties: {
                        role: agent,
                        description: `${agent} agent for Meta Iteration KB`
                    }
                });
            });
        } else {
            // Art KB 파이프라인 에이전트
            const agents = [
                'Orchestrator', 'Designer', 'Analyzer', 'Generator',
                'Evaluator', 'Process_Validator', 'Evolver', 'Evolver_Reviewer',
                'Monitor', 'Art_KB_Writer', 'Meta_KB_Writer'
            ];

            agents.forEach(agent => {
                entities.push({
                    id: `agent_${agent.toLowerCase()}`,
                    type: 'agent',
                    name: agent,
                    properties: {
                        role: agent,
                        description: `${agent} agent for Art Task Plan Pipeline`
                    }
                });
            });
        }

        // 이터레이션 (0-8)
        for (let i = 0; i <= 8; i++) {
            const passRate = i === 0 ? 0 : i === 7 ? 100 : i === 8 ? 96 :
                            i === 6 ? 84 : i === 5 ? 72 : i === 4 ? 56 :
                            i === 3 ? 44 : i === 2 ? 28 : 12;

            entities.push({
                id: `iteration_${i}`,
                type: 'iteration',
                name: `Iteration ${i}`,
                properties: {
                    iteration: i,
                    passRate: passRate,
                    date: `2026-03-${String(20 + i).padStart(2, '0')}`,
                    status: passRate >= 80 ? 'PASS' : 'FAIL'
                }
            });

            // 각 이터레이션의 게임들
            const games = ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'];

            games.forEach(game => {
                // 게임별 5개 trial
                for (let trial = 1; trial <= 5; trial++) {
                    const result = (i === 8 && game === 'reflect_academy' && trial === 1) ? 'FAIL' : 'PASS';

                    entities.push({
                        id: `harness::${i}::${game}::${trial}::v8`,
                        type: 'evaluation',
                        name: `${game} Trial ${trial}`,
                        properties: {
                            iteration: i,
                            game: game,
                            trial: trial,
                            result: result,
                            invariance: 85 + Math.random() * 15,
                            structurality: 90 + Math.random() * 10,
                            completeness: 95 + Math.random() * 5,
                            ref_integrity: result === 'FAIL' ? 50 : 95 + Math.random() * 5
                        }
                    });

                    // Task Plan 엔티티
                    entities.push({
                        id: `task_plan::${i}::${game}::${trial}`,
                        type: 'task_plan',
                        name: `${game} Task Plan ${trial}`,
                        properties: {
                            iteration: i,
                            game: game,
                            trial: trial,
                            schema_version: 'art_task_plan_pkg@8',
                            created_at: new Date().toISOString()
                        }
                    });
                }
            });
        }

        // 방법론 버전
        for (let v = 1; v <= 8; v++) {
            entities.push({
                id: `methodology_v${v}`,
                type: 'methodology',
                name: `Methodology v${v}`,
                properties: {
                    version: v,
                    status: v === 8 ? 'current' : 'archive'
                }
            });
        }

        // Atomic Facts (샘플)
        for (let i = 0; i < 100; i++) {
            entities.push({
                id: `fact_${i}`,
                type: 'atomic_fact',
                name: `Atomic Fact ${i}`,
                properties: {
                    confidence: Math.random(),
                    validated: true
                }
            });
        }

        return { entities, hasMore: false };
    },

    // Mock 관계 데이터 - 완전히 연결된 네트워크 생성
    getMockRelations(kbId) {
        const relations = [];
        let relId = 0;

        // 이터레이션 간 진행 관계 (0 → 1 → 2 → ... → 8)
        for (let i = 0; i < 8; i++) {
            relations.push({
                id: `rel_iter_${i}_${i+1}`,
                type: 'ITERATION_PROGRESSION',
                source: `iteration_${i}`,
                target: `iteration_${i+1}`,
                properties: {}
            });
        }

        // 에이전트 파이프라인 관계 - 모든 에이전트를 순서대로 연결
        const pipeline = ['Orchestrator', 'Designer', 'Analyzer', 'Generator', 'Evaluator', 'Process_Validator', 'Evolver', 'Evolver_Reviewer', 'Monitor'];
        for (let i = 0; i < pipeline.length - 1; i++) {
            relations.push({
                id: `rel_pipeline_${i}`,
                type: 'PIPELINE_FLOW',
                source: `agent_${pipeline[i].toLowerCase()}`,
                target: `agent_${pipeline[i+1].toLowerCase()}`,
                properties: { order: i + 1 }
            });
        }

        // Orchestrator가 모든 에이전트를 관리
        pipeline.forEach(agent => {
            if (agent !== 'Orchestrator') {
                relations.push({
                    id: `rel_orch_control_${agent}`,
                    type: 'CONTROLS',
                    source: `agent_orchestrator`,
                    target: `agent_${agent.toLowerCase()}`,
                    properties: {}
                });
            }
        });

        // Monitor가 모든 에이전트를 모니터링
        pipeline.forEach(agent => {
            if (agent !== 'Monitor') {
                relations.push({
                    id: `rel_mon_observe_${agent}`,
                    type: 'OBSERVES',
                    source: `agent_monitor`,
                    target: `agent_${agent.toLowerCase()}`,
                    properties: {}
                });
            }
        });

        // KB Writer 연결
        relations.push({
            id: `rel_kb_art`,
            type: 'PIPELINE_FLOW',
            source: `agent_evolver_reviewer`,
            target: `agent_art_kb_writer`,
            properties: {}
        });
        relations.push({
            id: `rel_kb_meta`,
            type: 'PIPELINE_FLOW',
            source: `agent_evolver_reviewer`,
            target: `agent_meta_kb_writer`,
            properties: {}
        });

        // KB Writer들이 서로 협력
        relations.push({
            id: `rel_kb_collab`,
            type: 'COLLABORATES_WITH',
            source: `agent_art_kb_writer`,
            target: `agent_meta_kb_writer`,
            properties: {}
        });

        // 평가 관계 - 모든 이터레이션에 대해
        const games = ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'];

        for (let iter = 0; iter <= 8; iter++) {
            games.forEach((game, gameIdx) => {
                for (let trial = 1; trial <= 5; trial++) {
                    // Task Plan -> Evaluation
                    relations.push({
                        id: `rel_eval_${iter}_${game}_${trial}`,
                        type: 'EVALUATED_BY',
                        source: `task_plan::${iter}::${game}::${trial}`,
                        target: `harness::${iter}::${game}::${trial}::v8`,
                        properties: {}
                    });

                    // Generator -> Task Plan
                    relations.push({
                        id: `rel_gen_${iter}_${game}_${trial}`,
                        type: 'GENERATES',
                        source: `agent_generator`,
                        target: `task_plan::${iter}::${game}::${trial}`,
                        properties: {}
                    });

                    // Evaluator -> Evaluation
                    relations.push({
                        id: `rel_evaluator_${iter}_${game}_${trial}`,
                        type: 'EVALUATES',
                        source: `agent_evaluator`,
                        target: `harness::${iter}::${game}::${trial}::v8`,
                        properties: {}
                    });

                    // 이전 trial과 연결 (학습 관계)
                    if (trial > 1) {
                        relations.push({
                            id: `rel_trial_learn_${iter}_${game}_${trial}`,
                            type: 'LEARNS_FROM',
                            source: `task_plan::${iter}::${game}::${trial}`,
                            target: `task_plan::${iter}::${game}::${trial - 1}`,
                            properties: {}
                        });
                    }

                    // 이전 이터레이션의 같은 게임과 연결 (진화 관계)
                    if (iter > 0) {
                        relations.push({
                            id: `rel_evolve_${iter}_${game}_${trial}`,
                            type: 'EVOLVES_FROM',
                            source: `task_plan::${iter}::${game}::${trial}`,
                            target: `task_plan::${iter - 1}::${game}::${trial}`,
                            properties: {}
                        });
                    }
                }

                // 같은 이터레이션의 다른 게임과 연결
                if (gameIdx > 0) {
                    relations.push({
                        id: `rel_game_cross_${iter}_${gameIdx}`,
                        type: 'SHARES_ITERATION',
                        source: `harness::${iter}::${game}::1::v8`,
                        target: `harness::${iter}::${games[gameIdx - 1]}::1::v8`,
                        properties: { iteration: iter }
                    });
                }
            });

            // 이터레이션과 모든 평가 연결
            relations.push({
                id: `rel_iter_to_eval_${iter}`,
                type: 'HAS_EVALUATION',
                source: `iteration_${iter}`,
                target: `harness::${iter}::${games[0]}::1::v8`,
                properties: {}
            });

            // 에이전트와 이터레이션 연결
            relations.push({
                id: `rel_orchestrator_iter_${iter}`,
                type: 'MANAGES_ITERATION',
                source: `agent_orchestrator`,
                target: `iteration_${iter}`,
                properties: {}
            });

            // Designer와 이터레이션 연결
            relations.push({
                id: `rel_designer_iter_${iter}`,
                type: 'DESIGNS_FOR',
                source: `agent_designer`,
                target: `iteration_${iter}`,
                properties: {}
            });

            // Analyzer와 이터레이션 연결
            relations.push({
                id: `rel_analyzer_iter_${iter}`,
                type: 'ANALYZES',
                source: `agent_analyzer`,
                target: `iteration_${iter}`,
                properties: {}
            });
        }

        // 방법론과 에이전트 연결 - 여러 에이전트가 방법론 사용
        for (let v = 1; v <= 8; v++) {
            ['generator', 'evaluator', 'designer', 'evolver'].forEach(agent => {
                relations.push({
                    id: `rel_method_${agent}_${v}`,
                    type: 'USES_METHODOLOGY',
                    source: `agent_${agent}`,
                    target: `methodology_v${v}`,
                    properties: { version: v }
                });
            });

            // 방법론 간 진화 관계
            if (v > 1) {
                relations.push({
                    id: `rel_method_evolve_${v}`,
                    type: 'EVOLVED_FROM',
                    source: `methodology_v${v}`,
                    target: `methodology_v${v - 1}`,
                    properties: {}
                });
            }

            // 방법론과 이터레이션 연결
            relations.push({
                id: `rel_method_iter_${v}`,
                type: 'APPLIED_IN',
                source: `methodology_v${v}`,
                target: `iteration_${v}`,
                properties: {}
            });
        }

        // Atomic Facts 연결 - 더 풍부한 연결
        for (let i = 0; i < 100; i++) {
            const iterNum = i % 9; // 0-8 이터레이션에 분산

            // Facts와 이터레이션 연결
            relations.push({
                id: `rel_fact_iter_${i}`,
                type: 'EXTRACTED_FROM',
                source: `fact_${i}`,
                target: `iteration_${iterNum}`,
                properties: {}
            });

            // Facts와 평가 연결
            const gameIdx = i % games.length;
            const trialNum = (i % 5) + 1;
            relations.push({
                id: `rel_fact_eval_${i}`,
                type: 'VALIDATES',
                source: `fact_${i}`,
                target: `harness::${iterNum}::${games[gameIdx]}::${trialNum}::v8`,
                properties: {}
            });

            // Facts 간 연결 (지식 그래프)
            if (i > 0) {
                // 이전 fact와 연결
                relations.push({
                    id: `rel_fact_chain_${i}`,
                    type: 'RELATES_TO',
                    source: `fact_${i}`,
                    target: `fact_${i - 1}`,
                    properties: {}
                });

                // 10개씩 클러스터 형성
                if (i % 10 === 0 && i > 9) {
                    relations.push({
                        id: `rel_fact_cluster_${i}`,
                        type: 'CLUSTERS_WITH',
                        source: `fact_${i}`,
                        target: `fact_${i - 10}`,
                        properties: {}
                    });
                }
            }

            // Facts와 에이전트 연결
            if (i % 5 === 0) {
                const agentIdx = (i / 5) % pipeline.length;
                relations.push({
                    id: `rel_fact_agent_${i}`,
                    type: 'DISCOVERED_BY',
                    source: `fact_${i}`,
                    target: `agent_${pipeline[agentIdx].toLowerCase()}`,
                    properties: {}
                });
            }
        }

        // Process Validator가 모든 평가 검증
        for (let iter = 0; iter <= 8; iter++) {
            games.forEach(game => {
                relations.push({
                    id: `rel_validate_${iter}_${game}`,
                    type: 'VALIDATES_RESULT',
                    source: `agent_process_validator`,
                    target: `harness::${iter}::${game}::1::v8`,
                    properties: {}
                });
            });
        }

        // Evolver가 개선 사항 적용
        for (let iter = 1; iter <= 8; iter++) {
            relations.push({
                id: `rel_evolver_improve_${iter}`,
                type: 'IMPROVES',
                source: `agent_evolver`,
                target: `iteration_${iter}`,
                properties: {}
            });
        }

        // 크로스 게임 학습 관계
        games.forEach((game1, idx1) => {
            games.forEach((game2, idx2) => {
                if (idx1 < idx2) {
                    relations.push({
                        id: `rel_cross_game_${game1}_${game2}`,
                        type: 'SHARES_PATTERNS',
                        source: `task_plan::8::${game1}::1`,
                        target: `task_plan::8::${game2}::1`,
                        properties: {}
                    });
                }
            });
        });

        console.log(`Generated ${relations.length} relationships for complete network connectivity`);
        return { relations, hasMore: false };
    },

    // 타입별 카운트
    countByType(entities) {
        const counts = {};
        entities.forEach(entity => {
            counts[entity.type] = (counts[entity.type] || 0) + 1;
        });
        return counts;
    },

    // 관계 타입별 카운트
    countRelationTypes(relations) {
        const counts = {};
        relations.forEach(relation => {
            counts[relation.type] = (counts[relation.type] || 0) + 1;
        });
        return counts;
    },

    // 네트워크 데이터 변환 (D3.js 형식)
    transformToNetworkData(kbData) {
        // 노드 생성
        const nodes = kbData.entities.map(entity => ({
            id: entity.id || entity.entity_id, // entity_id도 체크
            name: entity.name || entity.id,
            type: entity.type,
            properties: entity.properties,
            group: this.getNodeGroup(entity.type)
        }));

        // 노드 ID 세트 생성 (연결 검증용)
        const nodeIds = new Set(nodes.map(n => n.id));

        // 링크 생성 - 존재하는 노드만 연결
        const links = kbData.relations
            .filter(relation => {
                // source와 target이 실제로 존재하는 노드인지 확인
                const sourceExists = nodeIds.has(relation.source);
                const targetExists = nodeIds.has(relation.target);
                if (!sourceExists || !targetExists) {
                    console.warn(`Link skipped: ${relation.source} -> ${relation.target}`);
                    return false;
                }
                return true;
            })
            .map(relation => ({
                source: relation.source,
                target: relation.target,
                type: relation.type,
                value: 1,
                properties: relation.properties
            }));

        console.log(`Network data: ${nodes.length} nodes, ${links.length} links`);
        return { nodes, links };
    },

    // 노드 그룹 결정
    getNodeGroup(type) {
        const groupMap = {
            'agent': 1,
            'iteration': 2,
            'evaluation': 3,
            'task_plan': 4,
            'methodology': 5,
            'atomic_fact': 6,
            'strategy': 7,
            'analysis': 8
        };
        return groupMap[type] || 9;
    },

    // 계층 구조 데이터 생성
    createHierarchicalData(kbData) {
        const root = {
            name: 'Art Task Plan KB',
            type: 'root',
            children: []
        };

        // 이터레이션별 그룹화
        const iterationGroup = {
            name: 'Iterations (0-8)',
            type: 'category',
            children: []
        };

        // 이터레이션별 데이터 구성
        for (let i = 0; i <= 8; i++) {
            const iterEntities = kbData.entities.filter(e =>
                e.properties && e.properties.iteration === i
            );

            if (iterEntities.length > 0) {
                const iterNode = {
                    name: `Iteration ${i}`,
                    type: 'iteration',
                    value: iterEntities.length,
                    children: []
                };

                // 게임별 그룹화
                const games = [...new Set(iterEntities
                    .filter(e => e.properties.game)
                    .map(e => e.properties.game))];

                games.forEach(game => {
                    const gameEntities = iterEntities.filter(e =>
                        e.properties.game === game
                    );

                    const gameNode = {
                        name: game,
                        type: 'task_plan',
                        value: gameEntities.length,
                        children: gameEntities.map(e => ({
                            name: `Trial ${e.properties.trial || ''}`,
                            type: e.type,
                            value: 1,
                            properties: e.properties
                        }))
                    };

                    iterNode.children.push(gameNode);
                });

                iterationGroup.children.push(iterNode);
            }
        }

        root.children.push(iterationGroup);

        // 파이프라인 에이전트 그룹
        const agentGroup = {
            name: 'Pipeline Agents',
            type: 'category',
            children: kbData.entities
                .filter(e => e.type === 'agent')
                .map(e => ({
                    name: e.name,
                    type: 'agent',
                    value: 1
                }))
        };

        root.children.push(agentGroup);

        // 방법론 그룹
        const methodGroup = {
            name: 'Methodology',
            type: 'category',
            children: kbData.entities
                .filter(e => e.type === 'methodology')
                .map(e => ({
                    name: e.name,
                    type: 'methodology',
                    value: 1
                }))
        };

        root.children.push(methodGroup);

        // 통계 정보
        const statsGroup = {
            name: 'Statistics',
            type: 'category',
            children: [
                {
                    name: `Total Entities: ${kbData.stats.totalEntities}`,
                    type: 'stat',
                    value: kbData.stats.totalEntities
                },
                {
                    name: `Total Relations: ${kbData.stats.totalRelations}`,
                    type: 'stat',
                    value: kbData.stats.totalRelations
                }
            ]
        };

        root.children.push(statsGroup);

        return root;
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.KBNetworkAPI = KBNetworkAPI;
}