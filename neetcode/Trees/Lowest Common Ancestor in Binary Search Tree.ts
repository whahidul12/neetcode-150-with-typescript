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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let current = root

  while (current !== null) {
    if (p!.val < current.val && q!.val < current.val) {
      current = current.left
    } else if (p!.val > current.val && q!.val > current.val) {
      current = current.right
    } else {
      return current
    }
  }

  return null
}
