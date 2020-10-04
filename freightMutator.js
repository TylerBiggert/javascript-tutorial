function mutate(cargoList) {
    return cargoList.map((item) => item.toUpperCase())
}

console.log(mutate(['apple', 'orange', 'contraband']));