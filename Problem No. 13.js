//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {
    
    convertFive(n){
        n = n.toString()
        return parseInt(n.replace(/0/g,"5"))
    }
}
let st = new Solution()
console.log(st.convertFive(10023));
