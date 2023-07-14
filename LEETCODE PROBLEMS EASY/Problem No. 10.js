/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0 || nums.length > 1e5)
        return 0;

    if (!(nums.every(num => num >= -1e4 && num <= 1e4)))
        return 0;
    let meh = 0,
        msf = Number.MIN_SAFE_INTEGER
    for (const i in nums) {
        meh = meh + nums[i]
        if (meh <= nums[i]) {
            meh = nums[i]
        }
        if (msf < meh) {
            msf = meh
        }
    }
    return msf;
};
console.log(maxSubArray([1,4,1,2,3,-2,-23,32,3,23,2,1,2,-23,-2,2,23,2,2323,-1222]));