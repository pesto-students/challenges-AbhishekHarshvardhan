function alternatingCharacters(arr) {
  const result = [];
  for (const word of arr) {
    let deletionCounter = 0;
    for (let index = 0; index < word.length; index += 1) {
      const letter = word[index];
      if (letter === word[index + 1]) deletionCounter += 1;
    }
    result.push(deletionCounter);
  }

  return result;
}

export { alternatingCharacters };
