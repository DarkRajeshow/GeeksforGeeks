//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    PalinArray(arr, n) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            let a = arr[i]
            arr[i] = arr[i].toString();
            arr[i] = arr[i].split("")
            console.log(parseInt((arr[i].reverse().join(""))));
            console.log(a);
            if (parseInt((arr[i].reverse().join(""))) == a) {
                count++;
            }
            console.log(count);
        }
        if (count == arr.length) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
let st = new Solution()
console.log(st.PalinArray([111, 222, 333, 447, 555
], 5));
