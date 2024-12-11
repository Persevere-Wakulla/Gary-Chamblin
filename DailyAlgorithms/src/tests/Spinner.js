//TODO: Write a function that reverses a word if its length is greater or equal to 5. For example: "Hey fellow warriors" => "Hey wollef sroirraw".

// ? JavaScript Way
console.log(Spinner("Hey fellow warriors"))
function Spinner(str) {
      const words = str.split(' ');
      console.log(words);
      const spun = words.map((i) => {
        if (i.length >= 5) {
          return i.split('').reverse().join('');
        } else {
          return i;
        }
      });
      return spun.join(' ');
    
    };

    let test1 = "Hey fellow warriors"
    let test2 = "This is a test"
    let test3 = "This is another test"
  
    console.log(Spinner(test1));
    console.log(Spinner(test2));
    console.log(Spinner(test3));