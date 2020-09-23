function lastChunkInResult(result) {
  return result[result.length - 1];
}

function sizeOfLastChunkInResult(result) {
  return result[result.length - 1].length;
}

function didSizeOfLastChunkInResultExceededChunkSize(result, chunkSize) {
  return (
    lastChunkInResult(result) && sizeOfLastChunkInResult(result) !== chunkSize
  );
}

function chunkArrayInGroups(array, chunkSize) {
  const result = [];

  array.forEach((item) => {
    if (didSizeOfLastChunkInResultExceededChunkSize(result, chunkSize)) {
      lastChunkInResult(result).push(item);
    } else result.push([item]);
  });

  return result;
}

export { chunkArrayInGroups };
