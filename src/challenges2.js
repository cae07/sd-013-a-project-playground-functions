const {
  add,
  subtract,
  sumArray,
  anyNegative,
  anyHigherThanNine,
  anyOverThree,
} = require('./helpers.js');

// Desafio 10
function techList(techArray, name) {
  let orderedTechs = [...techArray].sort().map((tech) => ({
    tech,
    name,
  }));
  return orderedTechs.length ? orderedTechs : 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(digitsArray) {
  if (digitsArray.length === 11) {
    if (
      !anyNegative(digitsArray) &&
      !anyHigherThanNine(digitsArray) &&
      !anyOverThree(digitsArray)
    ) {
      let template = '(area) exchange-line';
      template = template.replace('area', digitsArray.slice(0, 2).join(''));
      template = template.replace('exchange', digitsArray.slice(2, 7).join(''));
      template = template.replace('line', digitsArray.slice(7, 11).join(''));
      return template;
    }

    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(a, b, c) {
  for (let i = 0; i < 3; i += 1) {
    const sides = [a, b, c];
    const side = sides.splice(i, 1)[0];
    const sum = add(sides[0], sides[1]);
    const diff = Math.abs(subtract(sides[0], sides[1]));
    if (side < sum && side > diff) return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinksHad) {
  let counts = drinksHad
    .replace(/[^0-9]+/g, '')
    .split('')
    .map((a) => Number(a));
  let glasses = sumArray(counts);

  return `${glasses} copo${glasses > 1 ? 's' : ''} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
