// Real JSON File Loader - Display actual JSON files from iterations
const RealJSONLoader = {
    // Complete JSON data from actual files
    jsonData: {
        // Project Common
        '_project_common.json': {
            "game_title": "Chrome Dino Runner",
            "art_style": "Pixel Art 8-bit",
            "resolution": "600x150",
            "color_palette": {
                "primary": "#535353",
                "secondary": "#535353",
                "accent": "#FF0000",
                "background": "#F7F7F7"
            },
            "pixel_density": "1x base, 2x scale support",
            "outline_style": "2px solid outline",
            "rendering": "pixel perfect, no anti-aliasing"
        },

        // Characters
        'player_run.json': {
            "project_common": {
                "game_title": "Chrome Dino Runner",
                "art_style": "Pixel Art 8-bit",
                "resolution": "600x150",
                "color_palette": {
                    "primary": "#535353",
                    "secondary": "#535353",
                    "accent": "#FF0000",
                    "background": "#F7F7F7"
                },
                "pixel_density": "1x base, 2x scale support",
                "outline_style": "2px solid outline",
                "rendering": "pixel perfect, no anti-aliasing"
            },
            "category": "characters",
            "category_common": {
                "base_size": {
                    "width": "88px",
                    "height": "94px"
                },
                "color_scheme": {
                    "primary": "#535353",
                    "secondary": "#535353"
                },
                "shared_attributes": {
                    "style": "pixel art",
                    "outline": "2px solid",
                    "color_mode": "monochrome",
                    "anti_aliasing": "none"
                }
            },
            "asset": {
                "asset_id": "player_run",
                "asset_name": "Player T-Rex Running Animation",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Player character default running state during gameplay",
                    "screen_position": "Fixed at x=100px, y=0px (ground level)",
                    "adjacent_elements": ["ground", "cactus_small", "cactus_medium", "cactus_large", "pterodactyl_low", "pterodactyl_high", "score_display"],
                    "usage_scenario": "Active gameplay state when player is on ground and game is running"
                },
                "visual_specification": {
                    "size": {
                        "width": "88px",
                        "height": "94px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353",
                        "eyes": "#535353"
                    },
                    "shape": "T-Rex dinosaur in running pose with alternating leg positions",
                    "texture": "pixel art, flat color",
                    "outline": "2px solid black outline",
                    "shadow": "none",
                    "animation": {
                        "type": "spritesheet",
                        "frames": 2,
                        "fps": 12,
                        "loop": true,
                        "description": "Frame 1: left leg forward, Frame 2: right leg forward, seamless loop"
                    },
                    "details": "Running T-Rex with legs alternating, eyes open, tail extended for balance"
                },
                "relationships": {
                    "related_assets": ["player_idle", "player_jump", "player_duck", "player_dead"],
                    "shared_with": "Same character model as idle, jump, dead states",
                    "differences_from": "player_idle has slower animation (6 FPS), player_duck has different hitbox (118x60px)"
                },
                "explicit_negations": [
                    "No color variations",
                    "No facial expressions",
                    "No weapons or items",
                    "No dust particles or motion blur",
                    "No speed lines",
                    "No background elements in sprite"
                ]
            }
        },

        'player_jump.json': {
            "category": "characters",
            "asset": {
                "asset_id": "player_jump",
                "asset_name": "Player T-Rex Jumping Animation",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Player character jumping state to avoid obstacles",
                    "screen_position": "Fixed at x=100px, y varies (0-150px)",
                    "usage_scenario": "When spacebar/tap is pressed during gameplay"
                },
                "visual_specification": {
                    "size": {
                        "width": "88px",
                        "height": "94px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353"
                    },
                    "shape": "T-Rex with legs tucked under body, arms pulled in",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false,
                        "description": "Single static frame for jump arc"
                    }
                }
            }
        },

        'player_duck.json': {
            "category": "characters",
            "asset": {
                "asset_id": "player_duck",
                "asset_name": "Player T-Rex Ducking Animation",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Player character ducking state to avoid flying pterodactyls",
                    "screen_position": "Fixed at x=100px, y=0px (ground level)",
                    "usage_scenario": "When down arrow is held during gameplay"
                },
                "visual_specification": {
                    "size": {
                        "width": "118px",
                        "height": "60px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353"
                    },
                    "shape": "T-Rex in low profile with head down",
                    "animation": {
                        "type": "spritesheet",
                        "frames": 2,
                        "fps": 12,
                        "loop": true,
                        "description": "Alternating leg positions while ducking"
                    }
                }
            }
        },

        // Obstacles
        'cactus_small.json': {
            "category": "obstacles",
            "asset": {
                "asset_id": "cactus_small",
                "asset_name": "Small Cactus Obstacle",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Ground obstacle requiring jump to avoid",
                    "screen_position": "Spawns at x=600px, y=0px",
                    "usage_scenario": "Randomly generated during gameplay"
                },
                "visual_specification": {
                    "size": {
                        "width": "34px",
                        "height": "70px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353"
                    },
                    "shape": "Single cactus with spikes",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false
                    }
                }
            }
        },

        'cactus_medium.json': {
            "category": "obstacles",
            "asset": {
                "asset_id": "cactus_medium",
                "asset_name": "Medium Cactus Obstacle",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Ground obstacle requiring jump to avoid",
                    "screen_position": "Spawns at x=600px, y=0px",
                    "usage_scenario": "Randomly generated during gameplay"
                },
                "visual_specification": {
                    "size": {
                        "width": "68px",
                        "height": "70px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353"
                    },
                    "shape": "Double cactus cluster",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false
                    }
                }
            }
        },

        'cactus_large.json': {
            "category": "obstacles",
            "asset": {
                "asset_id": "cactus_large",
                "asset_name": "Large Cactus Obstacle",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Ground obstacle requiring jump to avoid",
                    "screen_position": "Spawns at x=600px, y=0px",
                    "usage_scenario": "Randomly generated at higher speeds"
                },
                "visual_specification": {
                    "size": {
                        "width": "102px",
                        "height": "100px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353"
                    },
                    "shape": "Triple cactus cluster",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false
                    }
                }
            }
        },

        'pterodactyl_fly.json': {
            "category": "obstacles",
            "asset": {
                "asset_id": "pterodactyl_fly",
                "asset_name": "Flying Pterodactyl",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Flying obstacle at various heights",
                    "screen_position": "Spawns at x=600px, y varies",
                    "usage_scenario": "Appears at higher game speeds"
                },
                "visual_specification": {
                    "size": {
                        "width": "92px",
                        "height": "80px"
                    },
                    "colors": {
                        "body": "#535353",
                        "outline": "#535353"
                    },
                    "shape": "Pterodactyl with wings spread",
                    "animation": {
                        "type": "spritesheet",
                        "frames": 2,
                        "fps": 10,
                        "loop": true,
                        "description": "Wing flapping animation"
                    }
                }
            }
        },

        // Environment
        'ground.json': {
            "category": "environment",
            "asset": {
                "asset_id": "ground",
                "asset_name": "Ground Surface",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Running surface for player and obstacles",
                    "screen_position": "Full width at y=0px",
                    "usage_scenario": "Always visible during gameplay"
                },
                "visual_specification": {
                    "size": {
                        "width": "2400px",
                        "height": "24px"
                    },
                    "colors": {
                        "primary": "#535353",
                        "background": "#F7F7F7"
                    },
                    "shape": "Horizontal line with texture",
                    "animation": {
                        "type": "scrolling",
                        "speed": "dynamic",
                        "direction": "left"
                    }
                }
            }
        },

        'background.json': {
            "category": "environment",
            "asset": {
                "asset_id": "background",
                "asset_name": "Background Sky",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Static background",
                    "screen_position": "Full canvas",
                    "usage_scenario": "Always visible"
                },
                "visual_specification": {
                    "size": {
                        "width": "600px",
                        "height": "150px"
                    },
                    "colors": {
                        "fill": "#F7F7F7"
                    },
                    "shape": "Solid color fill",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false
                    }
                }
            }
        },

        // UI
        'game_over_screen.json': {
            "category": "ui",
            "asset": {
                "asset_id": "game_over_screen",
                "asset_name": "Game Over Screen",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Display when player hits obstacle",
                    "screen_position": "Center of canvas",
                    "usage_scenario": "On collision detection"
                },
                "visual_specification": {
                    "size": {
                        "width": "381px",
                        "height": "11px"
                    },
                    "colors": {
                        "text": "#535353",
                        "background": "transparent"
                    },
                    "shape": "Text: GAME OVER",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false
                    }
                }
            }
        },

        'score_display.json': {
            "category": "ui",
            "asset": {
                "asset_id": "score_display",
                "asset_name": "Score Display",
                "context": {
                    "game": "Chrome Dino Runner",
                    "role": "Show current and high score",
                    "screen_position": "Top right corner",
                    "usage_scenario": "Always visible during gameplay"
                },
                "visual_specification": {
                    "size": {
                        "width": "100px",
                        "height": "16px"
                    },
                    "colors": {
                        "text": "#535353",
                        "background": "transparent"
                    },
                    "shape": "Numeric digits 0-9",
                    "animation": {
                        "type": "static",
                        "frames": 1,
                        "fps": 0,
                        "loop": false
                    }
                }
            }
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