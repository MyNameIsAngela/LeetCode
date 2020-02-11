/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

function caluculate(n) {
    if (n == 1|| n == 2){
        return n;
    } else {
        return caluculate(n -1) + caluculate(n-2);
    }
};

var climbStairs = function(n) {
    if(n <= 0){
        // System.out
    }
    if (n == 1|| n == 2){
        return n;
    } 
    let last = 2;
    let lastLast = 1;
    let ans = 0;
    for(let i = 3; i <= n; i++){
        ans = last + lastLast; 5
        last = ans; 3
        lastLast = last; 2
    }
    return ans;
};
// @lc code=end

climbStairs(4)

