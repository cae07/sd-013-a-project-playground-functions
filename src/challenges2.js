// Desafio 10 - função de Lista de Tecnologias ORDENADA

// função comparar para ordenar array
function comparar(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
}
function techList(array, name) {
  let objectList = [];

  for (let index = 0; index < array.length; index += 1) {
    objectList.push({
      tech: array[index],
      name,
    });
  }
  if (objectList.length !== 0) {
    return objectList.sort(comparar);
  }
  return 'Vazio!';
}
// let teste = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let nome = "Ricardo";
// console.log(techList(teste, nome));

// Desafio 11 - função de Número de Telefone
function generatePhoneNumber(array) {
  // VERIFICA OS PARAMETROS DE VALIDACAO
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    let nRepeat = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        nRepeat += 1;
      }
    }
    if (nRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // INSERE A MASCARA
  let ddd = array.slice(0, 2).join('');
  let telBloco1 = array.slice(2, 7).join('');
  let telBloco2 = array.slice(7, 12).join('');
  return `(${ddd})` + ` ${telBloco1}-${telBloco2}`;
}
let arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(arrayTest));

// Desafio 12 - função de Condição de existência de um triângulo
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  if (
    Math.abs(lineA) < Math.abs(lineB) + Math.abs(lineC)
    && Math.abs(lineB) < Math.abs(lineA) + Math.abs(lineC)
    && Math.abs(lineC) < Math.abs(lineB) + Math.abs(lineA)
    && Math.abs(lineA) - Math.abs(lineB) < Math.abs(lineA)
    && Math.abs(lineA) - Math.abs(lineC) < Math.abs(lineA)
    && Math.abs(lineB) - Math.abs(lineA) < Math.abs(lineB)
    && Math.abs(lineB) - Math.abs(lineC) < Math.abs(lineB)
    && Math.abs(lineC) - Math.abs(lineA) < Math.abs(lineC)
    && Math.abs(lineC) - Math.abs(lineB) < Math.abs(lineC)
  ) {
    check = true;
  }
  return check;
}

// Desafio 13 - função de boas vindas ao Bar da Trybe!
function somaNumeros(string) {
  let array = string.split(' ');
  let newArray = [];
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(parseInt(array[index]));
  }
  for (let index = 0; index < newArray.length; index += 1) {
    if (Number.isNaN(newArray[index]) === false) {
      soma += newArray[index];
    }
  }
  return soma;
}

function hydrate(string) {
  let result = somaNumeros(string);
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}
// let stringTest = '2 cerveja';
// console.log(hydrate(stringTest));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
