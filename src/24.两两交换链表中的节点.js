/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null
  let hair = new ListNode(-1, head), temp = hair
  while (temp && temp.next && temp.next.next) {
    let pre = temp.next, cur = temp.next.next
    pre.next = cur.next
    cur.next = pre
    temp.next = cur
    temp = pre
  }
  return hair.next
};
// @lc code=end

