class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            if (newNode.value === temp.value) return undefined
            if (value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    display() {
        console.log(this.root);
    }
}

let myTree = new Tree()


myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)


myTree.display()