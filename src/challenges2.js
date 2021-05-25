// Desafio 10
function techList(myArrayTech, myName) {  
  if (myArrayTech.length == 0) {  
    return "Vazio!";  
  } else {
    let newArray = [];
    let objTemp = {};
    myArrayTechSort = myArrayTech.sort()
    for (let index = 0; index < myArrayTechSort.length; index += 1) {
      objTemp['tech'] = myArrayTechSort[index];
      objTemp['name'] = myName;
      newArray.push(objTemp);
      objTemp = {};
    }
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(myArray) {
  
  let objSymbols = {
    0: '(',
    2: ') ',
    7: '-'
  }

  let strOutput = '';
  
  if (myArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {    
    for (let index = 0; index < myArray.length; index += 1) {
      let intNumDaVez = myArray[index];
      if (intNumDaVez < 0 || intNumDaVez > 9) return 'não é possível gerar um número de telefone com esses valores'
      let intContador = 0;
      for (let i = 0; i < myArray.length; i += 1) {
        let intNumIteracao = myArray[i];
        if (intNumIteracao === intNumDaVez) {
          intContador += 1;
        }
      }
      if (intContador >= 3) return 'não é possível gerar um número de telefone com esses valores'
      if (!objSymbols[index]) {
        strOutput = strOutput + myArray[index];  
      } else {
        strOutput = strOutput + objSymbols[index] + myArray[index];
      }      
    }
  }
  return strOutput;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  // let arrSomaDasMedidas = [];

  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;

  let diffAB = Math.abs(lineA - lineB);
  let diffAC = Math.abs(lineA - lineC);
  let diffBC = Math.abs(lineB - lineC);

  if (lineA > somaBC || lineA < diffBC) return false;
  if (lineB > somaAC || lineB < diffAC) return false;
  if (lineC > somaAB || lineC < diffAB) return false;

  return true;

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
