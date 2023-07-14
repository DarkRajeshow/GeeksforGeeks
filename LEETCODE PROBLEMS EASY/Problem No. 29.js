/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj.filter((value) => {
            return Boolean(value);
        }).reduce((ans, value) => {
            if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
                ans.push(compactObject(value));
                return ans;
            }
            else {
                ans.push(value)
                return ans;
            }
        }, [])
    }
    else if (typeof obj === 'object' && obj !== null) {
        let obj2 = Object.entries(obj);
        return obj2.filter((value) => {
            return Boolean(value[1]);
        }).reduce((ans, [key, value]) => {
            ans[key] = value;
            if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
                ans[key] = compactObject(value);
                return ans;
            }
            else {
                return ans;
            }
        }, {})
    }
    else {
        return obj
    }
};

console.log(compactObject([12, false, undefined, 0, { "1": [false, 4] }]));
console.log(compactObject({ "1": 43, "2": 0, "3": false }));
console.log(compactObject({ "a": null, "b": [false, 1] }));

// console.log(typeof [12, 43, 54]);