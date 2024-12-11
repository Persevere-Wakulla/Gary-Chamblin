// TODO: You are given an array (which will have a length of at least 3, but could be very large) containg integers. The array is either entirely compromised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes an array as an argument and returns this "outlier N"
console.log(ParityOutlier([2,4,0,100,4,11,2602,36]));

function ParityOutlier(integers) {
    // Check the parity of the first three numbers
    const isEven = (num) => num % 2 === 0;
    const firstThree = integers.slice(0, 3);
    const majorityEven = firstThree.filter(isEven).length > 1;
    // Find and return the outlier
    return integers.find(num => isEven(num) !== majorityEven);
  }
  // Test cases
  const testArrays = [
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21],
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 18],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18]
  ];
  
  testArrays.forEach(arr => {
    console.log(`Array: ${arr}`);
    console.log(`Outlier: ${ParityOutlier(arr)}`);
    console.log('---');
  });

