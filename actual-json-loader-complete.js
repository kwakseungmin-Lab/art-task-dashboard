// Complete JSON File Loader - All actual JSON files from iteration_8/trial_1
const ActualJSONLoader = {
    jsonData: {
        // score_digits_font.json - COMPLETE FILE
        'score_digits_font.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000013",
            "asset_key": "score_digits_font",
            "asset_name": "Score Digits Font Strip",
            "category": "ui",
            "subcategory": "hud_font",
            "priority": "P0",
            "execution_order": 130,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Primary painted tone uses #535353 with transparent background only.",
                "Glyph height stays at 16 px for HUD readability.",
                "Each digit cell stays inside a 10x16 px box."
            ],
            "differences": [
                "This task provides digits 0 through 9 in one left-to-right atlas strip.",
                "Glyph spacing is monospaced so five-digit score values stay right-aligned.",
                "Digit contours remain open enough to distinguish 3, 5, 6, 8, and 9 at 1x scale."
            ],
            "depends_on": [],
            "blocks": ["task_id_801000014"],
            "blocked_by": [],
            "relationships": {
                "related_task_ids": ["task_id_801000014", "task_id_801000015", "task_id_801000016"]
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
                "bundle_strategy": "SpriteSheetBundle",
                "atlas_or_static": "glyph_strip_10_frame",
                "ecs_components": ["HudFontTag", "TextureAtlasLayout"],
                "asset_loading": "Load one 100x16 PNG during Loading state and build a 10x16 TextureAtlasLayout with ten glyph frames.",
                "runtime_notes": [
                    "Keep the atlas handle in a HUD font resource for score formatting systems.",
                    "Render the digits through nearest-neighbor sampling at 1x or 2x display scale.",
                    "Index glyph frames by numeric value 0-9 with no runtime kerning."
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
                "role": "hud_digits",
                "screen_position": {
                    "type": "absolute_px",
                    "position_px": [540, 10]
                },
                "layer": "ui_hud",
                "usage": "Renders zero-padded current score and high-score digits in the top-right HUD."
            },
            "specs": {
                "dimensions_px": { "width": 100, "height": 16 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "glyph_atlas",
                    "frame_count": 10,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [10, 16],
                    "layout": { "columns": 10, "rows": 1 }
                },
                "glyph_profile": {
                    "glyph_count": 10,
                    "glyphs": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    "monospace_width_px": 10
                },
                "layout_notes": [
                    "Atlas order runs from 0 through 9 left to right.",
                    "Each glyph uses the full 16 px vertical space.",
                    "One transparent column is reserved between complex diagonals only when needed inside the 10 px cell."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "ui/score_digits_font.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 100x16 px and contains ten 10x16 glyph cells.",
                "Digits remain legible at 1x scale with monospaced alignment.",
                "Painted pixels use #535353 only and keep transparent background outside glyph bodies."
            ]
        },

        // cactus_single.json - COMPLETE FILE
        'cactus_single.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000005",
            "asset_key": "cactus_single",
            "asset_name": "Single Cactus Obstacle",
            "category": "obstacles",
            "subcategory": "ground_obstacle",
            "priority": "P0",
            "execution_order": 50,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Primary painted tone uses #535353 with transparent background only.",
                "Ground contact stays on y=0 for the spawn lane.",
                "Outline weight stays at 2 px around the outer silhouette."
            ],
            "differences": [
                "This task defines the one-stem obstacle silhouette for the earliest jump timing test.",
                "Body width stays at 34 px and height stays at 70 px.",
                "Side arms extend no more than 8 px from the trunk centerline."
            ],
            "depends_on": [],
            "blocks": ["task_id_801000006", "task_id_801000007"],
            "blocked_by": [],
            "relationships": {
                "related_task_ids": ["task_id_801000006", "task_id_801000007", "task_id_801000010"]
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
                "asset_loading": "Load one 34x70 PNG during Loading state and spawn it from a pooled obstacle factory.",
                "runtime_notes": [
                    "Spawn the transform anchor at x=650 and y=0 in the obstacle lane.",
                    "Drive horizontal motion from the shared CurrentSpeed resource.",
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
                "role": "ground_obstacle_single",
                "screen_position": {
                    "type": "spawn_anchor_px",
                    "position_px": [650, 0]
                },
                "layer": "obstacle_ground",
                "usage": "Spawns from the right edge during score ranges that require a basic jump timing test."
            },
            "specs": {
                "dimensions_px": { "width": 34, "height": 70 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [34, 70],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "hitbox_px": {
                    "width": 31,
                    "height": 67,
                    "offset_px": [2, 2]
                },
                "motion_profile": {
                    "speed_window_px_per_s": [300, 900],
                    "spawn_x_px": 650,
                    "despawn_x_px": -100
                },
                "shape_notes": [
                    "Main trunk width stays at 14 px.",
                    "Left arm rises from y=28 and spans 8 px.",
                    "Top spike cluster fits inside the upper 10 px of the frame."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "obstacles/cactus_single.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 34x70 px with transparent background beyond the silhouette.",
                "Collider reference area maps cleanly to a 31x67 px obstacle hitbox.",
                "Painted pixels use #535353 only and preserve hard pixel corners."
            ]
        },

        // game_over_message.json - COMPLETE FILE
        'game_over_message.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000015",
            "asset_key": "game_over_message",
            "asset_name": "Game Over Message Banner",
            "category": "ui",
            "subcategory": "game_over_ui",
            "priority": "P0",
            "execution_order": 150,
            "variant_of": null,
            "variant_of_asset_key": null,
            "shared_properties": [
                "Primary painted tone uses #535353 with transparent background only.",
                "Banner aligns to the center of the camera view.",
                "Letterforms keep hard pixel edges at 1x scale."
            ],
            "differences": [
                "This task rasterizes the text GAME OVER as one centered banner.",
                "Banner height stays at 24 px to match the GDD emphasis hierarchy.",
                "Text width stays compact enough to sit above the score rack and runner without overlap."
            ],
            "depends_on": [],
            "blocks": [],
            "blocked_by": [],
            "relationships": {
                "related_task_ids": ["task_id_801000004", "task_id_801000016", "task_id_801000014"]
            },
            "reference_images": [
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
                "bundle_strategy": "SpriteBundle",
                "atlas_or_static": "single_frame_sprite",
                "ecs_components": ["GameOverUiTag", "VisibilityToggle"],
                "asset_loading": "Load one 132x24 PNG during Loading state and toggle visibility when the game state enters game_over.",
                "runtime_notes": [
                    "Anchor the banner at x=300 and y=45 in UI space.",
                    "Keep the sprite hidden during active play.",
                    "Render the banner above world sprites and below the restart hint."
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
                "role": "game_over_banner",
                "screen_position": {
                    "type": "absolute_px",
                    "position_px": [300, 45]
                },
                "layer": "ui_center",
                "usage": "Becomes visible immediately after collision to mark the end state."
            },
            "specs": {
                "dimensions_px": { "width": 132, "height": 24 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [132, 24],
                    "layout": { "columns": 1, "rows": 1 }
                },
                "text_profile": {
                    "content": "GAME OVER",
                    "font_height_px": 24,
                    "alignment": "center"
                },
                "layout_notes": [
                    "Letter spacing stays at 2 px between word groups.",
                    "Text baseline sits 18 px from the top edge.",
                    "Background remains transparent around the letterforms."
                ]
            },
            "deliverables": [
                {
                    "type": "png",
                    "file": "ui/game_over_message.png",
                    "transparent_background": true
                }
            ],
            "acceptance_criteria": [
                "Canvas is exactly 132x24 px with transparent background beyond the text.",
                "The phrase GAME OVER stays centered and remains readable at 1x scale.",
                "Painted pixels use #535353 only and keep hard pixel edges."
            ]
        }
    },

    getJSON(filename) {
        console.log('ActualJSONLoader.getJSON called with:', filename);
        const justFilename = filename.split('/').pop().split('\\').pop();

        if (this.jsonData[justFilename]) {
            return this.jsonData[justFilename];
        }

        const withoutExt = justFilename.replace('.json', '');
        for (const key in this.jsonData) {
            const keyWithoutExt = key.replace('.json', '');
            if (withoutExt === keyWithoutExt) {
                return this.jsonData[key];
            }
        }

        return {
            "error": "File not found",
            "requested": filename,
            "available": Object.keys(this.jsonData)
        };
    }
};

if (typeof window !== 'undefined') {
    window.ActualJSONLoader = ActualJSONLoader;
    window.RealJSONLoader = ActualJSONLoader;
}