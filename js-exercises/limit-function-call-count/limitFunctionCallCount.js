const limitFunctionCallCount = (cb, n) => {
  let functionCallCounter = 1;
  return function limit(...args) {
    functionCallCounter += 1;
    if (functionCallCounter > n) return null;
    return cb.apply(this, args);
  };
};

export {
  limitFunctionCallCount,
};
