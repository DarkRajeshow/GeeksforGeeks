//User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
*/

class Solution {
    is_palindrome(n) {
        let count = 0;
        n = n.toString()
        n = n.split("")
        let a = [...n];
        console.log(a);
        n = n.reverse()
        console.log(n);
        for (let i = 0; i < n.length; i++) {
            if (n[i] == a[i]) {
                console.log(n[i], a[i]);
                count++;
            }
        }
        if (count == n.length) {
            return "Yes"
        }
        else {
            return "No"
        }
    }
}

let st = new Solution()
console.log(st.is_palindrome(11111));