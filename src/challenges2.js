// Desafio 10
function techList(technologies, name) {
  let result = [];
  technologies.sort();
  for(technology of technologies){
    let object = {
      tech: technology,
      name: name
    }
    result.push(object);
  }
  if(technologies.length === 0){
    return "Vazio!"
  }
  return result;
}
// Desafio 11
function generatePhoneNumber(numbers) {
  if(numbers.length != 11){
    return "Array com tamanho incorreto."
  }
  let result = "";
  let repetitive = [];
  repetitive[numbers[0]] = 1;
  repetitive[numbers[1]] = 1;
  if(numbers[0] < 0 || numbers[0] > 9 || numbers[1] < 0 || numbers[1] > 9){
    return "não é possível gerar um número de telefone com esses valores";
  }
  result += `(${numbers[0]}${numbers[1]}) `;
  for(let i = 2; i < numbers.length; i += 1){
    if(numbers[i] < 0 || numbers[i] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
    if(repetitive[numbers[i]] === undefined){
      repetitive[numbers[i]] = 1;
    }else{
      repetitive[numbers[i]] += 1;
    }
    if(repetitive[numbers[i]] === 3){
      return "não é possível gerar um número de telefone com esses valores";
    }
    if(i === 7){
      result += `-${numbers[i]}`;
    }else{
      result += `${numbers[i]}`;
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // todo
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    return true;
  }else if(lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
    return true;
  }else if(lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(sentence) {
  let result = 0;
  for(letter of sentence){
    if(isNaN(parseInt(letter, 10))){
    }else{
      result += parseInt(letter, 10);
    }
  }
  if(result === 1){
    return `${result} copo de água`
  }else{
    return `${result} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
