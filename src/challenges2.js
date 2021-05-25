// Desafio 10
function techList(techNamesArray, name) {
  if (techNamesArray.length === 0) {
    return 'Vazio!';
  }

  let arrayOrdenada = techNamesArray.sort();
  let saida = [];

  for (let i in arrayOrdenada) {
    saida.push({ tech: arrayOrdenada[i], name: name });
  }

  return saida;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i in phoneNumber) {
    if (phoneNumber[i] < 0 || phoneNumber[i] > 9 || (phoneNumber.filter(x => x === phoneNumber[i]).length) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let numero = '';

  for (let j in phoneNumber) {
    if (j == 0) {
      numero += `(${phoneNumber[j]}`;
    } else if (j == 1) {
      numero += `${phoneNumber[j]}) `;
    } else if (j == 6) {
      numero += `${phoneNumber[j]}-`;
    } else {
      numero += phoneNumber[j];
    }
  }

  return numero;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(stringBebidas) {
  let reg = /\d+/g;
  let resultado = stringBebidas.match(reg);
  let total = 0;

  for (let i in resultado) {
    total += parseInt(resultado[i]);
  }

  if (total == 1) {
    return '1 copo de água';
  } else {
    return `${total} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
