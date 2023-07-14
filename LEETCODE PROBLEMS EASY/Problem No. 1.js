/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let maincount = 0;
    let count = 0;
    let count1 = 0;
    ransomNote = ransomNote.split("");
    magazine = magazine.split("");
    for (let i = 0; i < ransomNote.length; i++) {
        for (let j = 0; j < magazine.length; j++) {
            if (ransomNote[i] == magazine[j]) {
                count++;
                magazine.splice(j, 1)
            }
        }
        console.log(count);
        if (count >= 1) {
            count1 += count;
            maincount++;
        }
        count = 0;
    }
    console.log(count1);
    console.log(maincount);
    console.log(ransomNote.length);
    return (count1 >= ransomNote.length || maincount === ransomNote.length)

};
console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"));

// canConstruct("rrrrfff", "rrrrfffshhe");