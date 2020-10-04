let plantLifeStatus = process.argv[2];
let plantDrynessLevel = process.argv[3];

if (plantLifeStatus == 0 && plantDrynessLevel > 10) {
    console.log('WATER');
}