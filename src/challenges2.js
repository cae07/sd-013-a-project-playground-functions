// Desafio 10
function techList(arrTech, strName) {

  let arrObj = [];

  if (arrTech.length == 0) {
    return "Vazio!";
  }
  else {
    //order arrTech
    let aux = '';
    for (let i = arrTech.length - 1; i >= 0; i -= 1) {
      for (let j = 0; j < i; j += 1) {
        if (arrTech[j] > arrTech[j + 1]) {
          aux = arrTech[j];
          arrTech[j] = arrTech[j+1];
          arrTech[j+1] = aux;
        }
      }
    }

    for (let i = 0; i < arrTech.length; i += 1) {
      arrObj.push({
        "tech": '',
        'name': strName
      });
    }
    console.log(arrTech);
    
    for (let key in arrTech) {
      arrObj[key].tech = arrTech[key];
    }
  }
  return arrObj;
}

// Desafio 11
function generatePhoneNumber(arr) {
  /*
  Documentação utilizada para criação da constante
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  */
  const invalid = (element) => element < 0 || element > 9 === true;
  let strOut = '';

  //Checkar se algum elemento repete mais que 3x
  let count = []
  const bigger3 = (element) => element >= 3 === true;

  for (let i = 0; i < arr.length; i += 1) {
    count.push(0);
    for (let j = 0; j < arr.length; j += 1){
      if (arr[i] == arr[j]) {
        count[i] += 1;
      }
    }
  }

  if (arr.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  else if (arr.some(invalid) || count.some(bigger3)) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  else {
    for (let i = 0; i < 11; i += 1) {
      arr[i] = arr[i].toString();
    }
    for (let i = 0; i < 11; i += 1) {
      if (i == 0) {strOut += '(' + arr[i]}
      else if (i == 1) {strOut +=  arr[i] + ') '}
      else if (i == 6) {strOut += arr[i] + '-'}
      else {strOut += arr[i]}
    }
  }
  return strOut;
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
