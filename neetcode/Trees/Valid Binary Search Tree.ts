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

function isValidBST(root: TreeNode | null): boolean {
  function validate(
    node: TreeNode | null,
    min: number | null,
    max: number | null,
  ): boolean {
    if (node === null) {
      return true
    }

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false
    }

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    )
  }

  return validate(root, null, null)
}
