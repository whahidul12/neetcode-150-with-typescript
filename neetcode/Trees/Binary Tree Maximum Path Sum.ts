class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function maxPathSum(root: TreeNode | null): number {
  let globalMaxSum = -Infinity

  function calculateMaxGain(node: TreeNode | null): number {
    if (node === null) {
      return 0
    }

    const leftGain = Math.max(calculateMaxGain(node.left), 0)
    const rightGain = Math.max(calculateMaxGain(node.right), 0)

    const currentPathSum = node.val + leftGain + rightGain

    globalMaxSum = Math.max(globalMaxSum, currentPathSum)

    return node.val + Math.max(leftGain, rightGain)
  }

  calculateMaxGain(root)
  return globalMaxSum
}
