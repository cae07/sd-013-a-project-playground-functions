// Desafio 10
function techList() {
  // seu código aqui
  const arrSort = arrTech.sort();
  let tech = [];
  if(arrTech.length === 0){
    return 'Vazio!'
  } else {
    for(let i = 0; i < arrSort.length; i++){
      let objIndex = {
        tech: arrSort[i],
        name: name,
      };
      tech.push(objIndex);
    }
    return tech;
  }
}

// Desafio 11
function repeatedNumber(arr){
  let reapeatedArray = [];
  for (let counter1 = 0; counter1 < arr.length; counter1 += 1) {
    let counter = 0;
    for (let counter2 = 0; counter2 < arr.length; counter2 += 1) {
      if (arr[counter1] === arr[counter2]) {
        counter += 1;
        reapeatedArray.push(arr[counter2]); 
      }
    }
    if(counter >= 3){
      return counter;
    }
  }
}
function generatePhoneNumber() {
  // seu código aqui
  for(let i = 0; i < arr.length; i++){
    if(arr.length !== 11){
      return "Array com tamanho incorreto.";
    } else if(arr[i] < 0 || arr[i] > 9 || repeatedNumber(arr) >= 3){
      return "não é possível gerar um número de telefone com esses valores";
    } 
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
  let possible1 = lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC;
  let possible2 = lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC;
  let possible3 = lineC > Math.abs(lineA - lineB) && lineC < lineA + lineB;
  return possible1 && possible2 && possible3
}

// Desafio 13
function hydrate() {
  // seu código aqui
  //Code ideia on stackoverflow: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let regex = /\d+/g;
  let numbers = manyDrinks.match(regex).map(Number);
   sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  } 
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};