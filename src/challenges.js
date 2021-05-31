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
function concatName(nomes) {
  let primeiroN = nomes[0];
  let ultimoN = nomes[nomes.length - 1];
  return ultimoN + ", " + primeiroN;

  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWin = wins*3;
  let pontosTie = ties*1;
  let resp = pontosWin + pontosTie;
  return resp

  // seu código aqui
}
// Desafio 6

function highestCount(numbers) {
  let bigger = numbers[0];
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
      resultado = 0;
    }
    if (numbers[i] === bigger) {
      resultado += 1;
    }
  }
  return resultado;
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

