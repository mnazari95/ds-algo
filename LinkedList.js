class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}
class LinkedList {

    LinkedList() {
        this.head = null
    }

    append(data) {

        if (this.head == null) {
            this.head = new Node(data)
            return;
        }

        let current = this.head
        while (current.next != null) {
            current = current.next
        }
        current.next = new Node(data);
    }

    isEmpty() {
        return this.head == null;
    }

    prepend(data) {
        let newHead = new Node(data)
        newHead.next = this.head;
        this.head = newHead
    }

    deleteWithValue(data) {
        if (this.head == null) {
            return;
        }
        if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    //removes first node in list and returns the node
    remove() {
        if (this.isEmpty()) {
            return Error("there is nothing to remove")
        }

        let firstNode = this.head
        let secondNode = this.head.next
        this.head = secondNode
        firstNode.next = null
        return firstNode
    }
}