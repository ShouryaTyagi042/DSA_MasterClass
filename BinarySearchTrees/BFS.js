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
            if (current.val === val)  return undefined;
            if (current.val > val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left ;
            }
            if(current.val < val ) {
                if(current.right === null ) {
                    current.right = newNode ;
                    return this;
                }
                current = current.right ;
            }
        }
    }
    find(val) {
        if (this.root === null ) return false ;
        var current = this.root ;
        var found = false ;
        while( current && !found) {
            if(current.val < val) {
                current = current.right ;
            }
            if(current.val > val) {
                current = current.left ;
            }
            else {
                return true ;
            }
        }
        return false ;
    }
    BFS() {
        var node = this.root ,
            queue = [] ,
            data = [] ;
        queue.push(node) ;
        while(queue.length) {
            node = queue.shift() ;
            data.push(node.val) ;
            if(node.left) queue.push(node.left) ;
            if(node.right) queue.push(node.right) ;
        }
        return data ;
    }

}

var tree = new BST();
tree.insert(10) ;
tree.insert(34) ;
tree.insert(3) ;
tree.insert(6) ;

