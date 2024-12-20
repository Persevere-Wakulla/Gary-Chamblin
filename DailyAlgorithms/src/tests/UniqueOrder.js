//Todo: Implement a function unique_in_order which takes an argument and a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function UniqueOrder(str) {
    // ! The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
    const letters = Array.from(str)
    return letters.filter((ltr, ind) => {
        if (ltr !== letters[ind + 1]) {
            return ltr
        }
    })
}
console.log(UniqueOrder('AAAABBBCCDAABBB'))
