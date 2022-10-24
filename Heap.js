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
        if (this.size === 0) {
            this.data.push(value)
        }else{
            //add bottom of list
            this.data.push(value)
            //heapify newly inserted value within the list
            for (let i = parseInt(this.data.length / 2 - 1); i >= 0; i--) {
                this.maxHeapify(this.data, this.data.length, i);
            }
        }
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