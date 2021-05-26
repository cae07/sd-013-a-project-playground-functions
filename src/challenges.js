// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = 0;
  resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(palavras) {
  let palavrasVar = palavras;
  if (palavrasVar[1] = true) {
    let resultado = palavrasVar.split(" ")
    return resultado;
  } else {
    return palavrasVar;
  }
}

// Desafio 4
function concatName(arrayDeStrings) {
  return arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let resultado = vitorias + ties;
  return resultado;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let numeroMaior = arrayDeNumeros[0];
  let repeticoes = 1;
  for(let indice = 1; indice < arrayDeNumeros.length; indice += 1){
    if(numeroMaior < arrayDeNumeros[indice]){
      numeroMaior = arrayDeNumeros[indice];
      repeticoes = 1;
    } else if (numeroMaior === arrayDeNumeros[indice]){
      repeticoes += 1
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);
  if(gato1 > gato2) {
    return "cat2";
  } else if(gato2 > gato1) {
    return "cat1";
  } else if(gato2 === gato1) {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNumerico) {
  let arrayString = [];
  for(let indice = 0; indice < arrayNumerico.length; indice += 1) {
    if(arrayNumerico[indice] % 5 == 0 && arrayNumerico[indice] % 3 == 0) {
      arrayString.push("fizzBuzz");
    } else if(arrayNumerico[indice] % 5 == 0) {
      arrayString.push("buzz");
    } else if(arrayNumerico[indice] % 3 == 0) {
      arrayString.push("fizz");
    } else {
      arrayString.push("bug!");
    }
  }
  return arrayString
}

// Desafio 9
function encode(string) {
  let resultado = "";
  for(let indice = 0; indice < string.length; indice += 1) {
    if(string[indice] === "a") {
      resultado += "1";
    } else if(string[indice] === "e") {
      resultado += "2";
    } else if(string[indice] === "i") {
      resultado += "3";
    } else if(string[indice] === "o") {
      resultado += "4";
    } else if(string[indice] === "u") {
      resultado += "5";
    } else {
      resultado += string[indice];
    }
  }
  return resultado;
}
function decode(string) {
  let resultado = "";
  for(let indice = 0; indice < string.length; indice += 1) {
    if(string[indice] === "1") {
      resultado += "a";
    } else if(string[indice] === "2") {
      resultado += "e";
    } else if(string[indice] === "3") {
      resultado += "i";
    } else if(string[indice] === "4") {
      resultado += "o";
    } else if(string[indice] === "5") {
      resultado += "u";
    } else {
      resultado += string[indice];
    }
  }
  return resultado;
}

// Desafio 10
function listTech(techs, name) {
  let array = [];

  for(item of techs) {
    let objeto = {
      tech: item,
      name: name
    };
    array.push(objeto);
  }

  if(array.length > 0) {
    return array;
  } else {
    return "Vazio!";
  }
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
