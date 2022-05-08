/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let i = 0;
  while (start !== end && i <= end) {
    if(nums[i]===0){
        nums[i] = nums[start];
        nums[start] = 0;
        start++;
        i++;
    } else if(nums[i]===2){
        nums[i] = nums[end];
        nums[end] = 2;
        end --;
    } else {
        i++;
    }
  }
  return nums;
};
// console.log(sortColors([2,0,2,1,1,0]));
// console.log(sortColors([2,0,1]));
// console.log(sortColors([1,2,0]));

// @lc code=end

