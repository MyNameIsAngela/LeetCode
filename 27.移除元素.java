/*
 * @lc app=leetcode.cn id=27 lang=java
 *
 * [27] 移除元素
 * 113/113 cases passed (0 ms)
 * Your runtime beats 100 % of java submissions
 * Your memory usage beats 56.91 % of java submissions (35.2 MB)
 */

// @lc code=start
class Solution {
    public int removeElement(int[] nums, int val) {
        int i = nums.length > 0 ? 0 : 1;
        for(int n:nums){
            if( n!=val){
                nums[i++] = n;
            }
        }
        return i;
    }
}
// @lc code=end

