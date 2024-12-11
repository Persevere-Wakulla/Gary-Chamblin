// TODO: Write a function that accepts a string and returns the same string with all even indexed characters in each word uppercased, and all odd indexed characters lowercased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be uppercased and you need to start over for each word. The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be seperated by a single space(''). Ex: "string" => "StRiNg".

function toWeirdCase(str) {
    const words = str.split(' ')
    const map = words.map((word) => {
        return word.split('').map((char, index) => {
            if(index % 2 === 0){
                return char.toUpperCase()
            }
            return char.toLowerCase()
        }).join('')
    }).join(' ')
    return map
}
console.log(toWeirdCase('Weird String Case'));