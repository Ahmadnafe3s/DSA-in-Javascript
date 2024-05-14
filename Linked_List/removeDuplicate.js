class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Linked_List {
    constructor() {
        this.length = 0
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    printList() {
        let temp = this.head
        console.log("Linked List")
        for (let i = 0; i < this.length; i++) {
            console.log(temp.value)
            temp = temp.next
        }
        console.log("Length : " + this.length)
    }

    removeDuplicate() {
        // let current = this.head
        // while (current) {
        //     let next = current.next
        //     let previous = current

        //     while (next) {
        //         if (current.value === next.value) {
        //             previous.next = next.next
        //             this.length--
        //         } else {
        //             previous = previous.next
        //         }

        //         next = next.next
        //     }
        //     current = current.next
        // }

        

        //   also can use set method
        let current = this.head
        let previous = null
        let newSet = new Set()

        while (current) {
            if (newSet.has(current.value)) {
                previous.next = current.next
                this.length--
            } else {
                newSet.add(current.value)
                previous = current  // will one step behind from current..
            }

            current = current.next
        }
    }
}
  

let myLinkedList = new Linked_List()

myLinkedList.push(1)
myLinkedList.push(1)
myLinkedList.push(1)
myLinkedList.push(3)
myLinkedList.push(2)
myLinkedList.push(4)
myLinkedList.push(4)
myLinkedList.push(2)
myLinkedList.push(2)
myLinkedList.push(6)
myLinkedList.push(8)
myLinkedList.push(8)

myLinkedList.printList()

myLinkedList.removeDuplicate()

console.log("After Removing")

myLinkedList.printList()