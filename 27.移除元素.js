/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let head = 0;
  let tail = 0;
  let n = nums.length;
  while (tail < n) {
    if (nums[tail] !== val) {
      nums[head] = nums[tail];
      head = head + 1;
    }
    tail = tail + 1;
  }
  return head;
};
// @lc code=end
