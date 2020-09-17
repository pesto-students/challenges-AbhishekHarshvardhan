function balancedBraces(str) {
  const left = ['{', '(', '['];
  const right = ['}', ')', ']'];

  const result = [];

  for (const char of str.split('')) {
    const closeIndex = right.indexOf(char);
    const openIndex = left.indexOf(char);
    if (closeIndex > -1 || openIndex > -1) {
      if (closeIndex > -1 && result[result.length - 1] === left[closeIndex]) {
        result.pop();
      } else result.push(char);
    }
  }

  return result.length === 0;
}

export { balancedBraces };
