var middleNode = function (head) {
  var slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
