class Solution {
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str) {
        let charlen = 0;
        let bigChar = "";
        let pos = "";
        console.log(bigChar);
        for (let i = 0; i < str.length; i++) {
            if (Array.from(str.matchAll(str.charAt(i))).length > charlen || ((Array.from(str.matchAll(str.charAt(i))).length == charlen) && str.charCodeAt(i) < str.charCodeAt(pos))) {
                charlen = Array.from(str.matchAll(str.charAt(i))).length;
                bigChar = str.charAt(i);
                pos = i;
            }
        }
        return bigChar;
    }
}

let st = new Solution();
console.log(st.getMaxOccuringChar("ekdsjkeesaaas"));;