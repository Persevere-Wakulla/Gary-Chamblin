console.log(toWeirdCase("Weird string case"))

function toWeirdCase(str) {
    const words = str.split(' ')
    const map = words.map((word) => {
        return word.split('').map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase()
            }
            return char.toLowerCase()
        }).join('')

    }).join(' ')
    return map
}
