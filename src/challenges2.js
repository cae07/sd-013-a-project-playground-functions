// Desafio 10
function techList(array, name) {
  array = array.sort();
  let techs = [];

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    techs.push({ tech: array[i], name });
  }
  return techs;
}

// Desafio 11
function criaNumero(array, string) {
  for (let i = 0; i < array.length; i += 1) {
    if (i === 1) {
      array[i] = `${array[i]}) `;
    } else if (i === 6) {
      array[i] = `${array[i]}-`;
    }
    string.push(array[i]);
  }
  return string.join('');
}

function naoCria(array, resultado) {
  array.forEach(function (number) {
    let cont = 0;
    array.forEach(function (number2) {
      if (number === number2) {
        cont += 1;
      }
    });
    if (number < 0 || number > 9 || cont >= 3) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    }
  });
  return resultado;
}

function generatePhoneNumber(array) {
  let string = ['('];
  let resultado = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  resultado = naoCria(array, resultado);
  if (resultado) return resultado;
  return criaNumero(array, string);
}

// Desafio 12
function isAaTriangle(lineA, lineB, lineC) {
  let result = false;
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    result = true;
  }
  return result;
}

function isBaTriangle(lineA, lineB, lineC) {
  let result = false;
  if ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))) {
    result = true;
  }
  return result;
}

function isCaTriangle(lineA, lineB, lineC) {
  let result = false;
  if ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB))) {
    result = true;
  }
  return result;
}

function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  result = isAaTriangle(lineA, lineB, lineC);
  result = isBaTriangle(lineA, lineB, lineC);
  result = isCaTriangle(lineA, lineB, lineC);
  return result;
}

// Desafio 13
function hydrate(string) {
  let s = string;
  let v = /\d+/g;
  let cond = (s.match(v));
  let sum = 0;

  for (let i = 0; i < cond.length; i += 1) {
    sum += Number(cond[i]);
  }

  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
