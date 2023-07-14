//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
*/

class Solution {
    findElements(arr, n) {
        arr.sort(function (a, b) { return b - a })
        return arr.slice(2,(arr.length))
    }
}
let st = new Solution()
console.log(st.findElements([2,4,1233,12,23,233,233,223]));
