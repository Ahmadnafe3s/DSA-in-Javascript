class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.pre = null
    }
}

class DoublyLinkedlist {
    constructor(value) {
        let newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.pre = this.tail
            this.tail = newNode
        }

        this.length++
    }

    swapFirsLast() {
        if (this.length === 1 || !this.head) return undefined

        const H_after = this.head.next
        const T_before = this.tail.pre

        let temp = this.head

        this.head = this.tail
        this.tail.next = H_after
        H_after.pre = this.head
        this.head.pre = null

        this.tail = temp
        this.tail.next = null
        this.tail.pre = T_before
        T_before.next = this.tail
    }

    getLength() {
        console.log("Legnth : " + this.length);
    }

    getHead() {
        if (!this.head) {
            console.log("Empty Head!");
        } else {
            console.log("Head : " + this.head.value);
        }
    }

    getTail() {
        if (!this.head) {
            console.log("Empty Tail!");
        } else {
            console.log("Tail : " + this.tail.value);
        }
    }

    linkedList(description) {
        console.log(description);
        let temp = this.head
        while (temp) {
            console.log(temp.value);
            temp = temp.next
        }
    }

}

let DDL = new DoublyLinkedlist(4)

DDL.push(5)
DDL.push(6)
DDL.push(7)

DDL.getHead()
DDL.getTail()

DDL.getLength()

DDL.linkedList("Original List....")

DDL.swapFirsLast()

DDL.linkedList("After execute swapFunction...")
DDL.getHead()
DDL.getTail()
DDL.getLength()