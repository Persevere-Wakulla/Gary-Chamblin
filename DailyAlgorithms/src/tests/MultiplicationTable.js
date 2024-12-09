
function MultiplicationTable(size) {
    let solution = [];
    for (let i = 0; i < size; i++){
        solution.push([])
        for(let j = 0; j < size; j++){
            solution[i].push((j + 1) * (i + 1))
        }
    }
    console.dir(solution);
    
}
MultiplicationTable(3)

