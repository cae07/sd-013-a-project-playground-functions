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
// console.log(concatName(["captain" , "my" ,"captain"]))

// Desafio 5
function footballPoints(wins ,ties) {
	result = (wins * 3) + ties
	return result
} 
// console.log(footballPoints(3 , 1));

// Desafio 6

function highestCount(ArrayN) {
	// seu código aqui
	let counter = 0;
	let highestCounter = -100;
	for (let i = 0; i < ArrayN.length; i+=1) {
		if (ArrayN[i] > highestCounter) {
		 highestCounter = ArrayN[i];
		} else {
			continue
		};
	};
	for (let i = 0; i < ArrayN.length; i+=1) {

		if (ArrayN[i] == highestCounter) {
			counter+=1;
		}else {
			continue
		};
	} return counter;
} 
 console.log(highestCount([-1,-2,-2]));


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

}
// Desafio 8

function fizzBuzz(array) {
	let resposta = [];
	for (let n = 0; n < array.length; n+=1) {
		i = n
	
		let resultF = array[i]/3;
		let resultB = array[i]/5;
		
		if ((Number.isInteger(resultF) == true) && (Number.isInteger(resultB) == true)) {
			resposta .push ("fizzBuzz")
				
			}else if (Number.isInteger(resultB) == true) {
				resposta .push("buzz")
			}else if(Number.isInteger(resultF) == true) {
				resposta .push("fizz")
			}else { resposta .push ("bug!")}
	}return resposta;
}
console.log(fizzBuzz([5,3,5,6,89]))

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
}
