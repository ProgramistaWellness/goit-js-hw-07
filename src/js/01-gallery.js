import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><img class="gallery__image" data-atl = "${image.description}" data-link = "${image.original}" src="${image.preview}" alt="${image.description}" width="719" height="480"/></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);



const enhanceImg = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = event.target.dataset.link;
  const alternativeText = event.target.dataset.alt;
  gallery.insertAdjacentHTML("afterend", `<div class="modal"><img class="modal__image" src="${selectedImg}" alt="${alternativeText}" width="1280" height="853"/></div>`);
};

gallery.addEventListener("click", enhanceImg)
