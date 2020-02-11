/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 103/103 cases passed (88 ms)
// Your runtime beats 88.06 % of javascript submissions
// Your memory usage beats 62.64 % of javascript submissions (37.1 MB)
function caluLongestPalindrome(str, left, right) {
  if (
    left < 0 ||
    right < 0 ||
    left >= str.length||
    right >= str.length
  ) {
    // throw exception
  }
  while (
    left >= 0 &&
    right < str.length &&
    str.charAt(left) == str.charAt(right)
  ) {
    left--;
    right++;
  }
  return [left + 1, right];
}

var longestPalindrome = function(s) {
  if (s.length == 0) return "";
  let candidate = s.charAt(0);
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    tmp = caluLongestPalindrome(s, i, i);
    candidate = candidate.length < tmp[1]-tmp[0] ? s.substring(tmp[0], tmp[1]) : candidate;
    if (i + 1 < s.length) {
      tmp = caluLongestPalindrome(s, i, i + 1);
      candidate = candidate.length < tmp[1]-tmp[0] ? s.substring(tmp[0], tmp[1]) : candidate;
    }
  }
  return candidate;
};

// 103/103 cases passed (104 ms)
// Your runtime beats 69.13 % of javascript submissions
// Your memory usage beats 33.25 % of javascript submissions (41.7 MB)
// var longestPalindrome = function(s) {
//     let last_index = [0];
//     let curr_index = [];
//     let candidate = s.length > 0 ? s.substring(0,1) : "";
//     for(let i = 1; i<s.length; i++){
//         curr_index[0]= i;
//         if(s.charAt(i) == s.charAt(i -1)){
//             curr_index[1]= i - 1;
//             candidate = candidate.length < 2 ? s.substring(i -1, i +1) : candidate;
//         }
//         for(let j = 0; j < last_index.length; j++){
//             if(last_index[j] > 0 && s.charAt(i) == s.charAt(last_index[j] -1)){
//                 curr_index.push(last_index[j] -1);
//                 if(i - last_index[j] + 2 > candidate.length){
//                     candidate = s.substring(last_index[j] -1, i +1);
//                 }
//             }
//         }
//         last_index = curr_index;
//         curr_index = [];
//     }
//     return candidate;
// };
// @lc code=end

console.log(longestPalindrome("cbbd"));
console.log("end");
