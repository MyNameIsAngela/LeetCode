/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */

function is_valid_time(time) {
  return (
    time.hour < 12 && time.hour >= 0 && time.minute < 60 && time.minute >= 0
  );
}

function _readBinaryWatch(choose, candidate, num, position, ans) {
  if (position > candidate.length) {
    return;
  }
  if (choose.length === num) {
    let time = {
      hour: 0,
      minute: 0
    };
    for (let i = 0; i < num; i++) {
      if (choose[i] > 90) {
        time.hour += choose[i] % 90;
      } else {
        time.minute += choose[i];
      }
    }
    if (is_valid_time(time)) {
      if (time.minute < 10) {
        time.minute = "0" + time.minute;
      }
      ans.push(`${time.hour}:${time.minute}`);
    }
    return;
  } else {
    choose.push(candidate[position]);
    _readBinaryWatch(choose, candidate, num, position + 1, ans);
    choose.pop();
    _readBinaryWatch(choose, candidate, num, position + 1, ans);
  }
}

var readBinaryWatch = function(num) {
  if (num === 0) {
    return ["0:00"];
  }
  let ans = [];
  let candidate = [91, 92, 94, 98, 1, 2, 4, 8, 16, 32];
  _readBinaryWatch([], candidate, num, 0, ans);
  return ans;
};
// @lc code=end

console.log(readBinaryWatch(2)); // true
console.log("Hello");
