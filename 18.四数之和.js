/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// 耗时45min 未AC 单测覆盖率 147/282
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums < 4) return [];
    let ans = [];
    nums.sort((a, b) => a > b);
    for (let p1 = 0, p2 = nums.length - 1; p1 !== p2;) {
        let start = p1 + 1;
        let end = p2 - 1;
        var cur = null;
        while (start < end) {
            cur = nums[p1] + nums[start] + nums[end] + nums[p2];
            if (cur === target) {
                ans.push([nums[p1], nums[start], nums[end], nums[p2]]);
                start++;
            } else if (cur > target && end - 1 > start) {
                end--;
            } else if (cur < target && start + 1 < end) {
                start++;
            } else {
                break;
            }
        }
        if (Math.abs(nums[p1] - nums[p1 + 1]) <Math.abs(nums[p2] - nums[p2 - 1])) {
            p1++;
        } else if (Math.abs(nums[p1] - nums[p1 + 1]) == Math.abs(nums[p2] - nums[p2 - 1])) {
            if (cur > target) {
                p2--;
            } else {
                p1++;
            }
        } else {
            p2--;
        }
    }
    return ans;
};
// @lc code=end

fourSum([1, 0, -1, 0, -2, 2], 0);
// fourSum([-3, -1, 0, 2, 4, 5], 2);
