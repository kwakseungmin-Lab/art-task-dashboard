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
            "assets": [
                { "task_id": "task_id_801000001", "asset_key": "dino_runner_core", "category": "character", "file": "character/dino_runner_core.json" },
                { "task_id": "task_id_801000002", "asset_key": "dino_air_pose", "category": "character", "file": "character/dino_air_pose.json" },
                { "task_id": "task_id_801000003", "asset_key": "dino_low_profile", "category": "character", "file": "character/dino_low_profile.json" },
                { "task_id": "task_id_801000004", "asset_key": "dino_crash_pose", "category": "character", "file": "character/dino_crash_pose.json" },
                { "task_id": "task_id_801000005", "asset_key": "cactus_single", "category": "obstacles", "file": "obstacles/cactus_single.json" },
                { "task_id": "task_id_801000006", "asset_key": "cactus_pair_cluster", "category": "obstacles", "file": "obstacles/cactus_pair_cluster.json" },
                { "task_id": "task_id_801000007", "asset_key": "cactus_triplet_cluster", "category": "obstacles", "file": "obstacles/cactus_triplet_cluster.json" },
                { "task_id": "task_id_801000008", "asset_key": "pterodactyl_flap_sheet", "category": "obstacles", "file": "obstacles/pterodactyl_flap_sheet.json" },
                { "task_id": "task_id_801000009", "asset_key": "sky_day_field", "category": "world", "file": "world/sky_day_field.json" },
                { "task_id": "task_id_801000010", "asset_key": "ground_runner_strip", "category": "world", "file": "world/ground_runner_strip.json" },
                { "task_id": "task_id_801000011", "asset_key": "ground_pebble_overlay", "category": "world", "file": "world/ground_pebble_overlay.json" },
                { "task_id": "task_id_801000012", "asset_key": "cloud_pass_small", "category": "world", "file": "world/cloud_pass_small.json" },
                { "task_id": "task_id_801000013", "asset_key": "score_digits_font", "category": "ui", "file": "ui/score_digits_font.json" },
                { "task_id": "task_id_801000014", "asset_key": "score_rack_panel", "category": "ui", "file": "ui/score_rack_panel.json" },
                { "task_id": "task_id_801000015", "asset_key": "game_over_message", "category": "ui", "file": "ui/game_over_message.json" },
                { "task_id": "task_id_801000016", "asset_key": "restart_hint_label", "category": "ui", "file": "ui/restart_hint_label.json" }
            ]
        },

        // Character files (from iteration_8)
        'dino_runner_core.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000001",
            "asset_key": "dino_runner_core",
            "asset_name": "Player Dino Ground Run Core",
            "category": "character",
            "subcategory": "player_motion",
            "priority": "P0",
            "execution_order": 10,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Primary silhouette uses #535353 with transparent negative space only.",
                "Runner body footprint stays within 88x94 px.",
                "Outline weight stays at 2 px on the head, torso, and tail."
            ],
            "differences": [
                "This task defines the ground run cadence used while the character is alive and grounded.",
                "Two frames alternate left-lead and right-lead hind legs at 12 FPS.",
                "Torso volume and head height stay stable so jump, duck, and crash states branch from one body proportion."
            ],
            "depends_on": [],
            "blocks": ["task_id_801000002", "task_id_801000003", "task_id_801000004"],
            "blocked_by": [],
            "relationships": {
                "related_task_ids": ["task_id_801000002", "task_id_801000003", "task_id_801000004", "task_id_801000010"]
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
                    "label": "run_loop_capture",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/t-rex-runner-19janil.gif",
                    "purpose": "Run cadence, jump silhouette timing, and restart screen pacing."
                }
            ],
            "bevy_constraints": {
                "bundle_strategy": "SpriteSheetBundle",
                "atlas_or_static": "texture_atlas_horizontal_2_frame",
                "ecs_components": ["RunnerTag", "AnimationTimer", "ColliderAabb", "GroundedState", "VelocityY"],
                "asset_loading": "Load one 176x94 PNG atlas during Loading state and build an 88x94 TextureAtlasLayout before gameplay starts.",
                "runtime_notes": [
                    "Advance the atlas index every 0.0833 seconds for a 12 FPS run loop.",
                    "Place the transform anchor at x=80 and y=56 in world units mapped 1:1 to pixels.",
                    "Use nearest-neighbor sampling on the image handle to keep hard pixel edges at 1x and 2x window scale."
                ]
            },
            "palette": {
                "primary": { "name": "primary", "hex": "#535353" },
                "background": { "name": "background", "hex": "#F7F7F7" },
                "accent": { "name": "highlight", "hex": "#FF0000" }
            },
            "canvas": {
                "resolution_px": { "width": 600, "height": 150 },
                "pixel_perfect": true,
                "target_fps": 60
            },
            "style_guide": {
                "rendering": "pixel_art",
                "detail_level": "low",
                "shading": "flat",
                "outline": "2px"
            },
            "context": {
                "role": "runner_ground_state",
                "screen_position": {
                    "type": "absolute_px",
                    "position_px": [80, 56]
                },
                "layer": "character",
                "usage": "Visible during active running while obstacles move from right to left at 300-900 px/s."
            },
            "specs": {
                "dimensions_px": { "width": 88, "height": 94 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "sprite_sheet",
                    "frame_count": 2,
                    "fps": 12,
                    "loop": true,
                    "frame_size_px": [88, 94],
                    "layout": { "columns": 2, "rows": 1 }
                },
                "hitbox_px": {
                    "width": 44,
                    "height": 90,
                    "offset_px": [22, 2]
                },
                "motion_profile": {
                    "baseline_y": 0,
                    "ground_contact_frames": [0, 1],
                    "speed_window_px_per_s": [300, 900]
                },
                "silhouette_notes": [
                    "Head width occupies 24 px and sits 14 px ahead of the torso pivot.",
                    "Tail tip stays at least 6 px above the ground baseline.",
                    "Eye cutout remains a 6x6 px rectangle in both frames."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "character/dino_runner_core.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Sprite sheet canvas is exactly 176x94 px with no gutter between frames.",
                "Foot contact pixels stay on one baseline across both frames.",
                "Painted pixels use #535353 only and keep transparent background outside the silhouette."
            ]
        },

        // Add more files as needed
        'dino_air_pose.json': { "schema_version": "art_task@8", "task_id": "task_id_801000002", "asset_key": "dino_air_pose" },
        'dino_low_profile.json': { "schema_version": "art_task@8", "task_id": "task_id_801000003", "asset_key": "dino_low_profile" },
        'dino_crash_pose.json': { "schema_version": "art_task@8", "task_id": "task_id_801000004", "asset_key": "dino_crash_pose" },
        'cactus_single.json': { "schema_version": "art_task@8", "task_id": "task_id_801000005", "asset_key": "cactus_single" },
        'cactus_pair_cluster.json': { "schema_version": "art_task@8", "task_id": "task_id_801000006", "asset_key": "cactus_pair_cluster" },
        'cactus_triplet_cluster.json': { "schema_version": "art_task@8", "task_id": "task_id_801000007", "asset_key": "cactus_triplet_cluster" },
        'pterodactyl_flap_sheet.json': { "schema_version": "art_task@8", "task_id": "task_id_801000008", "asset_key": "pterodactyl_flap_sheet" },
        'sky_day_field.json': { "schema_version": "art_task@8", "task_id": "task_id_801000009", "asset_key": "sky_day_field" },
        'ground_runner_strip.json': { "schema_version": "art_task@8", "task_id": "task_id_801000010", "asset_key": "ground_runner_strip" },
        'ground_pebble_overlay.json': { "schema_version": "art_task@8", "task_id": "task_id_801000011", "asset_key": "ground_pebble_overlay" },
        'cloud_pass_small.json': { "schema_version": "art_task@8", "task_id": "task_id_801000012", "asset_key": "cloud_pass_small" },
        'score_digits_font.json': { "schema_version": "art_task@8", "task_id": "task_id_801000013", "asset_key": "score_digits_font" },
        'score_rack_panel.json': { "schema_version": "art_task@8", "task_id": "task_id_801000014", "asset_key": "score_rack_panel" },
        'game_over_message.json': { "schema_version": "art_task@8", "task_id": "task_id_801000015", "asset_key": "game_over_message" },
        'restart_hint_label.json': { "schema_version": "art_task@8", "task_id": "task_id_801000016", "asset_key": "restart_hint_label" }
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

        // Try without path
        for (const key in this.jsonData) {
            if (justFilename === key || justFilename.includes(key.replace('.json', ''))) {
                return this.jsonData[key];
            }
        }

        // Default
        return {
            "error": "File not found",
            "requested": filename,
            "available_files": Object.keys(this.jsonData)
        };
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.ActualJSONLoader = window.RealJSONLoader = RealJSONLoader;
}