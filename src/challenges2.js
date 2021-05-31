// Desafio 10
function techList(techs, nome) {
  array = [];
  if (Array.isArray(techs) && techs.length > 0) {
    techs.sort();
    for (let i = 0; i < techs.length; i++) {
      let obj = {
        tech: techs[i],
        name: nome,
      }
      array.push(obj);
    }
    return array;
  } else {
    return "Vazio!";
  }
}
// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let number = '(' + arrayNumber[0] + arrayNumber[1] + ')' + " " + arrayNumber[2] + arrayNumber[3] + arrayNumber[4] + arrayNumber[5] + arrayNumber[6] + '-' + arrayNumber[7] + arrayNumber[8] + arrayNumber[9] + arrayNumber[10];
  if (arrayNumber.length !== 11) { // tamanho diferente de 11
    return 'Array com tamanho incorreto.';
  }
  let countNumbers = {};
  for (let index = 0; index < arrayNumber.length; index++) {
    const n = arrayNumber[index];
    if (countNumbers[n]) {
      countNumbers[n] += 1;
    } else {
      countNumbers[n] = 1;
    }
    if (countNumbers[n] > 2 || (n < 0 || n > 9)) {
      return 'não é possível gerar um número de telefone com esses valores'; // repete por mais de 3 vezes
    }
  }
  return number;
}
console.log(generatePhoneNumber([10, 2, 3, 1, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
