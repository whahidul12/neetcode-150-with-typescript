class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

function copyRandomList(head: Node | null): Node | null {
  if (!head) {
    return null
  }

  const map = new Map<Node, Node>()

  let curr: Node | null = head
  while (curr !== null) {
    map.set(curr, new Node(curr.val))
    curr = curr.next
  }

  curr = head
  while (curr !== null) {
    const copy = map.get(curr)!
    copy.next = curr.next !== null ? map.get(curr.next)! : null
    copy.random = curr.random !== null ? map.get(curr.random)! : null
    curr = curr.next
  }

  return map.get(head)!
}
