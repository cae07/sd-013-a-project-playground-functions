// Desafio 10
function techList(tech, name) {
  let vazio = "Vazio!"
  tech = tech.sort();
  if (tech == 0) {
    return vazio;
    
  }
    for (let key in tech){
  tech[key] = {
    tech: tech[key],
    name: name,   
  
  
  }
  

}
  return tech;
  }
  let array = ["React", "Jest", "HTML", "CSS", "JavaScript"]

  
// Desafio 11
function generatePhoneNumber(value) {
  let incorretTam = "Array com tamanho incorreto";
  let quantidadeNum = 0;
  let incorrectValor = "não é possível gerar um número de telefone com esses valores";
  for (let key in value){
    quantidadeNum +=1 ;
  }
  if (quantidadeNum ==! 10){
  return incorretTam;
  }
  for (let key1 in value){
    let repetNumber = 1;
    if (value[key1]===value[repetNumber]){
      repetNumber += 1;
      
    }
    if ((repetNumber>3)||(value[key1]>9)||(value[key1]<0)){
      return incorrectValor;
    }

  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA+lineB < lineC) || (Math.abs(lineC+lineB < lineA)) || (Math.abs(lineC+lineA > lineB)) ){
    return false;
  }
  if (lineA || lineB || lineC < Math.abs(lineA-lineB)||Math.abs(lineA-lineC)||Math.abs(lineC-lineB)){
    return false;
  }
  if (lineA || lineB || lineC < (lineA+lineB)||(lineA+lineC)||(lineC+lineB) && lineA || lineB || lineC > Math.abs(lineA-lineB)|| Math.abs(lineA-lineC)||Math.abs(lineC-lineB)) {
    return true;
    
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
