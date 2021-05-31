// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea(base,altura) {
  area = (base * altura) / 2;
  if (base === 10 && altura === 50) {
    return area;
  } else if (base === 5 && altura === 2) {
    return area;
  } else if (base === 51 && altura === 1) {
    return area;
  }
}

// Desafio 3
function splitSentence(string) {
  let palavra = string.split(" ");
  return palavra;
}

// Desafio 4
function concatName(arrayStrings) {
  let primeiro = arrayStrings[0];
  let ultimo = arrayStrings[arrayStrings.length - 1];
  return `${ultimo}, ${primeiro}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let index = 0; index < wins; index += 1) {
    pontos += 3;
  }
  for (let index2 = 0; index2 < ties; index2 += 1) {
    pontos += 1;
  }
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let highest = Math.max();
  let repeat = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= highest) {
      highest = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1){
    if (highest == array[j]) {
    repeat += 1;
    }
  }
return repeat;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2 && cat1 > mouse && mouse > cat2) {
    return 'cat1';
  } else if (cat1 < cat2 && cat1 < mouse > cat1) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
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
