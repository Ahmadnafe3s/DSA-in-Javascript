// finding middle node odd length
// second middle node for even length

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

  middleNode() {
    let temp = this.head

    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      temp = temp.next
    }
    console.log("Middle Node : " + temp.value)
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return Undefined
    }

    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return "Index of : " + index + " Value : " + temp.value
  }
}

let myLinkedList = new Linked_List()

myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(6)
myLinkedList.push(7)
// myLinkedList.push(7)

myLinkedList.printList()

myLinkedList.middleNode()

let getNode = myLinkedList.get(6)
console.log(getNode)