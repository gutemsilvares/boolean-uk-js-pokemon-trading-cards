// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log('Array of data: ', data); // Array
// We have access to the data array

console.log('First element: ', data[0]); // Object show me when I start working

// Step 1: Create a bridge between Javascript and index.html
const cardsSectionEl = document.querySelector('.cards');

console.log('Our bridge to index.html: ', cardsSectionEl);

// Step 2: Create renderPokemonCard function
//   - Accepts and input of pokemon (An Object)

function renderPokemonCard(pokemon) {
	// 'INSIDE renderPokemonCard: '
	console.log(pokemon);

	const articleEl = document.createElement('article');
	articleEl.setAttribute('class', 'card');

	const headingEl = document.createElement('h2');
	headingEl.setAttribute('class', 'card--title');
	// headingEl.innerText = "Ivysaur"
	headingEl.innerText = pokemon.name;
	articleEl.append(headingEl);

	const imageSrc = pokemon.sprites.other['official-artwork']['front_default'];

	const imageEl = document.createElement('img');
	imageEl.setAttribute('class', 'card--img');
	imageEl.setAttribute('src', imageSrc);
	imageEl.setAttribute('width', '256');
	articleEl.append(imageEl);

	const cardTextEl = document.createElement('div');
	cardTextEl.setAttribute('class', 'card--text');

	const pEl = document.createElement('p');
	pEl.className = 'hp';
	// pEl.appendChild(document.createTextNode('HP: 60'));
	pEl.innerHTML = `<p class="hp">HP: 60</p>
					<p class="attack">ATTACK: 62</p>
					<p class="defense">DEFENSE: 63</p>
					<p class="">SPECIAL-ATTACK: 80</p>
					<p class="">SPECIAL-DEFENSE: 80</p>
					<p class="">SPEED: 60</p>`;

	articleEl.append(pEl);

	// Add to HTML to index.html via cardsSectionEl
	// Append means add.
	cardsSectionEl.append(articleEl);

	// for (const stat of pokemon.stats) {
	// 	const statPEl = document.createElement('p');
	// 	statPEl.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
	// 	cardTextEl.append(statPEl);

	// }
}

// const firstPokemon = data[0]

// Step 3: Call the renderPokemonCard function

console.log('Length of the data array: ', data.length);

for (let i = 0; i < data.length; i++) {
	const pokemon = data[i];
	renderPokemonCard(pokemon);

	// renderPokemonCard(data[i]);
}
