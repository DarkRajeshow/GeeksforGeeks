/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let max = 0;
    let profit = 0;
    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            profit = prices[right] - prices[left]
            max = Math.max(profit, max)
        }
        else {
            left = right;
        }
        right++;
    }
    return max;
};
console.log(maxProfit(

    [3, 2, 6, 5, 0, 3, 77]
));