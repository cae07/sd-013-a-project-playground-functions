// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let calcAreaTriangulo = (base * height) / 2;
  return calcAreaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let indiceDoArray = `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;
  return indiceDoArray;
}
// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let qntpoints = vitorias + empates;
  return qntpoints;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let contador = 0;
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] > maiorNumero) {
      contador = 0;
      maiorNumero = arrayDeNumeros[i];
    }
    if (maiorNumero === arrayDeNumeros[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let array = [];
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    const numeroAtual = arrayDeNumeros[i];
    const divisivelPor3 = numeroAtual % 3 === 0;
    const divisivelPor5 = numeroAtual % 5 === 0;
    if (divisivelPor3 && divisivelPor5) {
      array.push('fizzBuzz');
    } else if (divisivelPor3) {
      array.push('fizz');
    } else if (divisivelPor5) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string1) {
  string1 = string1.replace(/a/g, '1');
  string1 = string1.replace(/e/g, '2');
  string1 = string1.replace(/i/g, '3');
  string1 = string1.replace(/o/g, '4');
  string1 = string1.replace(/u/g, '5');
  return string1;
}

function decode(string2) {
  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g, 'e');
  string2 = string2.replace(/3/g, 'i');
  string2 = string2.replace(/4/g, 'o');
  string2 = string2.replace(/5/g, 'u');
  return string2;
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
