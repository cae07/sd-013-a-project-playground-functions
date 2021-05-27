// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort()
  let list = [];

  for (let key in arrayTech) {
    list.push ({
      tech: arrayTech[key],
      name: name,
    })
  }
  return (list.length > 0 ? list : 'Vazio!')
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';

  if (array.length == 11) {
    for (let index = 0; array.length > index; index +=1 ) {
      if ( index == 0) {
        phoneNumber += '(' + array[index];
      }else if ( index == 1) {
        phoneNumber += array[index] + ') '
      }else if ( index == 6) {
        phoneNumber += array[index] + '-'
      }else if (array[index] > 9 || array[index] < 0) {
        phoneNumber = 'não é possível gerar um número de telefone com esses valores'
        break
      }else {
        phoneNumber += array[index]
      }        
    }
  
    for (let secondIndex = 0; array.length > secondIndex; secondIndex += 1 ){
      let contagemCompare = 0;
      let phoneNumberCompare = phoneNumber[secondIndex];
  
      for (let thirdIndex = 0; array.length > thirdIndex; thirdIndex += 1) {
        if (secondIndex == thirdIndex){        
        } else if(phoneNumberCompare == array[thirdIndex]) {
          contagemCompare += 1
        }
        if (contagemCompare >= 3){
          phoneNumber = 'não é possível gerar um número de telefone com esses valores'
          break
        } 
      } 
    }
  }else {
    phoneNumber = "Array com tamanho incorreto."
  }
  return (phoneNumber)
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let conditionOne = Math.abs(lineB - lineC) 
  let conditionTwo = Math.abs(lineA - lineC)
  let conditionThree = Math.abs(lineA - lineB)

  let triangle = true; 

  if (lineA < conditionOne) {
    triangle = false
  }else if (lineB < conditionTwo) {
    triangle = false
  }else if (lineC < conditionThree) {
    triangle = false
  }else if (lineA - lineB -lineC >= 0) {
    triangle = false
  }else if (lineB - lineA -lineC >= 0) {
    triangle = false
  }else if (lineC - lineB -lineA >= 0) {
    triangle = false
  }
  
  return(triangle)
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let result = string.match(reg);
  let contador = 0;

  for (let index = 0; result.length > index; index += 1) {
    contador += parseInt(result[index])
  }

  if (contador == 1) {
    contador += " copo de água"
  }else {
    contador += " copos de água"
  }

  return (contador)
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
