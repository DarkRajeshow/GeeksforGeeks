Array.prototype.last = function () {
    if (this.length == 0) {
        return -1;
    }
    return this[this.length - 1];
};


const arr = [];
const arr2 = [1, 2, 5, 3];
console.log(arr.last()); // 3