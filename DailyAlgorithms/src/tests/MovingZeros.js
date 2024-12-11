//TODO: Write an algorithm that takes an array and moves all the zeros to the end, preserving the order of the other elements.
// ?One Way
function MovingZeros(arr) {
    //initialize a lastNonZeroIndex to keep track of the position where the next non-zero element should be placed.
  let index = 0;
  // iterate through the array: - When we encounter a non-zero element, we move it to the lastNonZeroIndex position and increment lastNonZeroIndex.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  for (let i = index; i < arr.length; i++) {
      // After processing all elements, fill the remaining positions with zeros.
    arr[i] = 0;
  }
  return arr;
}
console.log(MovingZeros([false,1,0,1,2,0,1,3,'a'])); 

// ?Another Way
function MoveZeros(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){      
      arr.splice(i, 1)
      arr.push(0)
   
    }
  }
  return arr
}
console.log(MoveZeros([5,1,0.0,1,2,0.0,1,3,'a']));

function move(arr){
const test = arr.forEach((element, i) => {
  if(element === 0){
    arr.splice(i, 1)
    arr.push(0)
  }
});
console.log(test);
return test
}
console.log(move([5,1,0,0,1,2,0.0,1,3,'a']));
