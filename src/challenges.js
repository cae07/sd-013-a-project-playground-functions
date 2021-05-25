// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let dblArea = (base * height) / 2
  return dblArea
}

// Desafio 3
function splitSentence(strSentence) {  
  let arrSentence = strSentence.split(' ');
  return arrSentence
}

// Desafio 4
function concatName(myArray) {
  let firstItem = myArray[0];
  let lastItem = myArray[myArray.length - 1];
  let strMessage = `${lastItem}, ${firstItem}`;
  return strMessage;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = ((wins * 3) + (ties * 1));
  return total;
}

// Desafio 6
function highestCount(myArray) {    
  //=============== primeira forma que eu realizei ================
  // Apesar de atender os requisitos descritos no readme, não atendeu 1 requisito quando rodei o 'npm test ...'
  
  // let sortArray = myArray.sort()
  // let newArray = [];
  // let intCount = 0;
  
  // for (let index = 0; index < sortArray.length; index += 1) {
  //   let firstWalkElement = sortArray[index];    
  //   for (let i = 0; i < sortArray.length; i += 1) {
  //     let secondWalkElement = sortArray[i];
  //     if (secondWalkElement == firstWalkElement) intCount += 1
  //   }
  //   newArray.push(intCount);
  //   intCount = 0; 
  // }  
  // return newArray[(newArray.length - 1)];  
  
  //=============== segunda forma que eu realizei ==================
  // Essa atendeu todos os requisitos. Utilizei parcialmente sugestoes do stackoverflow
  // source: https://stackoverflow.com/questions/4317456/getting-the-last-item-in-a-javascript-object

  const objArray = {};

  for (let index = 0; index < myArray.length; index += 1) {
    const element = myArray[index];
    // Se o valor objArray[element] for undufined, inclui o valor como chave no objeto
    if (!objArray[element]) objArray[element] = 0; 
      objArray[element] += 1; // se encontrou o elemento atualiza o valor com adicao de 1 unidade
  }  
  // O interessante é que o algoritmo acima já coloca as chaves por ordem crescente
  return objArray[Object.keys(objArray).pop()]
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
