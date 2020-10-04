function addFirstToLast(manifestList) {
    if (manifestList.length == 0) return "";
    else if (manifestList.length == 1) return manifestList[0].concat(manifestList[0]);
    else return manifestList[0].concat(manifestList[manifestList.length - 1]);
}

console.log(addFirstToLast(['first', 'second', 'third']));