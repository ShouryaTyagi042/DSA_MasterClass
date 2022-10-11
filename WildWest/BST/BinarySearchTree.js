class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return undefined;
    var current = this.root;
    var found = false;
    while (current) {
      if (value < current.value) {
        current = current.left;
      }
      if (current.value === value) {
        return current;
      } else {
        current = current.right;
      }
    }
  }
  depthFirstSearchPostOrder()  {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) return traverse(node.left);
      if (node.right) return traverse(node.right);
    }
    traverse(current);
    return data;
  }
  depthFirstSearchPreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) return traverse(node.left);
      if (node.right) return traverse(node.right);
    }
    traverse(current);
    return data;
  }
  depthFirstSearchInOrder()  {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) return traverse(node.left);
      if (node.right) return traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.find(13));
