/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let currentPoint = new ListNode(head.val,head.next); // 当前指向
    let nextPoint = currentPoint.next;  // 当前指向的下一个
    let tempPoint = new ListNode(head.val,head); // 用于遍历大小的指针
    let newHead = new ListNode();
    // let tempPoint = currentPoint;
    // let newHead = new ListNode(head.val,head.next);
    while(nextPoint != null){
        tempPoint = new ListNode(head.val,head); 
        nextPoint=currentPoint.next;
        while(tempPoint.next.next!==nextPoint){
            if(currentPoint.val<=tempPoint.next.val){
                tempPoint.next = currentPoint;
                
                currentPoint.next = tempPoint.next;
                
                break;
            }
            tempPoint = tempPoint.next;
        }  
        currentPoint = currentPoint.next;
    }
    // return head;
    return new ListNode(head.val,head.next);
};
const testHead = new ListNode(
  4,
  new ListNode(2, new ListNode(1, new ListNode(3, null)))
);
console.log(insertionSortList(testHead));
// @lc code=end

