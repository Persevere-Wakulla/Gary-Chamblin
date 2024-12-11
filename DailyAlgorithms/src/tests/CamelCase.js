// Todo Convert a string to camelCase.

// ?One Way
String.prototype.camelCase = function () {
    const words = this.split(' ');
    const solution = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i][0]) {
            solution.push(words[i][0].toLocaleUpperCase())
        }
        solution.push(words[i].slice(1))
    }
    return solution.join('')
}
let string = "this is a string"
string.camelCase()
console.log(string.camelCase());


// ! Another Way
String.prototype.CamelCase = function () {
    return this.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
}
let string2 = "this is another string"
string2.CamelCase()
console.log(string2.CamelCase());
