var singleNumber = function(nums) {
  const dups = nums.filter((item, index) => nums.indexOf(item) !== index);
  const res = [];
  nums.forEach(item => {
    if (!dups.includes(item)) {
      res.push(item);
    }
  });
  console.log(res.join(""));
  return res.join("");
};
