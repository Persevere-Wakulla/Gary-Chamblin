//TODO: In one city, bus tickets use numbers from `00000 - 999999. Your task is to find the number of luckey tickets between two input tickets values. The ticket is considered to be lucky if the sum of the first three digits equals to the sum of the last three digits. For Ex. 123321 is lucky  1+2+3 === 3+2+1, 123444 is not lucky because 1+2+3 !== 4+4+4.

console.log(`${LuckyTicket(123444)} this is not a lucky ticket`);
console.log(`${LuckyTicket(123321)} this is a lucky ticket`);

function LuckyTicket(numbers){
const str = numbers.toString();
// console.log(str);
const split = str.split('')
// console.log(split);
const arr1 = split.slice(0,3).map(item => Number(item))
// console.log(arr1);
const arr2 = split.slice(3,7).map(item => Number(item))
// console.log(arr2);
return arr1.reduce((acc, cur) => cur + acc, 0) === arr2.reduce((acc, cur) => cur + acc, 0)
}