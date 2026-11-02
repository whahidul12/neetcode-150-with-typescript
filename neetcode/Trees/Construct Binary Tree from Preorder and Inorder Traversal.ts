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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const inorderMap = new Map<number, number>()
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i]!, i)
  }

  let preorderIndex = 0

  function helper(left: number, right: number): TreeNode | null {
    if (left > right) {
      return null
    }

    const rootVal = preorder[preorderIndex++]!
    const root = new TreeNode(rootVal)
    const mid = inorderMap.get(rootVal)!

    root.left = helper(left, mid - 1)
    root.right = helper(mid + 1, right)

    return root
  }

  return helper(0, inorder.length - 1)
}
