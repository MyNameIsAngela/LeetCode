/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 * 62/62 cases passed (64 ms)
 * Your runtime beats 87.41  % of javascript submissions
 * Your memory usage beats 37.11 % of javascript submissions (34.9 MB)
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
let map = [];
  for (let i = 0; i < m; i++) {
    map[i] = [];
    for (let j = 0; j < n; j++) {
        if(i == 0 || j == 0){
            map[i][j] = 1;
        } else {
            map[i][j] = map[i - 1][j] + map[i][j - 1];
        }
    }
  }
  return map[m-1][n-1];
};
// @lc code=end

console.log(uniquePaths(3, 2));
console.log("end");
