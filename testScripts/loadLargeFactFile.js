const fs = require('fs');
const path = require('path');

const localDataPath = path.resolve(__dirname, '../localData/');
const fileName = 'facts.json';

// Generate test data
let testData = {};
for (let i = 1; i <= 100; i++) {
    testData[i] = `test fact ${i}`;
}

// Write the test data to the file
fs.writeFileSync(path.join(localDataPath, fileName), JSON.stringify(testData));

console.log(`Generated test data in ${fileName}`);