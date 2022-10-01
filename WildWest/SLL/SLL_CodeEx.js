class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}
class SinglyLinkedList{

    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val) ;
        if(!this.head) {
            this.head = newNode ;
            this.tail = this.head ;
        }
        else {
            this.tail.next = newNode ;
            this.tail = newNode ;
        }
        this.length ++ ;
        return this ;
    }
    pop() {
        if(!this.head) return undefined ;
        var current = this.head ;
        var newTail = current ;
        while(current.next) {
            newTail = current ;
            current = current.next ;
        }
        this.tail  = newTail ;
        this.tail.next = null ;
        this.length -- ;
        if (this.length === 0) {
            this.head = null ;
            this.tail = null ;
        }
        return current ;
    }
    get(index) {
        if(index >= this.length || index < 0) return null  ;
        var counter = 0 ;
        var current = this.head ;
        while (counter !== index ) {
            current = current.next ;
            counter ++ ;
        }
        return current ;
    }
    unShift(val) {
        var newNode = new Node(val) ;
        var oldHead = this.head ;
        this.head = newNode ;
        this.head.next = oldHead ;
        this.length ++ ;
        return true ;
    }
    insert(index,val) {
        if (index > this.length || index < 0 ) return false ;
        if (index === this.length) return !! this.push(val) ;
        if (index === 0) return this.unShift(val) ;
        var prevNode = this.get(index-1) ;
        var nextNode = this.get(index) ;
        var newNode = new Node(val) ;
        prevNode.next = newNode ;
        newNode.next = nextNode ;
        this.length ++ ;
        return true ;
    }
    set(index,val){
        if (index >= this.length || index < 0 ) return false ;
        var counter =  0;
        var current = this.head ;
        while (counter !== index) {
            current = current.next ;
            counter ++ ;
        }
        current.val  = val ;
        return true ;
    }
    rotate(val) {
        if (val===0 || Math.abs(val)%this.length === 0) return true ;
        if (val < 0 )  val = this.length - (Math.abs(val) % this.length) ;
        else val = val % this.length ;
        console.log(val) ;
        var current  = this.head ;
        var counter = 0 ;
        while(counter !==  val ) {
            this.push(current.val) ;
            this.head = current.next ;
            current = current.next ;
            counter ++ ;
        }
        return true ;
    }
    remove(val,index) {
        var counter = 0 ;
        var current = this.head ;
        while(current !== index) {

        }
    }
}

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.rotate(-1);
console.log(singlyLinkedList.tail.val ) ;




