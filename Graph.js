var Graph = /** @class */ (function () {
    function Graph(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.adjList = new Map();
    }
    Graph.prototype.printGraph = function () {
        // get all the vertices
        var getKeys = this.adjList.keys();
        // iterate over the vertices
        for (var _i = 0, getKeys_1 = getKeys; _i < getKeys_1.length; _i++) {
            var i = getKeys_1[_i];
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.adjList.get(i);
            var conc = "";
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var _a = 0, get_values_1 = get_values; _a < get_values_1.length; _a++) {
                var j = get_values_1[_a];
                conc += j + " ";
            }
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    };
    Graph.prototype.addEdge = function (v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    };
    Graph.prototype.addVertex = function (v) {
        this.adjList.set(v, []);
    };
    Graph.prototype.searchBFS = function (startingNode) {
        var visited = {};
        // Create an object for queue
        var q = new Array();
        // add the starting node to the queue
        visited[startingNode] = true;
        q.push(startingNode);
        // loop until queue is empty
        while (q.length != 0) {
            // get the element from the queue
            var getQueueElement = q.shift();
            // passing the current vertex to callback function
            console.log(getQueueElement);
            // get the adjacent list for current vertex
            var getList = this.adjList.get(getQueueElement);
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
    };
    Graph.prototype.searchDFS = function (startingNode) {
        var visited = {};
        this.dfsSearch(startingNode, visited);
    };
    Graph.prototype.dfsSearch = function (vert, visited) {
        visited[vert] = true;
        console.log(vert);
        var getNeighbours = this.adjList.get(vert);
        for (var i in getNeighbours) {
            var getElm = getNeighbours[i];
            if (!visited[getElm]) {
                this.dfsSearch(getElm, visited);
            }
        }
    };
    return Graph;
}());
