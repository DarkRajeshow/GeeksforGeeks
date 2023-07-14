
//User function Template for javascript



/**
 * @param {String} S
 * @returns {String}
*/

class Solution {
    delAlternate(S) {
        S = S.split("")
        for (let i = 0; i < S.length; i++) {
            if (i % 2 == 1) {
                S[i] = ""
            }
        }
        return S.join("");
    }
}
let st = new Solution()
console.log(st.delAlternate("GeeksforGeeks"));


