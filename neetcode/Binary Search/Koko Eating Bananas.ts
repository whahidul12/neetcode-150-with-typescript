function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = 0
  for (let i = 0; i < piles.length; i++) {
    if (piles[i]! > right) {
      right = piles[i]!
    }
  }

  let res = right

  while (left <= right) {
    const k = Math.floor((left + right) / 2)
    let hours = 0
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i]! / k)
    }

    if (hours <= h) {
      res = k
      right = k - 1
    } else {
      left = k + 1
    }
  }

  return res
}
