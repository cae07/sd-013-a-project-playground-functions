// Desafio 1
function compareTrue(number1, number2) {
  if (number1 == true && number2 == true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));
// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}





// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  for (const key in array) {
    return array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let maiorvalor = array[0]
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= maiorvalor) {
      maiorvalor = array[index]
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorvalor) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicao1, posicao2;
  if (cat1 <= mouse) {
    posicao1 = mouse - cat1;
  } else {
    posicao1 = cat1 - mouse;
  }
  if (cat2 <= mouse) {
    posicao2 = mouse - cat2;
  } else {
    posicao2 = cat2 - mouse;
  }


  if (posicao1 > posicao2) {
    return 'cat2';
  } else if (posicao2 > posicao1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  number = [];
  for (const index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      number.push('fizzBuzz')
    } else if (array[index] % 5 === 0) {
      number.push('buzz');
    } else if (array[index] % 3 === 0) {
      number.push('fizz');
    } else {
      number.push('bug!');
    }
  }
  return number;
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