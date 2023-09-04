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
      this.insertHelper(this.root, value);
    }

    return this.root;
  }

  insertHelper(currentNode, value) {
    if (!currentNode) {
      return new Node(value);
    }

    if (value < currentNode.value) {
      currentNode.left = this.insertHelper(currentNode.left, value);
    } else if (value > currentNode.value) {
      currentNode.right = this.insertHelper(currentNode.right, value);
    }

    return currentNode;
  }

  inorderTraversal(currentNode) {
    if (!currentNode) {
      return;
    }

    this.inorderTraversal(currentNode.left);
    console.log(currentNode.value);
    this.inorderTraversal(currentNode.right);
  }
}

const bst = new BST();
bst.insert(4);
bst.insert(10);
bst.insert(8);
bst.insert(6);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(9);
bst.insert(7);
bst.insert(5);

bst.inorderTraversal(bst.root);
