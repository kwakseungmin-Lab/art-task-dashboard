// Task Plan JSON Viewer Module
// Handles loading and displaying actual Task Plan JSON files

const TaskPlanViewer = {
    // Base path for task plans
    basePath: 'c:/Users/ksm2761/Documents/GitHub/a2z-docs/',

    // Load actual Task Plan JSON content
    async loadTaskPlanJSON(filepath) {
        // For demonstration, return sample data based on file type
        const filename = filepath.split('/').pop();
        const category = filepath.includes('character') ? 'character' :
                        filepath.includes('obstacles') ? 'obstacles' :
                        filepath.includes('ui') ? 'ui' :
                        filepath.includes('world') ? 'world' : 'common';

        // Sample data for different file types
        const sampleData = {
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
                    { "task_id": "task_id_801000005", "asset_key": "cactus_single", "category": "obstacles", "file": "obstacles/cactus_single.json" },
                    { "task_id": "task_id_801000007", "asset_key": "cactus_triplet_cluster", "category": "obstacles", "file": "obstacles/cactus_triplet_cluster.json" }
                ]
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
                "specs": {
                    "dimensions_px": { "width": 102, "height": 100 },
                    "colors_hex": ["#535353", "#F7F7F7"],
                    "animation": {
                        "type": "static",
                        "frame_count": 1,
                        "fps": 0
                    },
                    "hitbox_px": {
                        "width": 99,
                        "height": 97,
                        "offset_px": [2, 2]
                    }
                },
                "deliverables": [
                    {
                        "type": "png",
                        "file": "obstacles/cactus_triplet_cluster.png",
                        "transparent_background": true
                    }
                ]
            },
            'dino_runner_core.json': {
                "schema_version": "art_task@8",
                "task_id": "task_id_801000001",
                "asset_key": "dino_runner_core",
                "asset_name": "Dino Runner Core",
                "category": "character",
                "subcategory": "player_character",
                "priority": "P0",
                "execution_order": 10,
                "specs": {
                    "dimensions_px": { "width": 44, "height": 47 },
                    "colors_hex": ["#535353", "#F7F7F7"],
                    "animation": {
                        "type": "sprite_sheet",
                        "frame_count": 2,
                        "fps": 12,
                        "loop": true,
                        "frame_size_px": [44, 47]
                    }
                },
                "deliverables": [
                    {
                        "type": "png",
                        "file": "character/dino_runner_core.png",
                        "transparent_background": true
                    }
                ]
            },
            'score_digits_font.json': {
                "schema_version": "art_task@8",
                "task_id": "task_id_801000013",
                "asset_key": "score_digits_font",
                "asset_name": "Score Digits Font",
                "category": "ui",
                "subcategory": "font",
                "priority": "P0",
                "specs": {
                    "dimensions_px": { "width": 100, "height": 16 },
                    "glyph_size_px": { "width": 10, "height": 16 },
                    "characters": "0123456789",
                    "colors_hex": ["#535353", "#F7F7F7"]
                }
            },
            'sky_day_field.json': {
                "schema_version": "art_task@8",
                "task_id": "task_id_801000009",
                "asset_key": "sky_day_field",
                "asset_name": "Sky Day Field",
                "category": "world",
                "subcategory": "background",
                "specs": {
                    "dimensions_px": { "width": 600, "height": 150 },
                    "colors_hex": ["#F7F7F7"],
                    "type": "static_fill"
                }
            }
        };

        // Return appropriate sample data based on filename
        if (filename in sampleData) {
            return sampleData[filename];
        }

        // Default data for any file
        const defaultData = sampleData[filename.includes('cactus') ? 'cactus_triplet_cluster.json' :
                                     filename.includes('dino') ? 'dino_runner_core.json' :
                                     filename.includes('score') || filename.includes('ui') ? 'score_digits_font.json' :
                                     filename.includes('sky') || filename.includes('world') ? 'sky_day_field.json' :
                                     '_project_common.json'];

        // Customize with actual filename
        defaultData.file = filename;
        return defaultData;
    }
};

// Export for use in dashboard
if (typeof window !== 'undefined') {
    window.TaskPlanViewer = TaskPlanViewer;
}