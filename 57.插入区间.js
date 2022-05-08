/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 *
 */
var insert = function (intervals, newInterval) {
  let ans = [];
  let merged = false;
  intervals.forEach((item) => {
    if (item[1] < newInterval[0]) {
      ans.push(item);
    } else if (item[0] > newInterval[1]) {
      if (!merged) {
        ans.push(newInterval);
        merged = true;
      }
      ans.push(item);
    } else {
        newInterval = [
        Math.min(newInterval[0], item[0]),
        Math.max(newInterval[1], item[1]),
      ];
    }
  });
  if (!merged) {
    ans.push(newInterval);
    merged = true;
  }
  return ans;
};
// @lc code=end
