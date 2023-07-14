
//User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
*/

class Solution {

    find_median(arr) {
        let med = 0;
        let med2 = 0;
        let main;
        arr = arr.sort(function (a, b) { return a - b })
        if (arr.length % 2 != 0) {
            med = Math.floor(arr.length / 2)
            main = arr[med]
        }
        else {
            med2 = arr.length / 2
            main = (arr[med2] + arr[med2 - 1]) / 2
        }
        return Math.floor(main);
    }
}
let st = new Solution()
console.log(st.find_median([5,14]));