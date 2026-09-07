function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>()

  for (const s of strs) {
    const key = s.split("").sort().join("")

    let group = anagramMap.get(key)

    if (group === undefined) {
      group = []
      anagramMap.set(key, group)
    }

    group.push(s)
  }

  return Array.from(anagramMap.values())
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))
