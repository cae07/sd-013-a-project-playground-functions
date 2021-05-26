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
    // verifica o indice 1, pois retorna algo como [0, 1], e como o indice 1 bate, então 
    // é adicionado o ) após este indice, ficando [0, 1, ')']
    // se não, no indice 6 (aonde tem a separação do traço -) é adicionado este traço após o indice 6
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
function triangleCheck(lineA, lineB, lineC) {
  let diferencaAB = Math.abs(lineA - lineB);
  let diferencaBC = Math.abs(lineB - lineC);
  let diferencaAC = Math.abs(lineA - lineC);

  if (lineA > (lineB + lineC)) {
    return false;
  } else if (lineB > (lineA + lineC)) {
    return false;
  } else if (lineC > (lineA + lineB)) {
    return false;
  }

  if (lineA < (lineB + lineC) && lineA > (diferencaBC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > (diferencaAC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > (diferencaAB)) {
    return true;
  }
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
