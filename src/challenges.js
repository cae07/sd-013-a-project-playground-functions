// Desafio 1
function compareTrue(param , param2) {
	if (param && param2 === true) {
		return true;
	} else {
		return false
	}
}

// Desafio 2
function calcArea(base ,height) {
	// seu código aqui
	let result = (base * height) /2;
	return result
}

// Desafio 3
function splitSentence(string) {
	// seu código aqui
  let arraySentence = [];
  arraySentence = string.split(' ');
	return arraySentence
}
//  console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
	// seu código aqui
	let concact = [' '];
	arrayL = array.length;
	concact = array[arrayL-1]+", "+array[0];
	return concact;
}
console.log(concatName(["captain" , "my" ,"captain"]))

// Desafio 5
function footballPoints() {
	// seu código aqui
}

// Desafio 6
function highestCount() {
	// seu código aqui
}

// Desafio 7
function catAndMouse() {
	// seu código aqui
}

// Desafio 8
function fizzBuzz() {
	// seu código aqui
}

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
