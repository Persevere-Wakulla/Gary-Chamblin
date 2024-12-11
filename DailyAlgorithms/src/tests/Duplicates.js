// function Duplicates(string) {
//     const apart = string.split('');
//     console.log(apart);
//     let dups = 0;
//     let flag = false;
//     let hold = apart.shift();
//     while(apart.length > 0){
//         console.log(apart);
//         for(let i = 0; i < apart.length; i++){
//             if(apart[i] === hold) {
//                 apart.splice(i, 1)
//                 flag = true
//             }
//         }
//         hold = apart.shift()
//         if(flag === true){
//             dups ++
//         }
//         flag = false
//     }
//     return dups;
// }
function Duplicates(string) {
    const obj = {};
    const apart = string.toLowerCase().split('');
    // console.log(apart);
    while (apart.length > 0) {
        let hold = apart.shift()
        if (!obj[hold]) {
            obj[hold] = 1
        } else {
            obj[hold] += 1
        }
    }
    let count = 0;
    for (let letter in obj) {
        if (obj[letter] > 1) {
            count++
        }
    }
    return count
}
console.log(Duplicates('aabbcde'));
