/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    if (arr.length == 0) return arr;
    let ans = [];
    let i = 0;
    if (arr.length > (size + i)) {
        while (arr.length > i) {
            ans.push((arr.slice(i, (size + i))));
            i = i + size;
        }
    }
    else {
        ans.push(arr);
    }

    console.log(ans);
    return ans;
};

chunk([1, 3, 5, 6, 7, 4, 5, 6, 4], 7);