function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []
  let maxArea = 0
  const n = heights.length

  for (let i = 0; i <= n; i++) {
    const currentHeight = i === n ? 0 : heights[i]!
    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]!]!
    ) {
      const height = heights[stack.pop()!]!
      const width = stack.length === 0 ? i : i - stack[stack.length - 1]! - 1
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push(i)
  }

  return maxArea
}
