/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
    let m = Math.max(...nums)
    let index = nums.indexOf(m)
    let last = nums.lastIndexOf(m)
    let count = 0;
    if (index == 0 && last == nums.length - 1) {
        nums.shift();
        nums.pop();
        m = Math.max(...nums);
        index = nums.indexOf(m);
        count = count + 2;
    }
    else if (index == 0) {
        nums.splice(index, 1);
        m = Math.max(...nums);
        index = nums.indexOf(m);
        count++;
    }
    else if (last == nums.length - 1) {
        nums.splice(last, 1);
        m = Math.max(...nums);
        index = nums.indexOf(m);
        count++;
    }
    for (let i = 0; i < index; i++) {
        if (nums[i] >= nums[i + 1]) {
            
            count++;
        }
    }
    for (let i = index; i < nums.length; i++) {
        if (nums[i] <= nums[i + 1]) {
            count++;
        }
    }
    return count;
};
console.log(minimumMountainRemovals(
    [1, 16, 84, 9, 29, 71, 86, 79, 72, 12]));