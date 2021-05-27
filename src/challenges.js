// Desafio 1
function compareTrue(x, y) {
  if(x === true && y === true) {
    return true; 
  } else {
    return false;
  }
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if(Math.abs(cat1 - mouse) < (Math.abs(cat2 - mouse))) {
    console.log("cat1");
  } else if(Math.abs(cat1 - mouse) > (Math.abs(cat2 - mouse))) {
    console.log("cat2");
  } else {
    console.log("os gatos trombam e o rato foge");
  }
  
}

catAndMouse(3, 4, 2);
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
