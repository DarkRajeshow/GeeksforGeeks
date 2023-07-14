
//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {bool}
*/

class Solution{
    IsPerfect(arr,n){
            let a = [...arr]
            if(arr.reverse().join("") == a.join("")){
                return "PERFECT";
            }
            else{
                return 'NOT PERFECT';
            }
    }
}
let st = new Solution()
console.log(st.IsPerfect([1,2,3,2,7],5));



