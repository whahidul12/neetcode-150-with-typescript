class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0)
  let current = dummy
  let carry = 0
  let p1 = l1
  let p2 = l2

  while (p1 !== null || p2 !== null || carry > 0) {
    const val1 = p1 !== null ? p1.val : 0
    const val2 = p2 !== null ? p2.val : 0
    const sum = val1 + val2 + carry

    carry = Math.floor(sum / 10)
    const digit = sum % 10

    current.next = new ListNode(digit)
    current = current.next

    if (p1 !== null) {
      p1 = p1.next
    }
    if (p2 !== null) {
      p2 = p2.next
    }
  }

  return dummy.next
}
