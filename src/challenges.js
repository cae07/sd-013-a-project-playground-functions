// Desafio 1
function compareTrue(value1, value2) {
  let answer = false
  if (value1 === true && value2 === true) {
    answer = true
  }

  return (answer)
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return (area)
}
// Desafio 3
function splitSentence(setence) {
  let phrase = setence
  let phraseArray = ''
  let array = [] ;

  for (let index = 0; phrase.length >= index ; index +=1 ) {
    if (phrase[index] === ' ' || phrase[index] === undefined) {
      array.push(phraseArray);
      phraseArray = '';
    }else  {
      phraseArray = phraseArray + phrase[index]
    }
  }
  return (array)
}
// Desafio 4
function concatName(array) {
  let word = (array[array.length-1])
  let string = '';
    for (let index = 0; word.length >= index; index +=1) {
      if (word[index] === undefined) {
        string = string + ', '
      }else {
        string = string + word[index]
      } 
    }
    word = array[0]
    for ( let secondIndex = 0; word.length > secondIndex; secondIndex +=1) {
      string = string + word[secondIndex]
    }
  return (string)
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins*3) + (ties*1)
  return (points)
}
// Desafio 6
function highestCount(array) {

  let biggerNumber = array[0];
  let contador = 0;
  for (let index = 0; array.length > index; index +=1){

    if (array[index] > biggerNumber){
      biggerNumber = array[index]
      contador = 1;
    } else if (array[index] == biggerNumber) {
      contador +=1
    }
  }
  return (contador)
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
    if (distanceCat1 < 0) {
      distanceCat1 = distanceCat1 *-1
    }else {
      distanceCat1 = distanceCat1
    }
  let distanceCat2 = mouse - cat2;
    if (distanceCat2 < 0) {
      distanceCat2 = distanceCat2 *-1
    }else {
      distanceCat2 = distanceCat2
    }

  let answer = '';

  if (distanceCat1 < distanceCat2){
    answer = 'cat1'
  }else if (distanceCat2 < distanceCat1){
    answer = 'cat2'
  }else{
    answer = "os gatos trombam e o rato foge"
  }
  return(answer)
}
// Desafio 8
function fizzBuzz(array) {
  let number = '';
  let answer = [];
  for (let index = 0; array.length > index; index+=1) {
    number = array[index]
    if (number%5 == 0 && number%3 == 0) {
      answer.push("fizzBuzz")
    }else if(number%3 == 0){
      answer.push("fizz")
    }else if(number%5 == 0){
      answer.push("buzz")
    }else{
      answer.push("bug!")
    }
  }
  return(answer)
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
