const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);
let statusText = '';

if (treeLifeStatus == 0) statusText = 'alive';
else if (treeLifeStatus == 1) statusText = 'flowering';
else if (treeLifeStatus == 2) statusText = 'shedding';
else statusText = 'other';

console.log(statusText);