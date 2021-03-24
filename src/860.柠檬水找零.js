/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (!bills) return false;
  if (bills[0] > 5) return false;

  // 5元的张数; 10元的张数
  let i5 = 0, i10 = 0;
  for (const bill of bills) {
    if (bill === 5) i5++;
    else if (bill === 10) {
      i5--;
      i10++
    } else if (bill === 20) {
      if (i10 > 0) {
        i10--;
        i5--;
      } else {
        i5 -= 3;
      }
    }
    if (i5 < 0 || i10 < 0) return false;
  }
  return true;

};
// @lc code=end

