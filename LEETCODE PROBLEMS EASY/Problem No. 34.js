/**
 * @return {Generator<number>}
 */

var fibGenerator = function* () {
    let location = 0;
    let first = 0;
    let second = 1;
    let value = 0;
    const next = () => {
        console.log("dfks");
        value = first + second;
        first = second;
        second = value;
        location++;
        return { value };
    }
    return {
        next
    }
};


const gen = fibGenerator();
gen.next();
gen.next();