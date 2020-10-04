const argumentValue = process.argv[2];
const commandString = String(argumentValue);

if (commandString.toUpperCase() == 'EXTEND') console.log('Extending bridge!');