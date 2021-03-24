/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start

// 取最大数下标
var getMaxIdx = function (nums) {
  let maxIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }
  return maxIdx;
}
// 反转
var reverse = function (arr, k) {
  if (k < 1) return;
  let i = 0, j = k;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let ans = [], max;
  while (arr.length > 1) {
    max = getMaxIdx(arr);
    max > 0 && (ans.push(max + 1));
    reverse(arr, max);
    reverse(arr, arr.length - 1);
    ans.push(arr.length);
    arr.pop();
  }
  return ans;
};
// @lc code=end

