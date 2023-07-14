class Solution {
    sortIt(arr, n) {
        let arr1 = arr.filter((x) => {
            return x % 2 == 0;
        });
        let arr2 = arr.filter((x) => {
            return x % 2 != 0;
        });
        arr = [...arr2.reverse(), ...arr1]
        return arr;
    }
}

const st = new Solution();

console.log(st.sortIt([1, 5, 6, 8, 9, 12, 44, 66, 77], 9));