function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0
  let left = 0
  const seen = new Map<string, number>()

  for (let right = 0; right < s.length; right++) {
    const char = s[right]!
    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1
    }
    seen.set(char, right)
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}
