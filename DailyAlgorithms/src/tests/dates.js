
function dates(){ 
    const date1 = new Date('june 14, 2019');
    const date2 = new Date('june 20, 2019');
    let dateSum = date2 - date1;
    console.log(dateSum)
    let daysSum = dateSum / 86400000
    console.log(daysSum);
}
dates();

