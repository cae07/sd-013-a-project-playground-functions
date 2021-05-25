// Desafio 1
function compareTrue(val1, val2) {
  //Tio Jack mostrou no esquenta
  if (val1 === true && val2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;

  return area;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let split = sentence.split(" ");
  return split; 
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {

  let primeiroItem;
  let ultimoItem;
  let concat;

  for (let indexConcat = 0; indexConcat < array.length; indexConcat += 1){

    if (indexConcat === 0) {
      primeiroItem = array[indexConcat];
    } else if (indexConcat === (array.length - 1)) {
      ultimoItem = array[indexConcat]
    } else {
      continue;
    }

    concat = `${ultimoItem}, ${primeiroItem}`;
  }
  return concat;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3; 
  let tiesPoints = ties * 1;

  let points = winsPoints + tiesPoints;
  return points;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {

  let highestNumber = numbers[0], counter = 0;

  for (let indexCount = 0; indexCount < numbers.length; indexCount += 1) {
    //Dúvidas sobre o exercício esclarecidas pelo Sumo no plantão
    if (highestNumber < numbers[indexCount]){
      highestNumber = numbers[indexCount];
      counter = 1;
    } else if (highestNumber === numbers[indexCount]){
      counter += 1;
    }
  }
  return counter;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  /*
  Declarar a array numbers como parâmetro da função;
  Criar um nova array vazia, como words, p.ex.;
  Criar um loop for in; 
  Criar uma condicional se o number[index] for divisível apenas por 3, adicionar na array words a string 'fizz';
  Criar uma condicional se o number[index] for divisível apenas por 5, adicionar na array words a string 'buzz';
  Criar uma condicional se o number[index] for divisível por 3 e 5, adicionar na array words a string 'fizzBuzz';
  Se o number[index] não for divisível nem por 3 ou por 5, adicionar na array words a palavra 'bug'. 
  Retornar a array words no final da função; 
  */

  let words = [];

  for (let index in numbers){
    if ((numbers[index] % 3) === 0 && (numbers[index] % 5) === 0) {
      words.push('fizzBuzz')
    } else if((numbers[index] % 3) === 0) {
      words.push('fizz');
    } else if((numbers[index] % 5) === 0) {
      words.push('buzz');
    } else {
      words.push('bug!')
    }
  }

  return words;
}
console.log(fizzBuzz([9, 25]));

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
