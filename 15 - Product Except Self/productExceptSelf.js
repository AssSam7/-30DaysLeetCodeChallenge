var productExceptSelf = function (nums) {
  // Approach 1
  nums = nums.map((_, i) => {
    return nums.reduce((prod, val, j) => {
      return prod * (i === j ? 1 : val);
    }, 1);
  });
  console.log(nums);
  return nums;

  // Approach 2
  nums = nums.map((item, i, arr) => {
    item = arr.slice();
    item.splice(i, 1);
    return item.reduce((a, b) => a * b);
  });
  return nums;
};
