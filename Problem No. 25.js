//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthElement(A, B, n, m, k) {
        let C = [];
        let A1 = 0;
        let B1 = 0;
        let C1 = 0;
        console.log(B.length);
        console.log(A.length);
        while (B1 < B.length && A1 < A.length) {
            if (A[A1] < B[B1]) {
                C[C1] = A[A1]
                A1++
            }
            else {
                C[C1] = B[B1]
                B1++
            }
            C1++
        }
        if (A.length > B.length) {
            for (let j = B.length; j < A.length; j++) {
                C[C1] = A[j]
                C1++
            }
        }
        else if (B.length > A.length) {
            for (let j = A.length; j < B.length; j++) {
                C[C1] = B[j]
                C1++
            }
        }
        console.log(A1);
        console.log(B1);
        console.log(C1);
        console.log(C);
        return C[k - 1];
    }
}
let st = new Solution()
console.log(st.kthElement([1, 5, 9, 538],[100,1010,101010,1010010],2,2,12));