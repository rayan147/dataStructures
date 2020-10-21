class Node {
    constructor(val){
        this.val = val
        this.prev=null
        this.next=null
    }
}

class DoubleLinkedlist {
    constructor() {
        this.head =null
        this.tail=null
        this.length=0
    }
    //Add a node to the end of a  doubly linked list
    push(val){
        let newNode = new Node (val)
        if(this.head === null){
            this.head =newNode
            this.tail =newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return newNode

    }
    //Remove the last node of  a  doubly linked list

    pop(){
        let currentTail = this.tail
        if(this.head ===null ){
            return null 
        }
        if(this.length ===1 ){
            this.head =null
            this.tail =null 
        }
        else{
            this.tail = currentTail.prev
            currentTail.next =null
            currentTail.prev = null
        }
           
           this.length--
        return currentTail
    }
    //Remove a node from the begining of the doubly linked list
    shift(){
        if (this.head ===null){
            return null
        }
    let oldHead = this.head 
       if(this.length ===1 ){
        this.head =null
        this.tail =null 
    }else{
        this.head = oldHead.next
        this.head.prev =null
        oldHead.next =null
    }
    this.length--
    return oldHead 
    }
    //Add a Node to the begining of the doubly linked list
    unShift(val){
      let newNode = new Node(val)
      if(this.head === null){
          this.head = newNode
          this.tail=newNode
      }else{
          this.head.prev = newNode
          newNode.next = this.head
          this.head = newNode
      }
      this.length++
      return newNode
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

/*                      Tail.prev
                        400<==
100 ==> 200 ==> 300 ==> 400 ==>Null
Head                   Tail   
                      tail.next  

 */

 const dll = new DoubleLinkedlist()
 dll.push(100)
 dll.push(200)
 dll.push(300)
dll.shift( )

 console.log(dll.print())
 console.log(dll)