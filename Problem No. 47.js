
class Solution {

    peakElement(arr, n) {
        for (let i = 0; i < (arr.length - 1); i++) {
            if (arr[i] < arr[i + 1]) {
                return (i + 1);
            }
        }
        return -1;
    }
}

let st = new Solution();

console.log(st.peakElement([3,4,2], 4));