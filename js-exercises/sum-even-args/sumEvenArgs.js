const sumEvenArgs = (...args) => {
  let result = 0;
  for (const arg of args) {
    if (arg % 2 === 0) result += arg;
  }

  return result;
};

export { sumEvenArgs };
