// TODO: You are given a dictionary / hash / object containing some languages and your test results in the givem languages. Return the list of languages where your test score is at least 60, in descending order of the scores. Note: The scores will always be unique(so no duplicate values).. { "Java": 10, "Ruby": 80, "Python": 65 } => ['Ruby', 'Python'], { "C++": 50, "ASM": 10, "Haskell": 20 } => []

const test1 = { "Java": 10, "Ruby": 80, "Python": 65 }
const test2 = { "Hindi": 60, "Dutch": 93, "Greek": 71 }
const test3 = { "C++": 50, "ASM": 10, "Haskell": 20 }

function passedTests(results) {

    const arr = Object.entries(results).filter(i => i[1] >= 60)
    const sort = arr.sort((a, b) => (b[1] - a[1]))
    return sort.map(i => i[0])
}
console.log(passedTests(test1));
console.log(passedTests(test2));
console.log(passedTests(test3));


