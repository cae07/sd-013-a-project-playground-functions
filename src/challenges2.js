// Desafio 10
function techList(array, name) {
  array.sort();
  let novoArray = [];
  let result = novoArray;

  if (array.length > 0) {
    for (let index of array) {
      let objeto = {
        tech: index,
        name,
      };
      novoArray.push(objeto);
    }
  } else {
    result = 'Vazio!';
  }

  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = 'Array com tamanho incorreto.';

  if (array.length === 11) {
    let telNumber1 = [];
    let telNumber2 = [];
    let telNumber3 = [];
    let contagem = 0;
    let erro = false;

    for (let i of array) {
      for (let a of array) {
        if (i === a) {
          contagem += 1;
        }
      }
      if (contagem >= 3 || i > 9 || i < 0) {
        erro = true;
      }
      contagem = 0;
    }

    if (erro === true) {
      result = 'não é possível gerar um número de telefone com esses valores';
    } else {
      for (let index = 0; index < array.length; index += 1) {
        if (index < 2) {
          telNumber1.push(array[index]);
        } else if (index > 6) {
          telNumber3.push(array[index]);
        } else {
          telNumber2.push(array[index]);
        }
        result = `(${telNumber1.join('')}) ${telNumber2.join('')}-${telNumber3.join('')}`;
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) && lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) && lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    check = true;
  }
  return check;
}

// Desafio 13
function hydrate(string) {
  let bebidas = string.match(/\d/g).map(Number);
  let agua = 0;
  let result;

  for (let index of bebidas) {
    agua += index;
  }

  if (agua === 1) {
    result = `${agua} copo de água`;
  } else {
    result = `${agua} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
