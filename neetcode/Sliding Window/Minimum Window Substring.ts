function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0 || s.length < t.length) return ""

  const dictT = new Array(128).fill(0)
  for (let i = 0; i < t.length; i++) {
    dictT[t.charCodeAt(i)]++
  }

  let required = 0
  for (let i = 0; i < 128; i++) {
    if (dictT[i] > 0) required++
  }

  let formed = 0
  const windowCounts = new Array(128).fill(0)

  let left = 0
  let right = 0
  let minLen = Infinity
  let minLeft = 0

  while (right < s.length) {
    const charCode = s.charCodeAt(right)
    windowCounts[charCode]++

    if (dictT[charCode] > 0 && windowCounts[charCode] === dictT[charCode]) {
      formed++
    }

    while (left <= right && formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1
        minLeft = left
      }

      const leftChar = s.charCodeAt(left)
      windowCounts[leftChar]--
      if (dictT[leftChar] > 0 && windowCounts[leftChar] < dictT[leftChar]) {
        formed--
      }
      left++
    }

    right++
  }

  return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen)
}
