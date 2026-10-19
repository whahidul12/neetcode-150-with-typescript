function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length
  const cars: [number, number][] = new Array(n)

  for (let i = 0; i < n; i++) {
    cars[i] = [position[i]!, speed[i]!]
  }

  cars.sort((a, b) => b[0] - a[0])

  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    const time = (target - cars[i]![0]) / cars[i]![1]

    if (stack.length === 0 || time > stack[stack.length - 1]!) {
      stack.push(time)
    }
  }

  return stack.length
}
