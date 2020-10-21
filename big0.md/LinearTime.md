### O(n) Linear Time
it is an algorithm that grows in direct proportion to is input size ,in other words,
time grows linearly or parallel  as input size increases

### Example 
const  numberTobeFound = 66;
const  numbers = [ 33, 435, 36, 37, 43, 45, 66, 656, 2232 ];
for ( const iterator of numbers){
    if(numberTobeFound === iterator  ){
        return console.log(`I have found ${numberTobeFound}`)
    }
}
 ### More Example
Array: Linear Search, Traversing, Find minimum etc
ArrayList: contains method
Queue: contains method

### Note 
as the array grows the time it will take to find x will increase and the opposide as if it shrink the less time it will take to find x . 

