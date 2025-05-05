function longestCommonPrefix(strsArr: string[]): string {
    const strsArrLength = strsArr.length;
    if (strsArrLength === 1) {
        return strsArr[ 0 ];
    }
    const prefixMaxLength = strsArr[ 0 ].length;
    let prefixResult = "";

    for (let i = 0; prefixMaxLength > i; i++) {
        let verifyCount = 0;
        for (let j = 0; strsArrLength > j; j++) {
            if (j + 1 < strsArrLength) {
                if (strsArr[ j ][ i ] !== strsArr[ j + 1 ][ i ]) {
                    return prefixResult;
                }
                verifyCount++;
                if (verifyCount === strsArrLength - 1) {
                    prefixResult += strsArr[ j ][ i ];
                }
            }
        }
    }
    return prefixResult;
};