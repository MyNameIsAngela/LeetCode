/*
 * @lc app=leetcode.cn id=53 lang=java
 *
 * [53] 最大子序和
 */

// @lc code=start
class Solution {
    public int maxSubArray(int[] nums) {
        // int ans = Integer.MIN_VALUE;
        // for(int i = 0; i < nums.length; i++){
        //     int total = 0;
        //     int max = Integer.MIN_VALUE;
        //     for(int j = i; j < nums.length; j++){
        //         total += nums[j];
        //         max = total > max ? total : max;
        //     }
        //     ans = ans > max ? ans : max;
        // }
        // return ans;
        
        int ans = Integer.MIN_VALUE;
        int last_ans = Integer.MIN_VALUE;
        if (nums.length == 0) {
            //throw exception
        }
        ans = nums[0];
        last_ans = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int cur_ans = Math.max(last_ans + nums[i], nums[i]);
            ans = Math.max(cur_ans, ans);
            last_ans = cur_ans;
        }
        return ans;
    }
}
// @lc code=end

