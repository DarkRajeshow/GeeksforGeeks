
//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {void}
*/

class Solution {
    swapKth(arr, n, k) {
        for (let i = 0; i < Math.floor(n); i++) {
            if (k == (i + 1)) {
                let a = arr[i];
                arr[i] = arr[arr.length - k - 1];
                arr[arr.length - k - 1] = a;
            }
        }
        return arr;
    }
}

let st = new Solution()
console.log(st.swapKth([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 3));