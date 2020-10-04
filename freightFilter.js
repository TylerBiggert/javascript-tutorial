function scanAndFilter(cargoList, filterText) {
    return cargoList.filter((item) => item.toLowerCase() != filterText.toLowerCase());
}

console.log(scanAndFilter(['1', '2', 'contraband'], 'conTraband'));