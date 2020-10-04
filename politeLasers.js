function getLaserSetting(s1) {
    if (s1 == 'please') return 'OFF';
    else return 'ON';
}

console.log(getLaserSetting('please'));