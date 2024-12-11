// TODO: You have to print the numbers from 1-200 in a new line. But for every multiple of 5 print "FOO", for every multiple of 7 print "Bar" and for every multiple of both print "FooBar" instead of the number.

function FooBar() {
    for (let i = 1; i <= 200; i++) {
      if (i % 5 === 0 && i % 7 === 0) {
        console.log("FooBar");
      } else if (i % 5 === 0) {
        console.log("FOO");
      } else if (i % 7 === 0) {
        console.log("Bar");
      } else {
        console.log(i);
      }
    }
}
FooBar()
  
