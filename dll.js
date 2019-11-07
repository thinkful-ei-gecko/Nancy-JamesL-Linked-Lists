class _Node {
    constructor(value, next, prev) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head, null)
        // this.tail === null ? this.tail = this.head : this.tail = this.tail.next
        // this.tail = current.next
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            let newNode = new _Node(item, null, tempNode)
            tempNode.next = newNode
            this.tail = newNode

        }
    }
    // insertBefore(newVal, item){
    //     if(this.head === null) {
    //         console.log('list is empty') 
    //     }

    //     let tempNode = this.head
    //     let prevNode = this.head
    //     while((tempNode.value !== item) && (tempNode !== null)) {
    //         prevNode = tempNode
    //         tempNode = tempNode.next
    //     }
    //     let newItem = new _Node(newVal, tempNode, prevNode)
    //     prevNode.next = newItem
    //     tempNode.prev = newItem
    // }

}

function display(ll) {
    let curr = ll.head
    while(curr !== null) {
      console.log(curr.value)
      curr = curr.next
    }
  }

function main(){
    let dll = new DoubleLinkedList()

    dll.insertFirst('hi')
    dll.insertLast('bye')
    dll.insertLast('bye')
    dll.insertBefore('new', 'hi')
    display(dll)

}

main()