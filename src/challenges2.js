// Desafio 10
function techList(array, name) {
  let result = [];

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    let objectList = {
      tech: null,
      name: null,
    };
    objectList.tech = array[index];
    objectList.name = name;
    result.push(objectList);
  }

  result.sort((a, b) => (a.tech > b.tech ? 1 : -1));

  return result;
}

// Desafio 11
const verifyDigits = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return false;
    }
  }
  return true;
};

const checkRepeatAux = (array, number) => {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (number === array[index]) {
      repeat += 1;
    }
  }
  return repeat;
};

const checkRepeatNumbers = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    let repeat = checkRepeatAux(array, array[index]);
    if (repeat >= 3) {
      return false;
    }
  }
  return true;
};

function generatePhoneNumber(array) {
  // seu código aqui
  let phonenumber = '';

  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (verifyDigits(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (checkRepeatNumbers(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  phonenumber += `(${array[0]}${array[1]}) `;
  phonenumber += `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-`;
  phonenumber += `${array[7]}${array[8]}${array[9]}${array[10]}`;
  return phonenumber;
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
