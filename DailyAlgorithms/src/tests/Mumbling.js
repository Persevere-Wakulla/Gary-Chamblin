function accum(word){
    const divide = word.split('');
    const mumble = divide.map((ltr, ind) => {
        let compile = ltr.toUpperCase()
        for(let i = 0; i < ind; i++){
            compile += ltr.toLowerCase()
        }
        return compile
    })
    return mumble.join('-')
}
console.log(accum('abcd'));