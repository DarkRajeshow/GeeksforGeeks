var moveZeroes = function (nums) {
    let n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};
console.log(moveZeroes([1, 0, 0]));
