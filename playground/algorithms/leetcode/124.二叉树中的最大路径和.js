/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  // 不能使用全局变量，所以使用引用方式
  let maxNum = {
    val: Number.NEGATIVE_INFINITY, // 设置初始值为最小数，js Math.max() 中如果参数含有非数字则会返回非数字
  }
  getMax(root, maxNum)
  return maxNum.val
};

const getMax = function(root, maxNum) {
  // 空节点则返回0，js Math.max() 中如果参数含有非数字则会返回非数字，所以返回 0
  if (root === undefined || root === null) {
    return 0
  }
  // 计算左右节点最大值
  const left = Math.max(getMax(root.left, maxNum),0)
  const right = Math.max(getMax(root.right, maxNum), 0)
  // 得到当前最大值
  maxNum.val = Math.max(maxNum.val, left + right + root.val)
  // 返回当前包含本节点的最大值
  return root.val + Math.max(left, right)
}

// @lc code=end

