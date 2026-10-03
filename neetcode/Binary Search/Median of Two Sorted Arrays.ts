function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let A = nums1
  let B = nums2
  if (A.length > B.length) {
    A = nums2
    B = nums1
  }

  const m = A.length
  const n = B.length
  let left = 0
  let right = m
  const halfLen = Math.floor((m + n + 1) / 2)

  while (left <= right) {
    const i = Math.floor((left + right) / 2)
    const j = halfLen - i

    const Aleft = i > 0 ? A[i - 1]! : -Infinity
    const Aright = i < m ? A[i]! : Infinity
    const Bleft = j > 0 ? B[j - 1]! : -Infinity
    const Bright = j < n ? B[j]! : Infinity

    if (Aleft <= Bright && Bleft <= Aright) {
      if ((m + n) % 2 === 1) {
        return Math.max(Aleft, Bleft)
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
    } else if (Aleft > Bright) {
      right = i - 1
    } else {
      left = i + 1
    }
  }

  return 0.0
}
