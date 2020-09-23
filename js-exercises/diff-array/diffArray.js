function diffArray(arrA, arrB) {
  const difference = new Set(arrA);

  for (const item of arrB) {
    if (difference.has(item)) difference.delete(item);
    else difference.add(item);
  }
  return [...difference];
}

export { diffArray };
