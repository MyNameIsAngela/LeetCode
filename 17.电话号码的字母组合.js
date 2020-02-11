/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合 23min

 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

// 25/25 cases passed (100 ms)
// Your runtime beats 5.26 % of javascript submissions
// Your memory usage beats 31.55 % of javascript submissions (33.9 MB)
// let ans = [];

function calculate(combination, lastDigits) {
  if (lastDigits.length === 0) {
    ans.push(combination);
  } else {
    let letter = lastDigits.substring(0, 1);
    let group = [];
    switch (letter) {
      case "2":
        group = ["a", "b", "c"];
        break;
      case "3":
        group = ["d", "e", "f"];
        break;
      case "4":
        group = ["g", "h", "i"];
        break;
      case "5":
        group = ["j", "k", "l"];
        break;
      case "6":
        group = ["m", "n", "o"];
        break;
      case "7":
        group = ["p", "q", "r", "s"];
        break;
      case "8":
        group = ["t", "u", "v"];
        break;
      case "9":
        group = ["w", "x", "y", "z"];
        break;
      default:
        break;
    }
    for(let i = 0; i< group.length; i++){
        calculate(combination+group[i],lastDigits.substring(1));
    }
  }
}

var letterCombinations = function(digits) {
  if (digits.length == 0) {
    return [];
  }
  ans = [];
  calculate("", digits);
  return ans;
};

// * 25/25 cases passed (56 ms)
// * Your runtime beats 91.49 % of javascript submissions
// * Your memory usage beats 21.64 % of javascript submissions (34.1 MB)
function calculate(arr, group){
    let newArr = [];
    for(let j = 0; j<group.length; j++){
        if(arr.length === 0){
            newArr.push(group[j]);
        } else {
            for(let i = 0; i<arr.length; i++){
                newArr.push(arr[i]+group[j]);
            }
        }
    }
    return newArr;
}

var letterCombinations = function(digits) {
    if(digits.length == 0){
        return [];
    }
    let ans = [];
    for(let i = 0; i<digits.length; i++){
        let group = [];
        switch(digits[i]){
            case '2': group = ['a','b','c']; break;
            case '3': group = ['d','e','f']; break;
            case '4': group = ['g','h','i']; break;
            case '5': group = ['j','k','l']; break;
            case '6': group = ['m','n','o']; break;
            case '7': group = ['p','q','r','s']; break;
            case '8': group = ['t','u','v']; break;
            case '9': group = ['w','x','y','z']; break;
            default: break;
        }
        ans = calculate(ans, group);
    }
    return ans;
};
// @lc code=end

console.log(letterCombinations("2")); // true
console.log("Hello");
