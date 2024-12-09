
//! 1 way to find what century we are in.
function Century(n) {
  const split = n.split("");
  const second = split.at(1);
  const decimal = second + ".";
  const number = split.with(1, decimal).join("");
  const rounded = Math.ceil(number).toString();
  let suffix;
  switch (rounded.charAt(1)) {
    case 3:
      suffix = "rd";
      break;
    case 2:
      suffix = "nd";
      break;
    case 1:
      suffix = "st";
    default:
      suffix = "th";
  }
  return `${rounded}${suffix}`;
}
console.log(Century("1942"));


// ?Another way to find what century we are in..
function century(n){

    let twoDigit = Math.ceil((n/100));
    let arr = ['st', 'nd', 'rd'];

    return twoDigit < 21 ? twoDigit.toString() + 'th' : twoDigit % 10 > 0 && twoDigit % 10 < 4 ? twoDigit.toString() + arr[twoDigit % 10 -1] : twoDigit.toString() + 'th';

}

console.log(century("1942"));