class Solution {
    //Function to count the number of substrings that start and end with 1.
    binarySubstring(n, a) {
        let numberOfOnes = Array.from(a.matchAll("1")).length;
        let ans = (numberOfOnes * (numberOfOnes - 1)) / 2;
        return ans;
    }
}

let st = new Solution();
console.log(st.binarySubstring(10, "1010010100000000001000000100000000111"));