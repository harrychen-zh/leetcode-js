/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 同环形链表处理
  let p = n, q = getNext(n);
  while (q != 1 && p != q) {
    p = getNext(p);
    q = getNext(getNext(q));
  }
  return q == 1
};
var getNext = function (n) {
  // let temp = 0;
  // while (n) {
  //   temp += (n % 10) * (n % 10);
  //   n = Math.floor(n / 10);
  // }
  // return temp;
  return String(n).split('').reduce((pre, item) => pre + item * item, 0)
}
// @lc code=end

