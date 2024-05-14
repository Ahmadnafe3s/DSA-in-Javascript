class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() { 
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) { // Following LIFO push will be O(1)
            this.stackList[this.stackList.length] = value 
    }

    // there is no need to write condition for zero cause if stack is empty then length will be zero...

}

let myStack = new Stack();

myStack.push(5)
myStack.push(3)
myStack.push(2)

myStack.printStack()