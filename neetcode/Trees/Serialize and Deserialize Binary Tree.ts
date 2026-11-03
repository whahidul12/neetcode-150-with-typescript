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

function serialize(root: TreeNode | null): string {
  const result: string[] = []

  function buildString(node: TreeNode | null): void {
    if (node === null) {
      result.push("#")
      return
    }

    result.push(node.val.toString())
    buildString(node.left)
    buildString(node.right)
  }

  buildString(root)
  return result.join(",")
}

function deserialize(data: string): TreeNode | null {
  if (!data) return null

  const nodes = data.split(",")

  function buildTree(): TreeNode | null {
    const valStr: string = nodes.shift() ?? "#"

    if (valStr === "#") {
      return null
    }

    const node = new TreeNode(parseInt(valStr, 10))

    node.left = buildTree()
    node.right = buildTree()

    return node
  }

  return buildTree()
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

const serializedString = serialize(root)
console.log("Serialized String:", serializedString)

const deserializedTree = deserialize(serializedString)
console.log("Deserialized Tree Root Value:", deserializedTree?.val)
