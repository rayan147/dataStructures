### O(log n) Logarithmic Time
it is an algorithm that its time execution is proportional to the logarithm of the input size.

### Example 
Binary Search 
```js
const binarySearch (sortedArray,target)=>{
    let startIndex =0,
        endIndex = sortedArray.lenght -1,
        middleIndex
    while(startIndex <= endIndex){
          middleIndex = Math.floor((lastIndex + firstIndex)/2);
        if(target === sortedArray[middleIndex]){
            return console.log(`target found in ${middleIndex }`)
        }
        if( target > sortedArray[middleIndex]){
             firstIndex = middleIndex ++
        }else if(target < sortedArray[middleIndex ){
             lastIndex = middleIndex --;
        }

    }
    return false
}
```
