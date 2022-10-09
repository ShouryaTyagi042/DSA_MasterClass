class Node{
    constructor(val){
        this.value = val;
        this.next = null ;
    }
}

class Stack{
    constructor(val){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var node = new Node(val) ;
        if (!this.first) {
            this.first = node ;
            this.last = this.first ;
        }
        else {
            node.next = this.first ;
            this.first = node ;
        }
        return ++this.size ;
    }
    pop() {
        if(!this.first) return undefined ;
        var removed = this.first ;
        if (this.first == this.last) this.last = null ;
        this.first = this.first.next ;
        this.size-- ;
        return removed.value ;
    }
}
