/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 思路：使用桶排序方法，然后将连续数据拼接
// 思路错误: 若没有重复数据，不可拼接 [[1,4],[5,6]] wrong:[[1,6]] expected:[[1,4],[5,6]]
var merge = function (intervals) {
  if (!intervals || intervals.length === 0) return [];
  intervals.sort((a,b)=> a[0]-b[0]);
  let merged = [];
  intervals.forEach((item) => {
      if(merged.length===0) {
        merged.push(item);
      } else {
          if(item[0] <= merged[merged.length -1][1]){
            if(item[1] >= merged[merged.length -1][1]){
                merged[merged.length -1][1]=item[1];
            }
          }else {
            merged.push(item);
          }
      }
  });
  return merged;
};
