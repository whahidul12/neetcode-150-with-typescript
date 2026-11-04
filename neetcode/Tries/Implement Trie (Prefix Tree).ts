class TrieNode {
  children: { [key: string]: TrieNode }
  isEndOfWord: boolean

  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

class PrefixTree {
  private root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let currentNode = this.root

    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode()
      }
      currentNode = currentNode.children[char]
    }

    currentNode.isEndOfWord = true
  }

  search(word: string): boolean {
    let currentNode = this.root

    for (const char of word) {
      if (!currentNode.children[char]) {
        return false
      }
      currentNode = currentNode.children[char]
    }

    return currentNode.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root

    for (const char of prefix) {
      if (!currentNode.children[char]) {
        return false
      }
      currentNode = currentNode.children[char]
    }

    return true
  }
}
