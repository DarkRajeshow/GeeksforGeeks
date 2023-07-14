
//User function Template for javascript

/**
 * @param {number} N
 * @return {number[]}
 */
 class Solution {
    getTable(N) {
        let arr = []
      for(let i = 1; i <=10 ; i++){
          arr.push(N*i)
      }
      return arr.join(" ")
    }
  }
  let st = new Solution()
  console.log(st.getTable(12));