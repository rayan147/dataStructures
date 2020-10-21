/*
A binary tree every Parent at most has two Nodes
A binary search tree is a type of binary tree
A BST every node to the left of its parent is always less than its parent value
and every node to the right of its parent is always greater than is parent value 
BIG O
Searching O(Log n)
Insertion O(Log n)
*/
class NodeQ {
    constructor(val){
        this.val =val
        this.next=null
    }
    
}

class Queue {
    constructor(){
        this.head =null
        this.tail= null
        this.length =0
    }
    //Remove from the begining of the Queue
    dequeue(){
    if (this.head === null){
        return null
    }
   
     let currentHead = this.head
     this.head = currentHead.next 
     this.length--
    if( this.length === 0 ){ 
        return  this.tail = null
      }
      return currentHead
}

//Adds to the end of the Queue
enqueue(val){
  let newNode = new NodeQ(val)
  if(this.head === null){
      this.head = newNode
      this.tail = newNode
  } else {
    let currentTail  = this.tail
     currentTail.next = newNode
     this.tail = newNode
  }
  this.length++
  return newNode

}

}

class Node {
    constructor(val) {
        this.val = val
        this.left =null
        this.right=null
    }
}

class BinarySearchTree{
    constructor() {
        this.root =null
        
    }
    //Insert a value at the right of the BST if the value is greater than the root value
    // Insert a value at the left of the BST if the value is less than then the root value
    insert(val){
        const newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return newNode
        }
        let current =this.root
        const addSide = side =>{
            if(!current[side]){
                current[side] =newNode
                return this
            }
            current = current[side]
        }
        while (true) {
            if( val === current.val) return this
            else if (val < current .val) addSide('left')
            else addSide('right')
        }
        } 
    find (val){    
      if(this.root === null) return false
      let current = this.root
      let found =false
      while (current && !found) {
          if (val < current.val) current =current.left
          else if(val > current.val) current = current.right
          else found = true    
      }
      if(!found) return "Nothing Found"
      return current
    } 
BFS() {
let rootNode = this.root
let vistedNodes = new Queue()
let queue = new Queue()
queue.enqueue(rootNode)

while(queue.length){
    
   if(rootNode.left) {
    vistedNodes.enqueue(queue.enqueue(rootNode.val))
    }
   if(rootNode.right) {
    vistedNodes.enqueue (queue.enqueue(rootNode.val))
    }

return vistedNodes
}
}}

const BST = new BinarySearchTree()

BST.insert(100)
BST.insert(90)
BST.insert(91)
BST.insert(22)
BST.insert(89)
BST.insert(102)
BST.insert(105)
BST.insert(101)
console.log(BST.BFS())
