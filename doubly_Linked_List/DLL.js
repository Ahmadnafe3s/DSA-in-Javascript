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



    pop() {
        if (this.length === 0) {
            console.log("Empty LinkedList..");
            return undefined
        }

        let temp = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.pre
            this.tail.next = null
            temp.next = null
        }
        this.length--

        console.log(`Node ${temp.value} Poped..`);

    }


    unshift(value) {

        if (!this.head) {
            this.push(value)
        } else {
            const newNode = new Node(value)
            newNode.next = this.head
            this.head.pre = newNode // head will become second node by each call and also it pre is null thats why need to point pre to 1st node
            this.head = newNode // making forth node = head so that (otherwise printing will not work..)
        }

        this.length++
    }


    shift() {
        if (this.length === 0) return null

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.pre = null
        }
        this.length--
    }


    get(index) {
        if (index < 0 || index >= this.length) return null

        let indexNode = this.head
        if (index < this.length / 2) {  // if index will less than half list then iteration will be from initial to 1st half...
            for (let i = 0; i < index; i++) {
                indexNode = indexNode.next
            }
        } else {
            indexNode = this.tail
            for (let i = this.length - 1; i > index; i--) {  // loop will execute untill i become greater than index if 2 > 2 then false
                indexNode = indexNode.pre
            }
        }

        return indexNode
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return "Inavlid Index."
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return "Invalid Index."

        const before = this.get(index - 1)
        const after = before.next
        const newNode = new Node(value)

        before.next = newNode
        newNode.pre = before

        newNode.next = after
        after.pre = newNode
        this.length++
    }


    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const temp = this.get(index)
        if (temp) {
            const before = temp.pre // kth index next node
            const after = temp.next // kth index next node

            before.next = after
            after.pre = before
            this.length--
            temp.pre = null
            temp.next = null
            return temp
        }
        return false
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
// DDL.push(7)

DDL.getHead()
DDL.getTail()

DDL.getLength()

DDL.linkedList("Original List....")

// DDL.pop()

DDL.unshift(8)
DDL.unshift(9)

DDL.linkedList("List After unshif...")
DDL.getLength()

DDL.shift()

DDL.linkedList("List After Shift...")
DDL.getHead()
DDL.getTail()
DDL.getLength()


let node = DDL.get(1)
console.log(node.value)



let result = DDL.set(2, 55)
console.log(result);

DDL.linkedList("List After Set...")



result = DDL.insert(2, 18)
console.log(result);

DDL.linkedList("List After insert..")

DDL.getHead()
DDL.getTail()
DDL.getLength()

result = DDL.remove(2)
console.log(result);

DDL.linkedList("List After remove..")
DDL.getHead()
DDL.getTail()
DDL.getLength()