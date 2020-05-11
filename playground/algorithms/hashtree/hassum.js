/*
二叉树的遍历，找到是否其中一条根节点到叶子节点的路径和为sum
hasSum(root,sum)
 */

/**
 * 
 *root {
   left
   right
   value
 }
 */
function hasSum(rt, target) {
  let sum = 0
  return cal(rt, sum, target)
}

function cal(rt, sum, target) {
  if (!rt) {
    return sum === target
  }
  sum += rt.value
  return cal(rt.left, sum, target) || cal(rt.right, sum, target)
}



const rt = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4
      },
      right: {
        value: 2
      }
    },
    right: {
      value: -1,
      left: {
        value: -2,
        right: {
          value: 1,
        },
        left: {
          value: 9
        }
      },
      right: {
        value: 3
      }
    }
  },
  right: {
    value: 3
  }
}

const res = hasSum(rt, 8)
console.log(res);
