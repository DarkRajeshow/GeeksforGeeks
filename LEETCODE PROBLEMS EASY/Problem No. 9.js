/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i != j) {
                return true;
            }
        }
    }
    return false;
};
// let st = new Solution()
console.log(containsDuplicate([1,4,3,5,12,2,3,22,12,421,2,122,12]));