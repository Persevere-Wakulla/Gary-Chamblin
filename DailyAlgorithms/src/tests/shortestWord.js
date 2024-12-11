
// Todo: Given a string of words, return the length of the shortest word(s). Make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially rearrange the digits to create the highest possible number.
// ? One Solution
console.log(words(["water", "blue", "red", "JavaScript" ]))
function words(arr) {
    let shortest = arr[0]
    let longest = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length < shortest.length){
            shortest = arr[i]
        } else if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    console.log(shortest);
    console.log(longest);

    return `${shortest} ${longest}`
}

// ?Another solution
function shortestWord(str) {
const splitUp = str.split(', ').toSorted((a,b) => a.length - b.length).join(', ')
return splitUp
}
console.log(
    shortestWord('water, step, javaScript, react')
    );
