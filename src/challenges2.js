// Desafio 10
function techList(tech, nome) {

  let techlist1 = {
    tech1: tech[0],
    name: nome,  
  };
  let techlist2 = {
    tech2: tech[1],
    name: nome,
  };
  let techlist3 = {
    tech2: tech[2],
    name: nome,
  };
  let techlist4 = {
    tech2: tech[3],
    name: nome,
  };
  let techlist5 = {
    tech2: tech[4],
    name: nome,
  };
  return [techlist1, techlist2, techlist3, techlist3, techlist5];
}

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length != 11) {
    return 'Array com tamanho incorreto';
  }
  for (let index in numeros) {
    if (numeros[index] < 0 || numeros[index] > 9){
      return 'não é possivel gerar um número de telefone com esses valores';
    }
  }
  let contNumero = 0;
  let numeroRepetido = 0;
  for (let index2 in numeros) {
    numeroRepetido = numeros[index2];
  }
  for (let index3 = 0; index3 < numeros.length; index3 += 1) {
    if (numeros[index3] === numeroRepetido) {
      contNumero += 1;
      }
    }     
  console.log(contNumero);
  if (contNumero >= 3) {
    return 'não é possivel gerar um número de telefone com esses valores';
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
      {
        novoNum += mask[i]
      }
    }    
  }
  return novoNum;  
}
console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,1,2]))

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
