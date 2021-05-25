// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  let result = [];
  let word = "";

  for(let i = 0; i < sentence.length; i += 1){
    if(sentence.charAt(i) === " "){
      result.push(word);
      word = "";
    }else{
      word += sentence.charAt(i);
    }
  }

  result.push(word);
  return result;
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = numbers[0];
  let count = 0;

  for(number of numbers){
    if(number > highest){
      highest = number;
      count = 1;
    }else if(number == highest){
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1)
  let distCat2 = Math.abs(mouse - cat2)
  if(distCat1 == distCat2){
    return "os gatos trombam e o rato foge";
  }else if(distCat1 < distCat2){
    return "cat1";
  }
  return "cat2";
}
// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for(number of numbers){
    if(number % 3 == 0 && number % 5 == 0){
      result.push("fizzBuzz");
    }else if(number % 3 ==0){
      result.push("fizz");
    }else if(number % 5 == 0){
      result.push("buzz")
    }else{
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(sentence) {
  let result = "";

  for(let i = 0; i < sentence.length; i += 1){
    switch(sentence.charAt(i)){
      case 'a':
        result += '1';
        break;
      case 'e':
        result += '2';
        break;
      case 'i':
        result += '3';
        break;
      case 'o':
        result += '4';
        break;
      case 'u':
        result += '5';
        break;
      default:
        result += sentence.charAt(i);
    };
  }
  return result;
}

function decode(sentence) {
  let result = "";

  for(let i = 0; i < sentence.length; i += 1){
    switch(sentence.charAt(i)){
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += sentence.charAt(i);
    }
  }
  return result;
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
}
