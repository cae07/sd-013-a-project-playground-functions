// Desafio 1
function compareTrue(a,b) {
  if(a == true && b == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arrayFrase =[];
  arrayFrase = frase.split(" ");
  return arrayFrase;
}


// Desafio 4
function concatName() {

}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins*3)+(ties*1);
  return points;
}

// Desafio 6
function highestCount() {
  
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 == cat2){
    return 'os gatos trombam e o rato foge';
  }else if((cat1 - mouse) == (mouse - cat2)){
    return 'os gatos trombam e o rato foge';
  }else if(cat2<cat1){
    return 'cat2';
  }else if(cat1<cat2){
    return 'cat1';
  }
}

console.log(catAndMouse(1,22,22));

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
