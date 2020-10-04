function scan(cargoItemsList) {
    let contrabandItemsCount = 0;
    cargoItemsList.forEach(cargoItem => {
        if (cargoItem.toLowerCase() == 'contraband') contrabandItemsCount++;
    });
    return contrabandItemsCount;
}


console.log(scan(['1', '2', 'contraband']));