export function createPagination(currentPage, maxPage) {
  const span = document.createElement("span");
  span.classList.add("navigation__pagination");
  span.textContent = `${currentPage} / ${maxPage}`;
  return span;
}
