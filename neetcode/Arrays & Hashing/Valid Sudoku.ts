function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>()

  for (let r = 0; r < 9; r++) {
    const row = board[r]
    if (row === undefined) continue

    for (let c = 0; c < 9; c++) {
      const val = row[c]
      if (val === undefined || val === ".") {
        continue
      }

      const boxRow = Math.floor(r / 3)
      const boxCol = Math.floor(c / 3)

      const rowKey = `row_${r}_${val}`
      const colKey = `col_${c}_${val}`
      const boxKey = `box_${boxRow}_${boxCol}_${val}`

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false
      }

      seen.add(rowKey)
      seen.add(colKey)
      seen.add(boxKey)
    }
  }

  return true
}
