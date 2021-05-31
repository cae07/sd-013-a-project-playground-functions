// Desafio 10
function techList(array, name) {
  let arrayObjects = [];
  if (array.length > 0) {
    let newArray = array.sort();
    for (let index = 0; index < array.length; index += 1) {
      let group = {
        tech: newArray[index],
        name,
      };
      arrayObjects[index] = group;
    }
  } else {
    arrayObjects = 'Vazio!';
  }
  return arrayObjects;
}
// Desafio 11
function repetition(array) {
  let count = true;
  let rep = 0;
  let rep1 = 0;
  let rep2 = 0;
  for (let indexRepetition = 0; indexRepetition < 10; indexRepetition += 1) {
    rep = array.indexOf(indexRepetition);
    rep1 = array.indexOf(indexRepetition, rep + 1);
    rep2 = array.indexOf(indexRepetition, rep1 + 1);
    if (rep !== rep1 && rep !== rep2 && rep2 > 0) {
      count = false;
      break;
    }
  }
  return count;
}
function wrongArray(array) {
  let count = repetition(array);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || count === false) {
      count = false;
      break;
    }
  }
  return count;
}
function generatePhoneNumber(array) {
  let result = '';
  let count = wrongArray(array);
  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (count === false) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let part1 = (`${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`);
    let part2 = (`${array[7]}${array[8]}${array[9]}${array[10]}`);
    result = (`(${array[0]}${array[1]}) ${part1}-${part2}`);
  }
  return result;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  let array = [lineA, lineB, lineC];
  array = array.sort(function (a, b) {
    return a - b;
  });
  if (array[2] > (array[1] + array[0]) || array[0] < (array[2] - array[1])) {
    result = false;
  }
  return result;
}
// Desafio 13
function hydrate(string) {
  let recomend = 0;
  let search;
  let msg = 'copo de água';
  search = new RegExp(/\d+/);
  let array = string.match(search);
  recomend += Number(string[array.index]);
  for (let indexStr = 0; indexStr < string.length; indexStr += 1) {
    string = string.slice(array.index + 1);
    if (search.exec(string) !== null) {
      array = string.match(search);
      recomend += Number(string[array.index]);
    }
  }
  if (recomend > 1) {
    msg = 'copos de água';
  }
  return (`${recomend} ${msg}`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
