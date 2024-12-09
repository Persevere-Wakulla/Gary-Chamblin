function Duplicates(string) {
    const apart = string.split('');
    console.log(apart);
    let dups = 0;
    let flag = false;
    let hold = apart.unshift();
    while(apart.length > 0){
        for(let i = 0; i < apart.length; i++){
            if(apart[i] === hold) {
                apart.splice(i, 1)
                flag = true
            }
        }
        hold = apart.shift()
        if(flag === true){
            dups ++
        }
        flag = false
    }
    return dups;
}
console.log(Duplicates('aabbcde'))