var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    // Get the first max from the input i.e. y and remove that
    let y = Math.max(...stones);
    stones.splice(stones.indexOf(y), 1);

    // Get the second max from the input i.e. x and remove that
    let x = Math.max(...stones);
    stones.splice(stones.indexOf(x), 1);

    if (x !== y) {
      stones.push(y - x);
    }
  }

  return stones;
};
