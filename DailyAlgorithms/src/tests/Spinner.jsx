//TODO: Write a function that reverses a word if its length is greater or equal to 5. For example: "Hey fellow warriors" => "Hey wollef sroirraw".

// ?React Way
console.log(Spinner("Hey fellow warriors"))
function Spinner() {
 const strings = {
      string1: "Hey fellow warriors",
      string2: "This is a test",
      string3: "This is another test"
    };

    const spinner = (str) => {
      
      const words = str.split(' ');
      // console.log(words);
      const spun = words.map((i) => {
        if (i.length >= 5) {
          return i.split('').reverse().join('');
        } else {
          return i;
        }
      });
      console.log(words);
      return spun.join(' ');
    }
    console.log(spinner(strings.string1));
    console.log(spinner(strings.string2));
    console.log(spinner(strings.string3));

    return (
      <>
        <div className="box">
          <h2>{strings.string1}</h2>
          <h2>{strings.string1}</h2>
        </div>
  
  
        <div className="box">
          <h2>{strings.string2}</h2>
          <h2>{spinner(strings.string2)}</h2>
        </div>
  
  
        <div className="box">
          <h2>{strings.string3}</h2>
          <h2>{spinner(strings.string3)}</h2>
        </div>
  
      </>
    )
    
  };
    
    export default Spinner