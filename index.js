import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Function to fetch characters from the API
async function fetchCharacters(page = 1, query = "") {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`
    );
    const data = await response.json();

    maxPage = data.info.pages;
    //pagination.textContent = `${page} / ${maxPage}`;
    // Clear the card container before appending new cards
    cardContainer.innerHTML = "";

    // Loop through each character and create a card
    data.results.forEach((character) => {
      const cardElement = createCharacterCard({
        image: character.image,
        name: character.name,
        status: character.status,
        type: character.type || "Unknown",
        occurrences: character.episode.length,
      });
      cardContainer.appendChild(cardElement);
    });
    updatePagination();
  } catch (error) {
    console.error("Failed to fetch characters:", error);
  }
}

// Event handlers
function handlePrevClick() {
  if (page > 1) {
    page--;
    fetchCharacters(page, searchQuery);
  }
}

function handleNextClick() {
  if (page < maxPage) {
    page++;
    fetchCharacters(page, searchQuery);
  }
}

function handleSearchSubmit(query) {
  searchQuery = query;
  page = 1; // Reset to the first page on new search
  fetchCharacters(page, searchQuery);
}

// Creating and appending components
const prevButton = createButton("previous", handlePrevClick);
const nextButton = createButton("next", handleNextClick);
const pagination = createPagination(page, maxPage);
const searchBar = createSearchBar(handleSearchSubmit);

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.appendChild(searchBar);

// Update pagination
function updatePagination() {
  const paginationElement = navigation.querySelector(".navigation__pagination");
  paginationElement.textContent = `${page} / ${maxPage}`;
}

// Initial fetch
fetchCharacters();
