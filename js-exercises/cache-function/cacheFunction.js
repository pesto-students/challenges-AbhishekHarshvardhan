function isResultInCache(cache, args) {
  return Object.keys(cache).includes(String(args));
}

function cacheFunction(cb) {
  const cache = {};
  return function cached(...args) {
    if (isResultInCache(cache, args)) return cache[args];
    const result = cb.apply(this, args);
    cache[args] = result;
    return result;
  };
}

export {
  cacheFunction,
};
