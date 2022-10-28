class Graph {

  private numOfVertices: number;
  private adjList: Map<any, any>;

  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adjList = new Map<any, any>()

  }

  printGraph() {
    // get all the vertices
    var getKeys = this.adjList.keys();

    // iterate over the vertices
    for (var i of getKeys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.adjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  addEdge(v: number, w: number) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  addVertex(v: number) {
    this.adjList.set(v, [])
  }

  searchBFS(startingNode) {
    let visited = {};

    // Create an object for queue
    let q = new Array();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.push(startingNode);

    // loop until queue is empty
    while (q.length != 0) {
      // get the element from the queue
      let getQueueElement = q.shift();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      let getList = this.adjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in getList) {
        var neigh = getList[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }

  searchDFS(startingNode) {
    let visited = {};
    this.dfsSearch(startingNode, visited)
  }

  dfsSearch(vert, visited) {
    visited[vert] = true;
    console.log(vert);
    

    let getNeighbours = this.adjList.get(vert);

    for(let i in getNeighbours) {
      let getElm =getNeighbours[i];
      if(!visited[getElm]) {
        this.dfsSearch(getElm, visited);
      }
    }
  }
  // hasPathDFS(source, destination) {
  //     let s = this.getNode(source)
  //     let d = this.getNode(destination)

  //     let visited = Array()
  //     return this.#hasPathDFS(s, d, visited);
  // }

  // //private class method
  // #hasPathDFS(source, destination, visited) {
  //     if (visited.includes(source.id)) {
  //         return false
  //     }
  //     visited.push(source.id);
  //     if (source == destination) {
  //         return true;
  //     }

  //     for (let child in source.adjacentNodes) {
  //         if (this.#hasPathDFS(child, destination, visited)) {
  //             return true;
  //         }
  //     }
  //     return false;
  // }

  // hasPathBFS(source, destination) {
  //     return this.#hasPathBFS(this.getNode(source), this.getNode(destination));
  // }

  // #hasPathBFS(source, destination) {
  //     let nextToVisit = new LinkedList()
  //     let visited = new Array()
  //     nextToVisit.append(source)
  //     while (nextToVisit.isEmpty()) {
  //         let node = nextToVisit.remove();
  //         if (node == destination) {
  //             return true
  //         }

  //         if (visited.includes(node.id)) {
  //             continue;
  //         }

  //         visited.push(node.id);
  //         for (let child in this.#nodeRef.adjacentNodes) {
  //             nextToVisit.append(child)
  //         }
  //     }
  //     return false;
  // }


}