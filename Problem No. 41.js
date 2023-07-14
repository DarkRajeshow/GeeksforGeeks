
class Solution {
    //Function to sort the binary array.
    binSort(A, N) {
        A = A.filter((x) => x);
        let run = N - A.length;
        for (let i = 0; i < (run); i++) {
            A.unshift(0);
        }
        console.log(A);
        return A;
    }
}

let st = new Solution();
st.binSort([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0], 11)