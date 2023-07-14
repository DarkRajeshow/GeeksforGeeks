
//User function Template for javascript

/**
 * @param {number} N
 * @return {string}
*/

function getBinaryRep(N) {
    let new1 = [];
    let i = 0;
    let rem;
    while (N != 0 && N != 1) {
        rem = N % 2;
        N = N / 2;
        new1.push(rem);
        i++;
        console.log(i);
    }
    console.log(new1.join(""));
    return new1.join("");
}
console.log(getBinaryRep(13));