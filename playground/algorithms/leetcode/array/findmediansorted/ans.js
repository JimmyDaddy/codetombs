/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if ((!nums1 && !nums2) || (nums1.length < 1 && nums2.length < 1)) {
    return 0;
  }
  if (nums1 && nums1.length > 1 && !nums2) {
    return getMedian(nums1);
  }
  if (nums2 && nums2.length > 1 && !nums1) {
    return getMedian(nums2);
  }

  // sort
  return getMedian(nums1.concat(nums2).sort((a, b) => a-b));
};

var getMedian = function(arr) {
  const length = arr.length;
  if (length % 2 === 0) {
    return (arr[length/2-1] + arr[length/2])/2;
  } else {
    return arr[Math.floor(length/2)];
  }
}

const nums1 = [1, 2];
const nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2))
