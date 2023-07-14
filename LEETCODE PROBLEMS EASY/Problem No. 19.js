/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    if(nums1[nums1.length - 1] > nums2[0]){
        return 0
    }
    let i = 0;
    let j = 0;
    let max = 0;
    while (i < nums1.length && j < nums2.length) {
        if (i <= j && nums1[i] <= nums2[j]) {
            let p = j - i;
            max = Math.max(max, p)
            j++;
        }
        else{
            j++;
            i++;
        }
    }
    return max;
};
console.log(maxDistance(
    [30,29,19,5],[25,25,25,25,25]
));