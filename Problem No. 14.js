
//User function Template for javascript

/**
 * @param {string[]} names
 * @param {number} n
 * @return {number}
*/

class Solution {

    longest(names, n) {
        let count = names[0];
        for (let i = 0; i < n - 1; i++) {
            if (names[i].length < names[i + 1].length) {
                count = names[i + 1]
            }
        }
        return count;
    }
}
let st = new Solution()
console.log(st.longest(["Geek", "Geeks", "Geeksfor",
    "GeeksforGeek", "GeeksforGeeks", "ehhwheerweehhehjherjhejh"], 5));