class Heap {
    
    constructor() {
        this.data = [];
        this.size = 0;
    }

    maxHeapify(arr, n, i) {

        //index
        let largest = i
        let leftChild = 2 * i + 1;
        let rightChild = 2 * i + 2;

        //compare with left child
        if (leftChild < n && arr[leftChild] > arr[largest]) {
            largest = leftChild;
        }

        //compare with right child
        if (rightChild < n && arr[rightChild] > arr[largest]) {
            largest = rightChild;
        }

        if (largest != i) {
            //swap
            let temp = arr[i]
            arr[i] = arr[largest]
            arr[largest] = temp

            //recursive call heapify
            this.maxHeapify(arr, n, largest)
        }
    }

    insert(value) {

    }

    delete(value) {

    }

    pop(value) {

    }

    pull() {

    }

    isEmpty() {
        return size == 0
    }


}