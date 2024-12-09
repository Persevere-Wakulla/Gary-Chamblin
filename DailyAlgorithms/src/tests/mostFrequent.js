// TODO: Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

 function mostFrequent(num) {
    let storage = [];
    const sorted = num.sort((a,b) => a-b)
    while(sorted.length){
        let numbers = sorted.splice(0, sorted.lastIndexOf(sorted[0]) + 1)
            storage.unshift([numbers[0], numbers.length])
    }
    storage.sort((a,b) => [b[1] - [a[1]]])
    return storage[0][1] > storage[1][1] ? storage[0][0] : Math.max(storage[0][0],storage[0][1])
}
console.log(mostFrequent([1, 10, 8, 12, 12, 7, 6, 10, 12, 10, 10]));


