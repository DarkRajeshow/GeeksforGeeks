class Solution {
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b) {

        // let expre = new RegExp(b.charAt(0), "i");
        if (a.length == b.length) {
            a = a.split("");
            b = b.split("");
            a = a.sort();
            b = b.sort();
            if (a.join("") == b.join("")) {
                return true;
            }
        }
        return false;
    }
}

let st = new Solution();
console.log(st.isAnagram("fgfd", "gdfg"));

 // for (let i = 0; i < b.length; i++) {
            //     console.log(expre);
            //     console.log(a.match(expre));
            //     if (a.match(expre) == null) {
            //         return false;
            //     }
            //     expre = new RegExp(b.charAt(i), "i");
            // }
            // return true;