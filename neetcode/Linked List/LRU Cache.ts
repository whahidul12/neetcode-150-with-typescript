class DLNode {
  key: number
  val: number
  prev: DLNode | null
  next: DLNode | null

  constructor(key: number = 0, val: number = 0) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  private capacity: number
  private map: Map<number, DLNode>
  private head: DLNode
  private tail: DLNode

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new DLNode()
    this.tail = new DLNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1
    }

    const node = this.map.get(key)!
    this.remove(node)
    this.insertToFront(node)

    return node.val
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!
      node.val = value
      this.remove(node)
      this.insertToFront(node)
      return
    }

    if (this.map.size >= this.capacity) {
      const lru = this.tail.prev!
      this.remove(lru)
      this.map.delete(lru.key)
    }

    const newNode = new DLNode(key, value)
    this.map.set(key, newNode)
    this.insertToFront(newNode)
  }

  private remove(node: DLNode): void {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  private insertToFront(node: DLNode): void {
    const nextNode = this.head.next
    this.head.next = node
    node.prev = this.head
    node.next = nextNode
    nextNode!.prev = node
  }
}
