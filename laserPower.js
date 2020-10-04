function calculatePower(powerSettingsArr) {
    return powerSettingsArr.map((powerSetting) => powerSetting * 2).
    reduce((counter, powerSetting) => {
        return counter + powerSetting;
    }, 0);
}

console.log(calculatePower([1,1,1]))