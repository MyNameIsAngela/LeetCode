/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// function match(s, rule, sPoint, rPoint) {
//   // if(sPoint == s.length && (pPoint == p.length || (pPoint == p.length - 1 && p[pPoint] == '*'))){
//   //     return true;
//   // } else if (sPoint == s.length || pPoint == p.length) {
//   //     return false;
//   // }
//   // if(p[pPoint] == '.' || s[sPoint] == p[pPoint]){
//   //     return match(s,p,sPoint + 1,pPoint + 1);
//   // } else if(p[pPoint] == '*'){
//   //     sPoint --;
//   //     let before = p[pPoint] == '.' ? s[sPoint] : p[pPoint - 1];
//   //     let endPoint = sPoint;
//   //     let flag = false;
//   //     while(s.charAt(endPoint) == before){
//   //         endPoint ++;
//   //     }
//   //     while(sPoint != endPoint){
//   //         flag = flag || match(s, p, sPoint, pPoint + 1);
//   //         sPoint ++ ;
//   //     }
//   //     return flag;
//   // }
//   // return false;
//   if (sPoint == s.length && rPoint == rule.length) {
//     return true;
//   } else if (rPoint == rule.length) {
//     return false;
//   } else if (rule[rPoint].length == 1 && rule[rPoint] == ".") {
//     return match(s, rule, sPoint + 1, rPoint + 1);
//   } else if (rule[rPoint].length == 1 && s[sPoint] == rule[rPoint]) {
//     return match(s, rule, sPoint + 1, rPoint + 1);
//   } else if (rule[rPoint].length == 2) {
//     let alpha = rule[rPoint].charAt(0);
//     let endPoint = sPoint;
//     let flag = false;
//     while (s.charAt(endPoint) == alpha) {
//       endPoint++;
//     }
//     if (sPoint == endPoint) {
//       return match(s, rule, sPoint, rPoint + 1);
//     }
//     while (sPoint != endPoint) {
//       flag = flag || match(s, rule, sPoint, rPoint + 1);
//       sPoint++;
//     }
//     return flag;
//   }
//   return false;
// }

// var isMatch = function(s, p) {
//   let rule = [];
//   for (let i = 0; i < p.length; i++) {
//     if (p[i] == "*") {
//       rule[rule.length - 1] += "*";
//     } else {
//       rule.push(p[i]);
//     }
//   }
//   return match(s, rule, 0, 0);
// };

// function match(s, p, sPoint, pPoint) {
//     if (pPoint == p.length) {
//         return sPoint == s.length;
//     }
//     if ((pPoint + 1) < p.length && p[pPoint + 1] == '*') {
//         let is_match = false
//         if (sPoint < s.length && (p[pPoint] == '.' || p[pPoint] == s[sPoint])) {
//             is_match |= match(s, p, sPoint + 1, pPoint)
//         }
//         is_match |= match(s, p, sPoint, pPoint + 2);
//         return is_match;
//     } else if (p[pPoint] == '.' || p[pPoint] == s[sPoint]) {
//         return match(s, p, sPoint + 1, pPoint + 1)
//     } else {
//         return false;
//     }
// }

function match(s, p, sPoint, pPoint, cache) {
    if(cache[pPoint * s.length + sPoint] != undefined){
        return cache[pPoint * s.length + sPoint];
    }
  if (pPoint == p.length) {
    return sPoint == s.length;
  }

  let isMatch = false;
  if (pPoint + 1 < p.length && p[pPoint + 1] == "*") {
    if ((sPoint < s.length && p[pPoint] == ".") || s[sPoint] == p[pPoint]) {
      isMatch |= match(s, p, sPoint + 1, pPoint, cache);
    }
    if (isMatch == false) {
        isMatch |= match(s, p, sPoint, pPoint + 2, cache);
    }
  } else if (p[pPoint] == "." || s[sPoint] == p[pPoint]) {
    isMatch = match(s, p, sPoint + 1, pPoint + 1, cache);
  }
  cache[pPoint * s.length + sPoint] = isMatch;
  return isMatch;
}

var isMatch = function(s, p) {
  let cache = []; // map.length == p.length * s.length
  return match(s, p, 0, 0, cache);
};
// @lc code=end
console.log("Hello");
console.log(isMatch("ab", ".*")); // true
// console.log(isMatch("ab",".*c")); // false
// console.log(isMatch("aaa","a*a")); // true
// console.log(isMatch("aaa", "ab*a*c*a")); // true
