var findMaxLength = function (nums) {
  const memo = new Map();
  memo.set(0, -1);
  let cnt = 0,
    maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? cnt-- : cnt++;
    if (memo.has(cnt)) {
      maxLen = Math.max(maxLen, i - memo.get(cnt));
    } else {
      memo.set(cnt, i);
    }
    if (memo.has(cnt) === -1) {
      memo.set(cnt, i);
    }
  }
  return maxLen;
};
