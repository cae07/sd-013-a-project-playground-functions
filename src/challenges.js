// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(strArray) {
  return `${strArray[strArray.length - 1]}, ${strArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arr) {
  /* Documentação consultada para uso da função Math.max.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max */
  let highValue = Math.max(...arr);
  let count = 0;
  for (let key in arr) {
    if (arr[key] === highValue) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  /* Documentação consultada para uso do método map
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */
  let mapArr = arr.map((x) => {
    if (x % (3 * 5) === 0) {
      return 'fizzBuzz';
    }
    if (x % 3 === 0) {
      return 'fizz';
    }
    if (x % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
  return mapArr;
}

// Desafio 9
function encode(string) {
  /* Referência e documentações consultadas para reduzir complexidade do desafio 9
  https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  https://www.w3schools.com/jsref/jsref_replace.asp
  */
  let strOut = '';
  let code = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  strOut = string.replace(/(?:a|e|i|o|u)/g, (matched) => code[matched]);
  return strOut;
}
function decode(string) {
  let strOut = '';
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  strOut = string.replace(/(?:1|2|3|4|5)/g, (matched) => code[matched]);
  return strOut;
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
