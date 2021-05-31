// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length !== 0) {
    let arrayObjectTech = [];
    for (let tech of arrayTech.sort()) arrayObjectTech.push({ tech, name });
    return arrayObjectTech;
  }
  return 'Vazio!';
}

// Desafio 11
// Função para ver se está fora do intervalo 0 - 9
function outRange(number) {
  let foraIntervalo = false;
  for (let num of number) if ((num < 0) || (num > 9)) foraIntervalo = true;
  return foraIntervalo;
}
function repeatMore3(numbers) {
  let quantNum3 = false;
  let numReduced = [...new Set(numbers)];
  for (let num of numReduced) {
    if (numbers.filter((number) => number === num).length >= 3) quantNum3 = true;
  }
  return quantNum3;
}
function generatePhoneNumber(num) {
  if (num.length !== 11) return 'Array com tamanho incorreto.';
  if (outRange(num) || repeatMore3(num)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  num = num.join('');
  return `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7, 11)}`;
}

// Desafio 12
// Código refatorado com ajuda do Pedro Trasfereti
function triangleCheck(a, b, c) {
  return (a > Math.abs(b) - Math.abs(c)
  && b > Math.abs(a) - Math.abs(c)
  && c > Math.abs(a) - Math.abs(b));
}

// Desafio 13
function hydrate(frase) {
  // código para extrair números em https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let numbers = frase.match(/\d+/g).map(Number);
  let copoAgua = 0;
  for (let num of numbers) copoAgua += num;
  return copoAgua === 1 ? `${copoAgua} copo de água` : `${copoAgua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
