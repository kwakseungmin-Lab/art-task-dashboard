// Dynamic JSON Loader - Load actual files from GitHub repository
const DynamicJSONLoader = {
    baseURL: 'https://raw.githubusercontent.com/a2z-team/a2z-docs/main/',

    // Cache for loaded JSON files
    cache: {},

    // Build the file path
    buildPath(iterationNum, gameName, trialNum, fileName) {
        // Clean up the filename if it contains path separators
        const cleanFileName = fileName.replace(/\\/g, '/');
        return `Solutions/GameMaking/Planning/experiments/iterations/iteration_${iterationNum}/data/task_plans/${gameName}/trial_${trialNum}/${cleanFileName}`;
    },

    // Load JSON file from GitHub
    async loadJSON(iterationNum, gameName, trialNum, fileName) {
        const path = this.buildPath(iterationNum, gameName, trialNum, fileName);
        const url = this.baseURL + path;
        const cacheKey = `${iterationNum}_${gameName}_${trialNum}_${fileName}`;

        // Check cache first
        if (this.cache[cacheKey]) {
            console.log('Returning cached data for:', cacheKey);
            return this.cache[cacheKey];
        }

        try {
            console.log('Fetching from GitHub:', url);
            const response = await fetch(url);

            if (!response.ok) {
                console.error('Failed to load:', url);
                return {
                    error: "Failed to load file",
                    url: url,
                    status: response.status,
                    path: path
                };
            }

            const data = await response.json();

            // Cache the result
            this.cache[cacheKey] = data;

            return data;
        } catch (error) {
            console.error('Error loading JSON:', error);
            return {
                error: "Error loading file",
                message: error.message,
                url: url,
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
        } else if (gameName === 'umbra_scale') {
            return {
                'Character': [
                    'character/player_umbra_idle_6f_12fps.json',
                    'character/player_umbra_run_8f_12fps.json',
                    'character/player_umbra_jump_4f_12fps.json',
                    'character/player_umbra_grab_4f_10fps.json',
                    'character/player_umbra_exposure_5f_12fps.json',
                    'character/echo_clone_idle_4f_8fps.json'
                ],
                'World': [
                    'world/laboratory_bg_grid.json',
                    'world/platform_metallic.json',
                    'world/shadow_realm_portal.json'
                ],
                'UI': [
                    'ui/health_bar_frame.json',
                    'ui/shadow_meter.json',
                    'ui/ability_cooldown.json'
                ]
            };
        } else if (gameName === 'slip_down') {
            return {
                'Character': [
                    'character/player_sprite.json'
                ],
                'World': [
                    'world/background.json',
                    'world/platforms.json'
                ],
                'UI': [
                    'ui/score_display.json',
                    'ui/game_over.json'
                ]
            };
        } else {
            // Default structure for other games
            return {
                'Files': [
                    'character/main_character.json',
                    'world/background.json',
                    'ui/interface.json'
                ]
            };
        }
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.DynamicJSONLoader = DynamicJSONLoader;
}