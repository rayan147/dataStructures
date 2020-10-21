### O(log n) Logarithmic Time
it is an algorithm that its time execution is proportional to the logarithm of the input size.

### Example 
Binary Search 

const binarySearch (sortedArray,target)=>{
    let startIndex =0
    let endIndex = sortedArray.lenght -1

    if( sortedArray.length < 0 || sortedArray.length === null ){
        return false 
    }
    while(startIndex < endIndex){
        let  middleIndex = Math.floor((lastIndex + firstIndex)/2);
        if(target === sortedArray[middleIndex]){
            return console.log(`target found in ${middleIndex }`)
        }
        if( target > sortedArray[middleIndex]){
             firstIndex = middleIndex ++
        }else if(target < sortedArray[middleIndex ){
             lastIndex = middleIndex --;
        }

    }
}

