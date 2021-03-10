/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null
  let pre = head, size = 1
  while (pre.next) {
    pre = pre.next
    size++
  }
  pre.next = head
  for (let i = 0; i < size - k % size - 1; i++) {
    head = head.next
  }
  pre = head.next
  head.next = null
  return pre
};
// @lc code=end

