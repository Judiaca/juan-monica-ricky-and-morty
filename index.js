// index.js

import { createCharacterCard } from "./components/card/card";

const cardContainer = document.querySelector('[data-js="card-container"]');
const card = createCharacterCard(exampleCharacter);
cardContainer.appendChild(card);

  async function fetchCharacters() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const data = await response.json();
    const characters = data.results;

    // Vaciar el contenedor de tarjetas
    cardContainer.innerHTML = "";

    // Crear y añadir una tarjeta para cada personaje
    characters.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

// Llamar a la función para obtener y mostrar los personajes
fetchCharacters();

// Task 2

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";
