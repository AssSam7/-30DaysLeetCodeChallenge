var moveZeroes = function (nums) {
  if (nums.length > 0) {
    const allNumsExceptZero = nums.filter((num) => num > 0 || num < 0);
    const zeros = nums.filter((num) => num === 0);
    const result = [...allNumsExceptZero, ...zeros];
    nums.splice(0, nums.length);
    result.forEach((n) => {
      nums.push(n);
    });
  }
};
