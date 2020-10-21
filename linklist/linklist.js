/*
Big O Of a Singly Linked List
Insert O(1)
Removel DEPENDS O(1) or O(N)
Search O(n)
Access O(n)
*/
class Node {
    constructor(val){
     this.val=val
     this.next=null
    }
}

class SinglyLinkedList {
   constructor() {
     this.head =null
      this.tail=null
      this.length=0
   }

   //gets the indexof the currrent values
   get(index){
     if(index  < 0 ||index >= this.length){
         return null 
     }

         let currentNode = this.head
        let   counter =0
         while(counter !== index){
             currentNode = currentNode.next
             counter ++
         }
         return currentNode
    
   
   }
   //updates an element values
   set(index,val){
       let currentNode = this.get(index)
       if(currentNode ){
         currentNode.val = val 
         return true 
       }
       
       return false
   }
   //Insert an element in the begining of the linked list
   push(val){
   let newNode = new Node(val)
    if(this.head ===null){
        this.head  =newNode 
        this.tail = newNode
    }else if(this.head !== null){
        this.tail.next= newNode 
        this.tail=newNode
    }
    this.length++
    return newNode
   }
   //Removes an element from the last place
   pop(){
       if(this.head ===null){
           return null
       } else{
           let currentNode =this.head
           let newTail = this.head;
           while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
           }
            newTail.next=null
            this.tail=newTail
            this.length --
          if(this.length === 0){
              this.head =null
              this.tail =null
          }
        return currentNode;
       }

    
   }
   //Removes an element in the beginig of the linked list
   shift(){
       if(this.head === 0 ){
           return null
       }else{
           let currentNode =this.head
           this.head = currentNode.next 
           this.length--
           if(this.length === 0){
            this.tail =null
        }
           return currentNode
       }

   }
   //Add element in the beginig of the linked list
   unShift(val){
    let newNode = new Node(val)  
    if(this.head === null){
        this.head=newNode
        this.tail=newNode
    } else{
       newNode.next = this.head
       this.head= newNode
      
    }
    this.length++
    return newNode
   }

insert(index,val){

  if(index < 0 || index > this.length){
      return false
  } else if(index === this.length){
   return  this.push(val)
  }
  else if( index === 0){
     return this.unShift(val)
  } 
     let newNode = new Node(val)
    let previous = this.get(index -1)
    let temp = previous.next
    previous.next =newNode
    newNode.next =temp
  this.length++
  return true
}
remove(index){
    if(index < 0 || index > this.length){
        return null
    }
    if(index=== this.length -1){
        return this.pop()
    }
    if(index === 0){
        return  this.shift()
    }
     let previous  =  this.get(index -1) //PREVIOUS NODE
     let removedNode = previous.next //CURRENT NODE
     previous.next =removedNode.next //CURRENT NEXT NODE 

    this.length --
    return removedNode
}
//reveres the actual linked list
reverse(){
   let currentNode = this.head
   //Swap the head and the tail
   this.head= this.tail
   this.tail = currentNode
   //create 2 placeholders to keep track of 
   let next =null
   let previous =null
   for (let iterator =0;iterator <this.length;iterator++) {
       next = currentNode.next
       currentNode.next = previous
       previous=currentNode
       currentNode =next
   }
   return currentNode
}
print (){
    let arr =[]
    let current = this.head
  while(current){
      arr.push(current.val)
      current =current.next
  }
  console.log(arr)
}

}


