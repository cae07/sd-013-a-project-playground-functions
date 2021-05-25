// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  if (arrayTech.length !== 0) {
    let ordArrayTech = arrayTech.sort();
    let arrayObjectTech = [];

    for (let tecnologia of ordArrayTech) {
      arrayObjectTech.push({
        tech: tecnologia,
        name,
      });
    }

    return arrayObjectTech;
  }

  return 'Vazio!';
}

// Desafio 11
// Função para ver se está fora do intervalo 0 - 9
function outRange(number) {
  let foraIntervalo = false;
  for (let num of number) {
    if ((num < 0) || (num > 9)) foraIntervalo = true;
  }
  return foraIntervalo;
}
// Função para comparar arrays e formar um novo array com quant de cada número
function auxCompare(number, i, quantNum, aux) {
  for (let j of number) {
    if (i === j) quantNum[aux] += 1;
  }
  return quantNum;
}
function compareArrayQuant(number) {
  let quantNum = Array(11).fill(0);
  let aux = 0;
  for (let i of number) {
    auxCompare(number, i, quantNum, aux);
    aux += 1;
  }
  return quantNum;
}
// Função para verificar um número repete mais de 3x
function repeatMore3(number) {
  let quantNum3 = false;
  for (let quant of compareArrayQuant(number)) {
    if (quant >= 3) quantNum3 = true;
  }
  return quantNum3;
}
function generatePhoneNumber(number) {
  // seu código aqui
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (outRange(number) || repeatMore3(number)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  number = number.join('');
  let ddd = number.slice(0, 2);
  let parte1 = number.slice(2, 7);
  let parte2 = number.slice(7, 11);
  return `(${ddd}) ${parte1}-${parte2}`;
}

// Desafio 12
// Utilizando o conceito de matemática
// | b - c | < a < b + c
// | a - c | < b < a + c
// | a - b | < c < a + b
// função para verificar a primeira propriedade
function property1(lineA, lineB, lineC) {
  return Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC);
}
// função para verificar a segunda propriedade
function property2(lineA, lineB, lineC) {
  return Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC);
}
// função para verificar a terceira propriedade
function property3(lineA, lineB, lineC) {
  return Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB);
}
// função para verificar se todas as  outras funções conferem
function isTriangle(lineA, lineB, lineC) {
  return (property1(lineA, lineB, lineC)
    && property2(lineA, lineB, lineC)
    && property3(lineA, lineB, lineC));
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (isTriangle(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  // código para extrair números em https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let numbers = frase.match(/\d+/g).map(Number);
  let copoAgua = 0;

  for (let num of numbers) {
    copoAgua += num;
  }

  let fraseRetorno = copoAgua === 1 ? `${copoAgua} copo de água` : `${copoAgua} copos de água`;

  return fraseRetorno;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
