//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} key
 * @return {number[]}
*/

class Solution {
    findIndex(a, n, key) {
        let a1 = a.indexOf(key)
        let a2 = a.lastIndexOf(key)
        console.log(`${a1} ${a2}`);
    }
}
let st = new Solution()
console.log(st.findIndex([1, 2, 5, 4, 5, 5, 2, 2, 2, 2, 22, 1, 2, 121, 2, 112, 1, 2, 12, 12, 12, 12, 12, 12, 1, 2, 5, 23, 23, 4, 3], 6, 5));