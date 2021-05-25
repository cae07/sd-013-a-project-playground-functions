// Desafio 1
function compareTrue(t, f) {
  // seu código aqui
  let result;
  if(t == "true" && f == "false"){
    result = false;
  } else if(t == "false" && f == "false"){
    result = false;
  } else if(t == "true" && f == "true"){
    result = true;
  } else if (t == "false" && f == "true"){
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  const words = sentence.split(' ', sentence.length);
  return words;
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  const lastName = arr[arr.length - 1];
  return `${lastName}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  const higherNumber = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > higherNumber){
      higherNumber = arr[i];
    }
  }
  let counter = 0;
  for(let j = 0; j < arr.length; j++){
    if(higherNumber === arr[j]){
      counter ++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(cat1 > cat2 ){
    return 'cat2';
  } else if(cat1 < cat2){
    return 'cat1';
  } else if(cat1 == mouse && cat2 == mouse){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
  function fizzBuzz(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 3 === 0 && arr[i] % 5 !== 0){
        arr[i] = "fizz";
      } else if(arr[i] % 5 === 0 && arr[i] % 3 !== 0){
        arr[i] = "buzz";
      } else if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
        arr[i] = "fizzBuzz";
      } else if(arr[i] % 3 !== 0 && arr[i] % 5 !== 0){
        arr[i] = "bug!";
      }
    }
    return arr;
  }
}

// Desafio 9
function encode() {
  // seu código aqui
  const words = text.split('', text.length);
  for(let i = 0; i < words.length; i++){
    if(words[i] === "a"){
      words[i] = 1;
    } else if(words[i] === "e"){
      words[i] = 2;
    } else if(words[i] === "i"){
      words[i] = 3;
    } else if(words[i] === "o"){
      words[i] = 4;
    } else if(words[i] === "u"){
      words[i] = 5;
    }
  }
  return words.join('');
}
function decode() {
  // seu código aqui
  const words = text.split('', text.length);
  for(let i = 0; i < words.length; i++){
    if(words[i] === "1"){
      words[i] = "a";
    } else if(words[i] === "2"){
      words[i] = "e";
    } else if(words[i] === "3"){
      words[i] = "i";
    } else if(words[i] === "4"){
      words[i] = "o";
    } else if(words[i] === "5"){
      words[i] = "u";
    }
  }
  return words.join('');
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