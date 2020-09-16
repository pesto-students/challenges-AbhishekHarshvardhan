function getMax() {
  return (prev, next) => (prev > next ? prev : next);
}

function duplicateLetters(...args) {
  const charMap = {};
  for (const char of String(args).split('')) {
    if (charMap[char]) charMap[char] += 1;
    else charMap[char] = 1;
  }
  const max = Object.values(charMap).reduce(getMax(), 0);
  return max > 1 ? max : false;
}

export { duplicateLetters };
