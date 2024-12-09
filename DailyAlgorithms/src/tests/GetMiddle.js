function middleCharacter(word) {
    if(word.length % 2 !== 0) {
        return word.charAt(word.length / 2)
    } else {
        return word.slice((word.length / 2)-1, (word.length / 2) + 1)
    }
}
console.log(middleCharacter('test'))
console.log(middleCharacter('persevere'))


// const integer = (num) => Number(String(num).split('').sort((a , b) => b - a).join(''))
// console.log(integer(15))