//Todo: Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation. "1999" =>  20th, "2259 => 23rd"
function century(n) {
  let twoDigit = Math.ceil((n / 100));
  let arr = ['st', 'nd', 'rd'];

  return twoDigit < 21 ? twoDigit.toString() + 'th' : twoDigit % 10 > 0 && twoDigit % 10 < 4 ? twoDigit.toString() + arr[twoDigit % 10 - 1] : twoDigit.toString() + 'th';

}
console.log(century("2259"));

// ? Another way 
function getCentury(year) {
  const yearInt = parseInt(year, 10);
  const century = Math.ceil(yearInt / 100);
  return `${century}${getCenturySuffix(century)}`;
}

function getCenturySuffix(century) {
  const suffixes = ['th', 'st', 'nd', 'rd', 'th'];
  const lastDigit = century % 10;
  const lastTwoDigits = century % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }
  return suffixes[lastDigit] || 'th';
}
// Test cases
console.log(getCentury("1999")); // 20th
console.log(getCentury("2259")); // 23rd
console.log(getCentury("2000")); // 20th
console.log(getCentury("2023")); // 21st
console.log(getCentury("1500")); // 15th
console.log(getCentury("1801")); // 19th
console.log(getCentury("1100")); // 11th