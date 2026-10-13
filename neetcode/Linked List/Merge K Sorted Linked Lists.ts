class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  if (!lists || lists.length === 0) {
    return null
  }

  let interval = 1
  while (interval < lists.length) {
    for (let i = 0; i < lists.length - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i] ?? null, lists[i + interval] ?? null)
    }
    interval *= 2
  }

  return lists[0] ?? null
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0)
  let current = dummy
  let p1 = list1
  let p2 = list2

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      current.next = p1
      p1 = p1.next
    } else {
      current.next = p2
      p2 = p2.next
    }
    current = current.next
  }

  current.next = p1 !== null ? p1 : p2

  return dummy.next
}
