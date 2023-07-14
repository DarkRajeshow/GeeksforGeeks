//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution {
    getMoreAndLess(arr, n, x) {
        let max = 0;
        let arr2 = [];
        let min = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= x) {
                min++;
            }
            else {
                max++;
            }
        }
        arr2.push(min)
        arr2.push(max)
        return arr2.join(" ")
    }
}
let st = new Solution()
console.log(st.getMoreAndLess([1, 2, 8, 10, 11, 12, 19], 7, 5));