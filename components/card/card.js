// components/card/card.js
// card.js
export function createCharacterCard({
  image,
  name,
  status,
  type,
  occurrences,
}) {
  const li = document.createElement("li");

  li.classList.add("card");

  const statusColor =
    status === "Alive" ? "green" : status === "Dead" ? "red" : "grey";

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
          <dd class="card__info-description">
          <span class="status-dot" style="background-color: ${statusColor};"></span>
          ${status}
        </dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description">${type}</dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">${occurrences}</dd>
        </dl>
      </div>
    `;

  return li;
}
