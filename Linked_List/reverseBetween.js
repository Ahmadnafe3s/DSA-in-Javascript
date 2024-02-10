/*
                             STEPS FOR THIS ALGORITHMN
  --------------------------------------------------------------------------                           
 >> First of all we have to create a new list for starting to m - 1
 nodes or privious node of m (head tail must contain) if m === 0 then 
 doesnt store anything ex = StartingNode

 >> if m === 0 then mNode will store this.head other wise for difrrent m !== 0 mNode will contain sTail.next node.

 >> Second we have to create a new list for between list for m to n nodes
  tail must contian null 

 >> Third we will automatically find Ending Nodes by finding M to N (let ending = bTail.next)

 >> NOTE : betweenTail next must be provide null after assignig it to Ending
------------------------------------------------------------------------------
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }


    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }


    reverseBetween(m, n) {

        if (!this.head) return null
        if (m < 0 || n > this.length) return null
        if (m === n) return null

        let StartingNode = new Node(0)
        let sTail = StartingNode  // will store 0 to n-1 nodes of list (Separate list)

        let betweenNode = new Node(0) // A new list of m to n  
        let bTail = betweenNode // tail of btNode

        let temp = this.head
        let mNode = this.head

        if (m !== 0) {
            for (let i = 0; i < m; i++) {
                sTail.next = temp // 1 -> 2 ->
                sTail = temp
                temp = temp.next
            }

            mNode = sTail.next // tailed next node like 3 
        }

        while (m <= n) {
            bTail.next = mNode // 3 -> 4 -> 5
            bTail = mNode
            mNode = mNode.next
            m++
        }

        let Ending = bTail.next // between lists Next node

        bTail.next = null // null is import to stop iteration

        let temp2 = betweenNode.next
        betweenNode = bTail
        bTail = temp2
        let Next = temp2
        let pre = null

        while (Next) {
            Next = Next.next
            temp2.next = pre
            pre = temp2
            temp2 = Next
        }

        // 1 -> 2 ->
        sTail.next = betweenNode // 5 -> 4 -> 3
        bTail.next = Ending // null (for this senario)
        this.head = StartingNode.next
    }


}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 0;
const n = 3;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
