var groupAnagrams = function (strs) {
  const res = {};
  strs.forEach((s) => {
    const key = [...s].sort();
    res[key] ? res[key].push(s) : (res[key] = [s]);
  });
  return Object.values(res);
};
