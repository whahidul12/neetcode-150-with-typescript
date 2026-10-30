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

function goodNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, maxSoFar: number): number {
    if (node === null) {
      return 0
    }

    let count = 0
    if (node.val >= maxSoFar) {
      count = 1
      maxSoFar = node.val
    }

    count += dfs(node.left, maxSoFar)
    count += dfs(node.right, maxSoFar)

    return count
  }

  return dfs(root, root !== null ? root.val : -Infinity)
}
