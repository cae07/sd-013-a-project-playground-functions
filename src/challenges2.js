// Desafio 10
function techList(array, name) {
  let result = [];

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    let objectList = {};
    objectList.tech = array[index];
    objectList.name = name;
    result.push(objectList);
  }

  result.sort((a, b) => a.tech > b.tech ? 1 : -1);

  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const conditionsArray = [
    (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)),
    (lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)),
    (lineC > (lineA + lineB) || lineC < Math.abs(lineA - lineB))];

  if (!conditionsArray.includes(false)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(array) {
  let regex = /\d+/g;
  let numString = array.match(regex);
  let conta = 0;

  let numInteg = numString.map(function (result) {
    let resultado = parseInt(result, 10);
    return resultado;
  });

  for (let index = 0; index < numInteg.length; index += 1) {
    conta += numInteg[index];
  }

  if (conta > 1) {
    return `${conta} copos de água`;
  }
  return `${conta} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
