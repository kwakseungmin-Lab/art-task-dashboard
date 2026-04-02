// Script to generate complete file manifest from actual files
const fs = require('fs');
const path = require('path');

const dataDir = 'data';
const manifest = {};

// Function to get all JSON files in a directory
function getJsonFiles(dirPath) {
    try {
        const files = fs.readdirSync(dirPath);
        return files.filter(file => file.endsWith('.json')).map(file => file);
    } catch (e) {
        return [];
    }
}

// Scan all iterations
for (let iter = 3; iter <= 10; iter++) {
    manifest[iter] = {};
    const iterDir = path.join(dataDir, `iteration_${iter}`);

    if (!fs.existsSync(iterDir)) continue;

    // Get all games in this iteration
    const games = fs.readdirSync(iterDir).filter(item => {
        return fs.statSync(path.join(iterDir, item)).isDirectory();
    });

    games.forEach(game => {
        manifest[iter][game] = {};

        // Scan all trials
        for (let trial = 1; trial <= 5; trial++) {
            const trialDir = path.join(iterDir, game, `trial_${trial}`);
            if (!fs.existsSync(trialDir)) continue;

            manifest[iter][game][trial] = {
                '_project_common': '',
                'Character': [],
                'Obstacles': [],
                'World': [],
                'UI': [],
                'Items': [],
                'Mirrors': []
            };

            // Check for _project_common.json
            if (fs.existsSync(path.join(trialDir, '_project_common.json'))) {
                manifest[iter][game][trial]['_project_common'] = '_project_common.json';
            }

            // Check each category directory
            ['character', 'obstacles', 'world', 'ui', 'items', 'mirrors'].forEach(category => {
                const categoryDir = path.join(trialDir, category);
                const files = getJsonFiles(categoryDir);
                const categoryKey = category.charAt(0).toUpperCase() + category.slice(1);

                if (files.length > 0) {
                    manifest[iter][game][trial][categoryKey] = files.map(f => `${category}/${f}`);
                }
            });
        }
    });
}

// Write to file
const output = `// Complete File Manifest - Auto-generated from actual file system
// Generated at: ${new Date().toISOString()}

const CompleteFileManifest = ${JSON.stringify(manifest, null, 4)};

// Helper function to get files for a specific game/iteration/trial
function getFilesForTrial(iterationNum, gameName, trialNum) {
    if (!CompleteFileManifest[iterationNum]) return null;
    if (!CompleteFileManifest[iterationNum][gameName]) return null;
    if (!CompleteFileManifest[iterationNum][gameName][trialNum]) return null;

    return CompleteFileManifest[iterationNum][gameName][trialNum];
}

// Export for use
if (typeof window !== 'undefined') {
    window.CompleteFileManifest = CompleteFileManifest;
    window.getFilesForTrial = getFilesForTrial;
}

if (typeof module !== 'undefined') {
    module.exports = { CompleteFileManifest, getFilesForTrial };
}`;

fs.writeFileSync('complete-file-manifest.js', output);
console.log('Manifest generated successfully!');
console.log('Total iterations:', Object.keys(manifest).length);

// Print summary
Object.keys(manifest).forEach(iter => {
    const games = Object.keys(manifest[iter]);
    console.log(`Iteration ${iter}: ${games.join(', ')}`);
});