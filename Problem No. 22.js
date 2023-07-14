
//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
 class Solution {
    oppositeFaceOfDice(N) {
       if (N == 1) {
        return 6;
       }
       else if (N == 2) {
        return 5;
       }
       else if (N == 4) {
        return 3;
       }
       else if (N == 6) {
        return 1;
       }
       else if (N == 5) {
        return 2;
       }
       else if (N == 3) {
        return 4;
       }
    }
  }
  