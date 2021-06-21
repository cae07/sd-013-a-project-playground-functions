// Desafio 10
function techList(techList, nome){
  let techListName = [];
  for(let listTechnology of techList.sort()){
    techListName.push(
      {
      tech: listTechnology,
      name: nome
      });
  }
   if(techList.length > 0){
    return techListName;
  } else return  'Vazio!';
};

// Desafio 11
function generatePhoneNumber(){
   // seu código aqui
};




// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = checkA(lineA, lineB, lineC);
  let b = checkB(lineA, lineB, lineC);
  let c = checkC(lineA, lineB, lineC);
  return a && b && c;



  function checkA(lineA, lineB, lineC){
    let fullTriangle = Math.abs(lineA, lineB, lineC) || Math.abs(lineB, lineC, lineA) || Math.abs(lineC, lineA, lineB)
  if(fullTriangle){
    return true;
  }
    return false;
  }
};
  function checkB(lineA, lineB, lineC){
  if(lineB > lineC + lineA || lineB < Math.abs(lineC - lineA)){
    return false;
  }
  return true;
  };
  function checkC(lineA, lineB, lineC){
    if(lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)){
      return false;
    }
    return true;
  };

// Desafio 13
function hydrate(stringIce) {
  let contador = 0;
  let drinkCheck = /\d+/g;
  let waterOn = stringIce.match(drinkCheck);
  for(let index = 0; index < waterOn.length; index += 1){
    rain = parseInt(waterOn[index])
    contador += rain;
  }
  if(contador > 1){
    return contador + " copos de água"
  } else {
    return contador + " copo de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
