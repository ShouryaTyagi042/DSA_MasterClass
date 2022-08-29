class Node {
    constructor(val) {
        this.val = val ;
        this.next = null ;
    }
}

class Stack {
    constructor() {
        this.first = null ;
        this.last = null ;
        this.size = 0 ;
    }
    push(val) {
        var node = new Node(val) ;
        if(!this.first) {
            this.first = node ;
            this.last = this.first ;
        }else {
            var temp = this.first ;
            node.next = this.first ;
            this.first = node ;
        }
        return ++this.size ;
    }
    pop() {
        if(!this.first) return null ;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null ;
        }
        this.first = temp.next ;
        return --this.length ;
    }

}
