
//   Definition for singly-linked list.
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
//  @param {ListNode} l1
//  @param {ListNode} l2
//  @return {ListNode}
 
var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let newListNode = new ListNode();
    let remainder = 0;
    let p3 = newListNode;

    while (p1 !== null || p2 !== null) {
        // sum greater than ten ? 
        // set remainder to var
        // if not greater than ten remainder to zero

        const p1Val = p1 !== null ? p1.val : 0;
        const p2Val = p2 !== null ? p2.val : 0;
        
        const sum = p1Val + p2Val + remainder;
        if (sum > 9) {
            remainder = 1;
        } else {
            remainder = 0
        }
        let newVal = sum % 10 
        p3.next = new ListNode(newVal)
        p3 = p3.next
        if (p1 !== null) p1 = p1.next;
        if (p2 !== null) p2 = p2.next;
        // p1 && p1 = p1.next
        if (remainder === 1) {
            p3.next = new ListNode(remainder)
    }
    }
    return newListNode.next;
};

// [9,9,9,9,9,9,9]  
// [9,9,9,9]
// [8,9,9,9,0,0,0,1]




// class Node {
//     constructor(val) {
//       this.val = val;
//       this.next = null;
//     }
//   }
  
  // const addLists = (head1, head2) => {
  //   const dummyHead = new Node(null);
  //   let tail = dummyHead;
  //   let current1 = head1;
  //   let current2 = head2;
  //   let carry = 0;
  //   while (current1 !== null || current2 !== null || carry !== 0) {
      
  //     let val1 = current1 === null ? 0 : current1.val;
  //     let val2 = current2 === null ? 0 : current2.val;
      
  //     let sum = val1 + val2 + carry;
  //     carry = sum > 9 ? 1 : 0;
  //     const digit = sum % 10;
      
  //     if (current1 !== null) current1 = current1.next;
  //     if (current2 !== null) current2 = current2.next;
  //     tail.next = new Node(digit);
  //     tail = tail.next;
  //   }
  //   return dummyHead.next;
  // };
  
//   const addLists = (head1, head2, carry = 0) => {
//     if (head1 === null && head2 === null && carry === 0) return null;
//     const val1 = head1 === null ? 0 : head1.val;
//     const val2 = head2 === null ? 0 : head2.val;
    
//     const sum = val1 + val2 + carry;
//     carry = sum > 9 ? 1 : 0;
//     const digit = sum % 10;
//     const resultNode = new Node(digit);
    
//     const next1 = head1 === null ? null : head1.next;
//     const next2 = head2 === null ? null : head2.next;
    
//     resultNode.next = addLists(next1, next2, carry);
//     return resultNode;
//   };