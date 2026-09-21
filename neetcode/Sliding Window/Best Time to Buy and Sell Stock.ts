function maxProfit(prices: number[]): number {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]!
    if (price < minPrice) {
      minPrice = price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }

  return maxProfit
}
