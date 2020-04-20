var bstFromPreorder = function (preorder) {
  const insert = function (low, high) {
    if (preorder[0] < low || preorder[0] > high || preorder.length === 0) {
      return null;
    }
    let root = new TreeNode(preorder.shift());
    root.left = insert(low, root.val);
    root.right = insert(root.val, high);
    return root;
  };
  return insert(-Infinity, Infinity);
};
