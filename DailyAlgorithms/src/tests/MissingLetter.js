//Todo:  Write a method that takes an array of consecutive increasing letters as input and that returns the missing letter in the array.
//Todo: You will always get a valid array and it will always be exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters in only one case. ['a','b','c','d','f'] --> 'e'.
  
// ?One Way
MissingLetter(['a','b','c','d','f'])
function MissingLetter(arr) {
    console.log(arr.length);
    let x;
    arr.forEach((_, i) => {
        if((i < arr.length - 1) && (arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0) != 1)){
            x = String.fromCharCode(arr[i].charCodeAt(0) + 1);
        }
    });
    console.log(x);
}

//? Another Way
function FindMissingLetter(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        const nextItem = i + 1;
        const current = arr[i].charCodeAt(arr[i])
        const next = arr[nextItem].charCodeAt(arr[nextItem])
        const supposedToBe = current + 1
        if (next !== supposedToBe) {
            return String.fromCharCode(supposedToBe)
        }
        // console.log(supposedToBe)
    }
}
console.log(FindMissingLetter(['a','b','c','d','f']))
