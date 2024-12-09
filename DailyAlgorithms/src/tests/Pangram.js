// Todo A pangram is a sentence that contains every singl letter of the alphabet at least once. For example, the sentence 'The quick brown fox jumps over the lazy dog' is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// TODO Given a string, detect whether or not it is a pangram. Return True if it is, False if it is not. Ignore numbers and punctuation.


function pangram(str) {
    console.log(str);
    const regex = /[A-Z]/g;
    //! Set objects are collections of values. A value in the set may only occur once;
    let setA = new Set();
    let iter = str.toUpperCase().matchAll(regex);
    //! The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
    for (const match of iter) {
        // console.log(match)
        setA.add(match[0])
        //! .add() method inserts a new element with a specified value into the set if there isn't an element with the same value already in it.
    }
    console.log(setA)
    //! size returns the number of (unique) elements in this set.
    return setA.size == 26;

}

console.log(pangram('The quick brown fox jumps over the lazy dog'))