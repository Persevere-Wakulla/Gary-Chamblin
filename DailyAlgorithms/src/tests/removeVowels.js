
 console.log(disemvowel('Today is Friday'))

function disemvowel(str){
    return str.match(/[^aeiou\W]/ig);
}