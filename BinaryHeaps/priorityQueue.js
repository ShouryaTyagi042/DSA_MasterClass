class Node {
    constructor(val,priority) {
        this.val = val  ;
        this.priority = priority ;
    }
}
class priorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(element,priority){
        let newNode = new Node(element,priority) ;
        this.values.push(newNode);
        return this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this.values ;
    }
    dequeue() {
        const max = this.values[0] ;
        const end = this.values.pop() ;
        this.values[0] = end ;
        this.sinkDown() ;
        return max
    }
    sinkDown() {
        let idx = 0 ;
        let length = this.values.length ;
        let element = this.values[idx] ;
        while (true) {
            let leftidx = 2 * idx + 1 ;
            let rightidx = 2 * idx + 2 ;
            let left,right ;
            let swap = null ;
            if (leftidx < length) {
                left = this.values[leftidx] ;
                if(left.priority > element.priority) {
                    swap = leftidx ;
                }
            }
            if (rightidx < length ) {
                right = this.values[rightidx] ;
                if (( swap === null && right.priority > element.priority ) || ( swap != null && right.priority > left.priority )) {
                        swap = rightidx ;
                    }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap] ;
            this.values[swap] = element ;
            idx = swap ;
        }


    }
}

let Er = new priorityQueue() ;
Er.enqueue("common cold",1) ;
Er.enqueue("gunshot wound",5) ;
Er.enqueue("High Fever",2) ;
