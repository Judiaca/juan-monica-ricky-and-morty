export function createButton(label, onClick) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}
