
//User function Template for javascript

/**
 * @param {number} A1
 * @param {number} A2
 * @param {number} N
 * @returns {number}
*/

class Solution {
    nthTermOfAP(A1, A2, N) {
        let o = A2 - A1
        let j = 0;
        let arr = [];
        if (o == 0) {
            return A1;
        }
        else if (o > 0) {
            for (let i = A1; i <= (o * (N)) + A1; i += o) {
                if (j == N - 1) {
                    return i;
                }
                j++;
            }
        }
        else {
            for (let i = A1; i >= (o * (N)) + A1; i += o) {
                if (j == N - 1) {
                    return i;
                }
                j++;
            }
        }
    }
}
let st = new Solution()
console.log(st.nthTermOfAP(100, 101, 10));