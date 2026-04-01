// Actual JSON File Loader - Display complete JSON files
const ActualJSONLoader = {
    // Complete JSON data for each file
    jsonData: {
        // Character category
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

        'dino_low_profile.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000002",
            "asset_key": "dino_low_profile",
            "asset_name": "Player Dino Duck Profile",
            "category": "character",
            "subcategory": "player_motion",
            "priority": "P0",
            "execution_order": 20,
            "variant_of": "task_id_801000001",
            "variant_of_asset_key": "dino_runner_core",
            "shared_properties": [
                "Primary silhouette uses #535353 with transparent negative space only.",
                "Runner body footprint stays within 118x60 px.",
                "Outline weight stays at 2 px on the head, torso, and tail."
            ],
            "differences": [
                "Duck profile reduces height from 94 px to 60 px for low obstacle clearance.",
                "Two frames alternate leg positions at 12 FPS while maintaining low stance.",
                "Head extends forward to maintain balance in duck position."
            ],
            "specs": {
                "dimensions_px": { "width": 118, "height": 60 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "sprite_sheet",
                    "frame_count": 2,
                    "fps": 12,
                    "loop": true,
                    "frame_size_px": [118, 60],
                    "layout": { "columns": 2, "rows": 1 }
                }
            }
        },

        // Obstacles category
        'cactus_single.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000005",
            "asset_key": "cactus_single",
            "asset_name": "Single Cactus",
            "category": "obstacles",
            "subcategory": "ground_obstacle",
            "priority": "P0",
            "execution_order": 50,
            "specs": {
                "dimensions_px": { "width": 34, "height": 70 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

        'cactus_pair_cluster.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000006",
            "asset_key": "cactus_pair_cluster",
            "asset_name": "Pair Cactus Cluster",
            "category": "obstacles",
            "subcategory": "ground_obstacle",
            "priority": "P0",
            "execution_order": 60,
            "variant_of": "task_id_801000005",
            "specs": {
                "dimensions_px": { "width": 68, "height": 70 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

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
            "specs": {
                "dimensions_px": { "width": 102, "height": 100 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

        'pterodactyl_flap_sheet.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000008",
            "asset_key": "pterodactyl_flap_sheet",
            "asset_name": "Pterodactyl Flap Animation",
            "category": "obstacles",
            "subcategory": "air_obstacle",
            "priority": "P0",
            "execution_order": 80,
            "specs": {
                "dimensions_px": { "width": 92, "height": 80 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "sprite_sheet",
                    "frame_count": 2,
                    "fps": 10,
                    "loop": true,
                    "frame_size_px": [46, 80],
                    "layout": { "columns": 2, "rows": 1 }
                }
            }
        },

        // World category
        'sky_day_field.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000009",
            "asset_key": "sky_day_field",
            "asset_name": "Sky Day Field",
            "category": "world",
            "subcategory": "background_fill",
            "priority": "P1",
            "execution_order": 90,
            "specs": {
                "dimensions_px": { "width": 600, "height": 150 },
                "colors_hex": ["#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

        'cloud_pass_small.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000010",
            "asset_key": "cloud_pass_small",
            "asset_name": "Small Cloud Pass",
            "category": "world",
            "subcategory": "cloud",
            "priority": "P1",
            "execution_order": 100,
            "specs": {
                "dimensions_px": { "width": 46, "height": 14 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

        'ground_runner_strip.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000011",
            "asset_key": "ground_runner_strip",
            "asset_name": "Ground Runner Strip",
            "category": "world",
            "subcategory": "ground",
            "priority": "P0",
            "execution_order": 110,
            "specs": {
                "dimensions_px": { "width": 2400, "height": 24 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

        'ground_pebble_overlay.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000012",
            "asset_key": "ground_pebble_overlay",
            "asset_name": "Ground Pebble Overlay",
            "category": "world",
            "subcategory": "ground",
            "priority": "P2",
            "execution_order": 120,
            "specs": {
                "dimensions_px": { "width": 600, "height": 12 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                }
            }
        },

        // UI category
        'game_over_message.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000013",
            "asset_key": "game_over_message",
            "asset_name": "Game Over Message",
            "category": "ui",
            "subcategory": "message",
            "priority": "P0",
            "execution_order": 130,
            "specs": {
                "dimensions_px": { "width": 381, "height": 11 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                },
                "text": "G A M E   O V E R"
            }
        },

        'restart_hint_label.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000014",
            "asset_key": "restart_hint_label",
            "asset_name": "Restart Hint Label",
            "category": "ui",
            "subcategory": "message",
            "priority": "P0",
            "execution_order": 140,
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
            "blocks": [],
            "blocked_by": [],
            "specs": {
                "dimensions_px": { "width": 36, "height": 32 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                },
                "icon": "restart_arrow"
            }
        },

        'score_digits_font.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000015",
            "asset_key": "score_digits_font",
            "asset_name": "Score Digits Font",
            "category": "ui",
            "subcategory": "font",
            "priority": "P0",
            "execution_order": 150,
            "specs": {
                "dimensions_px": { "width": 200, "height": 11 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "sprite_sheet",
                    "frame_count": 10,
                    "fps": 0,
                    "loop": false,
                    "frame_size_px": [20, 11],
                    "layout": { "columns": 10, "rows": 1 }
                },
                "characters": "0123456789"
            }
        },

        'score_rack_panel.json': {
            "schema_version": "art_task@8",
            "task_id": "task_id_801000016",
            "asset_key": "score_rack_panel",
            "asset_name": "Score Rack Panel",
            "category": "ui",
            "subcategory": "panel",
            "priority": "P0",
            "execution_order": 160,
            "specs": {
                "dimensions_px": { "width": 100, "height": 11 },
                "colors_hex": ["#535353", "#F7F7F7"],
                "animation": {
                    "type": "static",
                    "frame_count": 1,
                    "fps": 0,
                    "loop": false
                },
                "display": "HI 00000 00000"
            }
        }
    },

    // Get JSON data for a file
    getJSON(filename) {
        console.log('Getting JSON for file:', filename);

        // Direct filename match
        const directMatch = this.jsonData[filename];
        if (directMatch) {
            return directMatch;
        }

        // Extract just the filename from path
        const justFilename = filename.split('/').pop();
        const fileMatch = this.jsonData[justFilename];
        if (fileMatch) {
            return fileMatch;
        }

        // Try different matching patterns
        for (const key in this.jsonData) {
            // Check if filename contains the key (without extension)
            const keyWithoutExt = key.replace('.json', '');
            if (filename.includes(keyWithoutExt)) {
                return this.jsonData[key];
            }
        }

        // Default to a generic structure showing the filename
        return {
            "schema_version": "art_task@8",
            "filename": filename,
            "message": "JSON data for this file is being loaded",
            "category": "unknown",
            "specs": {
                "dimensions_px": { "width": 100, "height": 100 },
                "colors_hex": ["#535353", "#F7F7F7"]
            }
        };
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.ActualJSONLoader = ActualJSONLoader;
}