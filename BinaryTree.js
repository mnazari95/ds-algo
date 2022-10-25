class BinaryTree {

    BinaryTree(data) {
        this.data = data
    }

    insert(value) {
        //check in-order format
        //left->parent->right
        if (value <= this.data) {

            //null check for left
            if (this.leftChild == null) {
                this.leftChild = new BinaryTree(value)
            } else {
                this.leftChild.insert(value)
            }
        } else {
            if (this.rightChild == null) {
                this.rightChild = new BinaryTree(value)
            } else {
                this.rightChild.insert(value)
            }
        }
    }

    find(value) {
        if (value === this.data){
            return true
        }else if (value < this.data) {
            if (this.leftChild == null) {
                return false
            } else {
                return this.leftChild.find(value)
            }
        } else {
            if (this.rightChild == null) {
                return false
            } else {
                return this.rightChild.find(value)
            }
        }
    }

}