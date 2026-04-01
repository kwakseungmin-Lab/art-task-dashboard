// Debug JSON Loader - Enhanced debugging
const DebugJSONLoader = {
    cache: {},

    buildPath(iterationNum, gameName, trialNum, fileName) {
        const cleanFileName = fileName.replace(/\\/g, '/');
        const path = `data/iteration_${iterationNum}/${gameName}/trial_${trialNum}/${cleanFileName}`;
        console.log('Building path:', path);
        return path;
    },

    async loadJSON(iterationNum, gameName, trialNum, fileName) {
        console.log('=== DebugJSONLoader.loadJSON ===');
        console.log('Params:', { iterationNum, gameName, trialNum, fileName });

        const path = this.buildPath(iterationNum, gameName, trialNum, fileName);
        const cacheKey = `${iterationNum}_${gameName}_${trialNum}_${fileName}`;

        // Check cache first
        if (this.cache[cacheKey]) {
            console.log('✅ Returning cached data for:', cacheKey);
            return this.cache[cacheKey];
        }

        try {
            // Try multiple path variations
            const pathVariations = [
                path,                                    // data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json
                `./${path}`,                             // ./data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json
                `/${path}`,                              // /data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json
                `/art-task-dashboard/${path}`,          // /art-task-dashboard/data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json
            ];

            console.log('Trying path variations:', pathVariations);

            for (const tryPath of pathVariations) {
                console.log(`Attempting: ${tryPath}`);
                const response = await fetch(tryPath);

                if (response.ok) {
                    console.log(`✅ Success with path: ${tryPath}`);
                    const data = await response.json();

                    // Cache the result
                    this.cache[cacheKey] = data;

                    console.log('Loaded data keys:', Object.keys(data).slice(0, 5));
                    return data;
                } else {
                    console.log(`❌ Failed (${response.status}): ${tryPath}`);
                }
            }

            // All variations failed
            console.error('❌ All path variations failed');

            // Try GitHub fallback if available
            if (typeof DynamicJSONLoader !== 'undefined') {
                console.log('🔄 Falling back to GitHub loader...');
                return await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, fileName);
            }

            return {
                error: "Failed to load file",
                message: "All path variations failed",
                path: path,
                tried: pathVariations
            };

        } catch (error) {
            console.error('❌ Exception in loadJSON:', error);

            // Try GitHub fallback on error
            if (typeof DynamicJSONLoader !== 'undefined') {
                console.log('🔄 Falling back to GitHub loader due to error...');
                return await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, fileName);
            }

            return {
                error: "Error loading file",
                message: error.message,
                path: path
            };
        }
    }
};

// Replace LocalJSONLoader with DebugJSONLoader
if (typeof window !== 'undefined') {
    window.LocalJSONLoader = DebugJSONLoader;
    window.DebugJSONLoader = DebugJSONLoader;
    console.log('✅ DebugJSONLoader initialized - will try multiple path variations');
}