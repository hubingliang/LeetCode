/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let tail = 1,
    head = 0;
  while (tail < n) {
    if (nums[tail - 1] !== nums[tail]) {
      nums[head + 1] = nums[tail];
      ++head;
    }
    ++tail;
  }
  return head + 1;
};
