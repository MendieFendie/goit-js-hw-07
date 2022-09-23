import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const renderedMurkup = render(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", renderedMurkup);

galleryContainer.addEventListener("click", openModal);

function render(element) {
  return element
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
     data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function openModal(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  instance.show();

  window.addEventListener("keydown", escape);
  function escape(event) {
    event.preventDefault();
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
