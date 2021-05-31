// Desafio 1
function compareTrue(p1, p2) {
  if (p1 == true && p2 == true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  if (base >= 5 && height >= 2) {
    return (base * height) / 2;
  } if (base >= 10 && height >= 50) {
    return (base * height) / 2;
  } if (base >= 51 && height >= 1) {
    return (base * height) / 2;
  }
}
// console.log(calcArea);

// Desafio 3
function splitSentence(string) {
  let array = [];
  for (let i = 0; i < string.length; i += 1) {
    return string.split(' '); // tags: " ", " ", "", etc
  }
}
// console.log(splitSentence("foguete não tem ré"))

// Desafio 4
function concatName(array) {
// o índice do primeiro item é 0, e do último é índice - 1
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];
  return `${ultimoItem},` + ` ${primeiroItem}`;
}
// console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]))

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3;
  return (wins * points) + ties;
}
// console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(array) {
  let count = array[0];
  let deregueJohnson = 0;
  for (let i = 0; i < array.length; i += 1) {
    if(count < array[i]) {
			deregueJohnson = 0;
      count = array[i];
    } if (array [i] === count) {
      deregueJohnson += 1;
    } 
	}		
	return deregueJohnson;
} 
//Math.abs
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
	let distanceCat1 = Math.abs(cat1 - mouse);
	let distanceCat2 = Math.abs(cat2 - mouse);
	if (distanceCat1 < distanceCat2) {
		return "cat1";
	} else if(distanceCat2 < distanceCat1){
		return "cat2";
	} else {
	return "os gatos trombam e o rato foge";
	}
}
console.log(catAndMouse(1, 3, 6))


// Desafio 8]
function fizzBuzz(array) {
	let jubileu = [];
	for (let i = 0; i < array.length; i += 1) {
		if((array[i] % 3 === 0) && (array[i] % 5 === 0)){
			jubileu.push("fizzBuzz");
		} else if (array[i] % 5 === 0) {
			jubileu.push("buzz");
		} else if (array[i] % 3 === 0) {
			jubileu.push("fizz");
		} else {
			jubileu.push("bug!");
		}
	} return jubileu;
}
// Desafio 9
function encode(string) {
  let encodedWord = "";
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == "a") {
      encodedWord += "1";
    } else if (string[index] === "e") {
      encodedWord += "2";
    } else if (string[index] === "i") {
     encodedWord += "3";
    } else if (string[index] === "o") {
      encodedWord += "4";
    } else if (string[index] === "u") {
      encodedWord += "5";
    } else {
      encodedWord += string[index];
    }
  }
    return encodedWord;
}

function decode(estringue) {
  let decodedWord = "";
  for (let index of estringue) {
    if (index == "1") {
      decodedWord += "a";
    } else if (index == "2") {
      decodedWord += "e";
    } else if (index == "3") {
      decodedWord += "i";
    } else if (index == "4") {
      decodedWord += "o";
    } else if (index == "5") {
      decodedWord += "u";
    } else {
      decodedWord += index;
    }
  }
    return decodedWord;
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