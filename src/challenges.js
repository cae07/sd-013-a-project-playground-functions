const { rules } = require("eslint-plugin-sonarjs");

// Desafio 1
function compareTrue(x, y) {
  return x === true && y === true;
}

// Desafio 2
function calcArea(base, height) {
  let v = base * height 
  return v / 2
}

// Desafio 3
//Desafio feito com a ajuda do material: https://blog.betrybe.com/javascript/javascript-split/
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(names) {
  let x = names [names.length - 1]
  let y = names[0];
  return `${x}, ${y}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let gamesWins = wins * 3
  let gamesTies = ties * 1 
  return gamesWins + gamesTies
}

// Desafio 6
function highestCount(x) {
  let y = x[0];
  let z = 0

  for (i = 0; i < x.length; i += 1) {
    if (x[i] > y) {
      y = x[i];
    }
  }
  for (i =0; i < x.length; i += 1) {
    if (y === x[i]) {
      z += 1;
    }
  }

  return z
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posi1 = Math.abs(cat1 - mouse);
  let posi2 = Math.abs(cat2 - mouse);
  if (posi1 > posi2) {
    return 'cat2';
  } else if (posi2 > posi1) {
    return 'cat1';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (i in array) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 == 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 == 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(str) {
  let strEncode = "";
  for (i in str) {
    switch (str[i]) {
      case "a":
        strEncode += "1";
        break;
      case "e":
        strEncode += "2";
        break;
      case "i":
        strEncode += "3";
        break;
      case "o":
        strEncode += "4";
        break;
      case "u":
        strEncode += "5";
        break;
      default:
        strEncode += str[i];
    }
  }
  return strEncode;}
function decode(str) {
  let strDecode = "";
  for (i in str) {
    switch (str[i]) {
      case "1":
        strDecode += "a";
        break;
      case "2":
        strDecode += "e";
        break;
      case "3":
        strDecode += "i";
        break;
      case "4":
        strDecode += "o";
        break;
      case "5":
        strDecode += "u";
        break;
      default:
        strDecode += str[i];
    }
  }
  return strDecode;
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
