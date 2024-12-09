// TODO: Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second. Return nil if the second argument is  negative.

// ! One Liner
function ToPower(base, power) {
    return power >= 0 ? Math.pow(base, power) : 'nil'
}
console.log(ToPower(4, 3))
console.log(Power(16, -2))
console.log(ToPower(-7, 3))
console.log(ToPower(-7, 4))

// ? With if statement
function Power(base, power) {
    if (power >= 0) {
        Math.pow(base, power)
    } else {
        return 'nil'
    }
    return Math.pow(base, power)
}
console.log(Power(2, 3))
console.log(Power(10, 0))
console.log(Power(-5, 3))
console.log(Power(-4, 2))

Number.prototype.power = function(exp){
    let solution = 1
    if (exp === 0) return solution
    for(let i = 0; i < exp; i++){
        solution *= this
        console.log(this, solution, i)
    }
    return solution
}

let test = 5
console.log(test.power(5))