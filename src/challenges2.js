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
function triangleCheck(lineA, lineB, lineC) {

  let sum = [lineA + lineB, lineB + lineC, lineA + lineC];
  let sub = [Math.abs(lineA) - Math.abs(lineB), Math.abs(lineB) - Math.abs(lineC), Math.abs(lineA) - Math.abs(lineC)];

  for(let num of sum ){
    if(lineA < num && lineB < num && lineC < num){
    }else{
      return false
    }    
  }
  for(let num of sub){
    if(lineA > num && lineB > num && lineC > num){
    }else{
      return false
    }
  }
  return true
}


// Desafio 13
function hydrate(drinks) {
  let num = drinks.match(/\d+/g).map(Number);
  let answer = 0;

  for(let n of num){
    answer += parseInt(n);    
  }
  if(answer === 1){
    return `${answer} copo de água`
  }
  return `${answer} copos de água`
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
