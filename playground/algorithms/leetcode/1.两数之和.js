/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     if (!nums || nums.length < 2) {
//       return []
//     }
//     for (let i = 0; i < nums.length; i++) {
//       const outter = nums[i];
//       for (let j = 0; j < nums.length; j++) {
//         if (j !== i) {
//           const inner = nums[j];
//           if (inner + outter === target) {
//             return [i, j]
//           }
//         }
//       }
//     }
//     return []
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsLong = nums.length;
  while(numsLong > 1) {
      let lastNums = nums.pop();
      if (nums.indexOf(target - lastNums) > -1) {
          //重点
          let shows = nums.indexOf(target - lastNums);
          return [shows, nums.length]
      }
      lastNums--
  }
};

// @lc code=end

