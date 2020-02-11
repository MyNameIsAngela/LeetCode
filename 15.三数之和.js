/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 先排序，再设定前后指针查找
// 测试用例全通过，但超时
var threeSum = function (nums) {
    let ans = [];
    nums.sort((a, b) => {
        return a - b;
    });

    if (nums[0] <= 0 && nums[nums.length - 1] >= 0) {
        nums.forEach((item, index) => {
            let cur = item;
            let start = 0;
            let end = nums.length - 1;
            while (start < index && end > index && start !== end) {
                if (cur + nums[start] + nums[end] < 0)
                    start++;
                else if (cur + nums[start] + nums[end] > 0)
                    end--;
                else if (cur + nums[start] + nums[end] == 0) {
                    let repeatFlag = false;
                    ans.forEach(item => {
                        if (item[0] == nums[start] && item[1] == cur)
                            repeatFlag = true;
                    })
                    !repeatFlag && ans.push([nums[start], cur, nums[end]]);
                    start++;
                }
            }
        });
    }

    return ans;
};
// @lc code=end

// threeSum([-1,0,1,2,-1,-4]); // [[-1,-1,2],[-1,0,1]]
// threeSum([0, 0, 0, 0]); // [[0,0,0]] // 未去重
// threeSum([-1,0,1,2,-1,-4]); // [[-1,-1,2],[-1,0,1]] // 简单逻辑判断错误
// threeSum([3, 0, -2, -1, 1, 2]); // [[-2,-1,3],[-2,0,2],[-1,0,1]] // while 直接return 两种为0 的情况未考虑
threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]); // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]] 去重不彻底，不能仅考虑前后答案的去重

// // 先排序，再设定前后指针查找
// // 测试用例全通过，但超时
// var threeSum = function (nums) {
//     let ans = [];
//     nums.sort((a, b) => {
//         return a - b;
//     });

//     nums.forEach((item, index) => {
//         let cur = item;
//         let start = 0;
//         let end = nums.length - 1;
//         while (start < index && end > index && start !== end) {
//             if (cur + nums[start] + nums[end] < 0)
//                 start++;
//             else if (cur + nums[start] + nums[end] > 0)
//                 end--;
//             else if (cur + nums[start] + nums[end] == 0) {
//                 let repeatFlag = false;
//                 ans.forEach(item => {
//                     if (item[0] == nums[start] && item[1] == cur)
//                         repeatFlag = true;
//                 })
//                 !repeatFlag && ans.push([nums[start], cur, nums[end]]);
//                 start++;
//             }
//         }
//     });
//     return ans;
// };