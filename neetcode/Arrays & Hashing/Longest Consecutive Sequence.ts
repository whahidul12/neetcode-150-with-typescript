function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }

  const numSet = new Set<string | number>(nums)
  let longestStreak = 0

  for (const num of numSet) {
    if (!numSet.has(Number(num) - 1)) {
      let currentNum = Number(num)
      let currentStreak = 1

      while (numSet.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}
