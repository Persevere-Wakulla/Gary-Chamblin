let people = [];

const peopleLikes = (arr) => {

    let likes;
    switch (arr.length) {
        case 0: likes = "noone"
        break;
        case 1: likes = arr[0];
            break;
        case 2: likes = arr[0] + ' and ' + arr[1];
            break;
        case 3: likes = arr[0] + ', ' + arr[1] + ' and ' + arr[2];
            break;
        default: likes = arr[0] + ', ' + arr[1] + ' and ' + (arr.length - 2) + " others"
    }
    return likes + " like this Comment"
}

console.log(peopleLikes(people))
