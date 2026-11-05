class TrieNode {
  children: Map<string, TrieNode>
  isEnd: boolean

  constructor() {
    this.children = new Map()
    this.isEnd = false
  }
}

class PrefixTree {
  private root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]!
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode())
      }
      current = current.children.get(char)!
    }
    current.isEnd = true
  }

  search(word: string): boolean {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]!
      if (!current.children.has(char)) {
        return false
      }
      current = current.children.get(char)!
    }
    return current.isEnd
  }

  startsWith(prefix: string): boolean {
    let current = this.root
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i]!
      if (!current.children.has(char)) {
        return false
      }
      current = current.children.get(char)!
    }
    return true
  }
}

class WordDictionaryNode {
  children: Map<string, WordDictionaryNode>
  isEnd: boolean

  constructor() {
    this.children = new Map()
    this.isEnd = false
  }
}

class WordDictionary {
  private root: WordDictionaryNode

  constructor() {
    this.root = new WordDictionaryNode()
  }

  addWord(word: string): void {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]!
      if (!current.children.has(char)) {
        current.children.set(char, new WordDictionaryNode())
      }
      current = current.children.get(char)!
    }
    current.isEnd = true
  }

  search(word: string): boolean {
    return this.searchHelper(word, 0, this.root)
  }

  private searchHelper(
    word: string,
    index: number,
    node: WordDictionaryNode,
  ): boolean {
    let current = node
    for (let i = index; i < word.length; i++) {
      const char = word[i]!
      if (char === ".") {
        for (const child of current.children.values()) {
          if (this.searchHelper(word, i + 1, child)) {
            return true
          }
        }
        return false
      } else {
        if (!current.children.has(char)) {
          return false
        }
        current = current.children.get(char)!
      }
    }
    return current.isEnd
  }
}
