/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

Array.prototype.snail = function (rowsCount, colsCount) {

    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    let desiredArr = [];
    for (let i = 0; i < rowsCount; i++) {
        desiredArr.push([]);
    }
    let count = 0;
    for (let i = 0; i < colsCount; i++) {
        for (let j = 0; j < rowsCount; j++) {
            if (i % 2 == 0) {
                desiredArr[j][i] = this[count];
                count++;
            }
            else {
                desiredArr[rowsCount - j - 1][i] = this[count];
                count++;
            }
        }
    }
    return desiredArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(arr.snail(4, 4));