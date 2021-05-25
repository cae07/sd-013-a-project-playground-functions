// Desafio 10
function techList(techArray, name) {
  let orderedTechs = techArray.sort().map((tech) => ({
    tech,
    name,
  }));
  return orderedTechs.length ? orderedTechs : 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(digitsArray) {
  if (digitsArray.length == 11) {
    if (
      !anyOverThree(digitsArray) &&
      !anyNegative(digitsArray) &&
      !anyHigherThanNine(digitsArray)
    ) {
      let template = '(areaCode) exchangeCode-lineNumber';
      template = template.replace('areaCode', digitsArray.slice(0, 2).join(''));
      template = template.replace(
        'exchangeCode',
        digitsArray.slice(2, 7).join('')
      );
      template = template.replace(
        'lineNumber',
        digitsArray.slice(7, 11).join('')
      );
      return template;
    }

    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';

  // ************************************

  function anyNegative(array) {
    return array.some(negative);
  }

  function anyHigherThanNine(array) {
    return array.some(higherThan(9));
  }

  function anyOverThree(array) {
    for (let i = 0; i < array.length; i++) {
      let counter = 1;
      for (let j = 0; j < array.length; j++) {
        if (array[j] == array[i]) {
          counter++;
          if (counter > 3) return true;
        }
      }
    }

    return false;
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// *********************

function higherThan(a) {
  return function (b) {
    return b > a;
  };
}

function negative(a) {
  return a < 0;
}
