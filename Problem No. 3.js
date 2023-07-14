//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

    function print(arr, n) {
        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 1) {
                console.log(arr[i]);
            }
        }
        
    }


    console.log(print([1, 2, 3,54 ,5,7,9,9,0,0,6,5,4,46,4, 5]));