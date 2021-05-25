// Desafio 1
function compareTrue(value1, value2) {

  if (value1 == true && value2 == true){
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let word = "";
  let myArray = [];

  for (let i = 0; i <= phrase.length; i += 1) {
    if (i < phrase.length){
      if(phrase[i] != " ") {
        word = word + phrase[i];
      } else {
        myArray.push(word);
        word = "";
      }
    } else {
      myArray.push(word)
      word = "";   
    }  
  }
  return myArray; 
}

// Desafio 4
function concatName(myArray) {
  phrase = `${myArray[myArray.length-1]}, ${myArray[0]}`
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  wins = wins * 3
  ties = ties * 1
  points = wins + ties;
  return points
}


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
