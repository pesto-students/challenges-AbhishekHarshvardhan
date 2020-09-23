function isString(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  return true;
}

function abbreviateString(str) {
  let result;
  if (isString(str)) {
    const allWords = str.split(' ');
    const firstWord = allWords[0];
    const lastWordChar = String(allWords[allWords.length - 1][0]).toUpperCase();
    result = `${[firstWord, lastWordChar].join(' ')}.`;
  }
  return result;
}

export { abbreviateString };
