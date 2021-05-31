// Desafio 10
// function techList(techs, name) {
//   let array = [];
//   if (techs.length === 0) {
//     return 'Vazio!';
//   }
//   techs.sort();
//   for (let index in techs) {
//     let object = {};
//     object.name = name;
//     object.tech = techs[index];
//     array.push(object);
//   }
//   return array;
// }

// Desafio 11
function generatePhoneNumber(numbers) {
  let msg = 'Array com tamanho incorreto.';
  let count = 0;
  let contato = `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7, 11).join('')}`;
  if (numbers.length !== 11) {
    return 'Não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return msg;
    } if (numbers.indexOf(numbers[i]) = i) {
      count += 1;
    }
  }
  if (count >= 3) {
    return msg;
  }
  return contato;
}
console.log(generatePhoneNumber([0, 1, 6]));
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
  // techList,
  hydrate,
  triangleCheck,
};
