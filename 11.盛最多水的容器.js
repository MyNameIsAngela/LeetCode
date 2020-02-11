/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 双指针法
// 50/50 cases passed (60 ms)
// Your runtime beats 97.21 % of javascript submissions
// Your memory usage beats 14.36 % of javascript submissions (35.9 MB)

var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let max = -1;
    while (start != end) {
        let area = Math.min(height[start], height[end]) * (end - start);
        max = max < area ? area : max; // 此处使用Max.max() runtime 会降低
        if (height[start] < height[end])
            start++;
        else
            end--;
    }
    return max;
};


// 暴力法
// 50/50 cases passed (3580 ms)
// Your runtime beats 5 % of javascript submissions
// Your memory usage beats 5.15 % of javascript submissions (43 MB)

// var maxArea = function (height) {
//     let max = 0;
//     height.map((item1, index1) => {
//         height.map((item2, index2) => {
//             if (index1 > index2 || index2 < 1)
//                 return null;
//             let container = (index2 - index1) * Math.min(item1, item2);
//             max = container > max ? container : max;
//         });
//     });
//     return max;
// };

// @lc code=end

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
// maxArea([1, 1]); // 1