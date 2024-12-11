//TODO: Write a function named divisors that takes an integer n > 1 and returns an array with all of the integers divisors (except for 1 and the number itself), from smallest to largest. If the number is prime return the string "integer is prime". ** Prime numbers have no divisibl numbers, divisors(12) should return [2,3,4,6], divisors(12) should return "13 is prime".
function Divisors(integer) {
    const divisor = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divisor.push(i);
        }
    }
    if (divisor.length === 0) {
        return `${integer} is prime`;
    } else {
        return divisor;
    }
}
console.log(Divisors(12));