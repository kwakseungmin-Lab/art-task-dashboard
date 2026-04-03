#!/usr/bin/env python3
"""
Generate registry entries from collected data
This consolidates all iteration data into the registry format
"""

import json
from datetime import datetime
from pathlib import Path

def consolidate_registry():
    """Consolidate all registry entries and update dashboard"""

    registry_dir = Path("registry")
    if not registry_dir.exists():
        print("No registry directory found")
        return

    # Read master registry
    master_file = registry_dir / "master_registry.json"
    if master_file.exists():
        with open(master_file, 'r') as f:
            master = json.load(f)

        print(f"[INFO] Registry status:")
        print(f"   - Total iterations: {master.get('total_iterations', 0)}")
        print(f"   - Average pass rate: {master.get('average_pass_rate', 0)}%")
        print(f"   - Last updated: {master.get('last_updated', 'N/A')}")

        # Update dashboard-data for quick access
        update_dashboard_data(master)
    else:
        print("No master registry found")

def update_dashboard_data(master):
    """Update dashboard-data files for quick access"""

    # Create dashboard-data directory if needed
    dashboard_dir = Path("dashboard-data")
    dashboard_dir.mkdir(exist_ok=True)

    # Save latest iteration data
    if master["entries"]:
        latest = master["entries"][-1]
        latest_file = dashboard_dir / "latest_iteration.json"
        with open(latest_file, 'w') as f:
            json.dump(latest, f, indent=2)

        print(f"   - Latest iteration: {latest['iteration']} (Pass rate: {latest['scores']['pass_rate']}%)")

    # Generate summary statistics
    summary = {
        "total_iterations": master.get("total_iterations", 0),
        "average_pass_rate": master.get("average_pass_rate", 0),
        "last_updated": master.get("last_updated"),
        "trend": calculate_trend(master["entries"]) if master["entries"] else "stable"
    }

    summary_file = dashboard_dir / "summary.json"
    with open(summary_file, 'w') as f:
        json.dump(summary, f, indent=2)

def calculate_trend(entries):
    """Calculate pass rate trend"""

    if len(entries) < 2:
        return "stable"

    # Compare last 3 iterations
    recent = entries[-3:] if len(entries) >= 3 else entries
    pass_rates = [e["scores"]["pass_rate"] for e in recent]

    # Calculate trend
    if all(pass_rates[i] <= pass_rates[i+1] for i in range(len(pass_rates)-1)):
        return "improving"
    elif all(pass_rates[i] >= pass_rates[i+1] for i in range(len(pass_rates)-1)):
        return "declining"
    else:
        return "stable"

def main():
    """Main entry point"""

    print("[BUILD] Generating registry entries...")

    # Consolidate registry
    consolidate_registry()

    print("[DONE] Registry generation complete!")

if __name__ == "__main__":
    main()