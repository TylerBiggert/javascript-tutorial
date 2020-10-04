const string1 = process.argv[2].toUpperCase();
const string2 = process.argv[3].toUpperCase();

// Compare strings alphabetically
if (string1 < string2) console.log(-1);
else if (string1 > string2) console.log(1);
else console.log(0);