// Desafio 1
function compareTrue(value1,value2) {
  if (value1 == true && value2 == true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return(base * height)/2; }

// Desafio 3
function splitSentence(value) {
  return value.split(' ');
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(value) {
  let biggerNumber = value[0];
  let cont = 0;

  for (let i = 0; i < value.length; i++) {
    if (biggerNumber < value[i]) {
      biggerNumber = value[i];
      cont = 1;
    } else if (value[i] === biggerNumber) {
      cont = cont + 1;
    }
  }
  return cont;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let result;

  if(dist1 < dist2) {
    return 'cat1';
  }else if(dist1 > dist2){
    return 'cat2';
  }else{
    return 'os gatos trombam e o rato foge';
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
