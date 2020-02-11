/*
 * @lc app=leetcode.cn id=121 lang=java
 *
 * [121] 买卖股票的最佳时机
 * 200/200 cases passed (2 ms)
 * Your runtime beats 60.96 % of java submissions
 * Your memory usage beats 65.9 % of java submissions (37.2 MB)
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        // 第一次解法通过 但可优化
        // if(prices.length < 2){
        //     return 0;
        // }
        // int min = prices[0];
        // int ans = 0;
        // for(int i = 1; i < prices.length; i++){
        //     min = Math.min(min, prices[i - 1]);
        //     ans = Math.max(ans, prices[i] - min);
        // }
        // return ans;

        int min = Integer.MAX_VALUE;
        int ans = 0;
        for(int i = 0; i < prices.length; i++){
            if(min > prices[i]){
                min = prices[i];
            } else if(ans < prices[i] - min){
                ans = prices[i] - min;
            }
        }
        return ans;
    }
}
// @lc code=end

