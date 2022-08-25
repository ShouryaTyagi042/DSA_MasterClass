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
    shift() {
        if(!this.head) return undefined ;
        var shifted = this.head ;
        if(this.length == 1) {
            this.head = null ;
            this.tail = this.head ;
        }else {
                this.head = shifted.next ;
                this.head.prev = null ;
                shifted.next = null ;
        }
        this.length -- ;
        return this;
    }
    unShift(val) {
        var newNode = new Node(val) ;
        if(!this.head) {
            this.head = newNode ;
            this.tail = this.head ;
        }
        this.head.prev = newNode ;
        newNode.next = this.head ;
        this.head  = newNode ;
        this.length ++ ;
        return this ;
    }
    get(index) {
        if(index >= this.length || index < 0) {
            return null ;
        }
        if (index <= this.length/2 ) {
            var counter = 0 ;
            var current = this.head ;
            while (counter !== index ) {
                current = current.next ;
                counter ++ ;
            }
            return current ;
        }
        else {
            var counter = this.length - 1 ;
            var current = this.tail ;
            while (counter !==  index) {
                current = current.prev ;
                counter -- ;
            }
            return current ;
        }

    }
    set(index,val) {
        var foundNode = this.get(index) ;
        if(foundNode) {
            foundNode.val = val ;
            return true ;
        }
        return false ;
    }

}

var list = new doublyLinkedList() ;
list.push("hello") ;
list.push("Gooodbye") ;
list.push("yo") ;
list.push("!") ;
list.push("up") ;
