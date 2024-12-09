

    const test1 = {"Java": 10, "Ruby": 80, "Python": 65}
    const test2 = {"Hindi": 60, "Dutch": 93, "Greek": 71}
    const test3 = {"C++": 50, "ASM": 10, "Haskell": 20}
    
    function passedTests(results) {

        const arr = Object.entries(results).filter(i => i[1] >= 60)
        const sort = arr.sort((a,b) => (b[1] - a[1]))
        return sort.map(i => i[0])

        // let scores = [];
        // for (let [key, value] of Object.entries(obj)) {
        //     if (value >= 60) {
        //         scores.push({'test': key, 'score': value})
        //     }
        // }
        // console.log(scores);
        // const order = scores.sort((a, b) => b[1] - a[1]).reverse()

        // return order.map(lang => lang.test)
    }
    
    console.log(passedTests(test1));
    console.log(passedTests(test2));
    console.log(passedTests(test3));


