//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
class Solution {

    leftElement(arr, n) {
        arr = arr.sort(function (a, b) { return a - b })
        let mid = (arr.length - 1) / 2;
        return arr[mid];
    }
}
let st = new Solution()
console.log(st.leftElement([9, 11, 1, 4, 8, 6, 1]));