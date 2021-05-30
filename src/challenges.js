// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  str = str.split(" ");
  return str
}

// Desafio 4
function concatName(array) {
  let a = array[0];
  let b = array[array.length - 1]
  return b + "," + " " + a
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 3 * wins + ties;
  return total;
}
console.log(footballPoints(1, 2));
// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let maxcount = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      if (array[j] > maior) {
        maior = array[j];
      }
    }
  }
  for (let k = 0; k < array.length; k += 1) {
    if (array[k] === maior) {
      maxcount += 1;
    }
  }
  return maxcount;
  console.log(maxcount);
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 > dist2) {
    return 'cat2';
  } else if (dist2 > dist1) {
    ;
    return 'cat1';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
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
  for (let i = 0; i < str.length; i++) {
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
  return strEncode;
}
function decode(str) {
  let strDecode = "";
  for (let i = 0; i < str.length; i++) {
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
console.log(decode('h3 th2r2!'));

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
