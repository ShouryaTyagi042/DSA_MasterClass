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
        if (!this.head) return undefined ;
        var current = this.head ;
        var newTail = current ;
        while(current.next) {
            newTail = current ;
            current = current.next ;
        }
        this.tail = newTail ;
        this.tail.next = null ;
        this.length -- ;
        if(this.length == 0) {
            this.tail = null ;
            this.head = null ;
        }
        return current ;
    }
    shift(){
        if(!this.head) return undefined ;
        var remove = this.head ;
        this.head =  remove.next ;
        this.length -- ;
        return remove ;
    }
    unShift(val) {
        var newNode = new Node(val) ;
        if(!this.head) {
            this.head = newNode ;
            this.tail = this.head ;
        }else {
        newNode.next = this.head ;
        this.head = newNode ;
        }

        this.length++ ;
        return this ;
     }
    get(index) {
        if(index >= this.length || index < 0) {
            return null ;
        }
        let counter = 0 ;
        var current = this.head ;
        while (counter !== index) {
            current = current.next ;
            counter++ ;
        }
        return current ;
    }
    set(index,val) {
        var foundNode = this.get(index) ;
        if(foundNode) {
            foundNode.val = val ;
            return true ;
        }
        return false ;
    }
    insert(index,val) {
        if(index < 0 || index > this.length) return false ;
        if(index === this.length)return !! this.push(val) ;
        if(index === 0)return !! this.unShift(val) ;
        var newNode = new Node(val) ;
        var prevNode  = this.get(index-1) ;
        var temp = prevNode.next ;
        prevNode.next = newNode ;
        newNode.next = temp ;
        this.length++;
        return true ;
    }
}




var list = new singlyLinkedList() ;
list.push("hello") ;
list.push("Gooodbye") ;
list.push("!")
