/*
 * @lc app=leetcode.cn id=198 lang=java
 *
 * [198] 打家劫舍
 * 69/69 cases passed (0 ms)
 * Your runtime beats 100 % of java submissions
 * Your memory usage beats 18.88 % of java submissions (34.3 MB)
 * TODO GZ不知道从哪里优化
 */

// @lc code=start
class Solution {
    public int rob(int[] nums) {
        if(nums.length == 0){
            return 0;
        } else if (nums.length == 1){
            return nums[0];
        } else if (nums.length == 2){
            return Math.max(nums[0], nums[1]);
        } 
        int lastLast = nums[0];
        int last = Math.max(nums[0], nums[1]);
        int temp = 0;
        int ans = nums[1];
        for(int i = 2; i < nums.length; i++){
            temp = lastLast;
            lastLast = last;
            last = Math.max(lastLast, temp + nums[i]);
            ans = Math.max(ans, last);
        }
        return ans;
    }
}
// @lc code=end

