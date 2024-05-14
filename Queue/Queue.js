// following the pattern of FIFO which means First item will delete first of all
//  LIKE : 1-2-3-4-5 after Dequeue 2-3-4-5
// Items will Append behind their forth

// in all queue stack and linked list Node will remain same... except doubly linked list..

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Queue {
    constructor(value) {
        const newNode = new Node(1);

        this.first = newNode
        this.last = this.first
        this.length = 1
    }

    Enqueue(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.first = newNode
            this.last = this.first
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
    }

    DeQueue() {
        if (this.length === 0) return console.log("Empty Queue..");

        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }

        this.length--;
    }


    printQueue() {
        let temp = this.first
        console.log("Queue......");
        while (temp) {
            console.log(temp.value);
            temp = temp.next
        }
    }
}


const myQueue = new Queue(1)

myQueue.Enqueue(2)
myQueue.Enqueue(3)

myQueue.DeQueue()

myQueue.printQueue()