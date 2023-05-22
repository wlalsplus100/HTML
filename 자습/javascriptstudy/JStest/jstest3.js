function findSmallestElement(arr) {
  let smallest;
  if (arr.length == 0) return 0;
  arr.forEach((element) => {
    if (smallest === undefined) {
      smallest = element;
    } else if (smallest > element) {
      smallest = element;
    }
  });
  return smallest;
}

console.log(findSmallestElement([]));
