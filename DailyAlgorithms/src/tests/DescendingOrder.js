// Todo Make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially rearrange the digits to create the highest possibl number.

// ?One Liner Option 
const descending = (num) => Number(String(num).split('').sort((a, b) => b - a).join(''))
console.log(descending(15))

// ? Long Option
integer(2561)
function integer(num) {
    console.log(num);
    const string = String(num)
    const split = string.split('')
    console.log(split);
    // .sort(b-a)
    const number = split.sort((a, b) => b - a).join('')
    console.log(number);
    return Number(number)
}