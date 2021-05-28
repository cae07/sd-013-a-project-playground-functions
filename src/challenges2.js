// Desafio 10
/* 
  Dúvida! Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias
*/
function techList(tech, name) {
  let person = {};

  if (tech.length === 0) {
    person = 'Vazio!';
  } else {
    for (let i = 0 ; i < tech.length ; i++) {
      person['tech'] = tech[i]
      person['name'] = name;
      console.log(person);
    }
  }
 
  return person;
}

// Desafio 11 - ok
function generatePhoneNumber(num) {
  let numTel;
  if (num.length != 11) {
    numTel = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0 ; i < num.length ; i++ ) {
      if ( (num[i] > 9 ) || (num[i] < 0) ) {
        numTel = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        let numAtual = num[i];
        let repeatNum = 0;
        for (let j = 0 ; j < num.length ; j++) {
          if (numAtual == num[j]) {
            repeatNum += 1;
          }
        }
        if(repeatNum >= 3) {
          numTel = 'não é possível gerar um número de telefone com esses valores';
          break;
        } else {
          numTel = '('+num[0]+num[1]+')'+' '+num[2]+num[3]+num[4]+num[5]+num[6]+'-'+num[7]+num[8]+num[9]+num[10];
        }
      }
    }  
  }  
  return numTel
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
