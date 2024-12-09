
function isValidWalk(walk) {
let x = 0;
let y = 0;
for (let i = 0; i < walk.length; i++){
    if(walk[i] === 'n') y++;
    if(walk[i] === 's') y--;
    if(walk[i] === 'e') x++;
    if(walk[i] === 'w') x--;
}
console.log(x, y);
return walk.length === 10 && x === 0 && y === 0 
}
console.log(isValidWalk(['n','s','e','w']))