// Todo Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// Todo Example: 39 --> 3 -- Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4(3 multiplications)

// function Persistence(num) {
// let count = 0;
// let str = String(num);
// if (str.includes('0')) return 1
// while(str > 9) {
//     const arr = [...str].reduce((a, c) => a * c, 1)
//     str = String(arr)
//     count++
// }
// return count
// }
// console.log(Persistence(39))


function Input(num) {
    let str = String(num); 
    while(str.length > 1) {
        const arr = str.split('').reduce((a, c) => parseInt(a) + parseInt(c), 0)
        str = String(arr)
    }
    return str
    }
    console.log(Input(9428469574318))