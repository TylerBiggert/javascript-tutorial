function calculateMass(cargoList) {
    return cargoList.reduce((counter, cargoItem) => {
        return counter + cargoItem.length;
    }, 0);
}

console.log(calculateMass(['apple', 'orange', 'contraband']));