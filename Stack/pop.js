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


    pop() { // LIFO pop will be O(1)

        if (this.stackList.length === 0) return null
        let poppedValue = this.stackList[this.stackList.length-1]
        this.stackList.length--
        return poppedValue
    }


}

let myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)

myStack.printStack()

let poppedValue = myStack.pop()

console.log("Popped : " + poppedValue);

myStack.printStack()
