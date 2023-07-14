
//User function Template for javascript


/**
 * @param {number} n
 * @returns { }
*/

class Solution {
    i = 1;
    printNos(N) {
        let n = N
        if (this.i <= n) {
            process.stdout.write(`${this.i} `)
            this.i++;
            this.printNos(n)
        }
    }
}
let sol = new Solution;
sol.printNos(100)
// printNos(10)