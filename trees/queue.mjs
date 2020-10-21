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
}
isEmpty(){
    return this.length  === 0 ? 'Queue is empty' : this.length
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
const q = new Queue()
q.enqueue(100)
console.log(q.isEmpty())

export default  Queue