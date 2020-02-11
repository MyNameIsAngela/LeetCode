/*
 * @lc app=leetcode.cn id=35 lang=java
 *
 * [35] 搜索插入位置
 * 62/62 cases passed (0 ms)
 * Your runtime beats 100 % of java submissions
 * Your memory usage beats 72.9 % of java submissions (38.7 MB)
 * 提升方法：使用二分查找法。
 */

// @lc code=start
class Solution {
    public int searchInsert(int[] nums, int target) {
        if(nums.length == 0 || nums[0]>target){
            return 0;
        } else if(nums[nums.length - 1]<target){
            return nums.length;
        }
        int i = 0;
        for(int n: nums){
            if(n < target){
                i++;
            }
        }
        return i;

        // 二分查找解法
        // int low = 0, high = nums.length-1;
        // while(low<=high){
        //     int mid = (low+high)/2;
        //     if(nums[mid] == target) return mid;
        //     else if(nums[mid] > target) high = mid-1;
        //     else low = mid+1;
        // }
        // return low;
    }
}
// @lc code=end

