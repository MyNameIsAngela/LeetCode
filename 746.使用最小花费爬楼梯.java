/*
 * @lc app=leetcode.cn id=746 lang=java
 *
 * [746] 使用最小花费爬楼梯
 * 276/276 cases passed (1 ms)
 * Your runtime beats 100 % of java submissions
 * Your memory usage beats 5.56 % of java submissions (41.1 MB)
 * 思路：每一步都是走到前一步或前两步中的最小值。
 */

// @lc code=start
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        if(cost.length == 0 || cost.length == 1){
            return 0;
        } else if (cost.length == 2){
            return Math.min(cost[0], cost[1]);
        } 
        int lastLast = cost[0];
        int last = cost[1];
        int temp = 0;
        for(int i = 2; i< cost.length; i++){
            temp = lastLast;
            lastLast = last;
            last = Math.min(cost[i]+temp , cost[i]+last);
        }
        return Math.min(last, lastLast);
    }
}
// @lc code=end

