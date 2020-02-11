/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
    // public int caluculate(int n) {
    //     if (n == 1|| n == 2){
    //         return n;
    //     } else {
    //         return caluculate(n -1) + caluculate(n-2);
    //     }
    // }

    public int climbStairs(int n) {
        if(n <= 0){
            // System.out
        }
        if (n == 1|| n == 2){
            return n;
        } 
        int last = 2;
        int lastLast = 1;
        int ans = 0;
        for(int i = 3; i <= n; i++){
            ans = last + lastLast; 
            lastLast = last; 
            last = ans; 
        }
        return ans;
    }
}
// @lc code=end

