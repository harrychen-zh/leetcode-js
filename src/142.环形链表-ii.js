/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null
  // 双指针解法
  let p = head, q = head;
  do {
    p = p.next;
    q = q.next.next;
  } while (q && q.next && p !== q)
  if (p !== q) return null
  p = head;
  while(p !== q) {
    p = p.next;
    q = q.next;
  }
  return p
};
// @lc code=end

