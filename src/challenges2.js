// Desafio 10
function techList(tech, name) {

  let nameObj = name;
  let alphabeticNames = [];
  let arrayAux = [];
  
  if(tech.length == 0){
    return "Vazio!"
  }

  tech.sort();
  alphabeticNames = tech;

  for (let names of alphabeticNames){

    let techObject = {
      name: nameObj,
      tech: names     
  }
  arrayAux.push(techObject)
  }
  return arrayAux
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if(phoneNumber.length != 11){
    
    return "Array com tamanho incorreto."
  }
  //Verificar se é menor que zero ou menor que 9
  for(let num of phoneNumber){
    if(num < 0 || num > 9){

      return "não é possível gerar um número de telefone com esses valores"
    }
  //Verificar se repete 3 ou mais vezes  
    let count = 0;
    for(let num1 of phoneNumber){      
      if(num == num1){
        count += 1
        if(count >= 3){
          return "não é possível gerar um número de telefone com esses valores"
        }
      }
    }
    
  }

  phoneNumber.splice(0, 0, '(');
  phoneNumber.splice(3, 0, ')');
  phoneNumber.splice(4, 0, ' ');
  phoneNumber.splice(10, 0, '-');

  let number = '';
  for(let num of phoneNumber){
    number += num;
  }
  return number
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
