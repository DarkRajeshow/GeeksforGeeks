/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {

            if (s.match(/[^(){}[]]/g)) {
                if (s.charAt(i) == "(" && s.charAt(j) == ")") {
                    count++;
                }
                if (s.charAt(i) == "{" && s.charAt(j) == "}") {
                    count++;
                }
                if (s.charAt(i) == "[" && s.charAt(j) == "]") {
                    count++;
                }
            }
            
        }
    }
    console.log(count);
    if (count == 3) {
        return true;
    }
};
console.log(isValid("()[]{}"));