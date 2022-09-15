class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        return this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this.values ;
    }
    extractMax() {
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
                if(left > element) {
                    swap = leftidx ;
                }
            }
            if (rightidx < length ) {
                right = this.values[rightidx] ;
                if (( swap === null && right > element ) || ( swap != null && right > left )) {
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values) ;

console.log(heap.values)
[41,39,33,18,27,12]
