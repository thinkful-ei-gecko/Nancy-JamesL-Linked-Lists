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
        // this.tail = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head, null)
        // this.tail === null ? this.tail = this.head : this.tail = this.tail.next
        // this.tail = current.next
    }
  
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            let newNode = new _Node(item, null, tempNode)
            tempNode.next = newNode
            this.tail = newNode
            //console.log(this.tail.next)
  
        }
    }
    insertBefore(newVal, item) {
        if (this.head === null) {
            console.log('list is empty')
        }
        if(this.head.value === item){
          this.insertFirst(newVal)
        }
        let prev = this.head
        let curr = this.head
        while((curr !== null) && (curr.value !== item)) {
          prev = curr
          curr = curr.next
        }
        let newNode = new _Node(newVal, curr, prev)
        prev.next = newNode
        curr.prev = newNode
    }
  }
  
  function display(ll) {
    let curr = ll.head
    while (curr !== null) {
        console.log(curr.value)
        curr = curr.next
    }
  }
  
  function main() {
    let dll = new DoubleLinkedList()
  
    dll.insertFirst('hi')
    dll.insertLast('bye')
    dll.insertLast('bye')
    dll.insertBefore('new', 'hi')
    display(dll)
  
  }
  
  main()