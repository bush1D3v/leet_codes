function isPalindrome(x: number): boolean {
    const numberStr = x.toString();
    const numberLength = numberStr.length;

    let count = 0
    for (let i = 0; i + 1 < numberLength; (count++, i += 2)) {
        if ((count * 2) + 1 !== numberLength) {
            if (numberStr[ count ] !== numberStr[ (numberLength - 1) - count ]) {
                return false;
            }
        }
    }

    return true;
};

console.log(isPalindrome(131));
