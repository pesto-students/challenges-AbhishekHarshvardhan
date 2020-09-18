function lastIndexOf(searchTerm, list) {
  let result = -1;
  list.forEach((element, elementIndex) => {
    if (element === searchTerm) result = elementIndex;
  });
  return result;
}

export { lastIndexOf };
