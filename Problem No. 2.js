
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

function print2largest(arr, n) {
    let a = arr.sort(function (a, b) { return b - a })
    console.log(a);
    return a[1]
}
console.log(print2largest([223, 34, 12, 2, 12, 42132, 21, 213, 21321, 21123, 213, 321, 2213321, 231, 123213, 213, 232133, 23123212, 123, 321, 231323232, 3, 32, 123, 23112321323, 231213, 23123, 231, 23123, 231, 34, 45, 2, 432, 23342, 213, 34212, 123213, 34, 12, 34342342, 3324, 23234, 32234342, 324342, 23423423, 324, 234, 324, 32, 3, 324324, 32]));