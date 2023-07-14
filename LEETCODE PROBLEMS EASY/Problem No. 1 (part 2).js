/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split("");
    magazine = magazine.split("");
    one = ransomNote.every(check1)
    function check1(ele) {
        for (let i = 0; i < magazine.length; i++) {
            if (ele == magazine[i]) {
                magazine.splice(i, 1)
                return true
            }
        }
    }
    return one;
};
canConstruct("fffff", "faffajdessesedfs")