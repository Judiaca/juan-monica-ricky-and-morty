import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Function to fetch characters from the API
async function fetchCharacters(page = 1, query = "") {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page${page}&name=${query}`
    );
    const data = await response.json();

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;

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
  } catch (error) {
    console.error("Failed to fetch characters:", error);
  }
}

// Event listeners for pagination buttons
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page, searchQuery);
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page, searchQuery);
  }
});

// Event listener for search form submission
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = new FormData(searchBar).get("query");
  page = 1; // Reset to first page for new search
  fetchCharacters(page, searchQuery);
});

// Call the function to fetch and display the first 20 characters
fetchCharacters();
