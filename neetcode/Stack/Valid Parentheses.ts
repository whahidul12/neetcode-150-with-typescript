function isValid(s: string): boolean {
  const stack: string[] = []
  const bracketMap: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]!
    if (char in bracketMap) {
      const top = stack.pop()
      if (top !== bracketMap[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}
