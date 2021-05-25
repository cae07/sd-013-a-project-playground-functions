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
  first = list[list.length-1];
  last = list[0];
  return first + "," + last;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins) + (1*ties)
}


// Desafio 6
function highestCount(list) {
  biggest = 0
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

// Desafio 7
function catAndMouse(cat1,cat2) {
  if (cat1 > cat2){
    return "cat2";
  }else if(cat2 > cat1){
    return "cat1"
  }else{
    return "os gatos trombam e o rato foge"
  }
}

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
