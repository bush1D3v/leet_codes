function generate(numRows: number): number[][] {
    const result: number[][] = [ [ 1 ] ];

    for (let i = 1; i < numRows; i++) {
        const iResult: number[] = [];

        const iLength = result[ i - 1 ].length + 1;
        for (let j = 0; j < iLength; j++) {
            if (result[ i - 1 ][ j - 1 ] && result[ i - 1 ][ j ]) {
                iResult.push(result[ i - 1 ][ j - 1 ] + result[ i - 1 ][ j ]);
            }
            else if (result[ i - 1 ][ j - 1 ]) {
                iResult.push(result[ i - 1 ][ j - 1 ]);
            } else {
                iResult.push(result[ i - 1 ][ j ]);
            }
        }

        result[ i ] = iResult;
    }

    return result;
};
