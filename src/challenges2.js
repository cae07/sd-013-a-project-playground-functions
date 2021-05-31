// Desafio 10
function techList(techs, name) {
  let array = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  techs.sort();
  for (let index in techs) {
    let object = {};
    object.name = name;
    object.tech = techs[index];
    array.push(object);
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
     for (let numero of numbers) {
       let count = 0;
        for (let index of numbers) {
          if (numero === index ) {
            count +=1;
          }
        }
        if (numero < 0 || numero > 9 || count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
     }
     return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
  }
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
