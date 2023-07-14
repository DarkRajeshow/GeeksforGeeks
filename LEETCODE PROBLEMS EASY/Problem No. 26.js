var filter = function (arr, fn) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

let fn = (n) => {
    return n > 10;
}

console.log(filter([12, 5, 3, 45], fn));