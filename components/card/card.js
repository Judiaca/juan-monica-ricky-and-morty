/**
 * Creates a character card element with the provided character data.
 *
 * @param {Object} character - The character data.
 * @param {string} character.image - The URL of the character's image.
 * @param {string} character.name - The name of the character.
 * @param {string} character.status - The status of the character.
 * @param {string} character.type - The type of the character.
 * @param {number} character.occurrences - The number of episodes the character appeared in.
 * @returns {HTMLElement} - The created card element.
 */
export function createCharacterCard({
  image,
  name,
  status,
  type,
  occurrences,
}) {
  const li = document.createElement("li");

  li.classList.add("card");

  li.innerHTML = `
      <div class="card__image-container">
        <img
          class="card__image"
          src="${image}"
          alt="${name}"
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
        <h2 class="card__title">${name}</h2>
        <dl class="card__info">
          <dt class="card__info-title">Status</dt>
          <dd class="card__info-description">${status}</dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description">${type}</dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">${occurrences}</dd>
        </dl>
      </div>
    `;

  return li;
}
