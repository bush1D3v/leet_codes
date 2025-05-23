enum RomanCommonNumbers {
    "I" = 1,
    "V" = 5,
    "X" = 10,
    "L" = 50,
    "XC" = 90,
    "C" = 100,
    "D" = 500,
    "M" = 1000,
}

enum RomanComposedNumbers {
    "IV" = 4,
    "IX" = 9,
    "XL" = 40,
    "XC" = 90,
    "CD" = 400,
    "CM" = 900,
}

function romanToInt(s: string): number {
    let result = 0;
    let i = 0;

    while (i < s.length) {
        if (i + 1 < s.length && RomanComposedNumbers[ s[ i ] + s[ i + 1 ] ]) {
            result += RomanComposedNumbers[ s[ i ] + s[ i + 1 ] ];
            i += 2;
        } else {
            result += RomanCommonNumbers[ s[ i ] ];
            i++;
        }
    }

    return result;
};
