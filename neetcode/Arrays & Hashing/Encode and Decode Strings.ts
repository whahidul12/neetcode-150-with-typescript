class Codec {
  encode(strs: string[]): string {
    let encoded = ""
    for (const s of strs) {
      encoded += `${s.length}#${s}`
    }
    return encoded
  }

  decode(s: string): string[] {
    const result: string[] = []
    let i = 0

    while (i < s.length) {
      const hashIndex = s.indexOf("#", i)
      if (hashIndex === -1) {
        break
      }

      const lengthStr = s.substring(i, hashIndex)
      const len = parseInt(lengthStr, 10)

      const startIdx = hashIndex + 1
      const endIdx = startIdx + len
      const str = s.substring(startIdx, endIdx)

      result.push(str)

      i = endIdx
    }

    return result
  }
}
