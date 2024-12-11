// ? One Way
function highsAndLows(str) {
    let string = str.split(' ').toSorted((a, b) => a - b)
    console.log(string);
    return `${string[string.length - 1]} ${string[0]}`
}
console.log(highsAndLows("1 2 -5 10 8"));


// ? Second Way
function highAndLow(numbers) {
    let number = numbers.split(' ')
    return `${Math.min(...number)} ${Math.max(...number)}`
}
console.log(highAndLow("1 2 -5 100 8"));

