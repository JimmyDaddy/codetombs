var removeElement = function(nums, val) {
  // 
  if (val === null || val === undefined || !nums || nums.length <= 0) {
    return 0;
  }
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // 相当于生成新数组
      nums[j] = nums[i];
      j ++ ;
    }
  }
  return j;
};

const arr = [0,1,2,2,3,0,4,2];
const val = 2;
const res = removeElement(arr, val);

const arr1 = [3,2,2,3];
const val1 = 3;
const res1 = removeElement(arr1, val1);

console.log('====================================');
console.log(res, arr, res1, arr1);
console.log('====================================');

