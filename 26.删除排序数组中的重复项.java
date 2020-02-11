/*
 * @lc app=leetcode.cn id=26 lang=java
 *
 * [26] 删除排序数组中的重复项
 * 161/161 cases passed (1 ms)
 * Your runtime beats 100 % of java submissions
 * Your memory usage beats 79.41 % of java submissions (39.7 MB)
 */

// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0){
            return 0;
        } else if (nums.length == 1){
            return 1;
        }
        int disPointer = 0; // 位移指针
        int prev = nums[0]; // 上一个数字
        for(int i = 1; i < nums.length; i++){
            int cur = nums[i];
            if(cur == prev){
                disPointer++;
            } else if (cur != prev){
                prev = cur;
                nums[i-disPointer] = cur;
            }
        }
        return nums.length - disPointer;
    }
}
// @lc code=end

