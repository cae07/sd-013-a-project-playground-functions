// Desafio 10
function techList() {
  //seu código aqui
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let nume = [];

  if(numeros.length != 11) {
    return "Array com tamanho incorreto.";
  } else {

    for(let i = 0; i < numeros.length; i += 1) {
      for (let c = i + 1; c < numeros.length; c += 1) {
        if (numeros[i] == numeros[c]) {
          nume.push(numeros[i]);
          if(nume.length > 3) {
            return "não é possível gerar um número de telefone com esses valores";
          }
        }
      }

      if (numeros[i] < 0 || numeros[i] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return `(${numeros.slice(0,2).join('')}) ${numeros.slice(2,7).join('')}-${numeros.slice(7,11).join('')}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(bebidas) {
  let number = [1,2,3,4,5,6,7,8,9];
  let cont = 0;

  for(let n = 0; n < bebidas.length; n += 1) {
    for(let m = 0; m < number.length; m += 1) {
      if (bebidas[n].indexOf(number[m]) == 0) {
        cont += number[m];
      }
    }
  }
  
  if(cont == 1) {
    return `${cont} copo de água`;
  } else {
    return `${cont} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
