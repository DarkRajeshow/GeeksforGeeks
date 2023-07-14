/**
 * @param {number} A
 * @param {number} B
 * @returns {number}
*/

class Solution {
    gcd(A, B) {
        let arr1 = [];
        for (let i = 1; i <= Math.min(A, B); i++) {
            if (A % i == 0 && B % i == 0) {
                arr1.push(i)
            }
        }
        return Math.max(...arr1);
    }
}
let st = new Solution()
console.log(st.gcd(1222, 4848234811221221212));
