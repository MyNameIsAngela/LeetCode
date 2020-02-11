/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesisCandidate(choosed, n, left, result) {
  if (choosed.length === n) {
    if (left === 0) {
      result.push(choosed);
    }
  } else {
    if (left < n / 2) {
      generateParenthesisCandidate(choosed + "(", n, left + 1, result);
    }
    if (left > 0) {
      generateParenthesisCandidate(choosed + ")", n, left - 1, result);
    }
  }
}

var generateParenthesis = function(n) {
  if (n == 0) return [];
  let result = [];
  generateParenthesisCandidate("", n * 2, 0, result);
  return result;
};
// @lc code=end

console.log(generateParenthesis(3)); //
console.log("Hello");
