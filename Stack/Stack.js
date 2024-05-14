class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.top) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }

        this.length++
    }

    pop() {
        if (this.length === 0) return null

        if (this.length === 1) {
            this.top = null
        } else {
            this.top = this.top.next
        }
        this.length--
    }

    printStack() {

        let temp = this.top

        if (this.length === 0) {
            console.log(".....empty stack.....");
        } else {
            console.log("Your Stack.....");
        }

        while (temp) {
            console.log(temp.value);
            temp = temp.next
        }
        
    }

    printLength() {
        console.log("Length : " + this.length);
    }
}

const myStack = new Stack(5)

myStack.push(6)
myStack.push(7)

myStack.pop()

myStack.printStack()
myStack.printLength()