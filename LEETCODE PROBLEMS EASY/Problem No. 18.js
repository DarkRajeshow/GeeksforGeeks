/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let max = 0;
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (colors[i] != colors[j] && i < j) {
                let p = j - i
                max = Math.max(p, max)
            }
        }
    }
    return max;
};
console.log(maxDistance([2, 3, 5, 2, 2, 2, 2, 3,9]));