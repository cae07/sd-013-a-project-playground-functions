// Desafio 10
function techList(myArray, nome) {
  msg = "Vazio!"

  if (myArray.length == 0) {
    return msg;    
  } else {

    let ordem = myArray.sort();
    let newArray = [];
    let obj;
  
    for (let i = 0; i < ordem.length; i += 1) {
      obj = {
      tech: ordem[i],
      name: nome
      };
      newArray.push(obj)
     };
    return newArray;
  }
}

// Desafio 11
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(myArray) {
  let msg = "Array com tamanho incorreto."
  let msgDois = "não é possível gerar um número de telefone com esses valores";
  let numAtual = 0;
  let cont = 0;
  let res;

  if (myArray.length != 11) {
    return msg;   
  }
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] < 0 || myArray[index] > 9) {
      return msgDois; 
    }    
  }
  for (let j = 0; j < myArray.length; j++) {
    numAtual = myArray[j];
    for (let k = 0; k < myArray.length; k++) {
      if (numAtual == myArray[k]) {
        cont += 1;
      } 
    }
    if (cont >= 3){
      return msgDois;
    }
    cont = 0;
  }
  
  res = `(${myArray[0]}${myArray[1]}) ${myArray[2]}${myArray[3]}${myArray[4]}${myArray[5]}${myArray[6]}-${myArray[7]}${myArray[8]}${myArray[9]}${myArray[10]}`

  return res;  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);

  if(lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineB + lineA){
    return false;
  } else {
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