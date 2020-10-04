function scan(cargoItemsList) {
    let contrabandItemsIndexes = [];

    for (let i = 0; i < cargoItemsList.length; i++) {
        if (cargoItemsList[i].toLowerCase() == 'contraband') contrabandItemsIndexes.push(i);
    }
    return contrabandItemsIndexes;
}


console.log(scan(['1', '2', 'contraband']));