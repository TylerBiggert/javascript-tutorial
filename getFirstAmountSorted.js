function getFirstAmountSorted(a, n) {
    return a.sort().slice(0, n);
}

console.log(getFirstAmountSorted(['third', 'second', 'first'], 2))