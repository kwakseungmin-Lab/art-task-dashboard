#!/usr/bin/env python3
"""Remove specific iteration from registry"""

import json
from pathlib import Path

def remove_iteration(iteration_num):
    """Remove iteration from registry"""

    # Load master registry
    master_file = Path("registry/master_registry.json")
    with open(master_file, 'r') as f:
        master = json.load(f)

    # Remove the iteration
    original_count = len(master["entries"])
    master["entries"] = [e for e in master["entries"] if e["iteration"] != iteration_num]

    if len(master["entries"]) < original_count:
        # Update metadata
        master["total_iterations"] = len(master["entries"])

        # Recalculate average
        if master["entries"]:
            total_pass_rate = sum(e["scores"]["pass_rate"] for e in master["entries"])
            master["average_pass_rate"] = round(total_pass_rate / len(master["entries"]), 1)
        else:
            master["average_pass_rate"] = 0

        # Save updated registry
        with open(master_file, 'w') as f:
            json.dump(master, f, indent=2)

        print(f"[OK] Removed iteration {iteration_num}")
        print(f"[INFO] Total iterations: {master['total_iterations']}")
        print(f"[INFO] Average pass rate: {master['average_pass_rate']}%")

        # Remove individual file if exists
        iter_file = Path(f"registry/iteration_{iteration_num}.json")
        if iter_file.exists():
            iter_file.unlink()
            print(f"[OK] Removed file: {iter_file}")
    else:
        print(f"[WARN] Iteration {iteration_num} not found")

if __name__ == "__main__":
    remove_iteration(10)