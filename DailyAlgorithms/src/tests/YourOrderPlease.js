// TODO: Youu task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1-9. So 1 will be the first word(not 0). If the input string is empty, return an empty string. The words in the input string will only contain valid consecutive numbers. "4of Fo1r pe6ople g3ood th5e the2" =>  Fo1r the2 g3ood 4of th5e pe6ople, "is2 Thi1s t4est 3a" => Thi1s is2 3a t4est.

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
console.log(sentence2);
console.log(Regex(sentence2));
console.log(sentence1);
console.log(Regex(sentence1));

