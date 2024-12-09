function Regex(str) {
  
  const regex = /\d/g;
  const sentence = str.split(" ");
  console.log(sentence.sort((a,b) => a.match(regex) - b.match(regex)))
  let newSentence = [];
  sentence.forEach((w) => {
    newSentence[w.match(regex) - 1] = w;
  });
  
  return newSentence.join(" ");
}

const sentence2 = "4of Fo1r pe6ople g3ood th5e the2";
const sentence1 = "is2 Thi1s t4est 3a";
console.log(Regex(sentence2));
console.log(Regex(sentence1));

