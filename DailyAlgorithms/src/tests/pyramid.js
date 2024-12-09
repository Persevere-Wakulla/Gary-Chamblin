// TODO: Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// ?pyramid(0) => [0]
// ?pyramid(1) => [[1]]
// ?pyramid(2) => [[1],[1, 1]]
// ?pyramid(3) => [[1], [1, 1], [1, 1, 1]]

pyramid(4)
function pyramid(n) {
    const base = [];
    for (let i = 1; i <= n; i++) {
        base.push(new Array(i).fill(1))
    }
    console.log(base);
    return base;
}