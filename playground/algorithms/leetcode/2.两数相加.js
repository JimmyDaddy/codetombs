/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//   return numToList(listToNum(l1) + listToNum(l2))
// };

// var listToNum = function(l) {
//   let p = 1
//   let num = 0
//   let tmp = l
//   while(tmp) {
//     num = num + tmp.val * p
//     p = p * 10
//     tmp = tmp.next
//   }
//   return num
// }

// var numToList = function(num) {
//   // if (num > Number.MAX_SAFE_INTEGER) {
//   //   const numArr = num.toString().split('')
//   //   const length = numArr.length
    
//   //   let it = {
//   //     val: Number(numArr[length - 1]),
//   //     next: null
//   //   }  
//   //   let res = it
//   //   for (let index = numArr.length - 1; index > 0; index--) {
//   //     const element = numArr[index];
//   //     let tmp = {}
//   //     tmp.val = Number(element)
//   //     tmp.next = null
//   //     it.next = tmp
//   //     it = tmp
//   //   }
//   //   return res
//   // }
//   let it = {
//     val: num % 10,
//     next: null
//   }  
//   num = num / 10
//   let res = it
//   while(num >= 1) {
//     let tmp = {}
//     tmp.val = Math.floor(num % 10)
//     tmp.next = null
//     it.next = tmp
//     it = tmp
//     num = num / 10    
//   }
//   return res
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1Cur = l1
  let l2Cur = l2
  const firstSum = l1Cur.val + l2Cur.val
  let it = {}
  it.val = Math.floor(firstSum % 10)
  let p = Math.floor(firstSum/10)
  let res = it
  l1Cur = l1Cur.next
  l2Cur = l2Cur.next
  while (l1Cur && l2Cur) {
    let tmp = {}
    const sum = l1Cur.val + l2Cur.val + p
    tmp.val = Math.floor(sum % 10)
    p = Math.floor(sum/10)
    tmp.next = null
    it.next = tmp
    it = tmp
    l1Cur = l1Cur.next
    l2Cur = l2Cur.next
  }
  if (l1Cur) {
    it.next = l1Cur
  }
  it.next = l1Cur || l2Cur || null    
  return res
};

console.log(addTwoNumbers(
  {
    val: 5,
  },
  {
    val: 5,
  }
))

// @lc code=end

