/* 
Stack Last in Frist ideaology 
Stack could be made with an array by just using pop / push methods
Stack made from an array is not optimal 
we are removing from the begining becuase it is constant time big O(1)
removing in the end would take O(n) Linear Time because we have to itarate thru the whole stack to get to the end 

Big O 
insertion O(1)
deletion O(1)
access  O(N)
search O(N)
*/


class Node {
    constructor(val){
        this.val =val
        this.next=null
    }
}

class Stack {
    constructor(){
        this.head= null
        this.tail=null
        this.length=0
    }
    //Remove a node form the  begining  of the stack
    pop(){
        if(this.head ===null){
            return null
        } 
        let currentNode =this.head
        if(this.length === 1){
            this.head =null
            this.tail=null
       }
        else{   
            this.head = this.head.next
      
        }
         this.length -- 
         return currentNode;
     
    }
      //Insert an element in the begining of the linked list
   push(val){
    let newNode = new Node(val)
     if(this.head ===null){
         this.head =newNode 
         this.tail = newNode
     }else if(this.head !== null){
         let temp = this.head
         this.head= newNode 
         this.head.next=temp 
     }
     
     return this.length++
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

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()
stack.pop()
stack.pop()


console.log(stack)