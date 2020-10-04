const VALID_COLORS = ['red', 'blue', 'yellow'];

class Ducktypium {
    constructor(crystalColor) {
        if (VALID_COLORS.includes(crystalColor.toLowerCase())) {
            this.color = crystalColor;
            this.calibrationSequence = [];
        }
        else throw new Error();
    }

    refract(crystalColor) {
        let twoColorArr = [];
        if (VALID_COLORS.includes(crystalColor.toLowerCase())) {
            twoColorArr.push(this.color);
            twoColorArr.push(crystalColor);
            const sortedArr = twoColorArr.sort();
            if (sortedArr[0].toLowerCase() == 'blue' && sortedArr[1].toLowerCase() == 'red') return 'purple';
            else if (sortedArr[0].toLowerCase() == 'red' && sortedArr[1].toLowerCase() == 'yellow') return 'orange';
            else if (sortedArr[0].toLowerCase() == 'blue' && sortedArr[1].toLowerCase() == 'yellow') return 'green';
            else return crystalColor;
        }
        else throw new Error();
    }
    calibrate(numberArr) {
        this.calibrationSequence = numberArr.sort().map((currentNumber) => currentNumber * 3)
    }
}