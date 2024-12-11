//TODO: Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and it carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again except for Haskell).  EX: ATTGC => TAACG, GTAT => CATA.

function DNA(string){
    let str = string;
    let arr = [];
    str.split('').forEach((item) => {
        return item === 'A' ? arr.push('T') : item === 'T' ? arr.push('A') : item === "C" ? arr.push('G') : arr.push('C')
    })
    return arr.join('')
}
console.log(DNA('ATTGC'));
console.log(DNA('GTAT'));
