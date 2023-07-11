//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */

function leftSmaller(arr, n) {
    let count = -1;
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && i != j) {
                count = arr[j]
            }
        }
        arr2.push(count);
        count = -1;
    }
    return arr2;
}
console.log(leftSmaller([1,6,2], 3));