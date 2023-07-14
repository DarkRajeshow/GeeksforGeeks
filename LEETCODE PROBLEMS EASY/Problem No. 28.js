
var expect = function (val) {
    let toBe = (num) => {
        if (num === val) {
            return true
        }
        else {
            throw new Error("Not Equal");
        }
    };

    let notToBe = (num) => {
        if (num !== val) {
            return true
        }
        else {
            throw new Error("Equal");
        }
    }

    return {
        toBe, notToBe
    }
};

console.log(expect(5).toBe(5));