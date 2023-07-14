
//User function Template for javascript

/**
 * @param {number} N
 * @return {boolean}
*/

class Solution {
    fascinating(N) {
        let count = 0;
        let n1 = (N * 2).toString();
        let n2 = (N * 3).toString();
        N = N.toString()
        let m = N.concat(n1, n2);
        console.log(m);
        for (let i = 1; i < 10; i++) {
            if (m.match(i)) {
                count++;
            }
        }
        if (count == 9) {
            return true;
        }
        return false;
    }
}
let st = new Solution()
console.log(st.fascinating(819));