/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr = arr.sort(function (a, b) { return a - b });
    console.log(arr);
    if (arr.length % 2 == 0) {
        return ((arr[(arr.length / 2) - 1]) + (arr[(arr.length / 2)])) / 2
    }
    else {
        return arr[Math.floor(arr.length / 2)]
    }
};
console.log(findMedianSortedArrays(
    [1, 3, 5, 7, 9],
    [22, 44, 98, 899]));