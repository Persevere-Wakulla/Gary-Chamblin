
console.log(doubleEveryOther([1, 2, 3, 4]));

function doubleEveryOther(a) {
    return a.map((item, index) => {
        if(index % 2 !==0) {
            return item * 2
        }
        return item
    });
}