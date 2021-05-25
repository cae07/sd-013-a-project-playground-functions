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
  return strArray[strArray.length - 1] + ', ' + strArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  
  return totalPoints;
}

// Desafio 6
function highestCount(arr) {
  /*
  Documentação consultada para uso da função Math.max.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  */
  let highValue = Math.max(...arr);
  let count = 0;
  for (key in arr) {
    if (arr[key] == highValue) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if (Math.abs(mouse - cat1) == Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge";
  }
  else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  }
  else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let strArray = [];

  for (let key in arr) {
    if (arr[key] % 3 == 0 && arr[key] % 5 == 0) {
      strArray.push('fizzBuzz')
    }
    else if (arr[key] % 3 == 0) {
      strArray.push('fizz')
    }
    else if (arr[key] % 5 == 0) {
      strArray.push('buzz')
    }
    else {
      strArray.push('bug!')
    }
  }

  return strArray;
}

// Desafio 9
function encode(string) {
  let code = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  }

  let strArray = string.split('');
  let strOut = '';

  for (let key in code) {
    for (let key2 in strArray) {
      if (strArray[key2] == key) {
        strArray[key2] = code[key];
      }
    }
  }

  for (let key in strArray) {
    strOut += strArray[key];
  }

  return strOut;
}
function decode(string) {
  let code = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  }

  let strArray = string.split('');
  let strOut = '';

  for (let key in code) {
    for (let key2 in strArray) {
      if (strArray[key2] == code[key]) {
        strArray[key2] = key;
      }
    }
  }

  for (let key in strArray) {
    strOut += strArray[key];
  }

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
