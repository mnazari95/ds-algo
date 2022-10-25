class Heap {
    
    constructor() {
        this.data = [];
        this.size = 0;
    }

    maxHeapify(arr, n, i) {

        //index
        let largest = i
        let leftChildIndex = 2 * i + 1;
        let rightChildIndex = 2 * i + 2;

        //compare with left child
        if (leftChildIndex < n && arr[leftChildIndex] > arr[largest]) {
            largest = leftChildIndex
;
        }

        //compare with right child
        if (rightChildIndex < n && arr[rightChildIndex] > arr[largest]) {
            largest = rightChildIndex;
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
            this.size += 1;
        }else{
            //add bottom of list
            this.data.push(value)
            this.size += 1;
            //heapify newly inserted value within the list
            for (let i = parseInt(this.data.length / 2 - 1); i >= 0; i--) {
                this.maxHeapify(this.data, this.data.length, i);
            }
        }
        
    }

    delete(value) {

        let i
        for(i = 0; i < this.size; i++) {
            if (value === this.data[i]){
                break;
            }
        }

        //swap
        [this.data[i], this.data[this.size - 1]] = [this.data[this.size - 1], this.data[i]];
        //remove
        this.data.splice(this.size - 1);
        
        for (let i = parseInt(this.data.length / 2 - 1); i >= 0; i--) {
            this.maxHeapify(this.data, this.size, i);
        }
    }

    pop() {
        const max = this.data[0]
        this.delete(max)
        this.size -= 1;
        return max
    }

    pull() {
        this.data[0]
    }

    isEmpty() {
        return this.size === 0
    }

    heapSize() {
        return this.size
    }


}