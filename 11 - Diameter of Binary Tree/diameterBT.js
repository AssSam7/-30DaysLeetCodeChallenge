var diameterOfBinaryTree = function (root) {
  let max = 0;

  function maxDepth(root) {
    if (root === null) {
      return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  }

  maxDepth(root);
  return max;
};
