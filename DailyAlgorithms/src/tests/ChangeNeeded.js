// Todo: Write a function that determines if you have enough change to purchase an item.

function EnoughChange(arr, amountNeeded) {
    const [quarter, dime, nickle, penny] = arr;
    const totalCoins = ((quarter * .25) + (dime * .10) + (nickle * .05) + (penny * .01));
    console.log(totalCoins >= amountNeeded);
    console.log(totalCoins);
    return totalCoins >= amountNeeded
}
EnoughChange([25, 10, 5, 0], 4.25)

// ?Second Way
function hasEnoughChange(totalCost, amountPaid) {
    // Check if the amount paid is greater than or equal to the total cost
    return amountPaid >= totalCost;
  }
  
  // Test cases
  console.log(hasEnoughChange(5.75, 10)); // true
  console.log(hasEnoughChange(7.50, 5));  // false
  console.log(hasEnoughChange(3.25, 3.25)); // true
  console.log(hasEnoughChange(8.99, 10)); // true
  console.log(hasEnoughChange(12.50, 15)); // true