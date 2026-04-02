// Game Availability Configuration
// Maps iterations to available games and their file structures

const GameAvailability = {
    // Map of iteration -> available games
    iterationGames: {
        3: ['Chrome_Dino_Runner', 'Pico_Echo'],
        4: ['Chrome_Dino_Runner', 'Pico_Echo'],
        5: ['Chrome_Dino_Runner', 'Pico_Echo'],
        6: ['Chrome_Dino_Runner', 'Pico_Echo', 'cosmos_heracles', 'jarl_of_blizzard', 'olympus_step', 'ricochet_conspiracy'],
        7: ['Chrome_Dino_Runner', 'Pico_Echo', 'cosmos_heracles', 'olympus_step', 'ricochet_conspiracy'],
        8: ['Chrome_Dino_Runner', 'Pico_Echo', 'reflect_academy', 'slip_down', 'umbra_scale'],
        9: ['bubble_farm', 'Chrome_Dino_Runner', 'jarl_of_blizzard', 'leaf_beat', 'Pico_Echo'],
        10: ['bubble_farm', 'Chrome_Dino_Runner', 'jarl_of_blizzard', 'leaf_beat', 'Pico_Echo']
    },

    // Check if a game is available for a specific iteration
    isGameAvailable(iterationNum, gameName) {
        const availableGames = this.iterationGames[iterationNum] || [];
        return availableGames.includes(gameName);
    },

    // Get available games for an iteration
    getAvailableGames(iterationNum) {
        return this.iterationGames[iterationNum] || [];
    },

    // Get file structure for each game (common across iterations)
    getGameFiles(gameName, iterationNum) {
        // First check if game is available for this iteration
        if (!this.isGameAvailable(iterationNum, gameName)) {
            return {
                error: `${gameName} is not available in iteration ${iterationNum}`,
                availableIterations: this.getIterationsForGame(gameName)
            };
        }

        // Return file structure based on game
        const fileStructures = {
            'Chrome_Dino_Runner': {
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
            },
            'Pico_Echo': {
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
            },
            'reflect_academy': {
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
            },
            'slip_down': {
                'Character': [
                    'character/player_slime_idle.json',
                    'character/player_slime_stretch.json',
                    'character/player_slime_splat.json'
                ],
                'World': [
                    'world/cave_background.json',
                    'world/platform_rocky.json',
                    'world/stalactite.json'
                ],
                'UI': [
                    'ui/depth_meter.json',
                    'ui/score_display.json',
                    'ui/game_over.json'
                ]
            },
            'umbra_scale': {
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
            },
            'cosmos_heracles': {
                'Character': [
                    'character/character.boss.hydra_idle.json',
                    'character/character.boss.hydra_attack_alternate.json',
                    'character/character.enemy.cerberus_run.json',
                    'character/character.enemy.cyclops_idle.json',
                    'character/character.enemy.cyclops_attack.json',
                    'character/character.player.heracles_idle.json',
                    'character/character.player.heracles_run.json',
                    'character/character.player.heracles_attack.json'
                ],
                'World': [
                    'world/world.background.mount_olympus.json',
                    'world/world.platform.cloud.json',
                    'world/world.platform.marble.json'
                ],
                'UI': [
                    'ui/ui.health_bar.json',
                    'ui/ui.score_display.json',
                    'ui/ui.power_meter.json'
                ]
            },
            'olympus_step': {
                'Character': [
                    'character/character.player.god_idle.json',
                    'character/character.player.god_teleport.json'
                ],
                'World': [
                    'world/world.background.olympus_sky.json',
                    'world/world.platform.cloud_step.json'
                ],
                'UI': [
                    'ui/ui.step_counter.json',
                    'ui/ui.timer.json'
                ]
            },
            'ricochet_conspiracy': {
                'Character': [
                    'character/character.player.agent_idle.json',
                    'character/character.player.agent_shoot.json'
                ],
                'World': [
                    'world/world.background.facility.json',
                    'world/world.wall.metal.json'
                ],
                'UI': [
                    'ui/ui.ammo_counter.json',
                    'ui/ui.mission_brief.json'
                ]
            },
            'jarl_of_blizzard': {
                'Character': [
                    'character/character.jarl.idle.json',
                    'character/character.jarl.attack.json'
                ],
                'World': [
                    'world/world.background.snowstorm.json',
                    'world/world.platform.ice.json'
                ],
                'UI': [
                    'ui/ui.frost_meter.json',
                    'ui/ui.score.json'
                ]
            },
            'bubble_farm': {
                'Character': [
                    'character/character_bubble_normal_idle_6f_8fps.json',
                    'character/character_bubble_heavy_idle_4f_6fps.json',
                    'character/character_bubble_mini_idle_4f_8fps.json',
                    'character/character_bubble_jelly_idle_6f_8fps.json',
                    'character/character_bubble_king_idle_10f_6fps.json'
                ],
                'World': [
                    'world/world_farm_background_day.json',
                    'world/world_farm_fence.json',
                    'world/world_bubble_spawner.json'
                ],
                'UI': [
                    'ui/ui_bubble_counter.json',
                    'ui/ui_score_display.json',
                    'ui/ui_time_bar.json'
                ]
            },
            'leaf_beat': {
                'Character': [
                    'character/character_leaf_sprite_idle_4f_8fps.json',
                    'character/character_leaf_sprite_bounce_6f_12fps.json'
                ],
                'World': [
                    'world/world_forest_background.json',
                    'world/world_tree_branch.json',
                    'world/world_wind_effect.json'
                ],
                'UI': [
                    'ui/ui_rhythm_indicator.json',
                    'ui/ui_combo_counter.json',
                    'ui/ui_score_display.json'
                ]
            }
        };

        return fileStructures[gameName] || {
            'Files': ['_project_common.json']
        };
    },

    // Get which iterations a game appears in
    getIterationsForGame(gameName) {
        const iterations = [];
        for (const [iter, games] of Object.entries(this.iterationGames)) {
            if (games.includes(gameName)) {
                iterations.push(parseInt(iter));
            }
        }
        return iterations;
    },

    // Get a display message for unavailable games
    getAvailabilityMessage(iterationNum, gameName) {
        if (this.isGameAvailable(iterationNum, gameName)) {
            return null;
        }

        const availableIterations = this.getIterationsForGame(gameName);
        if (availableIterations.length > 0) {
            return `${gameName} is available in iterations: ${availableIterations.join(', ')}`;
        } else {
            return `${gameName} is not available in any iteration`;
        }
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.GameAvailability = GameAvailability;
}