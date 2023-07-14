/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let count = 0;
    while (num != 0) {
        if (num % 2 != 0) {
            num--;
        }
        else if (num % 2 == 0) {
            num = num / 2;
        }
        count++;
    }
    return count;
};
numberOfSteps(20)