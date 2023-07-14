
//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution {
    countOfElements(arr, n, x) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) {
                count++;
            }
        }
        return count;
    }
}
let st = new Solution()
console.log(st.countOfElements([1, 2, 2, 3], 4, 5));