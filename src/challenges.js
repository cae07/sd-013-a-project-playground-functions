// Desafio 1
function compareTrue(val1, val2) {
  //Tio Jack mostrou no esquenta
  if (val1 === true && val2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;

  return area;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let split = sentence.split(" ");
  return split; 
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {

  let primeiroItem;
  let ultimoItem;
  let concat;

  for (let indexConcat = 0; indexConcat < array.length; indexConcat += 1){

    if (indexConcat === 0) {
      primeiroItem = array[indexConcat];
    } else if (indexConcat === (array.length - 1)) {
      ultimoItem = array[indexConcat]
    } else {
      continue;
    }

    concat = `${ultimoItem}, ${primeiroItem}`;
  }
  return concat;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3; 
  let tiesPoints = ties * 1;

  let points = winsPoints + tiesPoints;
  return points;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {

  for (let indexCount = 0; indexCount < numbers.length; indexCount += 1) {
    let highestNumber = numbers[0], counter = 0;

    /*
    if (highestNumber < numbers[indexCount] && numbers[indexCount] > (numbers[indexCount] - 1) && numbers[indexCount] > (numbers[indexCount] + 1)) {
      highestNumber = numbers[indexCount];
      counter += 1; 
    } 
    */
   
  }
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
