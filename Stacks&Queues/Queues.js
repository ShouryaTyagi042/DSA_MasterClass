class Node {
    constructor(val) {
        this.val = val ;
        this.next = null ;
    }
}

class Queue {
    constructor() {
        this.first = null ;
        this.last = null ;
        this.size = 0 ;
    }
    enqueue(val) {
        var node = new Node(val) ;
        if(!this.first) {
            this.first = node ;
            this.tail = this.first;
        }
        else {
            this.last.next = node ;
            this.last = node ;
        }
        return ++this.size ;

    }
    dequeue() {

    }

}
