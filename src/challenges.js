// Desafio 1
function compareTrue(t, f) {
  // seu código aqui
  if(t === true && f === true){
    return true;
  } else {
    return false;
  }
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
  let higherNumber = arr[0];
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
  const distance1 = Math.abs(cat1 - mouse);
  const distance2 = Math.abs(cat2 - mouse);
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
  function fizzBuzz(arr){
    let text = [];
    for(let i = 0; i < arr.length; i++){
      if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
        text.push("fizzBuzz");
      } else {
        if (arr[i] % 3 === 0) {
          text.push('fizz');
        }
  
        if (arr[i] % 5 === 0) {
          text.push('buzz');
        }
      }
      if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {
        text.push('bug!');
      }
    }
    return arr;
  }
}

// Desafio 9
function encode(text) {
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
function decode(text) {
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