var subarraySum = function (nums, k) {
  let len = nums.length;
  if (len > 0) {
    let subsK = 0;
    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
        sum += nums[j];
        if (sum === k) {
          subsK++;
        }
      }
    }
    return subsK;
  }
  return -2147483648;
};
