/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }
  const n = haystack.length;
  const m = needle.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (haystack[i] === needle[j]) {
      if (j === m - 1) {
        return i - j;
      }
      j = j + 1;
    } else {
      i = i - j;
      j = 0;
    }
  }
  return -1;
};
// @lc code=end
