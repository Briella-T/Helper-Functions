const pokemonList = document.getElementById("pokemon-list");
const pokemonInfo = document.getElementById("pokemon-info");
let pokemonData = [];

// Fetching the list of Pokémon from the API

async function fetchPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pokemon = await response.json();
        pokemonData = pokemon.results;
        displayPokemonList(pokemonData);
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
}

function displayPokemonList(pokemon) {
    pokemonList.innerHTML = "";
    pokemon.forEach((poke) => {
        const listItem = document.createElement("li");
        listItem.textContent = poke.name;
        listItem.classList.add("cursor-pointer", "text-blue-500", "hover:underline");
        listItem.addEventListener("click", () => fetchPokemonDetails(poke.url));
        pokemonList.appendChild(listItem);
    });
}

function displayPokemonDetails(pokemon) {
    pokemonInfo.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="mx-auto mb-4">
        <p class="mb-2"><strong>Height:</strong> ${pokemon.height}</p>
        <p class="mb-2"><strong>Weight:</strong> ${pokemon.weight}</p>
        <p class="mb-2"><strong>Types:</strong> ${pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
        <p class="mb-2"><strong>Abilities:</strong> ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ")}</p>
    `;
}

async function fetchPokemonDetails(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pokemon = await response.json();
        displayPokemonDetails(pokemon);
    } catch (error) {
        console.log(error);
    }
}
fetchPokemon();

/*fetching specific pokemon
async function fetchSpecificPokemon(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pokemon = await response.json();
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
}*/
