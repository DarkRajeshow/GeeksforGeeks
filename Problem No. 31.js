//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {
    isDigitSumPalindrome(N) {
        let n = N.toString();
        n = n.split("");
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            n[i] = parseInt(n[i])
            sum += n[i];
        }
        console.log(sum);
        let s = sum.toString();
        s = s.split("");
        let a = [...s]
        if (s.reverse().join("") == a.join("")) {
            return 1;
        }
        else {
            return 0
        }
    }
}
let st = new Solution()
console.log(st.isDigitSumPalindrome(1215625));