// Desafio 1
function compareTrue(value1,value2) {
  if(value1 == true && value2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(list) {
  let first = list[list.length-1];
  let last = list[0];
  return first + ", " + last;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins) + (1*ties)
}


// Desafio 6
function highestCount(list) {
  biggest = -10000000;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] > biggest){
      biggest = list[index]; 
    }
  }
    let cont = 0
    for (let index = 0; index < list.length; index += 1) {
      if (biggest == list[index]){
        cont = cont + 1;
    }
  }return cont;
}
console.log(highestCount([1, 9, 2, 3, 9, 5, 7] ));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let situation1 = cat1 - mouse;
  let situation2 = cat2 - mouse;
  if (situation1 < situation2){
    return "cat1";
  }else if(situation1 > situation2){
    return "cat2";
  }else if (situation2 == situation1){
    return "os gatos trombam e o rato foge"
  }
}console.log(catAndMouse(0,2,2));

// Desafio 8
function fizzBuzz(list) {
  for (let index = 0; index < list.length; index += 1) {
    resto3 = list[index]%3;
    resto5 = list[index]%5;
    if (resto3 == 0 && resto5 == 0){
      list[index] = "fizzBuzz";
    }else if (resto3 == 0 ){
      list[index] = "fizz";
    }else if (resto5 == 0 ){
      list[index] = "buzz";
    }else{
      list[index] = "bug!";
    }
  }return list
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
