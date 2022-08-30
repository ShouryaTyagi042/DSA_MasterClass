class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (current.val === val)
                return undefined;
            if (current.val > val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
                if (current.val < val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

}

var tree = new BST();
tree.insert(10) ;
tree.insert(34) ;
tree.insert(3) ;
tree.insert(6) ;

