const pokemonList = document.getElementById("pokemon-list");
const pokemonInfo = document.getElementById("pokemon-info");
let pokemonData = [];

// Fetching the list of Pokémon from the API

async function fetchPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
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
        <button id="previous-btn" class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Previous</button>
        <button id="next-btn" class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Next</button>

    `;
    document.getElementById("previous-btn")?.addEventListener("click", () => {
        const currentIndex = pokemonData.findIndex(p => p.name === pokemonInfo.querySelector("h2").textContent);
        if (currentIndex < pokemonData.length - 1) {
            fetchPokemonDetails(pokemonData[currentIndex - 1].url);
        }
    });
    document.getElementById("next-btn")?.addEventListener("click", () => {
        const currentIndex = pokemonData.findIndex(p => p.name === pokemonInfo.querySelector("h2").textContent);
        if (currentIndex < pokemonData.length - 1) {
            fetchPokemonDetails(pokemonData[currentIndex + 1].url);
        }
    });
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
