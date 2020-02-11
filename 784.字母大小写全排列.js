/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */

function letterCasePermutation_helper(position, target_string, results) {
  if (position == target_string.length) {
    results.push(target_string.join(""));
    return;
  }
  if (
    target_string[position].toLowerCase() !=
    target_string[position].toUpperCase()
  ) {
    target_string[position] = target_string[position].toLowerCase();
    letterCasePermutation_helper(position + 1, target_string, results);
    target_string[position] = target_string[position].toUpperCase();
    letterCasePermutation_helper(position + 1, target_string, results);
  } else {
    letterCasePermutation_helper(position + 1, target_string, results);
  }
}

var letterCasePermutation = function(S) {
  let results = [];
  letterCasePermutation_helper(0, S.split(""), results);
  return results;
};
// @lc code=end

console.log(letterCasePermutation("a1b2")); // ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log("Hello");
