// Desafio 10
function techList(techlist, name) {
  let newArr = [];

  if (techlist.length === 0) {
    return 'Vazio!';
  }

  // ordenar o array recebido
  techlist.sort();
  
  for (let index = 0; index < techlist.length; index += 1) {
    let newObject = {};
    newObject.tech = techlist[index];
    newObject.name = name;
    newArr.push(newObject);
  }
  
  return newArr;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let newTelephone = ['(']
  
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i of numbers) {
    let repetido = 0;

    for (let j of numbers) {
      if (i === j) {
        repetido += 1;
      }
    }

    if (repetido >= 3 || i < 0 || i > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    // dica do luiz furtado no Slack
    // verifica o indice 1 pois com o newTelephone sendo pushado retorna algo como
    // [0, 1], como o indice 1 bate, então é adicionado o ) após este indice, ficando [0, 1, ')']
    // se não, no indice 6 (aonde tem a separação do traço -) é adicionado este traço
    // após o indice 6
    if (index === 1) {
      numbers[index] += ') ';
    } else if (index === 6) {
      numbers[index] = numbers[index] + '-';
    }
    // ao final, a gente faz o push() disto tudo acima pra dentro do newTelephone
    newTelephone.push(numbers[index]);
  }
  // retorna o novo telefone com o método join('') pra juntar tudo e transformar numa string
  return newTelephone.join('');
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
