/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  // 长度不同，直接返回false
  if (a.length !== b.length) return false;
  // 字符串一样，有重复字符时返回true
  if (a === b) return a.length > new Set(a).size;

  let a1 = '', b1 = ''
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      a1 = a[i] + a1;
      b1 += b[i];
    }
  }
  return a1.length === 2 && a1 === b1;
};
// @lc code=end

