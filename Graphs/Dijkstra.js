class priorityQueue {
    constructor() {
        this.values = [] ;
    }
enqueue(val,priority) {
    this.values.push({val,priority}) ;
    this.sort() ;
}
dequeue() {
    return this.values.shift() ;
}
sort() {
    this.values.sort((a,b) => a.priority - b.priority) ;
}

}

class weightedGraph {
        constructor() {
        this.adjacencylist = {} ;
    }
    addVertex(vertex) {
        if(!this.adjacencylist[vertex]) this.adjacencylist[vertex] = [] ;
    }
    addEdge(v1,v2,weight) {
        this.adjacencylist[v1].push({node:v1,weight}) ;
        this.adjacencylist[v2].push({node:v2,weight}) ;
    }
    Dijkstra(start,end) {
        const nodes = new priorityQueue() ;
        const distances = {} ;
        const previous = {} ;
        for (let vertex in this.adjacencylist) {
            if(vertex === start ) {
                distances[vertex] = 0 ;
                nodes.enqueue(vertex,0)
            }
            else {
                distances[vertex] = Infinity ;
                nodes.enqueue(vertex,Infinity) ;
            }
            previous[vertex] = null ;
        }

    }
}




