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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0

  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return 0
    }

    const leftHeight = dfs(node.left)
    const rightHeight = dfs(node.right)

    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight)

    return Math.max(leftHeight, rightHeight) + 1
  }

  dfs(root)

  return maxDiameter
}
