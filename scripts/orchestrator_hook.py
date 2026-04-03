#!/usr/bin/env python3
"""
Hook script to be called by Art Task Plan Orchestrator
This integrates with the actual pipeline to record results automatically

Usage:
    # In Orchestrator Phase 2 completion:
    subprocess.run(["python", "orchestrator_hook.py",
                    "--iteration", str(iteration),
                    "--evaluation-file", evaluation_path,
                    "--thread-id", thread_id])
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path
from datetime import datetime

def parse_evaluation_file(file_path):
    """Parse evaluation results from file"""

    if not Path(file_path).exists():
        print(f"Error: Evaluation file not found: {file_path}")
        return None

    with open(file_path, 'r') as f:
        data = json.load(f)

    return data

def record_to_registry(iteration, evaluation_data, thread_id=None):
    """Record iteration results to registry"""

    # Prepare registry entry
    entry = {
        "iteration": iteration,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "evaluation": evaluation_data,
        "thread_id": thread_id
    }

    # Call the record script
    cmd = [
        "python",
        str(Path(__file__).parent.parent / "tools" / "record_art_task_plan.py"),
        str(iteration)
    ]

    # Pass evaluation data via stdin
    result = subprocess.run(
        cmd,
        input=json.dumps(entry),
        capture_output=True,
        text=True
    )

    if result.returncode == 0:
        print(f"[OK] Successfully recorded iteration {iteration} to registry")
        return True
    else:
        print(f"[ERROR] Failed to record iteration {iteration}")
        print(f"Error: {result.stderr}")
        return False

def update_github():
    """Push updates to GitHub"""

    try:
        # Stage changes
        subprocess.run(["git", "add", "registry/", "dashboard-data/"], check=True)

        # Check if there are changes
        result = subprocess.run(
            ["git", "diff", "--staged", "--quiet"],
            capture_output=True
        )

        if result.returncode != 0:
            # There are changes to commit
            commit_msg = f"[AUTO] Auto-update: Iteration results [orchestrator-hook]"
            subprocess.run(["git", "commit", "-m", commit_msg], check=True)
            subprocess.run(["git", "push"], check=True)
            print("[OK] Updates pushed to GitHub")
        else:
            print("[NOTE] No changes to push")

    except subprocess.CalledProcessError as e:
        print(f"[WARN] Failed to push to GitHub: {e}")
        # Don't fail the whole process if GitHub push fails
        pass

def main():
    """Main entry point"""

    parser = argparse.ArgumentParser(description="Orchestrator hook for registry recording")
    parser.add_argument("--iteration", type=int, required=True, help="Iteration number")
    parser.add_argument("--evaluation-file", help="Path to evaluation JSON file")
    parser.add_argument("--thread-id", help="Orchestrator thread ID")
    parser.add_argument("--auto-push", action="store_true", help="Automatically push to GitHub")

    args = parser.parse_args()

    print(f"[UPDATE] Recording iteration {args.iteration} to registry...")

    # Parse evaluation file if provided
    evaluation_data = None
    if args.evaluation_file:
        evaluation_data = parse_evaluation_file(args.evaluation_file)

    if evaluation_data:
        # Record to registry
        success = record_to_registry(args.iteration, evaluation_data, args.thread_id)

        if success and args.auto_push:
            # Push to GitHub if requested
            update_github()

        sys.exit(0 if success else 1)
    else:
        print("[ERROR] No evaluation data available")
        sys.exit(1)

if __name__ == "__main__":
    main()