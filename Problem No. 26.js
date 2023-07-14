//User function Template for javascript


/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    reverse_digit(n) {
        while (n % 10 == 0) {
            n = n / 10;
        }
        let a = n.toString()
        a = a.split("")
        return a.reverse().join('')
    }
}
let st = new Solution()
console.log(st.reverse_digit(212300));
