function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()

  for (const [i, num] of nums.entries()) {
    const complement = target - num
    const complementIndex = numMap.get(complement)

    if (complementIndex !== undefined) {
      return [complementIndex, i]
    }

    numMap.set(num, i)
  }

  return []
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 12))
