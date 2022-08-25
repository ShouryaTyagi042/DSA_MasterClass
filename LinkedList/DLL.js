class Node {
    constructor(val) {
        this.val = val ;
        this.next = null ;
        this.prev = null ;
    }
}

class doublyLinkedList{
    constructor() {
        this.head = null ;
        this.tail = null ;
        this.length = 0 ;
    }
    push(val) {
        var newNode = new Node(val) ;
        if(!this.head) {
            this.head = newNode ;
            this.tail = this.head ;
        }
        else {
            this.tail.next = newNode ;
            newNode.prev = this.tail ;
            this.tail = newNode ;
        }
        this.length++ ;
        return this ;
    }
    pop() {
        if(!this.head) return undefined ;
        var remove = this.tail ;
        if(this.length === 1) {
            this.head = null ;
            this.tail = this.head ;
        }
        this.tail = remove.prev ;
        this.tail.next = null ;
        remove.prev = null ;
        this.length -- ;
        return remove ;
    }
}

var list = new doublyLinkedList() ;
list.push("hello") ;
list.push("Gooodbye") ;
list.push("yo") ;
list.push("!") ;
list.push("up") ;
