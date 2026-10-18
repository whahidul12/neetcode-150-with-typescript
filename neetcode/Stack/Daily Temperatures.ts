function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const result = new Array<number>(n).fill(0)
  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i]! > temperatures[stack[stack.length - 1]!]!
    ) {
      const prevIndex = stack.pop()!
      result[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }

  return result
}
