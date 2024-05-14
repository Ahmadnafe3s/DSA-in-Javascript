
//  both stacks we have to use.....
/*
fist element always on peak as per the queue ....
this achive by the enque method 
    |  1 | 3
    |  2 | 2
    |  4 | 1
    | _3_| 0

*/
class Stack {
    constructor() {
        this.stackList = [];
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

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }

}



class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    peek() {
        return this.stack1.peek();
    }

    isEmpty() {
        return this.stack1.isEmpty();
    }


    enqueue(value) {


        if (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop())
        }

        this.stack1.push(value) // 1st element always should be peak .....

        if (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop())
        }

    }

}


const queue = new MyQueue();

console.log("Is the queue empty? ", queue.isEmpty());

queue.enqueue(1);
console.log("Peek after enqueueing 1: ", queue.peek());

queue.enqueue(2);
console.log("Peek after enqueueing 2: ", queue.peek());

queue.enqueue(3);
console.log("Peek after enqueueing 3: ", queue.peek());

console.log("Is the queue empty? ", queue.isEmpty());



/*
    EXPECTED OUTPUT:
    ----------------
    Is the queue empty?  true
    Peek after enqueueing 1:  1
    Peek after enqueueing 2:  1
    Peek after enqueueing 3:  1
    Is the queue empty?  false

*/