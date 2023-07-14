//User function Template for javascript

/**
 * @param {string} str
 * @returns {boolean}
*/

class Solution{
    isBinary(str){
        let count = 0;
        str = str.split("")
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 0 || str[i] == 1) {
                count++;
            }
        }
        if (count == str.length) {
            return 1;
        }
        else{
            return 0;
        }
    }
}
let st = new Solution()
console.log(st.isBinary("0111100110101100"));
