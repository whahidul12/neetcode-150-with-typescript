function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const s1Count = new Array(26).fill(0)
  const s2Count = new Array(26).fill(0)

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++
    s2Count[s2.charCodeAt(i) - 97]++
  }

  let matches = 0
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++
    }
  }

  let left = 0
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true

    const rIdx = s2.charCodeAt(right) - 97
    s2Count[rIdx]++
    if (s2Count[rIdx] === s1Count[rIdx]) {
      matches++
    } else if (s2Count[rIdx] === s1Count[rIdx] + 1) {
      matches--
    }

    const lIdx = s2.charCodeAt(left) - 97
    s2Count[lIdx]--
    if (s2Count[lIdx] === s1Count[lIdx]) {
      matches++
    } else if (s2Count[lIdx] === s1Count[lIdx] - 1) {
      matches--
    }
    left++
  }

  return matches === 26
}
