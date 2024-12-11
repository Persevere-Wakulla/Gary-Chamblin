//TODO: Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you dont want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'. Examples: (input --> output): "4556364607935616" --> "############5616", What was the name of your first pet? "Skippy" -->"##ippy"

//? Solution using a padStart() function. The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
function maskify(str) {
    if(str.length <= 4){
        return str
    }
    const unmasked = str.slice(-4)
    const masked = unmasked.padStart(str.length, "#")
    return masked
}
console.log(maskify("4556364607935616"));

//? Solution using .repeat() method. The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
function Maskify(str) {
    if (str.length <= 4) {
        return str;
    }
    const maskLength = str.length - 4;
    const masked = "#".repeat(maskLength);
    const unmasked = str.slice(-4);

    return masked + unmasked;
}
console.log(Maskify("4556364607935616"));
console.log(Maskify("Skippy"));
