// Desafio 10
function techList(techsList, nome) {
  
  let techToNameLearn = [];
  
      for (let technology of techsList.sort()) {
      techToNameLearn.push(object = {
      tech: technology,
      name: nome
    });
  }
  if (techsList.length > 0) {
    return techToNameLearn;     
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumbersArray) {
  let phoneObject = {
  }
  let contaRepete = 0;
  if (phoneNumbersArray.length < 11 || phoneNumbersArray.length > 11) {
      console.log ('Array com tamanho incorreto.');
      return "Array com tamanho incorreto.";
  }
  for (let comparaRepetido of phoneNumbersArray) {
      for (let repetidoComparar of phoneNumbersArray) {
          if (repetidoComparar == comparaRepetido) {
              contaRepete += 1
          }
          if (contaRepete >= 3) {
              console.log ('não é possível gerar um número de telefone com esses valores');
              return "não é possível gerar um número de telefone com esses valores";
          }
      }
      contaRepete = 0;
  }
    for (let pegaNum of phoneNumbersArray) {
      if (pegaNum < 0 || pegaNum > 9) {
          console.log ('não é possível gerar um número de telefone com esses valores');
          return "não é possível gerar um número de telefone com esses valores";
      }
  }
  for (let indexArray in phoneNumbersArray) {
          phoneObject[indexArray] = phoneNumbersArray[indexArray];
      }
  let phoneNumber = "(" + phoneObject[0] + phoneObject[1] + ") " + phoneObject[2] + phoneObject[3] + phoneObject[4] + phoneObject[5] + phoneObject[6] + "-" + phoneObject[7] + phoneObject[8] + phoneObject[9] + phoneObject[10];
  return phoneNumber; 
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return 'true'; 
  } else {
    return 'false';
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
