/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let k = m + n - 1;
    let i = m - 1;
    let j = n - 1;
    for (let z = k; z >= 0; z--) {
        if (j < 0) {
            break;
        }
        else if (nums1[i] > nums2[j]) {
            nums1[z] = nums1[i]
            i--;
        }
        else {
            nums1[z] = nums2[j];
            j--;
        }
    }
};
console.log(merge([1, 2, 3, 0, 0, 0],
    3,
    [2, 5, 6],
    3));