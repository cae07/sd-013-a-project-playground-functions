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

// Desafio 4 - In Review
function concatName(name) {
  let sapareteName = name.split(",")
  let firstName = sapareteName[0];
  let lastName = sapareteName[sapareteName.length - 1];
  let resultName = lastName + ', ' + firstName 
  return resultName;
}

// Desafio 5 - ok
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6  - In Review
function highestCount(num) {
  
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

// Desafio 7 - In Review
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(cat1 - mouse);
  let dcat2 = Math.abs(cat2 - mouse);
  
  if (dCat1 < dcat2) {
    console.log('cat1');
  } else if (dCat1 > dcat2) {
    console.log('cat2');
  } else {
    console.log('os gatos trombam e o rato foge');
  }
  
}

// Desafio 8 - ok
function fizzBuzz(arr) {
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

//console.log(fizzBuzz('2, 15, 7, 9, 45'));

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
