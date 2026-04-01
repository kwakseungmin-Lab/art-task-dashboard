// Real JSON File Loader - Display actual JSON files from iteration_8
const RealJSONLoader = {
    // Complete JSON data from actual iteration_8 files
    jsonData: {
        // Project Common (from iteration_8/trial_1)
        '_project_common.json': {
            "schema_version": "art_task_plan_pkg@8",
            "project": {
                "project_id": "chrome_dino_runner",
                "project_name": "Chrome_Dino_Runner"
            },
            "meta": {
                "plan_id": "Chrome_Dino_Runner__iter8__trial1",
                "game_name": "Chrome_Dino_Runner",
                "iteration": 8,
                "trial_index": 1,
                "plan_dir": "trial_1",
                "created_at_utc": "2026-03-25T16:05:37Z",
                "git_ref": "art_task_plan/iter8_pipeline",
                "gdd_source": "github",
                "gdd_path": "Solutions/GameMaking/Planning/Repository/Art_Task_Plan/GDD/chrome_dino_runner/_gdd_data.json",
                "prompt_path": "Solutions/GameMaking/Planning/Repository/Art_Task_Plan/Prompts/Assembled_Prompt_v8.md",
                "run_id": "20260325_085239_53910769"
            },
            "canvas": {
                "resolution_px": { "width": 600, "height": 150 },
                "pixel_perfect": true,
                "target_fps": 60
            },
            "palette": {
                "primary": { "name": "primary", "hex": "#535353" },
                "background": { "name": "background", "hex": "#F7F7F7" },
                "accent": { "name": "highlight", "hex": "#FF0000" }
            },
            "style_guide": {
                "rendering": "pixel_art",
                "detail_level": "low",
                "shading": "flat",
                "outline": "2px"
            },
            "reference_images": [
                {
                    "label": "offline_sprite_1x",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/offline-sprite-1x.png",
                    "purpose": "1x pixel atlas for dinosaur, cactus, pterodactyl, digits, and ground proportions."
                },
                {
                    "label": "offline_sprite_2x",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/offline-sprite-2x.png",
                    "purpose": "2x atlas for silhouette spacing, obstacle spacing, and hit-readability checks."
                },
                {
                    "label": "gameplay_capture",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/screenshot.gif",
                    "purpose": "Gameplay frame for HUD anchoring, sky-ground composition, and runner lane spacing."
                },
                {
                    "label": "run_loop_capture",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/t-rex-runner-19janil.gif",
                    "purpose": "Run cadence, jump silhouette timing, and restart screen pacing."
                }
            ],
            "bevy_constraints": {
                "sprite_pipeline": "Bevy 0.16 2D sprites with nearest-neighbor image sampling and TextureAtlasLayout for multi-frame sheets.",
                "ecs_model": "Each art asset is represented by one entity or one atlas handle with Transform, Visibility, and category-specific marker components.",
                "asset_loading": "Preload JSON-declared PNG outputs through AssetServer during Loading state and keep typed handles in resources for gameplay systems.",
                "runtime_notes": [
                    "Camera2d renders world and HUD with crisp nearest scaling at 1x and 2x window sizes.",
                    "Ground and cloud motion use transform translation driven by the shared CurrentSpeed resource.",
                    "HUD score digits draw from a glyph atlas while game-over labels render as static sprite images."
                ]
            },
            "export_rules": {
                "default_format": "png",
                "transparent_background": true,
                "naming": "use_asset_key"
            },
            "mechanic_coverage": [
                {
                    "mechanic_id": "runner_state_loop",
                    "label": "Runner state loop",
                    "description": "Covers grounded run, jump, duck, and crash feedback so the runner remains readable at every input state.",
                    "critical_states": ["ground_run", "jump_arc_peak", "duck_clearance", "collision_stop"],
                    "task_ids": ["task_id_801000001", "task_id_801000002", "task_id_801000003", "task_id_801000004", "task_id_801000010", "task_id_801000011"],
                    "ui_feedback_task_ids": ["task_id_801000014"]
                },
                {
                    "mechanic_id": "obstacle_spawn_mix",
                    "label": "Obstacle spawn mix",
                    "description": "Covers single, clustered, and airborne obstacle reads across the increasing speed curve.",
                    "critical_states": ["single_cactus", "pair_cluster", "triplet_cluster", "low_fly", "high_fly"],
                    "task_ids": ["task_id_801000005", "task_id_801000006", "task_id_801000007", "task_id_801000008"],
                    "ui_feedback_task_ids": ["task_id_801000014"]
                },
                {
                    "mechanic_id": "score_progression_feedback",
                    "label": "Score progression feedback",
                    "description": "Covers zero-padded score digits, persistent HUD anchoring, and milestone flash timing.",
                    "critical_states": ["score_00000", "milestone_00100", "late_run_00999"],
                    "task_ids": ["task_id_801000013", "task_id_801000014"],
                    "ui_feedback_task_ids": ["task_id_801000013", "task_id_801000014"]
                },
                {
                    "mechanic_id": "game_over_restart",
                    "label": "Game-over restart flow",
                    "description": "Covers crash feedback, game-over banner visibility, and restart prompt visibility after collision.",
                    "critical_states": ["death_lock", "game_over_banner", "restart_ready"],
                    "task_ids": ["task_id_801000004", "task_id_801000015", "task_id_801000016"],
                    "ui_feedback_task_ids": ["task_id_801000015", "task_id_801000016"]
                },
                {
                    "mechanic_id": "world_scroll_depth",
                    "label": "World scroll depth",
                    "description": "Covers sky fill, ground motion, overlay texture, and cloud parallax for depth without gameplay clutter.",
                    "critical_states": ["sky_static", "ground_scroll", "detail_overlay", "cloud_parallax"],
                    "task_ids": ["task_id_801000009", "task_id_801000010", "task_id_801000011", "task_id_801000012"],
                    "ui_feedback_task_ids": ["task_id_801000014"]
                }
            ],
            "assets": [
                { "task_id": "task_id_801000001", "asset_key": "dino_runner_core", "category": "character", "file": "character/dino_runner_core.json", "execution_order": 10, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000002", "asset_key": "dino_air_pose", "category": "character", "file": "character/dino_air_pose.json", "execution_order": 20, "variant_of": "task_id_801000001", "variant_of_asset_key": "dino_runner_core" },
                { "task_id": "task_id_801000003", "asset_key": "dino_low_profile", "category": "character", "file": "character/dino_low_profile.json", "execution_order": 30, "variant_of": "task_id_801000001", "variant_of_asset_key": "dino_runner_core" },
                { "task_id": "task_id_801000004", "asset_key": "dino_crash_pose", "category": "character", "file": "character/dino_crash_pose.json", "execution_order": 40, "variant_of": "task_id_801000001", "variant_of_asset_key": "dino_runner_core" },
                { "task_id": "task_id_801000005", "asset_key": "cactus_single", "category": "obstacles", "file": "obstacles/cactus_single.json", "execution_order": 50, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000006", "asset_key": "cactus_pair_cluster", "category": "obstacles", "file": "obstacles/cactus_pair_cluster.json", "execution_order": 60, "variant_of": "task_id_801000005", "variant_of_asset_key": "cactus_single" },
                { "task_id": "task_id_801000007", "asset_key": "cactus_triplet_cluster", "category": "obstacles", "file": "obstacles/cactus_triplet_cluster.json", "execution_order": 70, "variant_of": "task_id_801000005", "variant_of_asset_key": "cactus_single" },
                { "task_id": "task_id_801000008", "asset_key": "pterodactyl_flap_sheet", "category": "obstacles", "file": "obstacles/pterodactyl_flap_sheet.json", "execution_order": 80, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000009", "asset_key": "sky_day_field", "category": "world", "file": "world/sky_day_field.json", "execution_order": 90, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000010", "asset_key": "ground_runner_strip", "category": "world", "file": "world/ground_runner_strip.json", "execution_order": 100, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000011", "asset_key": "ground_pebble_overlay", "category": "world", "file": "world/ground_pebble_overlay.json", "execution_order": 110, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000012", "asset_key": "cloud_pass_small", "category": "world", "file": "world/cloud_pass_small.json", "execution_order": 120, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000013", "asset_key": "score_digits_font", "category": "ui", "file": "ui/score_digits_font.json", "execution_order": 130, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000014", "asset_key": "score_rack_panel", "category": "ui", "file": "ui/score_rack_panel.json", "execution_order": 140, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000015", "asset_key": "game_over_message", "category": "ui", "file": "ui/game_over_message.json", "execution_order": 150, "variant_of": null, "variant_of_asset_key": null },
                { "task_id": "task_id_801000016", "asset_key": "restart_hint_label", "category": "ui", "file": "ui/restart_hint_label.json", "execution_order": 160, "variant_of": null, "variant_of_asset_key": null }
            ]
        }
    },

    // Get JSON data for a file
    getJSON(filename) {
        console.log('Getting REAL JSON for file:', filename);

        // Remove path if included
        const justFilename = filename.split('/').pop().split('\\').pop();

        // Direct filename match
        const directMatch = this.jsonData[justFilename];
        if (directMatch) {
            return directMatch;
        }

        // Try without extension
        const withoutExt = justFilename.replace('.json', '');
        for (const key in this.jsonData) {
            const keyBase = key.replace('.json', '');
            if (withoutExt === keyBase || withoutExt.includes(keyBase) || keyBase.includes(withoutExt)) {
                return this.jsonData[key];
            }
        }

        // Default
        return {
            "error": "File not found",
            "requested": filename,
            "available_files": Object.keys(this.jsonData).join(', '),
            "hint": "Loading complete JSON files from repository..."
        };
    },

    // Load a specific JSON file from repository (this will be updated dynamically)
    loadJSONFile(taskId, filename) {
        // Map task IDs to actual file content
        const fileMap = {
            'task_id_801000013': 'score_digits_font.json',
            'task_id_801000015': 'game_over_message.json',
            'task_id_801000005': 'cactus_single.json'
        };

        if (fileMap[taskId]) {
            return this.jsonData[fileMap[taskId]];
        }
        return null;
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.ActualJSONLoader = window.RealJSONLoader = RealJSONLoader;
    console.log('RealJSONLoader loaded with files:', Object.keys(RealJSONLoader.jsonData));
}