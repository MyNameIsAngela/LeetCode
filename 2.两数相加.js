/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // let l1 = new ListNode();
    // let l1Head = l1;
    // l1val.map(item => {
    //     // let node = new ListNode(item);
    //     if (!l1Head.val) {
    //         l1Head.next = new ListNode(item);
    //     } else {
    //         l1Head.next = new ListNode(item);
    //     }
    //     l1Head = l1Head.next;
    // })

    // let l2 = new ListNode();
    // let l2Head = l2;
    // l2val.map(item => {
    //     // let node = new ListNode(item);
    //     if (!l2Head) {
    //         l2Head.next = new ListNode(item);
    //     } else {
    //         l2Head.next = new ListNode(item);
    //     }
    //     l2Head = l2Head.next;
    // })
    // console.log('l1Node', l1, 'l2', l2);

    const ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    // l1 = l1.next;
    // l2 = l2.next;
    while (l1 || l2 || carry) {
        let sum = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0)) + carry;
        if (sum>9) {
            ansHead.next = new ListNode(sum% 10);
            carry = 1;
        } else {
            ansHead.next = new ListNode(sum);
            carry = 0;
        }
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        ansHead = ansHead.next;
    }
    // console.log('ans', ans);
    return ans.next;
};
// @lc code=end

// addTwoNumbers([5], [5]); //  === [0,1];