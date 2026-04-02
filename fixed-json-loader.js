// Fixed JSON Loader - Works with GitHub Pages
const FixedJSONLoader = {
    cache: {},

    // Check if running on GitHub Pages or locally
    isGitHubPages() {
        return window.location.hostname.includes('github.io');
    },

    // Get base path depending on environment
    getBasePath() {
        if (this.isGitHubPages()) {
            // GitHub Pages uses /repository-name/ prefix
            return '/art-task-dashboard';
        }
        // Local development
        return '';
    },

    buildPath(iterationNum, gameName, trialNum, fileName) {
        const cleanFileName = fileName.replace(/\\/g, '/');
        const basePath = this.getBasePath();
        const path = `${basePath}/data/iteration_${iterationNum}/${gameName}/trial_${trialNum}/${cleanFileName}`;

        console.log(`Building path: ${path} (GitHub Pages: ${this.isGitHubPages()})`);
        return path;
    },

    async loadJSON(iterationNum, gameName, trialNum, fileName) {
        console.log('=== FixedJSONLoader.loadJSON ===');
        console.log('Environment:', this.isGitHubPages() ? 'GitHub Pages' : 'Local');
        console.log('Params:', { iterationNum, gameName, trialNum, fileName });

        const path = this.buildPath(iterationNum, gameName, trialNum, fileName);
        const cacheKey = `${iterationNum}_${gameName}_${trialNum}_${fileName}`;

        // Check cache first
        if (this.cache[cacheKey]) {
            console.log('✅ Returning cached data for:', cacheKey);
            return this.cache[cacheKey];
        }

        try {
            console.log(`🔍 Fetching: ${path}`);
            const response = await fetch(path);

            if (response.ok) {
                console.log(`✅ Success loading: ${path}`);
                const data = await response.json();

                // Cache the result
                this.cache[cacheKey] = data;

                console.log('Loaded successfully. Data keys:', Object.keys(data).slice(0, 5));
                console.log('Asset key:', data.asset_key || data.project?.project_name || 'N/A');

                return data;
            } else {
                console.error(`❌ Failed to load (${response.status}): ${path}`);

                // Try GitHub API as fallback
                if (typeof DynamicJSONLoader !== 'undefined') {
                    console.log('🔄 Falling back to GitHub API...');
                    return await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, fileName);
                }

                // Provide helpful error message for missing iterations
                if (response.status === 404) {
                    return {
                        error: "File not found",
                        message: `This game/iteration combination may not exist. Try iteration 8 for umbra_scale.`,
                        path: path,
                        status: 404,
                        hint: "Available: Chrome_Dino_Runner (iter 3-8), Pico_Echo (iter 3-8), umbra_scale (iter 8 only)"
                    };
                }
                return {
                    error: "Failed to load file",
                    message: `HTTP ${response.status}`,
                    path: path,
                    status: response.status
                };
            }

        } catch (error) {
            console.error('❌ Exception in loadJSON:', error);

            // Try GitHub fallback on error
            if (typeof DynamicJSONLoader !== 'undefined') {
                console.log('🔄 Falling back to GitHub API due to error...');
                return await DynamicJSONLoader.loadJSON(iterationNum, gameName, trialNum, fileName);
            }

            return {
                error: "Error loading file",
                message: error.message,
                path: path
            };
        }
    },

    // Test function to verify file access
    async testFileAccess() {
        console.log('=== Testing File Access ===');
        const testFiles = [
            'data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json',
            '/data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json',
            '/art-task-dashboard/data/iteration_8/Chrome_Dino_Runner/trial_1/_project_common.json',
        ];

        for (const file of testFiles) {
            try {
                const response = await fetch(file);
                console.log(`${file}: ${response.ok ? '✅' : '❌'} (${response.status})`);
            } catch (e) {
                console.log(`${file}: ❌ (Error: ${e.message})`);
            }
        }
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.FixedJSONLoader = FixedJSONLoader;
    window.LocalJSONLoader = FixedJSONLoader;  // Override LocalJSONLoader

    console.log('✅ FixedJSONLoader initialized');
    console.log('Environment:', FixedJSONLoader.isGitHubPages() ? 'GitHub Pages' : 'Local');
    console.log('Base path:', FixedJSONLoader.getBasePath());

    // Run access test on load
    setTimeout(() => {
        FixedJSONLoader.testFileAccess();
    }, 1000);
}