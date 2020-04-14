var stringShift = function (s, shift) {
  shift.forEach((arr) => {
    arr[0] === 0
      ? (s = s.substring(0 + arr[1]) + s.substring(0, arr[1]))
      : (s =
          s.substring(s.length - arr[1]) + s.substring(0, s.length - arr[1]));
  });
  return s;
};
