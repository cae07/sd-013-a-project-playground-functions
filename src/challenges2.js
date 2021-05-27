// Desafio 10
function techList(arrTech, strName) {
  let arrObj = [];

  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  // order arrTech
  arrTech.sort();

  for (let i = 0; i < arrTech.length; i += 1) {
    arrObj.push({ tech: '', name: strName });
    arrObj[i].tech = arrTech[i];
  }
  return arrObj;
}

// Desafio 11
/*
https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array
Documentação utilizada para criação da constante
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/
function generatePhoneNumber(arr) {
  const invalid = (element) => element < 0 || element > 9 === true;
  let strOut = '';
  let count = [];
  const bigger3 = (element) => element >= 3 === true; // Checkar se algum elemento repete mais que 3x

  for (let i = 0; i < arr.length; i += 1) {
    count.push(arr.filter((x) => x === arr[i]).length);
  }
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (arr.some(invalid) || count.some(bigger3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  strOut = `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}`;
  strOut = `${strOut}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;

  return strOut;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = (2 * lineA) + (2 * lineB) + (2 * lineC) > lineC + lineB + lineA;
  let check1 = lineC > Math.abs(lineA - lineB);
  let check2 = lineB > Math.abs(lineA - lineC);
  let check3 = lineA > Math.abs(lineB - lineC);

  return check && check1 && check2 && check3;
}

// Desafio 13
function hydrate(str) {
  /*
  https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  */
  let numbers = str.match(/\d+/g).map(Number);

  /*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  */
  const sum = (x, y) => x + y;

  if (numbers.reduce(sum) === 1) {
    return '1 copo de água';
  }
  return `${numbers.reduce(sum)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
