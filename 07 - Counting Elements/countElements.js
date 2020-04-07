var countElements = function (arr) {
  let count = 0;
  arr.forEach((num) => {
    if (arr.includes(num + 1)) {
      count++;
    }
  });
  return count;
};
