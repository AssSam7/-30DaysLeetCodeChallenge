var countElements = function (arr) {
  let cntInc = 0;
  arr.forEach((num) => {
    if (arr.includes(num + 1)) {
      cntInc++;
    }
  });
  return cntInc;
};
