//User function Template for javascript


/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
*/

class Solution {
    findSingle(n, arr) {
        let ans = 0;
        for (let i = 0; i < arr.length; i++) {
            console.log(ans);
            ans = ans ^ arr[i];
        }
        return ans;
    }
}
let st = new Solution()
console.log(st.findSingle(5, [1, 2, 3, 2, 1]));
console.log(10 ^ 5565);