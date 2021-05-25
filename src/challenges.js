// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let tri = base * height
  tri = tri / 2
  return tri
}
// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  let tratamento
  tratamento = texto.split(" ")
  return tratamento
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let nome = "";
  let nome1 = "";
  let resultado = ""
  nome = array[array.length - 1];
  nome1 = array[0]
  resultado = `${nome}, ${nome1}`
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let contador
  contador = wins * 3 + ties * 1;
  return contador;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let contador = 0;
  let maior = 0;
  for (let i in array) {
    if (array[0] === array[i]) {
      maior = array[i]
    }
    else if (maior < array[i]) {
      maior = array[i]
    }
  }
  for (index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      contador += 1
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 < cat2 && cat1 > 0) {
    return "cat1"
  }
  else if (cat1 > cat2 && cat2 > 0) {
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let vazio = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
       vazio.push("fizzBuzz")
    }
    else if (array[key] % 3 === 0) {
      vazio.push("fizz")
    } else if (array[key]%  5 === 0) {
      vazio.push("buzz")
    }
    else {
      vazio.push("bug!")
    }
  }
  return vazio
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
