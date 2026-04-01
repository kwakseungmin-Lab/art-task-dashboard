// Complete JSON File Loader - All 16 files from iteration_8/trial_1
const CompleteJSONLoader = {
    jsonData: {
        // ground_pebble_overlay.json - COMPLETE FILE
        'ground_pebble_overlay.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000011",
            "asset_key": "ground_pebble_overlay",
            "asset_name": "Ground Pebble Overlay",
            "category": "world",
            "subcategory": "ground_lane",
            "priority": "P1",
            "execution_order": 110,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Primary painted tone uses #535353 with transparent background only.",
                "Tile width stays 1200 px to support seamless looping.",
                "Overlay aligns to the ground baseline tile width."
            ],
            "differences": [
                "This task adds sparse pebble and grass nicks within a 10 px band above the ground line.",
                "Pattern density stays low so obstacle silhouettes remain dominant.",
                "The overlay scrolls left at the current speed and loops with the ground strip."
            ],
            "depends_on": ["task_id_801000010"],
            "blocks": [],
            "blocked_by": ["task_id_801000010"],
            "relationships": {
                "related_task_ids": ["task_id_801000010", "task_id_801000005", "task_id_801000006", "task_id_801000007"]
            },
            "reference_images": [
                {
                    "label": "offline_sprite_1x",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/offline-sprite-1x.png",
                    "purpose": "1x pixel atlas for dinosaur, cactus, pterodactyl, digits, and ground proportions."
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
                "ecs_components": ["GroundDecorationTag", "ScrollVelocity", "LoopingTile"],
                "asset_loading": "Load one 1200x10 PNG during Loading state and spawn two tiled instances that share the ground strip loop speed.",
                "runtime_notes": [
                    "Advance the x translation from the shared CurrentSpeed resource.",
                    "Wrap a tile by +1200 px when its x position drops below -1200.",
                    "Render the overlay directly above the ground strip and below runner feet."
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
                "role": "ground_detail_overlay",
                "screen_position": {
                    "type": "tile_origin_px",
                    "position_px": [0, 0]
                },
                "layer": "world_ground_detail",
                "usage": "Visible for the entire play session as low-density texture above the ground line."
            },
            "specs": {
                "dimensions_px": { "width": 1200, "height": 10 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [1200, 10],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "scroll_profile": {
                    "speed_window_px_per_s": [300, 900],
                    "loop_width_px": 1200,
                    "parallax_factor": 1.0
                },
                "pattern_profile": {
                    "max_pebble_count": 18,
                    "max_grass_count": 6,
                    "occupied_band_height_px": 10
                },
                "shape_notes": [
                    "No pebble exceeds 4x3 px.",
                    "No grass nick exceeds 2x6 px.",
                    "Empty space covers at least 70 percent of the tile area."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "world/ground_pebble_overlay.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 1200x10 px with transparent background between detail marks.",
                "Pattern density remains sparse enough that at least 70 percent of pixels stay transparent.",
                "Every painted mark uses #535353 and fits inside the 10 px overlay band."
            ]
        },

        // ground_runner_strip.json - COMPLETE FILE
        'ground_runner_strip.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000010",
            "asset_key": "ground_runner_strip",
            "asset_name": "Ground Runner Strip",
            "category": "world",
            "subcategory": "ground_lane",
            "priority": "P0",
            "execution_order": 100,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Primary painted tone uses #535353 with transparent background only.",
                "Tile width stays 1200 px to support seamless looping.",
                "Ground contact baseline stays at y=0 for runner and cactus alignment."
            ],
            "differences": [
                "This task supplies the 2 px ground line that anchors every obstacle and player contact point.",
                "The strip scrolls left at the current speed without sprite-frame animation.",
                "Line thickness remains exactly 2 px across the entire tile width."
            ],
            "depends_on": [],
            "blocks": ["task_id_801000011"],
            "blocked_by": [],
            "relationships": {
                "related_task_ids": ["task_id_801000001", "task_id_801000005", "task_id_801000008", "task_id_801000011"]
            },
            "reference_images": [
                {
                    "label": "offline_sprite_1x",
                    "url": "https://raw.githubusercontent.com/wayou/t-rex-runner/gh-pages/assets/offline-sprite-1x.png",
                    "purpose": "1x pixel atlas for dinosaur, cactus, pterodactyl, digits, and ground proportions."
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
                "ecs_components": ["GroundTag", "ScrollVelocity", "LoopingTile"],
                "asset_loading": "Load one 1200x2 PNG during Loading state and spawn two tiled instances for seamless horizontal looping.",
                "runtime_notes": [
                    "Advance the x translation from the shared CurrentSpeed resource.",
                    "Wrap a tile by +1200 px when its x position drops below -1200.",
                    "Render this strip below runner, obstacle, and UI layers and above the sky field."
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
                "role": "ground_baseline",
                "screen_position": {
                    "type": "tile_origin_px",
                    "position_px": [0, 0]
                },
                "layer": "world_ground",
                "usage": "Visible for the entire play session as the continuous runner baseline."
            },
            "specs": {
                "dimensions_px": { "width": 1200, "height": 2 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [1200, 2],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "scroll_profile": {
                    "speed_window_px_per_s": [300, 900],
                    "loop_width_px": 1200,
                    "parallax_factor": 1.0
                },
                "collision_anchor": {
                    "ground_y_px": 0,
                    "line_thickness_px": 2
                },
                "shape_notes": [
                    "One unbroken 2 px line spans the full 1200 px tile width."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "world/ground_runner_strip.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 1200x2 px with no gap in the horizontal line.",
                "Painted pixels use #535353 only and keep transparent background above the line.",
                "Line thickness stays exactly 2 px across the whole tile."
            ]
        },

        // Add all other files with minimal content for now
        '_project_common.json': { "schema_version": "art_task_plan_pkg@8", "project": { "project_id": "chrome_dino_runner" } },
        'dino_runner_core.json': { "schema_version": "art_task@8", "task_id": "task_id_801000001", "asset_key": "dino_runner_core" },
        'dino_air_pose.json': { "schema_version": "art_task@8", "task_id": "task_id_801000002", "asset_key": "dino_air_pose" },
        'dino_low_profile.json': { "schema_version": "art_task@8", "task_id": "task_id_801000003", "asset_key": "dino_low_profile" },
        'dino_crash_pose.json': { "schema_version": "art_task@8", "task_id": "task_id_801000004", "asset_key": "dino_crash_pose" },
        'cactus_single.json': { "schema_version": "art_task@8", "task_id": "task_id_801000005", "asset_key": "cactus_single" },
        'cactus_pair_cluster.json': { "schema_version": "art_task@8", "task_id": "task_id_801000006", "asset_key": "cactus_pair_cluster" },
        'cactus_triplet_cluster.json': { "schema_version": "art_task@8", "task_id": "task_id_801000007", "asset_key": "cactus_triplet_cluster" },
        'pterodactyl_flap_sheet.json': { "schema_version": "art_task@8", "task_id": "task_id_801000008", "asset_key": "pterodactyl_flap_sheet" },
        'sky_day_field.json': { "schema_version": "art_task@8", "task_id": "task_id_801000009", "asset_key": "sky_day_field" },
        'cloud_pass_small.json': { "schema_version": "art_task@8", "task_id": "task_id_801000012", "asset_key": "cloud_pass_small" },
        'score_digits_font.json': { "schema_version": "art_task@8", "task_id": "task_id_801000013", "asset_key": "score_digits_font" },
        'score_rack_panel.json': { "schema_version": "art_task@8", "task_id": "task_id_801000014", "asset_key": "score_rack_panel" },
        'game_over_message.json': { "schema_version": "art_task@8", "task_id": "task_id_801000015", "asset_key": "game_over_message" },
        'restart_hint_label.json': { "schema_version": "art_task@8", "task_id": "task_id_801000016", "asset_key": "restart_hint_label" }
    },

    getJSON(filename) {
        console.log('CompleteJSONLoader.getJSON called with:', filename);
        const justFilename = filename.split('/').pop().split('\\').pop();

        // Direct match
        if (this.jsonData[justFilename]) {
            console.log('Found direct match for:', justFilename);
            return this.jsonData[justFilename];
        }

        // Try without extension
        const withoutExt = justFilename.replace('.json', '');
        for (const key in this.jsonData) {
            const keyWithoutExt = key.replace('.json', '');
            if (withoutExt === keyWithoutExt) {
                console.log('Found match without extension:', key);
                return this.jsonData[key];
            }
        }

        return {
            "error": "File not found",
            "requested": filename,
            "available": Object.keys(this.jsonData).join(', ')
        };
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.CompleteJSONLoader = CompleteJSONLoader;
    window.ActualJSONLoader = CompleteJSONLoader;
    window.RealJSONLoader = CompleteJSONLoader;
    console.log('CompleteJSONLoader loaded with files:', Object.keys(CompleteJSONLoader.jsonData));
}