// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  }else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
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
  return array
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
  return string
}
// Desafio 5
function footballPoints() {
  
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
