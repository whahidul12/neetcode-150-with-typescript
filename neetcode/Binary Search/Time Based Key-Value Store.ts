class TimeMap {
  private map: Map<string, Array<{ timestamp: number; value: string }>>

  constructor() {
    this.map = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, [])
    }
    this.map.get(key)!.push({ timestamp, value })
  }

  get(key: string, timestamp: number): string {
    const values = this.map.get(key)
    if (!values || values.length === 0) {
      return ""
    }

    let left = 0
    let right = values.length - 1
    let res = ""

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const item = values[mid]!

      if (item.timestamp <= timestamp) {
        res = item.value
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return res
  }
}
