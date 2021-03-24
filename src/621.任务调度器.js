/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const freq = _.countBy(tasks);

  const maxExec = Math.max(...Object.values(freq));

  let maxCount = 0;
  Object.values(freq).forEach(v => {
    if (v === maxExec) {
      maxCount++;
    }
  })

  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
};
// @lc code=end

