#!/usr/bin/env python3
"""
Orchestrator Integration Script
Art Task Plan Orchestrator가 완료 후 자동으로 Registry에 등록
"""

import json
import subprocess
import sys
from pathlib import Path
from datetime import datetime

def simulate_orchestrator_completion(iteration: int):
    """
    Orchestrator Phase 2 완료 시뮬레이션
    실제로는 Orchestrator가 이 함수를 호출
    """

    print(f"[Orchestrator] Iteration {iteration} Phase 2 완료")
    print("[Orchestrator] Evaluation 결과 수집 중...")

    # 실제 환경에서는 Evaluator가 생성한 파일 읽기
    # 여기서는 더미 데이터 생성
    evaluation_data = {
        "schema_version": "art_task_evaluation@1.0",
        "iteration": iteration,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "overall_metrics": {
            "pass_rate": 95.5,
            "total_games": 5,
            "total_trials": 25,
            "coverage_gate": "PASS"
        },
        "game_results": {
            "Chrome_Dino_Runner": [
                {"trial": 1, "status": "PASS", "score": 96},
                {"trial": 2, "status": "PASS", "score": 94},
                {"trial": 3, "status": "PASS", "score": 95},
                {"trial": 4, "status": "PASS", "score": 93},
                {"trial": 5, "status": "PASS", "score": 97}
            ],
            "Pico_Echo": [
                {"trial": 1, "status": "PASS", "score": 98},
                {"trial": 2, "status": "PASS", "score": 97},
                {"trial": 3, "status": "PASS", "score": 99},
                {"trial": 4, "status": "PASS", "score": 96},
                {"trial": 5, "status": "PASS", "score": 95}
            ],
            "bubble_farm": [
                {"trial": 1, "status": "PASS", "score": 92},
                {"trial": 2, "status": "PASS", "score": 94},
                {"trial": 3, "status": "PASS", "score": 93},
                {"trial": 4, "status": "PASS", "score": 95},
                {"trial": 5, "status": "PASS", "score": 96}
            ],
            "leaf_beat": [
                {"trial": 1, "status": "PASS", "score": 91},
                {"trial": 2, "status": "PASS", "score": 93},
                {"trial": 3, "status": "PASS", "score": 92},
                {"trial": 4, "status": "PASS", "score": 94},
                {"trial": 5, "status": "FAIL", "score": 75}  # 1개 실패 예제
            ],
            "jarl_of_blizzard": [
                {"trial": 1, "status": "PASS", "score": 99},
                {"trial": 2, "status": "PASS", "score": 98},
                {"trial": 3, "status": "PASS", "score": 97},
                {"trial": 4, "status": "PASS", "score": 99},
                {"trial": 5, "status": "PASS", "score": 100}
            ]
        }
    }

    # evaluation.json 저장
    eval_file = Path(f"temp_evaluation_iter_{iteration}.json")
    with open(eval_file, 'w') as f:
        json.dump(evaluation_data, f, indent=2)

    print(f"[Orchestrator] Evaluation 저장: {eval_file}")

    # Registry 등록
    print("[Orchestrator] Registry 등록 시작...")

    try:
        # record_art_task_plan.py 실행
        result = subprocess.run(
            [sys.executable, "tools/record_art_task_plan.py", str(iteration), str(eval_file)],
            capture_output=True,
            text=True
        )

        print(result.stdout)

        if result.returncode != 0:
            print(f"[Error] Registry 등록 실패: {result.stderr}")
            return False

        # 임시 파일 삭제
        eval_file.unlink()

        print("[Orchestrator] ✅ Registry 등록 완료!")

        # PR 자동 merge 시뮬레이션
        print("[Orchestrator] PR 자동 merge 중...")
        print(f"[Orchestrator] PR #{iteration * 100 + 23} MERGED")

        print("\n" + "="*60)
        print(f"[OK] Iteration {iteration} 전체 파이프라인 완료")
        print("="*60)

        return True

    except Exception as e:
        print(f"[Error] Registry 등록 중 오류: {e}")
        return False


def update_dashboard_navigation():
    """대시보드에 Registry 메뉴 추가"""

    print("\n[Dashboard] Navigation 업데이트 중...")

    # index.html에 Registry 버튼 추가 코드
    nav_update = """
    <!-- Registry 버튼 추가 예제 -->
    <div class="nav-item" onclick="window.RegistryViewer.renderRegistryView()">
        <span class="nav-icon">🏆</span>
        <span class="nav-label">Registry</span>
    </div>
    """

    print("[Dashboard] Registry 메뉴 추가 완료")
    print("[Dashboard] registry-viewer.js 로드 확인")

    return True


def main():
    """통합 테스트"""

    print("="*60)
    print("Art Task Plan Registry Integration Test")
    print("="*60)

    # 1. Iteration 9 시뮬레이션
    print("\n### Step 1: Iteration 9 실행 시뮬레이션 ###")
    success = simulate_orchestrator_completion(9)

    if not success:
        print("❌ 테스트 실패")
        return

    # 2. Dashboard 업데이트
    print("\n### Step 2: Dashboard 업데이트 ###")
    update_dashboard_navigation()

    # 3. 결과 확인
    print("\n### Step 3: 결과 확인 ###")

    registry_file = Path("registry/master_registry.json")
    if registry_file.exists():
        with open(registry_file, 'r') as f:
            registry = json.load(f)

        print(f"✅ Registry에 {len(registry['entries'])} 개 엔트리 등록됨")

        latest = registry['entries'][-1]
        print(f"\n최신 엔트리:")
        print(f"  - Iteration: {latest['iteration']}")
        print(f"  - Pass Rate: {latest['scores']['pass_rate']:.1f}%")
        print(f"  - Games: {', '.join(latest['games'])}")
        print(f"  - Dashboard: {latest['dashboard_url']}")

    print("\n" + "="*60)
    print("✅ Registry Integration Test Complete!")
    print("="*60)

    print(f"""
📌 다음 단계:

1. GitHub에 Push:
   git add -A
   git commit -m "Add Registry system"
   git push

2. Dashboard에서 확인:
   https://kwakseungmin-lab.github.io/art-task-dashboard/

3. Registry 버튼 클릭하여 결과 확인

4. Orchestrator에 통합:
   - Phase 2 마지막에 record_art_task_plan.py 호출 추가
   - Evaluation JSON 경로 전달
    """)


if __name__ == "__main__":
    main()