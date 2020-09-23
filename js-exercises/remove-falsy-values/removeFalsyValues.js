/* eslint-disable quotes */
function removeFalsyValues(array) {
  const falsy = [0, "", undefined, NaN, false, null];

  const result = [];
  for (const item of array) {
    if (!falsy.includes(item)) result.push(item);
  }

  return result;
}

export { removeFalsyValues };
