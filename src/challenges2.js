// Desafio 10
function techList() {
  //seu código aqui
}

// Desafio 11
function generatePhoneNumber(numbers) {
 
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
