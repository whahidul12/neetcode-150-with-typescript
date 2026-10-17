function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]!

    if (token === "+") {
      const b = stack.pop()!
      const a = stack.pop()!
      stack.push(a + b)
    } else if (token === "-") {
      const b = stack.pop()!
      const a = stack.pop()!
      stack.push(a - b)
    } else if (token === "*") {
      const b = stack.pop()!
      const a = stack.pop()!
      stack.push(a * b)
    } else if (token === "/") {
      const b = stack.pop()!
      const a = stack.pop()!
      stack.push(Math.trunc(a / b))
    } else {
      stack.push(Number(token))
    }
  }

  return stack[0]!
}
