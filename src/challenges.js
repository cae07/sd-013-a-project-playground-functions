// Desafio 1 - ok
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 - ok
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 - ok 
function splitSentence(str) {
  let finalStr = str.split(" ");
  return finalStr;
}

// Desafio 4 // erro na function .split
function concatName(name) {

  /*
    Preciso de uma forma da função receber todos os parametros
  */

  let firstName = auxName[0];
  let lastName = auxName[auxName.length - 1];
  let finalName = lastName + ' ' + firstName;
  return auxName;
}


// Desafio 5 - ok
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6  // erro na function .split
function highestCount(num) {

   /*
    Preciso de uma forma da função receber todos os parametros
  */
  
  let iNum = num.split(',');
  let numMaior =  Math.max(parseInt(iNum));
  let repetNum = 0;
  let qtddNum = num.length;

  for (let i = 0 ; i < qtddNum ; i++) {
    if (numMaior == num[i] ) {
      repetNum += 1;
    }
  }

  return repetNum;
}

// Desafio 7 - ok
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(cat1 - mouse);
  let dcat2 = Math.abs(cat2 - mouse);
  let msg;
  
  if (dCat1 < dcat2) {
    msg = 'cat1';
  } else if (dCat1 > dcat2) {
    msg = 'cat2';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
  
}
//console.log(catAndMouse(0, 2, 1))

// Desafio 8 - ok // erro na função .split
function fizzBuzz(arr) {
  /*
    Preciso de uma forma da função receber todos os parametros
  */
  let aux = arr.split(',');
  let auxNum;
  for (let i = 0 ; i < aux.length ; i++) {
    auxNum = parseInt(aux[i])
    if ((auxNum % 3 == 0) || (auxNum % 5 == 0) ) {

      if (auxNum % 3 == 0) {
        aux[i] = 'fizz';
      }

      if (auxNum % 5 == 0) {
        aux[i] = 'buzz';
      }

      if ((auxNum % 3 == 0) && (auxNum % 5 == 0) ) {
        aux[i] = 'fizzBuzz';
      }

    } else  {
      aux[i] = 'bug!';
    }
  }
 
  return aux ;
}

// Desafio 9 
function encode(str) {
  let auxStr = str.split('');
  for (let i = 0 ; i < auxStr.length ; i++) {
    if (auxStr[i] == 'a') {
      auxStr[i] = '1';
    }
    if (auxStr[i] == 'e') {
      auxStr[i] = '2';
    }
    if (auxStr[i] == 'i') {
      auxStr[i] = '3';
    }
    if (auxStr[i] == 'o') {
      auxStr[i] = '4';
    }
    if (auxStr[i] == 'u') {
      auxStr[i] = '5';
    }
  }

  auxStr = auxStr.toString();
  auxStr = auxStr.replace(/,/g, "");
  return auxStr;

} // /encode ----

function decode(str) {
  let strDecode = encode(str);
  strDecode = strDecode.split('');
  for (let i = 0 ; i < strDecode.length ; i++) {
    if (strDecode[i] == '1') {
      strDecode[i] = 'a';
    }
    if (strDecode[i] == '2') {
      strDecode[i] = 'e';
    }
    if (strDecode[i] == '3') {
      strDecode[i] = 'i';
    }
    if (strDecode[i] == '4') {
      strDecode[i] = 'o';
    }
    if (strDecode[i] == '5') {
      strDecode[i] = 'u';
    }
  }
  strDecode = strDecode.toString();
  strDecode = strDecode.replace(/,/g, "");
  return strDecode;
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
