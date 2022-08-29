/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let result = [-1, -1];
  nums.map((n, index) => {
    if (map.has(target - n)) {
      result = [map.get(target - n), index];
    }
    map.set(n, index);
  });
  return result;
}
// @lc code=end
