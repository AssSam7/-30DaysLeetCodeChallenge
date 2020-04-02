var isHappy = function(n, counter = 0) {
  result = false;
  if (counter < 8) {
    let num = n
      .toString()
      .split("")
      .map(n => n * n);
    // Reduce above digits to its sum
    let sum = num.reduce((acc, cur) => acc + cur, 0);
    if (sum === 1) {
      return (result = true);
    } else {
      // console.log(num, sum, counter);
      counter++;
      isHappy(sum, counter);
    }
  }

  return result;
};
