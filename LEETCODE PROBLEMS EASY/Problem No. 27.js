

var map = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

let fn = (n) => {
    return n + 1;
}

console.log(map([1, 2, 3], fn));