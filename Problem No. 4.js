//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

function valueEqualToIndex(arr, n) {
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] == i + 1) {
            arr2.push(arr[i])
        }
    }
    return arr2;
}
console.log(valueEqualToIndex([1, 2, 4, 1, 3, 5, 6, 8], 8));
