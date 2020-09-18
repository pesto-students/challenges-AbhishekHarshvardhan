function flipArgs(cb) {
  return function reversed(...args) {
    return cb.apply(this, args.reverse());
  };
}

export default flipArgs;
