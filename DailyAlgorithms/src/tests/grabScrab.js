// TODO:  Write a function that will accept a jumble of letters as well as a dictionary, and output  a list of words that the pirate might have meant.

function grabScrab(anagram, dictionary) {
    const match = anagram.split('').sort().join()
    console.log(match);
    return dictionary.filter(word => {
        return match === word.split('').sort().join()
    })
}
console.log(grabScrab('orstp', ['sport', 'parrot', 'ports', 'matey']))
