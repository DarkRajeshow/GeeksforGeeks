/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let count = 0;
    let arr = [];
    let arr3 = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                count++;
            }
        }
        arr.push(count);
        count = 0;
    }
    let arr2 = [...arr];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr2[j]) {
                if (!arr3.includes(j)) {
                    arr3.push(j)
                }
            }
        }
    }
    console.log(arr2);
    arr3.length = k
    return arr3;
};

console.log(kWeakestRows([[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]], 5));