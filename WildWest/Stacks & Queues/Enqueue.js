class Node{
    constructor(val){
        this.value = val ;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0 ;
    }
    enqueue(val){
        var node = new Node(val) ;
        if(!this.first) {
            this.first = node ;
            this.last = this.first ;
        }
        else {
            this.last.next = node ;
            this.last = node ;
        }
       return ++this.size ;

    }
}

var queue = new Queue();
queue.enqueue(10) // 1

queue.enqueue(100) // 2

queue.enqueue(1000) // 3

console.log(queue.last.value)
