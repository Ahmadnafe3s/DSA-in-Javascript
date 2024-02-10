// WRITE NODE CLASS HERE //
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {

    constructor(value) {
        this.newNode = new Node(value)
        this.head = this.newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        this.newNode = new Node(value)
        if (!this.head) {
            this.head = this.newNode
            this.tail = this.newNode
        } else {
            this.tail.next = this.newNode
            this.tail = this.newNode
        }
        this.length++
    }

    pop() {
        if (!this.head) {
            console.log("Empty linked list..");
        } else {
            let temp = this.head
            let pre = this.head

            while (temp.next) {
                pre = temp
                temp = temp.next
            }

            this.tail = pre;
            this.tail.next = null
            this.length--

            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
        }
    }

    shift() {
        if (this.length === 0) {
            console.log("Empty linked list..");
            return null
        }

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let temp = this.head
            this.head = this.head.next
            temp.next = null
            console.log(`Item ${temp.value} Deleted..`);
        }
        this.length--
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        if (index < 0 || index >= this.length) {
            return undefined
        }

        let temp = this.get(index)

        if (temp) {
            temp.value = value
            return true
        }
        return false
    }


    insert(index, value) {

        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return undefined

        let newNode = new Node(value)
        let temp = this.get(index - 1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.length) return undefined

        const previous = this.get(index - 1)
        const current = previous.next // assigning current node 

        previous.next = current.next // next node of current node into previous node
        current.next = null
        this.length--

        console.log("Node Deleted");
        console.log(current);

    }


    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let previous = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = previous
            previous = temp
            temp = next
        }


        console.log(this.tail);
    }


    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    getNext() {
        console.log(this.newNode.next);
    }

    test() {
        console.log(this.head.next.next);
    }
}


function test() {
    let myLinkedList = new LinkedList(4);
    myLinkedList.push(6)
    myLinkedList.push(7)
    myLinkedList.push(8)
    myLinkedList.push(9)


    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();

    myLinkedList.insert(0, 1)
    myLinkedList.insert(6, 10)

    myLinkedList.reverse()
    console.log("\nAfter inSert :");
    myLinkedList.printList();
    myLinkedList.getLength();

}

test();
