// Desafio 1
function compareTrue(bool1 , bool2) {
  if (bool1 === true && bool2 === true){
    return true;
  }
  else {
    return false;
  }
};

// Desafio 2
function calcArea(base , height) {
  let area = (base*height)/2;
  return area;
};

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
};

// Desafio 4
function concatName(array) {
  let i = (array.length - 1);
    return array[i] + ", " + array[0];
};


// Desafio 5
function footballPoints(wins , ties) {
  let somaPontos = (wins*3 + ties);
  return somaPontos;
};

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  let dist1 = (mouse - cat1)
  let dist2 = (mouse - cat2)
  if (dist1 < 0) {
    dist1 = dist1*(-1)
  }
  if (dist2 < 0) {
    dist2 = dist2*(-1)
  }
  if (dist1 > dist2) {
    return "cat2";
  }
  else if (dist1 < dist2){
    return "cat1";
  }
  else {
    return "os gatos trombam e o rato foge";
   }
}; console.log(catAndMouse(0,3,2))

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
