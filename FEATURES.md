# Art Task Plan Dashboard - Enhanced Features

## 새로운 기능 (2026-03-31 업데이트)

대시보드가 성공적으로 업그레이드되었습니다! S3 이터레이션 결과와 KB 엔티티 상세 정보를 볼 수 있는 기능이 추가되었습니다.

## 🚀 접속 방법

대시보드 URL: https://kwakseungmin-lab.github.io/art-task-dashboard/

고급 기능 (새 기능 포함): https://kwakseungmin-lab.github.io/art-task-dashboard/index-advanced.html

## ✨ 주요 업데이트 내용

### 1. S3 Iterations Browser (새로운 탭)
- **위치**: "S3 Iterations" 탭
- **기능**:
  - S3에 저장된 모든 이터레이션 결과물 목록 표시
  - 각 이터레이션의 요약 정보 (성공률, 태스크 수, KB 업데이트 수 등)
  - 이터레이션 상세 보기 (클릭하면 상세 정보 표시)
  - 파일 미리보기 기능 (JSON 파일 내용 확인)
  - 실행 단계별 태스크 분포 시각화
  - 에이전트별 태스크 분포 표시
  - 평가 점수 시각화 (막대 그래프)
  - 에이전트 진화 이력 추적

### 2. KB Explorer (새로운 탭)
- **위치**: "KB Explorer" 탭
- **기능**:
  - Art KB와 Meta KB 전환 가능
  - 엔티티 검색 및 필터링
  - 엔티티 타입별 분류 및 통계
  - 엔티티 상세 정보 보기 (모달 팝업)
  - 엔티티 간 관계 시각화
  - 메타데이터 및 속성 상세 표시
  - 최근 업데이트된 엔티티 하이라이트

### 3. 실시간 업데이트 (WebSocket)
- 자동 연결 상태 표시 (Live/Offline)
- 실시간 알림 (우측 상단)
- Thread 실행 상태 실시간 업데이트
- KB 엔티티 생성/수정 실시간 알림
- 에이전트 상태 변화 모니터링

### 4. Dashboard Integration 모듈
- 기존 대시보드와 새 기능 완벽 통합
- 모듈식 아키텍처로 확장 가능
- 전역 함수로 쉬운 상호작용

## 📊 데이터 구조

### S3 Iteration 데이터
```javascript
{
  id: 'iteration_5',
  date: '2026-03-30',
  status: 'completed',
  summary: {
    total_tasks: 24,
    success_rate: 91.7,
    kb_entities_created: 156,
    kb_entities_updated: 89,
    agents_evolved: 3
  },
  files: {
    'Task_Plan_Output.json': { size, modified },
    'Evaluation_Result.json': { size, modified },
    'Agent_Evolution_Log.json': { size, modified },
    'KB_Updates.json': { size, modified }
  }
}
```

### KB Entity 데이터
```javascript
{
  entity_id: 'task_plan_20260330_001',
  entity_type: 'TaskPlan',
  metadata: {
    created_at: '2026-03-30T10:00:00Z',
    updated_at: '2026-03-30T14:23:45Z',
    source_agent: 'Designer',
    version: 3
  },
  attributes: {
    phase: 'Phase 1',
    status: 'completed'
  },
  relations: [
    { type: 'generated_by', target: 'agent_001' },
    { type: 'validated_by', target: 'evaluator' }
  ]
}
```

## 🔧 기술 스택

- **프론트엔드**: HTML5, Tailwind CSS, Chart.js
- **JavaScript 모듈**:
  - `s3-browser.js`: S3 이터레이션 브라우징
  - `kb-viewer.js`: KB 엔티티 탐색
  - `dashboard-integration.js`: 통합 레이어
  - `websocket-handler.js`: 실시간 업데이트
  - `azle-api.js`: Azle 플랫폼 API 통신

## 🔐 API 설정

1. 대시보드 접속 후 "API Settings" 탭 클릭
2. Azle API 토큰 입력
3. "Connect" 클릭하면 실시간 데이터 연결
4. 토큰은 로컬 스토리지에 안전하게 저장됨

## 📱 반응형 디자인

- 데스크톱, 태블릿, 모바일 모두 지원
- 터치 제스처 지원
- 자동 레이아웃 조정

## 🎨 UI/UX 개선사항

- 부드러운 애니메이션 효과
- 직관적인 탭 네비게이션
- 모달 팝업으로 상세 정보 표시
- 실시간 상태 표시기
- 로딩 상태 표시

## 📈 향후 개발 계획

- [ ] S3 실제 API 연동 (현재 모의 데이터)
- [ ] KB 실제 API 연동
- [ ] 이터레이션 비교 기능
- [ ] 엔티티 편집 기능
- [ ] 대시보드 커스터마이징
- [ ] 데이터 내보내기 기능

## 🐛 알려진 이슈

- S3 데이터는 현재 모의 데이터 사용 중 (실제 S3 연동 예정)
- KB 데이터도 일부 모의 데이터 포함
- WebSocket 재연결 시 일부 데이터 누락 가능

## 💡 사용 팁

1. **S3 Iterations 탭**: 각 이터레이션을 클릭하면 상세 정보를 볼 수 있습니다
2. **KB Explorer 탭**: 검색창을 활용하여 특정 엔티티를 빠르게 찾을 수 있습니다
3. **실시간 업데이트**: 우측 상단의 연결 상태를 확인하세요
4. **파일 미리보기**: "Preview" 버튼으로 JSON 파일 내용을 확인할 수 있습니다

## 📞 문의사항

문제가 발생하거나 기능 제안이 있으시면 GitHub Issues에 남겨주세요:
https://github.com/kwakseungmin-Lab/art-task-dashboard/issues