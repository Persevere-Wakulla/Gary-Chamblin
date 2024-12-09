
function EnoughChange(arr, amountNeeded) {
    const [quarter, dime, nickle, penny] = arr;
    const totalCoins = ((quarter * .25) + (dime * .10) + (nickle * .05) + (penny * .01));
    console.log(totalCoins >= amountNeeded);
    console.log(totalCoins);
}
EnoughChange([25, 10, 5, 0], 4.25)