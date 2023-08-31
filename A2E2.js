function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    
    if (colsA !== rowsB) {
        return;
    }
    
    const result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }
    
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    
    return result;
}

const matrixA = [
    [2, 3],
    [4, 5]
];

const matrixB = [
    [6, 7],
    [8, 9]
];

const result = multiplyMatrices(matrixA, matrixB);
if (typeof result === "string") {
    console.log(result);
} else {
    console.log(result);
}