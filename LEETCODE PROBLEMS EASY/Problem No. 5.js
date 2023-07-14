/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let arr = []
    let sum = 0
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
        }
        arr.push(sum)
        sum = 0;
    }

    return Math.max(...arr)
};
console.log(maximumWealth([[1, 4, 3], [2, 1, 2], [1, 2, 1]]));