function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  const output: number[] = new Array<number>(n).fill(1)

  let prefix = 1
  for (let i = 0; i < n; i++) {
    output[i] = prefix

    const currentVal = nums[i]
    if (currentVal !== undefined) {
      prefix *= currentVal
    }
  }

  let suffix = 1
  for (let i = n - 1; i >= 0; i--) {
    const currentOutput = output[i]
    if (currentOutput !== undefined) {
      output[i] = currentOutput * suffix
    }

    const currentVal = nums[i]
    if (currentVal !== undefined) {
      suffix *= currentVal
    }
  }

  return output
}
