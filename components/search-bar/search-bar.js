export function createSearchBar(onSubmit) {
  const form = document.createElement("form");
  form.classList.add("search-bar");

  const input = document.createElement("input");
  input.name = "query";
  input.classList.add("search-bar__input");
  input.type = "text";
  input.placeholder = "search characters";
  input.ariaLabel = "character name";

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.ariaLabel = "search for character";
  button.innerHTML = `<img class="search-bar__icon" src="assets/magnifying-glass.png" alt="" />`;

  form.append(input, button);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit(input.value);
  });

  return form;
}
