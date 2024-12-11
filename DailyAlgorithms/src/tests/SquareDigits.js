//TODO: Write a function that will square every digit entered.
// SquareDigits(12, 15)
    function SquareDigits(num) {
        const string = num.toString().split(' ')
        const squared = string.map(number => Math.pow(number, 2)).join()
        return squared;
    }
    console.log(SquareDigits(20))
