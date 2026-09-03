const isAnagram = (s: string, t: string): boolean => {
  // Fast path: if lengths don't match, they can't be anagrams
  if (s.length !== t.length) {
    return false
  }

  const charCounts = new Map<string, number>()

  // Increment counts for string s
  for (const char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1)
  }

  // Decrement counts for string t
  for (const char of t) {
    if (!charCounts.has(char)) {
      return false // Character in t doesn't exist in s
    }

    const newCount = (charCounts.get(char) as number) - 1
    if (newCount === 0) {
      charCounts.delete(char) // Clean up to keep map small
    } else {
      charCounts.set(char, newCount)
    }
  }

  // If the map is empty, all characters matched perfectly
  return charCounts.size === 0
}

console.log(isAnagram("sdfghjkl", "lkjhgfds"))
