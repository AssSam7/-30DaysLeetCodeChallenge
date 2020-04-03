var maxSubArray = function(nums) {
  let len = nums.length;
  if (len > 0) {
    let sum = 0,
      maxSum = 0;
    nums.forEach(num => {
      sum += num;
      if (sum > maxSum) {
        maxSum = sum;
      }
      if (sum < 0) {
        sum = 0;
      }
    });
    return sum === 0 && maxSum === 0 ? Math.max(...nums) : maxSum;
  }
  return -2147483648;
};
