//User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
*/

class Solution {
    armstrongNumber(n) {
        let sum = 0;
        let a = n;
        n = n.toString()
        n = n.split("")
        for (let i = 0; i < n.length; i++) {
            n[i] = parseInt(n[i])
            sum += (n[i] ** 3)
        }
        console.log(sum);
        console.log(a);
        if (a == sum) {
            return "Yes";
        }
        return "No";
    }
}
let st = new Solution()
console.log(st.armstrongNumber(273));
