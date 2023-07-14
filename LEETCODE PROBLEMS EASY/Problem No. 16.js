/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            arr1.push(nums2[i])
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            arr2.push(nums1[i])
        }
    }
    arr2 = [...new Set(arr2)]
    arr1 = [...new Set(arr1)]
    let arr3 = [arr2, arr1]
    return arr3;
};

console.log(findDifference([212, -19, 21, 121, 12, 12], [-68, -80, -19, -94, 82, 21, -4])); 