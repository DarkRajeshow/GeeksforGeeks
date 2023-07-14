

Array.prototype.groupBy = function (fn) {
    return this.reduce((result, item) => {
        let key = fn(item);
        if (!(key in result)) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};

let fn = (item) => {
    return String(item[1]);
}

let arr = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [3, 87]];
console.log(arr.groupBy(fn));