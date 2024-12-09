
function numberOfPair(gloves) {
    const glovesObj = {};
    for(let i = 0; i < gloves.length; i++){
        if(!glovesObj[gloves[i]]){
            glovesObj[gloves[i]] = 1
        } else {
            glovesObj[gloves[i]] += 1
        }
    }
    let pairs = 0;
    for(let color in glovesObj){
        pairs += Math.floor(glovesObj[color] / 2)
    }
    return pairs;
}
console.log(numberOfPair(['red', 'red','red','red', 'blue', 'blue', 'blue', 'blue', 'green']));

function numberOfPairs(gloves) {
    let arr = Array.from(new Set(gloves))
    console.log(arr);
    return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}
console.log(numberOfPairs(['red', 'red','red','red', 'blue', 'blue', 'blue', 'blue', 'green']));