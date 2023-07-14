/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let m = Math.max(...arr)
    let index = arr.indexOf(m)
    if (index == arr.length - 1 || index == 0 || arr.length < 3) {
        return false;
    }
    for (let i = 0; i < index; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    for (let i = index; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(validMountainArray([0,2,1]));