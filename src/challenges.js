// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringSentence) {
  let arrayStrings = [];
  arrayStrings = stringSentence.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(arrayConc) {
  let stringConcat = '';
  stringConcat = `${arrayConc[arrayConc.length - 1]}, ${arrayConc[0]}`;
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  wins *= 3;
  ties *= 1;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(arrayCount) {
  let vault = arrayCount[0];
  let numberTimes = 0;
  for (let i = 0; i < arrayCount.length; i += 1) {
    if (arrayCount[i] > vault) {
      vault = arrayCount[i];
    }
  }
  for (let i2 = 0; i2 < arrayCount.length; i2 += 1) {
    if (vault === arrayCount[i2]) {
      numberTimes += 1;
    }
  }
  return numberTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);

  if (cat1 < cat2) {
    return "cat1"
  } else if (cat2 < cat1) {
    return "cat2"
  } else if (cat1 == cat2) {
    return 'os gatos trombam e o rato foge';
  };
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayVault = [];
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    if (arrayFizzBuzz[i] % 3 == 0 && arrayFizzBuzz[i] % 5 == 0) {
      arrayVault.push("fizzBuzz");
    } else if (arrayFizzBuzz[i] % 3 == 0) {
      arrayVault.push("fizz");
    } else if (arrayFizzBuzz[i] % 5 == 0) {
      arrayVault.push("buzz");
    } else {
      arrayVault.push("bug!");
    }
  }
  return arrayVault;
}

// Desafio 9
function encode(stringEncode) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let letter = "";

  for (let i = 0; i < stringEncode.length; i += 1) {
    for (let key in code) {
      if (stringEncode[i] == key) {
        letter += code[key];
      }
    }
    if (letter.length <= i) {
      letter += stringEncode[i];
    }
  }
  return letter;
}


function decode(stringDecode) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let letter = "";

  for (let i = 0; i < stringDecode.length; i += 1) {
    for (const key in code) {
      if (stringDecode[i] == code[key]) {
        letter += key;
      }
    }
    if (letter.length <= i) {
      letter += stringDecode[i];
    }
  }
  return letter;
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
