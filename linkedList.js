class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head)
    return this.head
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
      tempNode.next = new _Node(item, null)
      return tempNode
    }
  }
  remove(item) {
    if(!this.head) {
      return null
    }
    if(this.head.value === item) {
      this.head = this.head.next
      return
    }
    let currNode = this.head
    let prevNode = this.head
    while(currNode !== null && currNode.value !== item) {
      prevNode = currNode
      currNode = currNode.next
    }
    if(currNode === null){
      console.log('Item not found')
      return
    }
    prevNode.next = currNode.next
  }
  find(item) {
    let tempNode = this.head
    if(!this.head) {
      return null
    }
    while(tempNode.value !== item) {
      if(tempNode.next === null) {
        return null
      }
      else {
        tempNode = tempNode.next
      }
    }
    return tempNode
  }
  insertBefore(item, newVal) { // 5 10     15 20
    if(this.head === null) {
      throw new Error ('empty list')
    }
    let tempNode = this.head
    let prevNode = this.head
    while(tempNode.value !== item) {
      prevNode = tempNode
      tempNode = tempNode.next
    }
    let newItem = new _Node(newVal, tempNode)
    prevNode.next = newItem
  }
  insertAfter(item, newVal) {
    if(this.head === null) {
      throw new Error ('empty list')
    }
    let tempNode = this.head
    
    while(tempNode.value !== item) {
      tempNode = tempNode.next
    }
    tempNode.next = new _Node(newVal, tempNode.next)
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
    prevNode.next = new _Node(newVal, currNode)
  }
}

function display(ll) { 
  // console.log('this is getting passed into display',ll)
  
  let string = ''

  let current = ll.head
  // console.log('this is the ll.head',ll.head)
  while(current !== null) {
    // console.log('current value', current.value)
    string += current.value + ', '
    current = current.next
  }
  console.log(string)

}

function size(ll) {
  let current = ll.head
  let counter = 1;

  while(current.next !== null){
    counter ++
    current = current.next
  }
  console.log(counter)
}

function isEmpty(ll) {
  if(ll.head === null) {
    console.log('list is empty')
  }
  else console.log('list is populated') 
}

function findPrev(ll, item){
  let current = ll.head
  let prev = ll.head

  if(current.value === item) {
    console.log('no previous items')
  } 
  while(current !== null){
    if(current.value === item) {
      console.log(prev.value)
    }
    prev = current
    current = current.next
  }
}

function findLast(ll) {
  let current = ll.head
  while(current) {
    if(current.next === null) {
      console.log(current.value)
    }
    current = current.next
  }
}

function reverse(ll) { // 1 3 5 6 -> 6 5 3 1
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

function findThird(ll){
  let current = ll.head 
  let tracker = 0
  while(tracker !== 2) {
    current = current.next
    tracker ++
  }
  console.log(current.value)
}

function findMidValue(ll) {

  let current = ll.head
  let current2 = ll.head
  let counter = 1 //+1 
  let counter2 = 1 //+2 

  while(current2 !== null) {
    counter = counter + 1
    counter2 = counter2 + 2
    current = current.next
    current2 = current.next.next.next
  }
  console.log(current.value)
}

function cycle(ll) {
  let current = ll.head 
  let prev = ll.head
  while(current !== null){
    prev = current
    current = current.next
    if(current.next !== prev) {
      return false
    }
    else {
      return true
    }
  }
}

function main() {
  let ll = new LinkedList()
  // ll.insertFirst(5)
  // ll.insertLast(10)
  // ll.insertLast(15)
  // ll.insertLast(20)
  // ll.insertAfter(10, 2)
  // ll.insertAt(3, 8)

  ll.insertFirst('Apollo')
  ll.insertLast('Boomer')
  // ll.insertLast('Helo')
  // ll.insertLast('Husker')
  // ll.insertLast('Starbuck')
  // ll.insertBefore('Boomer', 'Athena')
  // ll.insertAfter('Helo', 'Hotdog')
  // ll.insertAt(3, 'Kat')
  // ll.remove('Husker')
  // findPrev(ll, 'Boomer')
  // findLast(ll)
  // display(ll)
  // size(ll)
  // isEmpty(ll)
  // reverse(ll)
  // findThird(ll)
  console.log(cycle(ll))
}
main()



function WhatDoesThisProgramDo(lst) {
  let current = lst.head; //starting at the beginning
  while (current !== null) {
      let newNode = current; // newnode = 
      while (newNode.next !== null) { //not at the end
          if (newNode.next.value === current.value) { //looking at duplicates 
              newNode.next = newNode.next.next; //setting the next value to be 
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next; //iterating
  }
}