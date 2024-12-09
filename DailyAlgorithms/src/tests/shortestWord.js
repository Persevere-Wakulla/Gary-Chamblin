
// Todo Given a string of words, return the shortest word(s).

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

function shortestWord(str) {
  const arr = str.split(', ')
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
}

shortestWord('water, step, javaScript, react')