/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let n = nums.length;
  if (n === 0) {
    return;
  }
  let head = 0;
  let tail = 1;
  let count = 0;
  while (head < n - 1) {
    if (Math.abs(nums[tail] - nums[head]) === k) {
      count = count + 1;
    }
    tail = tail + 1;
    if (tail === n) {
      head = head + 1;
      tail = head + 1;
    }
  }
  return count;
};
// @lc code=end
