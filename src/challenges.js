// Desafio 1
function compareTrue(a,b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false
  }
}
  console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base,height) {
  return (base * height)/2
}
  console.log(calcArea(51,1))

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ', 4);
  return array;
}
  console.log(splitSentence('A Trybe é demais'))

// Desafio 4
function concatName(array) {
  let string = [];
  string.push(array[array.length-1], array[0]);
  return string.join(', ');
}
  console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints(wins,ties) {
  let soma = (wins * 3) + (ties * 1)
  return soma;
}
  console.log(footballPoints(14,8))


// Desafio 6
function highestCount(numeros) {
   let numeroMaior = numeros[0];
   let numeroRepete = 0;
   for (let index = 1; index < numeros.length; index += 1) {
     if (numeros[index] > numeroMaior) {
       numeroMaior = numeros[index] 
       } else numeroMaior = numeroMaior;
      }
    for (let index = 0; index <= numeros.length; index += 1) {       
      if (numeroMaior == numeros[index]) {
            numeroRepete ++;
       }   
      }
      return numeroRepete
    }
        console.log(highestCount([-2, -2, -1]))



// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gatoMaisProximo = "";
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return gatoMaisProximo = "cat1"
  } else if (distanciaCat1 > distanciaCat2) {
    return gatoMaisProximo = "cat2"
  } else {
    return gatoMaisProximo = "os gatos trombam e o rato foge"
  }
  }
      console.log(catAndMouse(1,0,2))


// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
