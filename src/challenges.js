// Desafio 1
function compareTrue(value1, value2){
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
  // seu código aqui


// Desafio 2
function calcArea(base, height, area) {
  area = 1/2*base*height;
  return area
}
  // seu código aqui

// Desafio 3
function splitSentence(string) {
 return string.split(" ");
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  let ultimonumero = names[names.lenght - 1];
  let primeiroN = names[0];
  return ultimonumero + ", " + primeiroN

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
function catAndMouse(mouse, cat1, cat2) {
  if (mouse ) return
  "os gatos trombam e o rato foge"
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

