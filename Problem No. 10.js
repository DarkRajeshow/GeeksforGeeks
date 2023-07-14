//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {integer}
 */
class Solution {
    sum(arr, n) {
        let sum1 = 0;
        for (let i = 0; i < n; i++) {
            sum1 += arr[i]
        }
        return sum1;
    }
}
let st = new Solution()
console.log(st.sum([1, 2, 3, 4, 5], 5));