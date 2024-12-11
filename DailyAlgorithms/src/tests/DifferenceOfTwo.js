// TODO: The objective is to return all pair of integers from a given array of integers that have a difference of 2. The result should be sorted in ascending order of values. Assume there are no duplicate integers in the array. The order of integers in the input array should not matter.   [1,2,3,4] => [[1,3], [2,4]].

// !A way using  Set 
function DifferenceOfTwo(arr) {
  //  Set from the input array for efficient lookup.
  const numSet = new Set(arr);
  const pairs = new Set();
  // Iterate through each number in the array.
  for (const num of arr) {
    // For each number, it checks if its pair, number + 2 exists in the Set.
    if (numSet.has(num + 2)) {
      // If a pair is found, it's added to another Set to ensure uniqueness.
      pairs.add([num, num + 2].sort((a, b) => a - b));
    }
  }
  // Converts the Set of pairs to an array and sorts it.
  return Array.from(pairs).sort((a, b) => a[0] - b[0]);
}
console.log(DifferenceOfTwo([1, 2, 3, 4]));
console.log(DifferenceOfTwo([4, 1, 2, 3]));
console.log(DifferenceOfTwo([1, 23, 3, 4, 7]));
console.log(DifferenceOfTwo([4, 3, 1, 5, 6]));

// ! Double Loop Way.
function differenceOfTwo(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const solution = [];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[i] + 2 === sorted[j]) {
        solution.push([sorted[i], sorted[j]])
      }
    }
  }
  return solution
}
console.log(differenceOfTwo([1, 2, 3, 4]));
console.log(differenceOfTwo([4, 1, 2, 3]));
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
console.log(differenceOfTwo([4, 3, 1, 5, 6]));