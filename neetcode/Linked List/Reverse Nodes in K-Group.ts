class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) {
    return head
  }

  const dummy = new ListNode(0, head)
  let groupPrev: ListNode | null = dummy

  while (true) {
    let kth: ListNode | null = groupPrev
    for (let i = 0; i < k && kth !== null; i++) {
      kth = kth.next
    }
    if (kth === null) {
      break
    }

    const groupNext: ListNode | null = kth.next
    let prev: ListNode | null = groupNext
    let curr: ListNode | null = groupPrev!.next

    while (curr !== groupNext) {
      const temp: ListNode | null = curr!.next
      curr!.next = prev
      prev = curr
      curr = temp
    }

    const tmp: ListNode | null = groupPrev!.next
    groupPrev!.next = kth
    groupPrev = tmp
  }

  return dummy.next
}
