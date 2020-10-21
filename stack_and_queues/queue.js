/*
Queue is data struture which could be made form an array or a lot better a singly Linked list
Queue is FIFO system which Fist in First out 
it has to method
enqueue adds from the end of the singly Linked list
dequeue remove from the begining of the singly Linked list
Big O 
insertion O(1)
deletion O(1)
access  O(N)
search O(N)
*/

class Node {
    constructor(val){
     this.val=val
     this.next=null
    }
}

class Queue {
    constructor(){
        this.head =null
        this.tail =null
        this.length =0
    }
    // adds from the end of the singly Linked list
    enqueue(val){
      let newNode = new Node(val)
      if(this.head ===null){
          this.head = newNode
          this.tail = newNode
      } else{
          this.tail.next =newNode  // Adds to the end of the singly Linked list
          this.tail = newNode      // the tail becomes the newNode
      }
      this.length ++
      return newNode
    }
    //remove from the begining of the singly Linked list
    dequeue (){
        let currentHead =this.head
        if(this.head ===null){
            return null
        }
        if( this.length === 1){
            this.head =null
            this.tail ==null
        }else{
           this.head = this.head.next
         
        }
        this.length --
          return currentHead  
    }
    print (){
        let arr =[]
        let current = this.head
      while(current){
          arr.push(current.val)
          current =current.next

      }
      console.log(arr)
      return true
    }
}

/*                              newNode
100 ==> 200 ==>        300 ===> 400 ===> null
head   head.next                tail     tail.next  
*/
const q = new Queue()

q.enqueue(100)
q.enqueue(200)
q.enqueue(300)
q.enqueue(400)
q.enqueue(500)
q.dequeue()


console.log(q.print())
