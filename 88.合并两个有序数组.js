/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    return nums2;
  }
  if (n === 0) {
    return nums1;
  }
  let i = 0;
  let j = 0;
  let result = [];
  while (i + j === m + n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i = i + 1;
    } else if (nums1[i] > nums2[j]) {
      result.push(nums2[j]);
      j = j + 1;
    } else {
      result.push(nums1[i]);
      result.push(nums2[j]);
      i = i + 1;
      j = j + 1;
    }
  }
  return result;
};
// @lc code=end
