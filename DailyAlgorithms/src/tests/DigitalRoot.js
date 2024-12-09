
function DigitalRoot(n) {
    if(n < 10) return n
        const strings = n.toString().split('')
        const numbers = strings.map(s => parseInt(s))
        const sum = numbers.reduce((total, current) => total + current, 0)
        if (sum < 10) return sum
            
            return DigitalRoot(sum)
        }
        

    console.log(DigitalRoot(26));
