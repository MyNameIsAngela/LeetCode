/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 * 258/258 cases passed (68 ms)
 * Your runtime beats 75.07 % of javascript submissions
 * Your memory usage beats 55.02 % of javascript submissions (35.1 MB)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length == 0) {
    return 0;
  } else if (parseInt(s.substring(0, 1)) == 0) {
    return 0;
  } else if (s.length == 1) {
    return 1;
  }
  let lastLast = 1;
  let last = lastLast;
  let temp = 0;
  for (let i = 1; i < s.length; i++) {
    let num = parseInt(s.substring(i - 1, i + 1));
    if (parseInt(s.substring(i, i + 1)) == 0) {
      if (
        parseInt(s.substring(i - 1, i)) == 0 ||
        parseInt(s.substring(i - 1, i)) >= 3
      ) {
        return 0;
      } else {
        last = lastLast;
      }
    } else if (num > 10 && num <= 26) {
      temp = last;
      last = lastLast * 2 + last - lastLast;
      lastLast = temp;
    } else {
      lastLast = last;
    }
  }
  return last;
};
// @lc code=end

console.log(numDecodings("12120"));
console.log("end");
