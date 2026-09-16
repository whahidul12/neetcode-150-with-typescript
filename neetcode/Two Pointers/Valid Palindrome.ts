function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const charLeft = s[left]
    const charRight = s[right]

    if (charLeft === undefined || !isAlphanumeric(charLeft)) {
      left++
      continue
    }

    if (charRight === undefined || !isAlphanumeric(charRight)) {
      right--
      continue
    }

    if (charLeft.toLowerCase() !== charRight.toLowerCase()) {
      return false
    }

    left++
    right--
  }

  return true
}

function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0)
  return (
    (code >= 48 && code <= 57) || // 0 - 9
    (code >= 65 && code <= 90) || // A - Z
    (code >= 97 && code <= 122) // a - z
  )
}
