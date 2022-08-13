function dfs (tree, target, diff) {
  if (!tree) return;

  const currentDiff = Math.abs(target - tree.value);
  if (currentDiff < diff.value) {
    diff.closest = tree.value;
    diff.value = currentDiff;
  }

  if (target < tree.value) dfs(tree.left, target, diff);
  else if (target > tree.value) dfs(tree.right, target, diff);
}

function findClosestValueInBst(tree, target) {
  const diff = { value: Infinity, closest: null }
  dfs(tree, target, diff);
  return diff.closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// o(log(n)) time and o(log(n)) space
