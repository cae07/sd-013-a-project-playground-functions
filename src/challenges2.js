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
  let msg = 'Com esses números é impossível gerar número.';
  let count = 0;
  let contato = `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7, 11).join('')}`;
  if (numbers.length !== 11) {
    return 'Me dê mais números por favor.';
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 0) {
        return msg;
      } else if (numbers[i] > 9) {
        return msg;
      } else if (numbers.indexOf(numbers[i]) != i) {
        count ++;
      }
    }
    if (count >= 3) {
      return msg;
    }
  }
  return contato;
}
console.log(generatePhoneNumber([9, 2, 5, 4, 6, 1, 70, 0]));
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
