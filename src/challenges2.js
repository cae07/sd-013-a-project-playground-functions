// Desafio 10
function techList(array, name) {
  if ( array.length == 0){
    return 'Vazio!'
  }
  let objt = {};
  let list = [];
  array = array.sort();
  for (let i = 0; i < array.length; i += 1){
    objt['name'] = name;
    objt['tech'] = array[i];
    list.push(objt)
    objt = {};
  };
  
  return list;
}

// Desafio 11
function generatePhoneNumber(array) {
  let prefix = '';
  if ( array.length != 11){
    return 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < array.length; i += 1){
      let count = 0;
      let keep = array[i];
      if (array[i] < 0 || array[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        for (let index = 0; index < array.length; index += 1){
          if (keep === array[index]){
            count += 1;
          }
        if (count > 2){
          return 'não é possível gerar um número de telefone com esses valores';
        }
        }
      }
    }
    for ( let item = 0; item < array.length; item += 1){
      prefix += array[item];
    }
    prefix = `(${prefix.slice(0,2)}) ${prefix.slice(2, 7)}-${prefix.slice(7)}`
  }
  return prefix;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB){
    return false;
  } else{
    return true;
  }
}

// Desafio 13
function hydrate(str) {
  let text = str;
  let sum = 0;
  for ( let i = 0; i < text.length; i += 1){
    if (text[i] % text[i] == 0){
      sum += parseInt(text[i]);
    }
  }
  if ( sum === 1){
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  }
}
console.log(hydrate('2 cervejas e 1 vodca.'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
