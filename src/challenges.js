// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
    let area = base * height /2
      return area
}
 

// Desafio 3
function splitSentence(splitfrase){
  let frase = splitfrase.split(` `);
    return frase
      splitArray(`Go Trybe!`)
      splitArray(`Vamo que vamo!`)
      splitArray(`Foguete!`)
}

// Desafio 4
function concatName(concatString){
  let newArray = (concatString[concatString.length -1] + ", " + concatString[0])
    return newArray

}

// Desafio 5
function footballPoints(wins, ties){
  return (wins * 3) + (ties * 1)
}


// Desafio 6
function highestCount(counter) {
    let count = 0;
    let maximum = Math.max.apply(undefined, counter)
for (let number of counter){
  if (number === maximum){
    count += 1;
  }
}
return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
    let gato01 = Math.abs(mouse - cat1);
    let gato02 = Math.abs(mouse - cat2);
    let gatoProx = "";

if(gato01 < gato02){
  return gatoProx = `cat1`;
}
else if(gato01 > gato02) {
  return gatoProx = `cat2`;
}
else {
  return gatoProx = "os gatos trombam e o rato foge"
}
}

// Desafio 8
function fizzBuzz(array) {
    let divisionArray = [];

for(let index = 0; index < array.length; index += 1)
    if(array[index] % 3 == 0 && array[index] % 5 == 0){
      divisionArray.push(`fizzBuzz`);
  }
    else if(array[index] % 3 == 0){
      divisionArray.push(`fizz`);
}
    else if(array[index] % 5 == 0){
      divisionArray.push(`buzz`);
      }
    else{
      divisionArray.push(`bug!`)
    }
    return divisionArray
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
