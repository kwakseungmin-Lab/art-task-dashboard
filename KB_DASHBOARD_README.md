# Art Task Plan KB Dashboard - Phase 3 Data

## 📊 Overview

새로운 KB Dashboard는 Phase 3에서 생성한 실제 KB 데이터(ATP KB와 META KB)를 시각화합니다.

### 🎯 KB 정보

#### ATP KB (Art Task Plan Knowledge Base)
- **ID**: `912180a0-9b28-48b9-87d3-02f134ace69b`
- **엔티티**: 42개
- **관계**: 35개
- **데이터**: Iteration 3-9 (7개 iteration)
- **구조**: Raw evidence graph

#### META KB (Meta Knowledge Base)
- **ID**: `bfc88419-5cfb-4d33-a12b-c3a108aac93b`
- **엔티티**: 53개
- **관계**: 66개
- **데이터**: 
  - Concept v3-v9 (8개 버전)
  - Harness v1-v4 (4개 버전)
- **구조**: Decision/memory graph

## 🚀 사용 방법

### 1. 로컬 웹서버 실행

```bash
cd art-task-dashboard

# Python 3로 웹서버 실행
python -m http.server 8000

# 또는 Node.js로 실행
npx serve .
```

### 2. 브라우저에서 열기

```
http://localhost:8000/kb-dashboard.html
```

## 📁 파일 구조

```
art-task-dashboard/
│
├── kb-dashboard.html      # 메인 대시보드 HTML
├── kb-config.js          # KB 설정 (ID, API endpoints, colors)
├── kb-api-client.js      # Azle API 연동 로직
├── kb-dashboard.js       # 대시보드 메인 로직
└── KB_DASHBOARD_README.md # 이 파일
```

## 🔧 주요 기능

### 시각화 옵션
- **Combined View**: ATP KB + META KB 통합 뷰
- **ATP KB View**: ATP KB만 표시 (42개 엔티티)
- **META KB View**: META KB만 표시 (53개 엔티티)

### 레이아웃 옵션
- **Physics Layout**: 물리 시뮬레이션 기반 자동 배치
- **Hierarchical Layout**: 계층적 구조로 표시
- **Circular Layout**: 원형 배치

### 상호작용
- **노드 클릭**: 엔티티 상세 정보 표시
- **노드 더블클릭**: 해당 노드에 포커스
- **드래그**: 노드 위치 조정
- **줌**: 마우스 휠로 확대/축소

### 통계 패널
- 전체 엔티티/관계 수
- KB별 엔티티 수
- 엔티티 타입별 분포
- Iteration 정보 (3-9)
- Concept 버전 정보 (v3-v9)

## 🎨 엔티티 타입별 색상

### ATP KB 엔티티
- `IterationExecutionRecord`: 🔴 #FF6B6B
- `RunSummary`: 🟢 #4ECDC4
- `TaskPlanVersion`: 🔵 #45B7D1
- `TaskPlanEval`: 🟠 #FFA07A
- `HarnessRegressionEval`: 🟠 #FF8C42
- `BackwardCompatibilityEval`: 🔴 #FF6347

### META KB 엔티티
- `ConceptVersion`: 🟣 #9370DB
- `HarnessVersion`: 🟣 #8B4789
- `IterationExecution`: 🟢 #6B8E23
- `IterationStrategy`: 🔵 #4169E1
- `IterationAnalysis`: 🔴 #DC143C
- `IterationIncident`: 🔴 #FF1493
- `EvolutionProposal`: 🟡 #FFD700

## 🔗 관계 타입

### ATP KB 관계
- `belongs_to`: TaskPlanVersion → IterationExecutionRecord
- `summarizes`: RunSummary → IterationExecutionRecord
- `evaluates`: Evaluation → TaskPlanVersion
- `uses_harness`: Evaluation → HarnessVersion (Cross-KB)

### META KB 관계
- `evolved_to`: Version evolution (v3→v4→...→v9)
- `HAS_STRATEGY`: IterationExecution → IterationStrategy
- `HAS_ANALYSIS`: IterationExecution → IterationAnalysis
- `HAS_INCIDENT`: IterationExecution → IterationIncident
- `instantiates_concept`: IterationExecution → ConceptVersion
- `recommends`: IterationAnalysis → EvolutionProposal
- `applies_to`: EvolutionProposal → TaskPlanPolicy

## 📈 데이터 특징

### Traceability
- 모든 ATP 엔티티는 `run_id`, `iteration_id`, `concept_version`, `harness_version` 포함
- Cross-KB linking: ATP 평가 엔티티 → META HarnessVersion
- Concept 진화 추적: v3 → v4 → v5 → v6 → v7 → v8 → v9

### Hub Nodes
- **ATP KB**: TaskPlanVersion이 중심 허브 (21개 incoming relations)
- **META KB**: 
  - GoalSpec (정책 기준)
  - IterationExecution (수행 요약)

## 🐛 문제 해결

### CORS 에러
로컬 파일로 직접 열면 CORS 에러가 발생할 수 있습니다. 반드시 웹서버를 통해 접근하세요.

### API 연결 실패
- Azle API 서버 상태 확인: https://agent.atoz.krafton.io
- 네트워크 연결 확인
- KB ID가 올바른지 확인 (kb-config.js)

### 성능 이슈
- Physics 모드 끄기
- 캐시 지우기
- 브라우저 콘솔에서 에러 확인

## 📝 커스터마이징

### KB ID 변경
`kb-config.js` 파일에서 수정:

```javascript
kbs: {
    atp: {
        id: 'YOUR_ATP_KB_ID',
        // ...
    },
    meta: {
        id: 'YOUR_META_KB_ID',
        // ...
    }
}
```

### 색상 변경
`kb-config.js`의 `display.colors`와 `display.relationColors` 섹션 수정

### API 엔드포인트 변경
`kb-config.js`의 `api.baseUrl` 수정

## 📚 관련 문서

- [Phase 3 완료 문서](../art-task-plan/learnings/48_phase3_complete_summary.md)
- [KB 최종 검증](../art-task-plan/learnings/47_kb_verified_final.md)
- [Azle API 문서](../art-task-plan/docs/api/Azle_API_Reference.md)

## 💡 Tips

1. **Combined View**에서 시작해서 전체 구조 파악
2. 특정 iteration 추적시 노드 검색 기능 활용
3. TaskPlanVersion 노드를 찾으면 해당 iteration의 중심 허브
4. Cross-KB 관계는 보라색 선으로 표시됨

---

**Last Updated**: 2026-04-14  
**Version**: 1.0.0  
**Phase 3 Data**: Iteration 3-9 (실제 실행 데이터)