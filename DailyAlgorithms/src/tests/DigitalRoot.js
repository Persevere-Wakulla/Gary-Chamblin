// TODO: Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a singl digit is produced. The input will be a non-negative integer. 16 => 1 + 6 = 7,  942 => 9 + 4 + 2 = 15 --> 1 + 5 = 6. 
function DigitalRoot(n) {
    if(n < 10) return n
        const strings = n.toString().split('')
        const numbers = strings.map(s => parseInt(s))
        const sum = numbers.reduce((total, current) => total + current, 0)
        if (sum < 10) return sum
            return DigitalRoot(sum)
        }
    console.log(DigitalRoot(15));
