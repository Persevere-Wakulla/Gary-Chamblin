//TODO: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function Isogram(str) {
    const lower = str.toLowerCase();
    const strObj = {};
    for (let i = 0; i < str.length; i++) {
        if (!strObj[lower[i]]) {
            strObj[lower[i]] = true;
        } else {
            if (strObj[lower[i]]) {
                return false;
            }
        }
    }
    return true
}
console.log(Isogram('Dermatoglyphics'));
console.log(Isogram('aba'));
console.log(Isogram('abcdefghijklmnopqrstuvwxy'));
console.log(Isogram('certain'));


