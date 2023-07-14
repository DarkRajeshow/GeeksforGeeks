
//User function Template for javascript


/**
 * @param {string} s
 * @returns {number}
*/

class Solution{
    countCamelCase(s){
        s = s.replace(/ /g, "")
        let count = 0;
        s = s.split("")
        for (let i = 0; i < s.length; i++) {
            if (s[i] == s[i].toUpperCase()) {
                count++;
            }
        }
        return count;
    }
}

let st = new Solution()
console.log(st.countCamelCase("EAS hsh shH"));

