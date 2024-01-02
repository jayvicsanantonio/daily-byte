class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.traverse(this.root, value);
    }

    return this.root;
  }

  traverse(currentNode, value) {
    if (!currentNode) {
      return new Node(value);
    }

    if (value < currentNode.value) {
      currentNode.left = this.traverse(currentNode.left, value);
    } else if (value > currentNode.value) {
      currentNode.right = this.traverse(currentNode.right, value);
    }

    return currentNode;
  }
}

const bst = new BST();
bst.insert(4);
bst.insert(10);
bst.insert(8);
bst.insert(4);
bst.insert(2);
bst.insert(3);
