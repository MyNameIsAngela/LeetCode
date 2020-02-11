/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和 27min
 * 43/43 cases passed (64 ms)
 * Your runtime beats 84.34 % of javascript submissions
 * Your memory usage beats 47.22 % of javascript submissions (35.2 MB)
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length == 0) {
    return 0;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (j == i) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
      }
      if (i == triangle.length - 1) {
        ans = Math.min(ans, triangle[i][j]);
      }
    }
  }
  for (let j = 0; j < triangle.length; j++) {
    ans = Math.min(ans, triangle[triangle.length - 1][j]);
  }
  return ans;
};
// @lc code=end

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log("end");
