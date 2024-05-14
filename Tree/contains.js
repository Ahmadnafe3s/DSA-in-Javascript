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


    contains(value) {
        if (this.root === null) return false

        let temp = this.root

        while (temp) { //should iterate untill gets null
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }
    

    display() {
        console.log(this.root);
    }
}

let myTree = new Tree()

myTree.insert(20)
myTree.insert(22)
myTree.insert(19)
myTree.insert(17)
myTree.insert(26)
myTree.insert(23)

let conatinsResult = myTree.contains(23)

console.log(conatinsResult);

myTree.display()