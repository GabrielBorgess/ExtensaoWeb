function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join('\t'));
    }
}

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transposed = new Array(numCols).fill(null).map(() => new Array(numRows));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}

function main() {
    const matrixA = [
        [1, 2]
        [3, 4]
        [5, 6]
    ];

    console.log("Matrix A:");
    printMatrix(matrixA);

    const transposedMatrixA = transposeMatrix(matrixA);

    console.log("\nTransposed Matrix A:");
    printMatrix(transposedMatrixA);
}

main();