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
}
