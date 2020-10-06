function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function inner(...args2) {
      return curried(...args.concat(args2));
    };
  };
}

export { curry };
