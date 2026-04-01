#!/bin/bash

# Copy all iterations data to art-task-dashboard repository
SOURCE_DIR="C:/Users/ksm2761/Documents/GitHub/a2z-docs/Solutions/GameMaking/Planning/experiments/iterations"
DEST_DIR="c:/tmp/art-task-dashboard/data"

echo "Copying all iterations data..."

# Iterations to copy (3-8)
for iter in 3 4 5 6 7 8; do
    echo "Processing iteration_${iter}..."

    # Check if iteration exists
    if [ -d "${SOURCE_DIR}/iteration_${iter}/data/task_plans" ]; then
        # Copy all games in this iteration
        for game_path in "${SOURCE_DIR}/iteration_${iter}/data/task_plans"/*; do
            if [ -d "$game_path" ]; then
                game_name=$(basename "$game_path")
                echo "  Copying ${game_name}..."

                # Copy all trials for this game
                for trial_path in "$game_path"/trial_*; do
                    if [ -d "$trial_path" ]; then
                        trial_name=$(basename "$trial_path")

                        # Create destination directory
                        mkdir -p "${DEST_DIR}/iteration_${iter}/${game_name}/${trial_name}"

                        # Copy files
                        cp -r "$trial_path"/* "${DEST_DIR}/iteration_${iter}/${game_name}/${trial_name}/" 2>/dev/null

                        echo "    Copied ${trial_name}"
                    fi
                done
            fi
        done
    else
        echo "  Iteration ${iter} not found, skipping..."
    fi
done

echo "Copy complete!"

# Show summary
echo ""
echo "Summary of copied data:"
for iter in 3 4 5 6 7 8; do
    if [ -d "${DEST_DIR}/iteration_${iter}" ]; then
        echo "Iteration ${iter}:"
        for game_dir in "${DEST_DIR}/iteration_${iter}"/*; do
            if [ -d "$game_dir" ]; then
                game_name=$(basename "$game_dir")
                trial_count=$(ls -d "$game_dir"/trial_* 2>/dev/null | wc -l)
                echo "  - ${game_name}: ${trial_count} trials"
            fi
        done
    fi
done