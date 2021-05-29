// Desafio 10
function techList(arrayTec, nome) {
  let techname = new Array(arrayTec.length);
  if (arrayTec.length === 0) {
    techname = 'Vazio!';
  } else {
      for (let index = 0; index < techname.length; index += 1) {
      techname[index] = {
      tech: arrayTec[index],
      name: nome,
    }
  }
  techname.sort(function(a, b){
    if (a.tech < b.tech){
      return -1;
    } else {
      return true;
    }
  });
}
  return techname;  
}
// Desafio 11
function generatePhoneNumber(arrayNum) {
  if (arrayNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNum.length; index += 1) {
    if ((arrayNum[index] < 0) || (arrayNum[index] > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let repetidos = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {    
    for (let index2 = 0; index2 < arrayNum.length; index2 += 1) {
      if (arrayNum[index] === arrayNum[index2]){
        repetidos += 1;
      }
    }
    if (repetidos >=3) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
    repetidos = 0;
  }
  let ddd = new Array(2);
  let prefixo = new Array(5);
  let final = new Array(4);
  for(let index = 0; index < arrayNum.length; index += 1) {
    if (index < 2) {
      ddd[index] = arrayNum[index];
      ddd[index] = ddd[index].toString();
    } else if (index >= 2 && index < 7) {
      prefixo[index] = arrayNum[index];
      prefixo[index] = prefixo[index].toString();
    } else if (index>6 && index<11) {
      final[index] = arrayNum[index];
      final[index] = final[index].toString();
    }
  }
  ddd = ddd[0]+ddd[1];
  prefixo = prefixo[2] + prefixo[3] + prefixo[4] + prefixo[5] + prefixo[6];
  final = final[7] + final[8] + final[9] + final[10];
  let resultado = '('+ddd+')'+" "+prefixo+'-'+final;
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let AB = lineA+lineB;
  let AC = lineA+lineC;
  let BC = lineB+lineC;
  let absAB = lineA-lineB;
  absAB = Math.abs(absAB);
  let absAC = lineA-lineC;
  absAC = Math.abs(absAC);
  let absBC = lineB-lineC;
  absBC = Math.abs(absBC);
  if ((lineA < BC) && (lineA > absBC)) {
    return true;
  } else if ((lineB<AC) && (lineB > absAC)) {
    return true;
  } else if ((lineC < AB) && (lineC > absAB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebidas) {
  //let num = bebidas.replace(/[^0-9]/g,"");
  let num = bebidas.replace(/([^\d])+/gim, '');
  let arrayNum = [];
  arrayNum = num.split("");
  let numeroAgua = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    numeroAgua += parseInt(arrayNum[index]);
  }
  if (numeroAgua === 1) {
    return numeroAgua + " copo de água";
  } else {
    return numeroAgua + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
