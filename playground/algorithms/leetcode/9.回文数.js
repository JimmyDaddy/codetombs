/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   if (x < 0) {
//     return false
//   }
//   if ((0 <= x && x < 10)) {
//     return true
//   }
//   const numStrArr = x.toString().split("")
//   let left = 0
//   let right = numStrArr.length - 1
//   while (left < right) {
//     if(numStrArr[left] !== numStrArr[right]){
//       return false
//     }
//     left += 1
//     right -= 1
//   }
//   return true

// };

var isPalindrome = function(x) {
 
  if (0 <= x && x < 10) {
    return true
  }

  if (x < 0 || x % 10 === 0) {
    return false
  }

  if (x > 10 && x <= 99) {
    return x % 10 === Math.floor(x / 10)
  }

  let reverseNum = 0
  while (reverseNum < x) { 
    console.log(reverseNum, x);
    reverseNum = reverseNum * 100/10 + x*10%100/10
    x = x*10 / 100
  }  
  console.log(reverseNum, x);  
  
  if (reverseNum === x || x === reverseNum*10 / 100) {
    return true
  }
  
  return false

};
console.log(isPalindrome(1001));

// @lc code=end

