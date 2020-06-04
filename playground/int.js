/* 
 实现函数 el 输出元素
 输出结果如下：
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>
*/
const ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 
  1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])

const ulRoot = ul.render()
console.log(ulRoot)

/**
 * 批量请求函数

multiRequest(urls,maxNum)

1. 批量请求函数，最大并发数maxNum。
2. 每当有一个请求返回，就留下一个空位，可以增加新的请求。
3. 所有请求完成后，结果按照urls里面的顺序依次打出。
 */

/*
二叉树的遍历，找到是否其中一条根节点到叶子节点的路径和为sum
hasSum(root,sum)
 */


 /**
  实现任务调度 Scheduler
  输出结果为：
  3 4 2 1
  */

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler() 
const addTask = (time, order) => {
  scheduler.add(
      () => timeout(time), order
  ).then(() =>console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')


/**
 * 求非空二叉树中的最大路径和
 * maxPathSum(root)
示例：
       1
      / \
     2   3

最大路径和: 6

  -10
   / \
  9  20
    /  \
   15   7

最大路径和: 42

 */
