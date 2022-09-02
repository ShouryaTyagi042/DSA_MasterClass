class MaxBinaryHeaps {
    constructor() {
        this.values = []  ;
        this.length = 0 ;
    }
    insert(val) {
        this.values.push(val) ;
        this.length ++ ;
        this.bubbleUp() ;
    }
    bubbleUp() {
        var index = this.length - 1 ;
        const element = this.values[index] ;
        while(index > 0 ) {
            var parentIndex = Math.floor((index - 1)/2) ;
            let parent = this.values[parentIndex] ;
            if(parent >= element) break ;
            this.values[parentIndex] = element ;
            this.values[index] = parent ;
            index = parentIndex ;
        }
    }

}

var heap = new MaxBinaryHeaps() ;
heap.values = [41,39,33,18,27,12,55] ;
