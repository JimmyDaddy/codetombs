/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// // @lc code=start
// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
  
//   if(0<= Number(x) && Number(x) < 10) {    
//     return x
//   }
//   const numStrArr = x.toString().split("")
//   let prefix = ''
//   if (numStrArr[0] === '-' || numStrArr === '+') {
//     prefix = numStrArr[0]
//     numStrArr.shift()
//   }
//   const res = numStrArr.reverse()
//   const resArr = prefix + res.join("")
//   const num = Number(resArr)
    
//   if (num <= Math.pow(-2, 31) || num >= Math.pow(2, 31) - 1) {
//     return 0
//   }
//   return num
// };
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
  if(0<= Number(x) && Number(x) < 10) {    
    return x
  }
  const numStrArr = x.toString().split("")
  let prefix = ''
  if (numStrArr[0] === '-' || numStrArr === '+') {
    prefix = numStrArr[0]
    numStrArr.shift()
  }
  let left = 0
  let right = numStrArr.length - 1
  while (left < right) {
    const tmpLeft = numStrArr[left]
    const tmpRight = numStrArr[right]
    numStrArr[left] = tmpRight
    numStrArr[right] = tmpLeft
    left += 1
    right -= 1
  }
  const resArr = prefix + numStrArr.join("")
  const num = Number(resArr)
    
  if (num <= Math.pow(-2, 31) || num >= Math.pow(2, 31) - 1) {
    return 0
  }
  return num
};

// @lc code=end

