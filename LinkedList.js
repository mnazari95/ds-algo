class Node {
    Node(data) {
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
            head = new Node(data)
            return;
        }

        let current = this.head
        while (current.next != null) {
            current = current.next
        }
        current.next = new Node(data);
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
}