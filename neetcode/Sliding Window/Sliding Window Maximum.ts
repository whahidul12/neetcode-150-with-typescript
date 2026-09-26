function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const q: number[] = []
  let head = 0
  let tail = 0

  for (let i = 0; i < nums.length; i++) {
    while (head < tail && q[head]! < i - k + 1) {
      head++
    }

    while (head < tail && nums[q[tail - 1]!]! <= nums[i]!) {
      tail--
    }

    q[tail++] = i

    if (i >= k - 1) {
      result.push(nums[q[head]!]!)
    }
  }

  return result
}
