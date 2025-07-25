/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(); // 仮の先頭ノード
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      // 受け取ったノードを次のノードとしてよけておく
      current.next = list1;
      // よけておいたノードを自身から除外
      list1 = list1.next;
    } else {
      // 受け取ったノードを次のノードとしてよけておく
      current.next = list2;
      // よけておいたノードを自身から除外
      list2 = list2.next;
    }
    current = current.next;
  }

  // どちらかに残っていればそのままつなげる
  current.next = list1 || list2;

  return dummy.next; // 仮の先頭の次が本物の先頭
};
