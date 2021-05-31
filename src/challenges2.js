// Desafio 10
// /* eslint-disable */ 
let arrayObjects = [];
function techList(tech, name) {
  // seu código aqui
  if (tech.length === 0) {return "Vazio!"}
	for (const key in tech.sort()) {
		let nomeTech = {
			name: name,
			tech: tech[key],
		};
		arrayObjects.concat(arrayObjects.push(nomeTech));
	}return arrayObjects;
}
let techArray = [];
let nome = "lucas";
console.log(techList(techArray ,nome));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
