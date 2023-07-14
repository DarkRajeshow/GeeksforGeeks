
//User function Template for javascript


/**
 * @param {number} n
 * @returns {void}
*/

i = 1;
function printTillN(n) {
    arr = [];
    if (i <= n) {
        process.stdout.write(i + " ")
        i++;
        printTillN(n);
    }
}

// let st = new Solution();
console.log(printTillN(1));
