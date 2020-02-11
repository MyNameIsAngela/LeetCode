/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 * 43/43 cases passed (60 ms)
 * Your runtime beats 97.06 % of javascript submissions
 * Your memory usage beats 59.6 % of javascript submissions (35.3 MB)
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (
    obstacleGrid.length == 0 ||
    obstacleGrid[0].length == 0 ||
    obstacleGrid[0][0] == 1
  ) {
    return 0;
  }
  let m = obstacleGrid[0].length;
  let n = obstacleGrid.length;
  let arr = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        arr[j] = 0;
      } else if (i == 0 && j == 0) {
        arr[j] = obstacleGrid[i][j] == 0 ? 1 : 0;
      } else if (i == 0 ) {
        arr[j] = arr[j - 1] == 0 ? 0 : 1;
      } else if (j == 0) {
        arr[j] = arr[j] == 0 ? 0 : 1;
      } else {
        arr[j] += arr[j-1];
      }
    }
  }
  return arr[m - 1];
};
// @lc code=end

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log("end");
