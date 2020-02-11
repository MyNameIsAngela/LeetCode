/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 先找中位的位置
    let centerIndex = [];
    let totalLength = nums1.length + nums2.length;
    if (totalLength % 2) {
      centerIndex[0] = (totalLength + 1) / 2 - 1;
    } else {
      centerIndex[0] = totalLength / 2 - 1;
      centerIndex[1] = totalLength / 2;
    }
    // console.log('centerIndex', centerIndex);
    // 再排序，只要找到中位位置即可
    let curIndex = 0;
    let curNum = 0
    let ans = 0;
  
    if(!nums1.length){
      if (centerIndex.length === 1) {
        ans = nums2[centerIndex[0]];
      }
      if (centerIndex.length === 2) {
        ans = (nums2[centerIndex[0]]+nums2[centerIndex[1]])/2;
      }
      return ans;
    }
  
    if(!nums2.length){
      if (centerIndex.length === 1) {
        ans = nums1[centerIndex[0]];
      }
      if (centerIndex.length === 2) {
        ans = (nums1[centerIndex[0]]+nums1[centerIndex[1]])/2;
      }
      return ans;
    }
  
    while(nums1.length && nums2.length){
      if (nums1[0] <= nums2[0]) {
        curNum = nums1.shift();
      } else if (nums1[0] > nums2[0]) {
        curNum = nums2.shift();
      }
      if (curIndex == centerIndex[0]) {
        ans = curNum;
      }
      if (curIndex == centerIndex[1]) {
        ans = (ans + curNum) / 2;
      }
      curIndex++;
    }
  
    if (curIndex == centerIndex[0]) {
      ans = (nums1 && nums1.shift() || nums2 && nums2.shift());
      if(centerIndex.length === 2){
        ans = (ans + (nums1 && nums1.shift() || nums2 && nums2.shift())) / 2;
      }
    }
    if (curIndex == centerIndex[1]) {
      ans = (ans + (nums1 && nums1.shift() || nums2 && nums2.shift())) / 2;
    }
  
    return ans;
  };
  
  
  // console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
  // console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
  // console.log(findMedianSortedArrays([], [1])); // 1
  // console.log(findMedianSortedArrays([], [2,3])); // 2.5
  // console.log(findMedianSortedArrays([2,2,2], [2,2,2,2])); // 2
  console.log(findMedianSortedArrays([1], [2,3,4])); // 2.5
  
// @lc code=end

