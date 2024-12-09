
function addsNum(n){
return (m) => n + m
}
let adds1 = addsNum(1)
let result3 = adds1(2)

console.log(result3); 


function add10(){
    let n = 10;
    let c = 100;
    return (m) => n + m;
}

let sum = add10();
console.dir(sum)
let result = sum(5);

console.log(result)


function adder(f){
    let n = 10;

    return  f(n);
}

let resulter = adder((m) => {33 + m})
console.dir(resulter)