class Node {
    constructor(val) {
        this.val = val ;
        this.next = null ;
    }
}
class singlyLinkedList {
    constructor(){
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
        else{
            this.tail.next = newNode ;
            this.tail = newNode ;
        }
        this.length++ ;
        return this ;

    }
    pop(){

    }
}

var list = new singlyLinkedList() ;
list.push("hello") ;
list.push("Gooodbye") ;
list.push("!")