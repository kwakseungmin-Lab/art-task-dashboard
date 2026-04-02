#!/usr/bin/env python3
"""
Art Task Plan Registry Recording Tool
자동으로 iteration 결과를 Registry에 등록하고 대시보드에 표시
"""

import json
import os
import sys
from datetime import datetime
from pathlib import Path
import hashlib

class ArtTaskPlanRecorder:
    """Art Task Plan 결과를 Registry에 자동 등록"""

    def __init__(self):
        self.registry_dir = Path("registry")
        self.registry_dir.mkdir(exist_ok=True)

    def create_evaluation_json(self, iteration: int, games_data: dict) -> dict:
        """표준화된 evaluation JSON 생성"""

        # 점수 계산
        total_trials = 0
        passed_trials = 0

        for game, trials in games_data.items():
            for trial in trials:
                total_trials += 1
                if trial['status'] == 'PASS':
                    passed_trials += 1

        pass_rate = (passed_trials / total_trials * 100) if total_trials > 0 else 0

        return {
            "schema_version": "art_task_evaluation@1.0",
            "iteration": iteration,
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "overall_metrics": {
                "pass_rate": pass_rate,
                "total_games": len(games_data),
                "total_trials": total_trials,
                "coverage_gate": "PASS" if pass_rate >= 80 else "FAIL"
            },
            "game_results": games_data
        }

    def generate_registry_entry(self, iteration: int, evaluation: dict) -> dict:
        """Registry 엔트리 생성"""

        registry_id = hashlib.md5(
            f"iter_{iteration}_{datetime.now().isoformat()}".encode()
        ).hexdigest()[:12]

        return {
            "id": registry_id,
            "iteration": iteration,
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "status": "COMPLETED",
            "scores": {
                "pass_rate": evaluation["overall_metrics"]["pass_rate"],
                "overall": evaluation["overall_metrics"]["pass_rate"]  # 간단히 pass_rate 사용
            },
            "metrics": evaluation["overall_metrics"],
            "games": list(evaluation["game_results"].keys()),
            "dashboard_url": f"https://kwakseungmin-lab.github.io/art-task-dashboard/#iteration/{iteration}"
        }

    def save_registry(self, entry: dict):
        """Registry 저장"""

        # 개별 iteration registry
        iteration_file = self.registry_dir / f"iteration_{entry['iteration']}.json"
        with open(iteration_file, 'w') as f:
            json.dump(entry, f, indent=2)

        # Master registry 업데이트
        master_file = self.registry_dir / "master_registry.json"

        if master_file.exists():
            with open(master_file, 'r') as f:
                master = json.load(f)
        else:
            master = {"entries": [], "last_updated": None}

        # 기존 엔트리 교체 또는 추가
        found = False
        for i, e in enumerate(master["entries"]):
            if e["iteration"] == entry["iteration"]:
                master["entries"][i] = entry
                found = True
                break

        if not found:
            master["entries"].append(entry)

        master["entries"].sort(key=lambda x: x["iteration"])
        master["last_updated"] = datetime.utcnow().isoformat() + "Z"

        with open(master_file, 'w') as f:
            json.dump(master, f, indent=2)

        print(f"[OK] Registry saved: {iteration_file}")
        print(f"[OK] Master registry updated: {master_file}")

    def send_notification(self, entry: dict):
        """완료 알림 전송"""

        message = f"""
[SUCCESS] **Iteration {entry['iteration']} Complete!**

[SCORE] Pass Rate: {entry['scores']['pass_rate']:.1f}%
[GAMES] Games: {', '.join(entry['games'])}
[STATUS] Status: {entry['metrics']['coverage_gate']}

[LINK] View Results: {entry['dashboard_url']}

---
*Automated by Art Task Plan Registry*
        """

        print(message)

        # notification.txt 파일로 저장 (나중에 Slack webhook 연동)
        notif_file = self.registry_dir / f"notification_iter_{entry['iteration']}.txt"
        with open(notif_file, 'w') as f:
            f.write(message)

    def record(self, iteration: int, games_data: dict = None):
        """메인 기록 함수 - Orchestrator가 호출"""

        print(f"[Registry] Recording iteration {iteration}...")

        # 테스트용 더미 데이터 (실제로는 Evaluator 결과 사용)
        if games_data is None:
            games_data = {
                "Chrome_Dino_Runner": [
                    {"trial": 1, "status": "PASS", "score": 95},
                    {"trial": 2, "status": "PASS", "score": 92},
                    {"trial": 3, "status": "PASS", "score": 96},
                    {"trial": 4, "status": "PASS", "score": 94},
                    {"trial": 5, "status": "PASS", "score": 93}
                ],
                "Pico_Echo": [
                    {"trial": 1, "status": "PASS", "score": 98},
                    {"trial": 2, "status": "PASS", "score": 97},
                    {"trial": 3, "status": "PASS", "score": 99},
                    {"trial": 4, "status": "PASS", "score": 96},
                    {"trial": 5, "status": "PASS", "score": 98}
                ]
            }

        # Evaluation JSON 생성
        evaluation = self.create_evaluation_json(iteration, games_data)

        # Registry entry 생성
        entry = self.generate_registry_entry(iteration, evaluation)

        # 저장
        self.save_registry(entry)

        # 알림
        self.send_notification(entry)

        return {
            "success": True,
            "registry_id": entry["id"],
            "dashboard_url": entry["dashboard_url"],
            "pass_rate": entry["scores"]["pass_rate"]
        }


def main():
    """CLI 인터페이스"""
    if len(sys.argv) < 2:
        print("Usage: python record_art_task_plan.py <iteration> [evaluation.json]")
        sys.exit(1)

    iteration = int(sys.argv[1])

    # evaluation.json이 있으면 파싱, 없으면 더미 데이터
    games_data = None
    if len(sys.argv) > 2:
        with open(sys.argv[2], 'r') as f:
            eval_data = json.load(f)
            games_data = eval_data.get("game_results")

    recorder = ArtTaskPlanRecorder()
    result = recorder.record(iteration, games_data)

    print(f"\n[SUCCESS] Successfully recorded iteration {iteration}")
    print(f"   Registry ID: {result['registry_id']}")
    print(f"   Dashboard: {result['dashboard_url']}")
    print(f"   Pass Rate: {result['pass_rate']:.1f}%")


if __name__ == "__main__":
    main()