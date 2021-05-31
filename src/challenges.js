// Desafio 1
function compareTrue(val1, val2) {
  // Tio Jack mostrou no esquenta
  if (val1 === true && val2 === true) {
    return true;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let split = sentence.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  let primeiroItem;
  let ultimoItem;
  let concat;

  for (let indexConcat = 0; indexConcat < array.length; indexConcat += 1) {
    if (indexConcat === 0) {
      primeiroItem = array[indexConcat];
    } else if (indexConcat === (array.length - 1)) {
      ultimoItem = array[indexConcat];
    }

    concat = `${ultimoItem}, ${primeiroItem}`;
  }
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;

  let points = winsPoints + tiesPoints;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let counter = 0;

  for (let indexCount = 0; indexCount < numbers.length; indexCount += 1) {
    // Dúvidas sobre o exercício esclarecidas pelo Sumo no plantão
    if (highestNumber < numbers[indexCount]) {
      highestNumber = numbers[indexCount];
      counter = 1;
    } else if (highestNumber === numbers[indexCount]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /* Dúvidas sobre o exercício esclarecidas pelo Sumo no plantão
  Math.abs sendo usado para os casos em que a distância for negativa (como a posição do rato ser 1 e do cat1 ser 0, p.ex), tornando o resultado um valor positivo */
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let words = [];

  for (let index in numbers) {
    if ((numbers[index] % 3) === 0 && (numbers[index] % 5) === 0) {
      words.push('fizzBuzz');
    } else if ((numbers[index] % 3) === 0) {
      words.push('fizz');
    } else if ((numbers[index] % 5) === 0) {
      words.push('buzz');
    } else {
      words.push('bug!');
    }
  }

  return words;
}

// Desafio 9
function encode(message) {
  // Referências usadas para consulta sobre concatenação: https://www.w3schools.com/jsref/jsref_concat_string.asp // https://masteringjs.io/tutorials/fundamentals/string-concat
  let encodedMessage = '';
  for (let index in message) {
    switch (message[index]) {
      case 'a':
      encodedMessage += '1';
      break;

      case 'e':
      encodedMessage += '2';
      break;

      case 'i':
      encodedMessage += '3';
      break;

      case 'o':
      encodedMessage += '4';
      break;

      case 'u':
      encodedMessage += '5';
      break;

      default:
      encodedMessage += message[index];
      break;
    }
  }

  return encodedMessage;
}

function decode(message) {
  let decodedMessage = '';
  for (let index in message) {
    switch (message[index]) {
      case '1':
      decodedMessage += 'a';
      break;

      case '2':
      decodedMessage += 'e';
      break;

      case '3':
      decodedMessage += 'i';
      break;

      case '4':
      decodedMessage += 'o';
      break;

      case '5':
      decodedMessage += 'u';
      break;

      default:
      decodedMessage += message[index];
      break;
    }
  }

  return decodedMessage;
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
