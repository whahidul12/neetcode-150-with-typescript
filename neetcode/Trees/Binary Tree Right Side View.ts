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

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = []

  function dfs(node: TreeNode | null, depth: number): void {
    if (node === null) {
      return
    }

    if (depth === result.length) {
      result.push(node.val)
    }

    dfs(node.right, depth + 1)
    dfs(node.left, depth + 1)
  }

  dfs(root, 0)

  return result
}
