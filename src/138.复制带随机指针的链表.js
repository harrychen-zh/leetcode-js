/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let tmp, cur = head;
  // 在每个节点后面复制一个同样的节点
  while (cur) {
    tmp = new Node(cur.val);
    tmp.random = cur.random;
    tmp.next = cur.next;
    cur.next = tmp;
    cur = tmp.next;
  }
  // 修正复制节点的random指针，指向random的下一个
  cur = head.next;
  while (cur) {
    cur.random && (cur.random = cur.random.next);
    (cur = cur.next) && (cur = cur.next);
  }
  // 拆分复制指针
  tmp = cur = head.next;
  while (cur.next) {
    head.next = head.next.next;
    cur.next = cur.next.next;
    head = head.next;
    cur = cur.next;
  }
  head.next = null;
  return tmp
};
// @lc code=end

