function minima(limit, arr = []) {
  return arr.sort((a, b) => a - b).slice(0, limit);
}

export { minima };
