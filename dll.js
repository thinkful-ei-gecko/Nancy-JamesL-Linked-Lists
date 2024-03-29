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
    insertAfter(newVal, item) {
        let curr = this.head
        while((curr !== null) && (curr.value !== item)){
            curr = curr.next
        }
        let temp = curr.next
        let newNode = new _Node(newVal, temp, curr)
        curr.next = newNode
        temp.prev = newNode
    }
    insertAt(pos, newVal) { // 5  10  15  20
        if(this.head === null) {
          throw new Error ('empty list')
        }
        let tracker = 0
        let currNode = this.head
        let prevNode = this.head
        while(tracker !== pos - 1) {
          prevNode = currNode
          currNode = currNode.next
          tracker++
        }
        let newNode = new _Node(newVal, currNode)
        prevNode.next = newNode
        currNode.prev = newNode
      }
    remove(item) {
        if(this.head === null){
            return null
        }
        if(this.head.value === item) {
            this.head = this.head.next
            return;
        }
        let curr = this.head
        let prev = this.head
        while((curr !== null) && (curr.value !== item)) {
            prev = curr
            curr = curr.next
        }
        let temp = curr.next
        temp.prev = curr.prev
        prev.next = curr.next
    }
    find(item) {
        let curr = this.head
        while(curr.value !== item) {
            if(curr.next === null) {
                console.log('not in list')
            }
            curr = curr.next
        }
        console.log(curr.value)
    }
  }
  
  function display(ll) {
    let curr = ll.head
    while (curr !== null) {
        console.log(curr.value)
        curr = curr.next
    }
  }

  function reverseDll(ll) { // 1 3 5 6 -> 6 5 3 1
    let current = ll.head 
    let prev = null
    let next = ll.head.next 
  
    while(current !== null) {
      next = current.next
      current.next = prev
      prev = current
      current = next 
  
    }
  
    ll.head = prev
    console.log(JSON.stringify(ll, null, 4))
  }
  
  function main() {
    let dll = new DoubleLinkedList()
  
    dll.insertFirst('hi')
    dll.insertLast('bye')
    dll.insertLast('seeya')
    dll.insertLast('new')
    dll.insertLast('gahhhh')
    dll.find('asdas')
    display(dll)
  
  }
  
  main()