// Desafio 10
function techList(techs, nome) {
  let techsListAll = techs.sort ()
  let techList1 = {
    tech: techsListAll[0],
    name: nome,
  };
  let techList2 = {
    tech: techsListAll[1],
    name: nome,
  };
  let techList3 = {
    tech: techsListAll[2],
    name: nome,
  };
  let techList4 = {
    tech: techsListAll[3],
    name: nome,
  };
  let techList5 = {
    tech: techsListAll[4],
    name: nome,
  };
  if (techsListAll.length === 0){
    return 'Vazio!'
  }
  return [techList1, techList2, techList3, techList4, techList5];
}

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in numeros) {
    if (numeros[index] < 0 || numeros[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroRepetido = 0;
  for (let index2 in numeros) {
    let contNumero = 0;
    numeroRepetido = numeros[index2];
    for (let index3 in numeros) {
      if (numeros[index3] === numeroRepetido) {
      contNumero += 1;
      }
    }
    if (contNumero >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  } 
  let mask = '(##) #####-####'
  let novoNum = '';
  let posicao = 0;
  for (let i = 0; i < mask.length; i+= 1) {
    if(mask[i] == '#') {
      novoNum += numeros[posicao];
      posicao += 1;
    }
    else {
        novoNum += mask[i]
      }
    }  
  return novoNum;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return false;
  }
  else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
   return false;
  }
  return true
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(drinks) {
  let numbers = drinks.match(/\d+/g).map(Number);
  let cupsTotal = numbers.reduce((accum, curr) => accum + curr);
  let unity = 'copos';
  if (cupsTotal === 1) {
    unity = 'copo'
  };

  return cupsTotal + ' ' + unity + ' ' + 'de água';
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
