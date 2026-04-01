// Local JSON Loader - Load files from local repository data
const LocalJSONLoader = {
    // Cache for loaded JSON files
    cache: {},

    // Build the file path
    buildPath(iterationNum, gameName, trialNum, fileName) {
        // Clean up the filename if it contains path separators
        const cleanFileName = fileName.replace(/\\/g, '/');
        return `data/iteration_${iterationNum}/${gameName}/trial_${trialNum}/${cleanFileName}`;
    },

    // Load JSON file from local repository
    async loadJSON(iterationNum, gameName, trialNum, fileName) {
        const path = this.buildPath(iterationNum, gameName, trialNum, fileName);
        const cacheKey = `${iterationNum}_${gameName}_${trialNum}_${fileName}`;

        // Check cache first
        if (this.cache[cacheKey]) {
            console.log('Returning cached data for:', cacheKey);
            return this.cache[cacheKey];
        }

        try {
            console.log('Loading from local:', path);
            const response = await fetch(path);

            if (!response.ok) {
                console.error('Failed to load locally:', path);
                // Try dynamic loader as fallback
                if (typeof DynamicJSONLoader !== 'undefined') {
                    console.log('Falling back to GitHub loader...');
                    return await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, fileName);
                }
                return {
                    error: "Failed to load file",
                    path: path,
                    status: response.status
                };
            }

            const data = await response.json();

            // Cache the result
            this.cache[cacheKey] = data;

            console.log('Successfully loaded from local:', fileName);
            return data;
        } catch (error) {
            console.error('Error loading local JSON:', error);

            // Try dynamic loader as fallback
            if (typeof DynamicJSONLoader !== 'undefined') {
                console.log('Falling back to GitHub loader due to error...');
                return await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, fileName);
            }

            return {
                error: "Error loading file",
                message: error.message,
                path: path
            };
        }
    },

    // Get available files for a specific trial
    getAvailableFiles(iterationNum, gameName, trialNum) {
        // Return list of expected files based on game type
        const baseFiles = ['_project_common.json'];

        if (gameName === 'Chrome_Dino_Runner') {
            return {
                'Project': ['_project_common.json'],
                'Character': [
                    'character/dino_runner_core.json',
                    'character/dino_air_pose.json',
                    'character/dino_low_profile.json',
                    'character/dino_crash_pose.json'
                ],
                'Obstacles': [
                    'obstacles/cactus_single.json',
                    'obstacles/cactus_pair_cluster.json',
                    'obstacles/cactus_triplet_cluster.json',
                    'obstacles/pterodactyl_flap_sheet.json'
                ],
                'World': [
                    'world/sky_day_field.json',
                    'world/ground_runner_strip.json',
                    'world/ground_pebble_overlay.json',
                    'world/cloud_pass_small.json'
                ],
                'UI': [
                    'ui/score_digits_font.json',
                    'ui/score_rack_panel.json',
                    'ui/game_over_message.json',
                    'ui/restart_hint_label.json'
                ]
            };
        } else if (gameName === 'Pico_Echo') {
            return {
                'Project': ['_project_common.json'],
                'Character': [
                    'character/echo_idle_4f_2fps.json',
                    'character/echo_happy_8f_4fps.json',
                    'character/echo_hungry_4f_2fps.json',
                    'character/echo_eating_6f_4fps.json',
                    'character/echo_dirty_3f_2fps.json',
                    'character/echo_preening_5f_3fps.json',
                    'character/echo_singing_8f_4fps.json'
                ],
                'Items': [
                    'items/fruit_apple.json',
                    'items/fruit_orange.json',
                    'items/fruit_grape.json',
                    'items/water_bowl.json',
                    'items/bath_spray.json'
                ],
                'World': [
                    'world/cage_background.json',
                    'world/perch.json',
                    'world/feeder.json'
                ],
                'UI': [
                    'ui/hunger_meter.json',
                    'ui/happiness_meter.json',
                    'ui/cleanliness_meter.json',
                    'ui/action_buttons.json'
                ]
            };
        } else if (gameName === 'reflect_academy') {
            return {
                'Project': ['_project_common.json'],
                'Character': [
                    'character/player_wizard.json',
                    'character/player_walk_cycle.json',
                    'character/player_cast_spell.json'
                ],
                'Mirrors': [
                    'mirrors/mirror_basic.json',
                    'mirrors/mirror_rotating.json',
                    'mirrors/mirror_splitting.json'
                ],
                'World': [
                    'world/academy_tileset.json',
                    'world/background_library.json'
                ],
                'UI': [
                    'ui/spell_selector.json',
                    'ui/level_indicator.json'
                ]
            };
        } else if (gameName === 'slip_down') {
            return {
                'Project': ['_project_common.json'],
                'Character': [
                    'character/player_basic_idle.json',
                    'character/player_slide_loop.json',
                    'character/player_wall_cling.json',
                    'character/player_death_anim.json'
                ],
                'World': [
                    'world/tower_walls.json',
                    'world/platforms_basic.json',
                    'world/platforms_moving.json',
                    'world/background_gradient.json'
                ],
                'UI': [
                    'ui/altitude_counter.json',
                    'ui/speed_indicator.json',
                    'ui/game_over.json'
                ]
            };
        } else if (gameName === 'umbra_scale') {
            return {
                'Project': ['_project_common.json'],
                'Character': [
                    'character/umbra_idle.json',
                    'character/umbra_walk.json',
                    'character/umbra_push.json',
                    'character/umbra_celebrate.json'
                ],
                'Objects': [
                    'objects/balance_scale.json',
                    'objects/weight_blocks.json',
                    'objects/shadow_blocks.json'
                ],
                'World': [
                    'world/temple_background.json',
                    'world/floor_tiles.json'
                ],
                'UI': [
                    'ui/level_name.json',
                    'ui/move_counter.json',
                    'ui/reset_button.json'
                ]
            };
        } else if (gameName === 'cosmos_heracles' || gameName === 'olympus_step' || gameName === 'ricochet_conspiracy' || gameName === 'jarl_of_blizzard') {
            // Games from iteration 6 and 7
            return {
                'Project': ['_project_common.json'],
                'Files': [
                    'character/main_character.json',
                    'world/background.json',
                    'ui/interface.json'
                ]
            };
        } else {
            // Default structure for other games
            return {
                'Files': ['_project_common.json']
            };
        }
    },

    // List all available JSON files for a trial
    async listFiles(iterationNum, gameName, trialNum) {
        const path = `data/iteration_${iterationNum}/${gameName}/${trialNum}/`;

        try {
            // This will work if we have directory listing enabled on the server
            const response = await fetch(path);
            if (response.ok) {
                const text = await response.text();
                // Parse directory listing (simplified)
                const files = [];
                const regex = /href="([^"]+\.json)"/g;
                let match;
                while ((match = regex.exec(text)) !== null) {
                    files.push(match[1]);
                }
                return files;
            }
        } catch (error) {
            console.log('Directory listing not available, using predefined structure');
        }

        // Return predefined structure
        return this.getAvailableFiles(iterationNum, gameName, trialNum);
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.LocalJSONLoader = LocalJSONLoader;
    console.log('LocalJSONLoader initialized - will load from local data with GitHub fallback');
}