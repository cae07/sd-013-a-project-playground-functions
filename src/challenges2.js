// Desafio 10
function techList(array, name) {
  let guarda = array.sort();
  let techs = [];

  if (guarda.length == 0) {
    return 'Vazio!'
  }
  else {
    for (let i = 0; i < guarda.length; i += 1) {
      techs.push({tech: guarda[i], name: name })
    }
  
    return techs;
  }

}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]));

// Desafio 11
function generatePhoneNumber(array) {
  let guarda = array;
  let string = ['('];

  if (guarda.length != 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let num of guarda) {
    let cont = 0;
    for (let num2 of guarda) {
      if (num === num2) {
        cont += 1;
      }
    }
    if ( num < 0 || num > 9 || cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let i = 0; i < guarda.length; i += 1) {
      if (i == 1) {
        guarda[i] = guarda[i] + ') ';
      }
      else if (i == 6){
        guarda[i] = guarda[i] + '-';
      }
      string.push(guarda[i]);
  }
  
  return string.join('');
}

// console.log( generatePhoneNumber([1, 2, 0, 4, 5, 6, 0, 8, 9, 0, 1]) );

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  difBC = Math.abs(lineB - lineC);
  difAC = Math.abs(lineA - lineC);
  difAB = Math.abs(lineA - lineB);

  if (lineA > (lineB + lineC)) {
    return false;
  }
  else if (lineB > (lineA + lineC)) {
    return false;
  }
  else if (lineC > (lineA + lineB)) {
    return false;
  }


  if ((lineA < (lineB + lineC)) && (lineA > difBC)) {
    return true;
  }
  else if ((lineB < (lineA + lineC)) && (lineA > difAC)) {
    return true;
  }
  else if ((lineC < (lineA + lineB)) && (lineA > difAB)) {
    return true;
  }
  else {
    return false;
  }


}

// Desafio 13
function hydrate(string) {
  let s = string;
  let v = /\d+/g;
  let cond = (s.match(v));
  let sum = 0;

  for (let i = 0; i < cond.length; i += 1) {
    sum += Number(cond[i])
  }

  if (sum == 1) {
    return sum + ' copo de água'
  }
  else {
    return sum + ' copos de água';
  }
}

// console.log(hydrate('Eu tenho 22 anos e 3 gatos'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
