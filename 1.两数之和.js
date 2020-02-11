/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var ans = [];
    (nums || []).forEach((firstItem, firstIndex) => {
        first = firstIndex;
        let nextTarget = target - firstItem;
        for (let i = firstIndex + 1; i < nums.length; i++) {
            if (nums[i] === nextTarget) {
                ans = [firstIndex, i]
            }
        }
    });
    return ans;
};
// @lc code=end


console.log('twoSum([2, 7, 11, 15],9)', twoSum([2, 7, 11, 15], 9));
console.log('The END');

// 29/29 cases passed (152 ms)
// Your runtime beats 34.35 % of javascript submissions
// Your memory usage beats 32.18 % of javascript submissions (34.9 MB)

// var twoSum = function (nums, target) {
//     var ans = [];
//     (nums || []).forEach((firstItem, firstIndex) => {
//         first = firstIndex;
//         let nextTarget = target - firstItem;
//         for (let i = firstIndex + 1; i < nums.length; i++) {
//             if (nums[i] === nextTarget) {
//                 ans = [firstIndex, i]
//             }
//         }
//     });
//     return ans;
// };


// 29/29 cases passed (320 ms)
// Your runtime beats 6.32 % of javascript submissions
// Your memory usage beats 9.5 % of javascript submissions (36.1 MB)

// var twoSum = function (nums, target) {
//     var ans = [];
//     (nums || []).forEach((firstItem, firstIndex) => {
//         first = firstIndex;
//         let nextTarget = target - firstItem;
//         (nums || []).forEach((secondItem, secondIndex) => {
//             if (secondIndex > firstIndex && secondItem === nextTarget) {
//                 ans = [firstIndex, secondIndex]
//             }
//         });
//     });
//     return ans;
// };