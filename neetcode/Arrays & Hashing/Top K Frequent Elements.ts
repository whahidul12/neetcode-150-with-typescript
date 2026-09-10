function topKFrequent(nums: number[], k: number): number[] {
  const countMap = new Map<number, number>()

  // Step 1: Count the frequency of each number
  for (const num of nums) {
    const currentCount = countMap.get(num) ?? 0
    countMap.set(num, currentCount + 1)
  }

  // Step 2: Create frequency buckets (index = frequency)
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => [])

  for (const [num, freq] of countMap.entries()) {
    const bucket = buckets[freq]
    if (bucket !== undefined) {
      bucket.push(num)
    }
  }

  // Step 3: Gather the top k frequent elements from highest frequency bucket down
  const result: number[] = []
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    const bucket = buckets[i]
    if (bucket !== undefined && bucket.length > 0) {
      for (const num of bucket) {
        result.push(num)
        if (result.length === k) {
          break
        }
      }
    }
  }

  return result
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))
