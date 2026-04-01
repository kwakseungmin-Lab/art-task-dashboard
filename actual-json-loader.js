// Actual JSON File Loader - Real iteration_8 data from a2z-docs repo
const ActualJSONLoader = {
    // Complete JSON data from actual iteration_8/trial_1 files
    jsonData: {
        // From iteration_8/trial_1/_project_common.json
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

        // From character/dino_runner_core.json
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

        // From obstacles/cactus_triplet_cluster.json
        'cactus_triplet_cluster.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000007",
            "asset_key": "cactus_triplet_cluster",
            "asset_name": "Triplet Cactus Cluster",
            "category": "obstacles",
            "subcategory": "ground_obstacle",
            "priority": "P0",
            "execution_order": 70,
            "variant_of": "task_id_801000005",
            "variant_of_asset_key": "cactus_single",
            "shared_properties": [
                "Primary painted tone uses #535353 with transparent background only.",
                "Ground contact stays on y=0 for the spawn lane.",
                "Outer silhouette keeps 2 px outline weight."
            ],
            "differences": [
                "Width expands to 102 px and height rises to 100 px for the late-run high-risk obstacle.",
                "Three stems create a stepped skyline that forces a sharper jump apex.",
                "Center stem reaches the tallest point while side stems stay 8-12 px lower."
            ],
            "depends_on": ["task_id_801000005"],
            "blocks": [],
            "blocked_by": ["task_id_801000005"],
            "relationships": {
                "related_task_ids": ["task_id_801000005", "task_id_801000010"]
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
                }
            ],
            "bevy_constraints": {
                "bundle_strategy": "SpriteBundle",
                "atlas_or_static": "single_frame_sprite",
                "ecs_components": ["ObstacleTag", "GroundObstacle", "ColliderAabb", "ScrollVelocity"],
                "asset_loading": "Load one 102x100 PNG during Loading state and spawn it from the ground obstacle pool.",
                "runtime_notes": [
                    "Spawn the transform anchor at x=650 and y=0 in the obstacle lane.",
                    "Use one collider sized for the combined cluster to keep jump windows deterministic.",
                    "Cull the entity after x drops below -100."
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
                "role": "ground_obstacle_triplet_cluster",
                "screen_position": {
                    "type": "spawn_anchor_px",
                    "position_px": [650, 0]
                },
                "layer": "obstacle_ground",
                "usage": "Spawns in later score bands where a taller obstacle profile is required."
            },
            "specs": {
                "dimensions_px": { "width": 102, "height": 100 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [102, 100],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "hitbox_px": {
                    "width": 99,
                    "height": 97,
                    "offset_px": [2, 2]
                },
                "motion_profile": {
                    "speed_window_px_per_s": [300, 900],
                    "spawn_x_px": 650,
                    "despawn_x_px": -100
                },
                "shape_notes": [
                    "Center stem width stays at 18 px and reaches 100 px height.",
                    "Side stems stay inside a combined 102 px width footprint.",
                    "Spike clusters keep 2 px tips with no anti-aliased diagonals."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "obstacles/cactus_triplet_cluster.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 102x100 px with transparent background beyond the silhouette.",
                "Cluster collider maps cleanly to a 99x97 px obstacle hitbox.",
                "Center stem is visibly tallest at 1x scale and keeps hard pixel corners."
            ]
        },

        // From world/sky_day_field.json
        'sky_day_field.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000009",
            "asset_key": "sky_day_field",
            "asset_name": "Sky Day Field",
            "category": "world",
            "subcategory": "background_fill",
            "priority": "P1",
            "execution_order": 90,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Canvas target stays 600x150 px.",
                "Background color uses #F7F7F7 across the full field.",
                "No outline pixels appear in this fill asset."
            ],
            "differences": [
                "This task supplies the full-screen daytime backdrop for the runner lane.",
                "The fill remains static while ground and cloud layers move above it.",
                "The art contains no decorative silhouettes so obstacle readability stays high."
            ],
            "depends_on": [],
            "blocks": [],
            "blocked_by": [],
            "relationships": {
                "related_task_ids": ["task_id_801000010", "task_id_801000012"]
            },
            "reference_images": [
                {
                    "label": "gameplay_capture",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/screenshot.gif",
                    "purpose": "Gameplay frame for HUD anchoring, sky-ground composition, and runner lane spacing."
                },
                {
                    "label": "offline_sprite_2x",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/offline-sprite-2x.png",
                    "purpose": "2x atlas for silhouette spacing, obstacle spacing, and hit-readability checks."
                }
            ],
            "bevy_constraints": {
                "bundle_strategy": "SpriteBundle",
                "atlas_or_static": "single_frame_sprite",
                "ecs_components": ["BackgroundTag", "SkyField"],
                "asset_loading": "Load one 600x150 PNG during Loading state and attach it to the far background layer before gameplay begins.",
                "runtime_notes": [
                    "Place the transform anchor at x=300 and y=75 so the field covers the entire camera view.",
                    "Keep render order behind cloud, ground, obstacle, and UI layers.",
                    "Do not animate the sprite or modify the color at runtime."
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
                "role": "sky_background_fill",
                "screen_position": {
                    "type": "absolute_px",
                    "position_px": [300, 75]
                },
                "layer": "background_far",
                "usage": "Visible for the entire play session as the static sky backdrop."
            },
            "specs": {
                "dimensions_px": { "width": 600, "height": 150 },
                "colors_hex": ["#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [600, 150],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "coverage_px": {
                    "left": 0,
                    "top": 0,
                    "right": 600,
                    "bottom": 150
                },
                "fill_profile": {
                    "tileable": false,
                    "parallax_factor": 0.0
                },
                "shape_notes": [
                    "One solid fill rectangle covers the full frame."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "world/sky_day_field.png",
                    "transparent_background": false
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 600x150 px and fills every pixel with #F7F7F7.",
                "No transparent holes or decorative marks appear inside the field.",
                "Rendered field stays behind every moving gameplay layer."
            ]
        },

        // From character/dino_air_pose.json
        'dino_air_pose.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000002",
            "asset_key": "dino_air_pose",
            "asset_name": "Player Dino Air Pose",
            "category": "character",
            "subcategory": "player_motion",
            "priority": "P0",
            "execution_order": 20,
            "variant_of": "task_id_801000001",
            "variant_of_asset_key": "dino_runner_core",
            "shared_properties": [
                "Body footprint stays within 88x94 px.",
                "Primary painted tone remains #535353 with transparent cutouts only.",
                "Head, torso, and tail landmarks keep the run-core proportion grid."
            ],
            "differences": [
                "Both feet lift clear of the baseline to read airborne travel at the jump apex.",
                "Tail angle rises by 8 px relative to the grounded body line.",
                "Jaw line closes into a focused expression with one open eye."
            ],
            "depends_on": ["task_id_801000001"],
            "blocks": [],
            "blocked_by": ["task_id_801000001"],
            "relationships": {
                "related_task_ids": ["task_id_801000001", "task_id_801000010", "task_id_801000005"]
            },
            "reference_images": [
                {
                    "label": "offline_sprite_1x",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/offline-sprite-1x.png",
                    "purpose": "1x pixel atlas for dinosaur, cactus, pterodactyl, digits, and ground proportions."
                },
                {
                    "label": "run_loop_capture",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/t-rex-runner-19janil.gif",
                    "purpose": "Run cadence, jump silhouette timing, and restart screen pacing."
                }
            ],
            "bevy_constraints": {
                "bundle_strategy": "SpriteBundle",
                "atlas_or_static": "single_frame_sprite",
                "ecs_components": ["RunnerTag", "AirborneState", "ColliderAabb", "VelocityY"],
                "asset_loading": "Load one 88x94 PNG during Loading state and swap the sprite handle when the runner enters the airborne state.",
                "runtime_notes": [
                    "Keep the transform anchor at x=80 and y=32 while vertical velocity is nonzero.",
                    "Reuse the grounded collider width of 44 px and height of 90 px for predictable collision timing.",
                    "Bind the sprite swap to the jump state machine transition before gravity integration runs."
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
                "role": "runner_airborne_state",
                "screen_position": {
                    "type": "absolute_px",
                    "position_px": [80, 32]
                },
                "layer": "character",
                "usage": "Displayed from takeoff until landing while vertical velocity remains nonzero."
            },
            "specs": {
                "dimensions_px": { "width": 88, "height": 94 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [88, 94],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "hitbox_px": {
                    "width": 44,
                    "height": 90,
                    "offset_px": [22, 2]
                },
                "jump_profile": {
                    "initial_velocity_y_px_per_frame": -15,
                    "gravity_px_per_frame2": 0.6,
                    "peak_height_px": 90
                },
                "silhouette_notes": [
                    "Hind legs tuck upward by 10 px relative to the run core baseline.",
                    "Tail tip rises 8 px to counterbalance the torso.",
                    "Mouth line stays horizontal and spans 12 px."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "character/dino_air_pose.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 88x94 px and keeps transparent padding outside the silhouette.",
                "All foot pixels sit above the ground contact line to remove grounded ambiguity.",
                "The sprite reads clearly against #F7F7F7 without anti-aliased edges."
            ]
        },
        'dino_low_profile.json': { "schema_version": "art_task@8", "task_id": "task_id_801000003", "asset_key": "dino_low_profile", "asset_name": "Player Dino Duck Profile" },
        'dino_crash_pose.json': { "schema_version": "art_task@8", "task_id": "task_id_801000004", "asset_key": "dino_crash_pose", "asset_name": "Player Dino Death Pose" },
        'cactus_single.json': { "schema_version": "art_task@8", "task_id": "task_id_801000005", "asset_key": "cactus_single", "asset_name": "Single Cactus" },
        'cactus_pair_cluster.json': { "schema_version": "art_task@8", "task_id": "task_id_801000006", "asset_key": "cactus_pair_cluster", "asset_name": "Pair Cactus Cluster" },
        'pterodactyl_flap_sheet.json': { "schema_version": "art_task@8", "task_id": "task_id_801000008", "asset_key": "pterodactyl_flap_sheet", "asset_name": "Pterodactyl Flying Animation" },
        'ground_runner_strip.json': { "schema_version": "art_task@8", "task_id": "task_id_801000010", "asset_key": "ground_runner_strip", "asset_name": "Ground Runner Strip" },
        'ground_pebble_overlay.json': { "schema_version": "art_task@8", "task_id": "task_id_801000011", "asset_key": "ground_pebble_overlay", "asset_name": "Ground Pebble Overlay" },
        'cloud_pass_small.json': { "schema_version": "art_task@8", "task_id": "task_id_801000012", "asset_key": "cloud_pass_small", "asset_name": "Small Cloud Pass" },
        'score_digits_font.json': { "schema_version": "art_task@8", "task_id": "task_id_801000013", "asset_key": "score_digits_font", "asset_name": "Score Digits Font" },
        'score_rack_panel.json': { "schema_version": "art_task@8", "task_id": "task_id_801000014", "asset_key": "score_rack_panel", "asset_name": "Score Rack Panel" },
        'game_over_message.json': { "schema_version": "art_task@8", "task_id": "task_id_801000015", "asset_key": "game_over_message", "asset_name": "Game Over Message" },
        'restart_hint_label.json': { "schema_version": "art_task@8", "task_id": "task_id_801000016", "asset_key": "restart_hint_label", "asset_name": "Restart Hint Label" }
    },

    // Get JSON data for a file
    getJSON(filename) {
        console.log('ActualJSONLoader.getJSON called with:', filename);

        // Remove path if included
        const justFilename = filename.split('/').pop().split('\\').pop();

        // Direct filename match
        if (this.jsonData[justFilename]) {
            return this.jsonData[justFilename];
        }

        // Try without .json extension
        const withoutExt = justFilename.replace('.json', '');
        for (const key in this.jsonData) {
            if (key.includes(withoutExt)) {
                return this.jsonData[key];
            }
        }

        // Default
        return {
            "error": "File not found in ActualJSONLoader",
            "requested": filename,
            "available_files": Object.keys(this.jsonData).slice(0, 5)
        };
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.ActualJSONLoader = ActualJSONLoader;
}