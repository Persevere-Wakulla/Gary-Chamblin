// TODO: Write a function that takes two dates and returns the number of days between the first and second date. Note: View docs on how dates are used in JS.
function dates() {
    const date1 = new Date('june 14, 2019');
    const date2 = new Date('june 20, 2019');
    let dateSum = date2 - date1;
    console.log(dateSum)
    let daysSum = dateSum / 86400000
    console.log(daysSum);
}
dates();

