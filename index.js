// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS
const cardsSectionEl = document.querySelector(".cards");

function createCard(pokemon) {
	const articleEl = document.createElement("article");
	articleEl.setAttribute("class", "card");

	const titleEl = document.createElement("h2");
	titleEl.setAttribute("class", "card--title");
	titleEl.innerText = "pokemon.name";

	const imgEl = document.createElement("img");
	const imgSource = pokemon.sprites.other["official-artwork"].front_default;
	imgEl.setAttribute("class", "card--img");
	imgEl.setAttribute("src", imgSource);
	imgEl.setAttribute("width", "256");

	const statsSectionEl = document.createElement("div");
	statsSectionEl.setAttribute("class", "card--text");

	const hpEl = document.createElement("p");
	hpEl.innerText = "HP 60";

	const attackEl = document.createElement("p");
	attackEl.innerText = "ATTACK: 62";

	const defenseEl = document.createElement("p");
	defenseEl.innerText = "DEFENSE: 83";

	const specialAttackEl = document.createElement("p");
	specialAttackEl.innerText = "SPECIAL-ATTACK: 80";

	const specialDefenseEl = document.createElement("p");
	specialDefenseEl.innerText = "SPECIAL-DEFENSE: 90";

	const speedEl = document.createElement("p");
	speedEl.innerText = "SPEED: 90";

	articleEl.append(titleEl, imgEl, statsSectionEl);
	statsSectionEl.append(
		hpEl,
		attackEl,
		defenseEl,
		specialAttackEl,
		specialDefenseEl,
		speedEl
	);
	cardsSectionEl.append(articleEl);
}

for (const pokemon of data) {
	createCard(pokemon);
}

console.log(data[0].base_stat);
// createCard("Ivysaur");
// // createCard("Pikachu");
// // createCard("Bulbasaur");
// // createCard("Charmander");
// // createCard("Ivysaur");

// console.log(data[0]);
