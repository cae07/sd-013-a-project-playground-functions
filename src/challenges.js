// Desafio 1
function compareTrue(n1, n2) {

  if (n1 === true && n2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(strIngs) {
  let arrAy = [];
  arrAy = strIngs.split(' ')
  return arrAy;
}

// Desafio 4
function concatName(palavra) {
  return palavra[palavra.length -1] + ", " + palavra[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = 0;
	if (wins){
  	pontuacao += 3 * wins;
  }
  if (ties){
  	pontuacao += 1 * ties;
  }
  return pontuacao
}

// Desafio 6
function highestCount(vetor) {
  let cont=0;
  let num=0;
  let numMax = Math.max.apply(null, vetor)

  for(let j=0; j<vetor.length; j++){
	  if (numMax <= vetor[j]) {
  	  cont+=1;
		  num = numMax;
 	  }
  }
  return cont
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = cat1 - mouse;
  let distcat2 = cat2 - mouse;
  
  if(distcat1 < distcat2 && distcat1 >= mouse) {
  	return 'cat1'
  }
  else if(distcat2 < distcat1 && distcat2 >= mouse) {
  	return 'cat2'
  }
  else {
  	return 'os gatos trombam e o rato foge'
  } 
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(palavra) {

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
