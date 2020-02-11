/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let MAX_VALUE = 2147483647 // why this number
    if (nums.length < 3) return 0; // 
    nums.sort((a, b) => a - b);

    // let near = 10000000;
    let returnNum = null;
    nums.forEach((item, index) => {
        let cur = item;
        let start = 0;
        let end = nums.length - 1;

        while (start < index && end > index && start !== end) {
            let total = cur + nums[start] + nums[end];
            let abs = Math.abs(total - target);
            if (total < target) {
                if (abs < near) {
                    returnNum = total;
                    near = abs;
                }
                start++;
            }

            else if (total >= target) {
                if (abs < near) {
                    returnNum = total;
                    near = abs;
                }
                end--;
            }
        }
    });

    for (i=0;i<nums.length;i++){
        
    }
    return returnNum;
};
// @lc code=end

threeSumClosest([-1, 2, 1, -4], 1);

// 耗时 23 min AC但效率不高
// 125/125 cases passed (92 ms)
// Your runtime beats 28.92 % of javascript submissions
// Your memory usage beats 21.72 % of javascript submissions (35.3 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b;
    });

    let near = 10000000;
    let returnNum = null;
    nums.forEach((item, index) => {
        let cur = item;
        let start = 0;
        let end = nums.length - 1;

        while (start < index && end > index && start !== end) {
            let total = cur + nums[start] + nums[end];
            let abs = Math.abs(total - target);
            if (total < target) {
                if (abs < near) {
                    returnNum = total;
                    near = abs;
                }
                start++;
            }

            else if (total >= target) {
                if (abs < near) {
                    returnNum = total;
                    near = abs;
                }
                end--;
            }
        }
    });
    return returnNum;
};