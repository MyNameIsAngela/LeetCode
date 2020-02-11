/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和 14min
 * 61/61 cases passed (72 ms)
 * Your runtime beats 62.22 % of javascript submissions
 * Your memory usage beats 97.5 % of javascript submissions (35.3 MB)
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  let m = grid[0].length;
  let n = grid.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        arr[j] = grid[i][j];
      } else if (i == 0) {
        arr[j] = grid[i][j] + arr[j - 1];
      } else if (j == 0) {
        arr[j] = grid[i][j] + arr[j];
      } else {
        arr[j] = grid[i][j] + Math.min(arr[j], arr[j - 1]);
      }
    }
  }
  return arr[m - 1];
};
// @lc code=end
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log("end");