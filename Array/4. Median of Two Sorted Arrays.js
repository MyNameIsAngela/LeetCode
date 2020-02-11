


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 对于有限的数集，可以通过把所有观察值高低排序后找出正中间的一个作为中位数。如果观察值有偶数个，通常取最中间的两个数值的平均数作为中位数。
    let isNum1Cardinal = nums1 % 2 === 1;
    let isNum2Cardinal = nums2 % 2 === 1;
    let num1Median = isNum1Cardinal ?
        { pos: Math.ceil(nums1.length / 2) - 1, val: nums1[Math.ceil(nums1.length / 2) - 1] }
        :
        [{
            pos: Math.ceil(nums1.length / 2) - 1,
            val: nums1[Math.ceil(nums1.length / 2) - 1]
        },
        {
            pos: Math.ceil(nums1.length / 2),
            val: nums1[Math.ceil(nums1.length / 2)]
        }];
    let num2Median = isNum2Cardinal ?
        { pos: Math.ceil(nums2.length / 2) - 1, val: nums2[Math.ceil(nums2.length / 2) - 1] }
        :
        [{
            pos: Math.ceil(nums2.length / 2) - 1,
            val: nums2[Math.ceil(nums2.length / 2) - 1]
        },
        {
            pos: Math.ceil(nums2.length / 2),
            val: nums2[Math.ceil(nums2.length / 2)]
        }];
};

// 重复内容，根据中间值的大小，又划分为