/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false
    // 双指针解法
    let p = head, q = head;
    do {
      p = p.next;
      q = q.next.next;
      if (p===q) return true
    } while (q && q.next)
    return false

};
// @lc code=end

