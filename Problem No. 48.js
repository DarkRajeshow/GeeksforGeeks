
class Solution {
    //Function to find the days of buying and selling stock for max profit.
    stockBuySell(A, n) {
        let ans = [];
        let buy = 0;
        let sell = 0;
        for (let i = 1; i < A.length; i++) {
            if (A[sell] < A[i]) {
                sell = i;
            }
            else if (A[sell] > A[i]) {
                if (A[buy] < A[sell]) {
                    ans.push([buy, sell]);
                }
                buy = i;
                sell = i;
            }
            if (i == (A.length - 1) && (A[buy] < A[sell])) {
                ans.push([buy, sell]);
            }
        }
        return ans;
    }
}

let st = new Solution();
console.log(st.stockBuySell([100, 180, 260, 310, 40, 535, 695, 54, 656, 3, 989], 7));