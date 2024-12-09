//TODO: Write a functon that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                console.log(numbers[i], numbers[j])
                return [i,j]
            }
        }
    }
}
console.log(twoSum([1,2,3], 4))
console.log(twoSum([3,2,4], 6))
