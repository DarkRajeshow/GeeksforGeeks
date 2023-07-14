//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    printArray(arr, n) {
        for (let i = 0; i < arr.length; i++) {
            process.stdout.write(arr[i] + " ")
        }
    }
}
