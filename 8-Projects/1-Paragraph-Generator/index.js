const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

// generateWords function give us, how much length word we want
const generateWords = (n) => {
  let text = "";
  const letter =
    "LoremipsumdolorsitametconsecteturadipisicingelitosfugaminuseiuscumqueImpeditperspiciatisminussimiliquenequenulladictaperferendi";

  for (let i = 0; i < n; i++) {
    let random = (Math.random() * (letter.length - 1)).toFixed(0);

    text += letter[random];
  }
  return text;
};

const generatePara = () => {
  let numOfWords = Number(input.value);

  if (numOfWords == 0) {
    return null;
  }

  const para = document.createElement("p");

  const randomNum = (Math.random() * 10).toFixed(
    0
  ); /* this generate any number from 0 to 10 */

  let data = "";

  // This loop will run  numOfWords times(input by user ) and we call generateWords func and passing the argument randomNum which contain any no. from 0 to 10 and generateWords fun return us words
  for (let i = 0; i < numOfWords; i++) {
    data += generateWords(randomNum);
    data += " ";
  }

  para.innerText = data;

  para.setAttribute("class", "para");

  container.append(para);
};

/*
Dry run :
-> Let's say user put input as 5, and click on button so, generatePara fun is called.
-> user want 5 words of para,so we will run generateWords 5 times . so it generate 5 different words.
-> and we pass any random num from 0 to 10 to generateWords function and generateWords will generate word of lenght equivalent to that  randomNum .
eg : randomNum= 7, so generateWords(7) => it will generate words of 7 length and loop will run numOfWords times i.e, 5 times

*/
