import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><img class="gallery__image" src="${image.preview}" alt="${image.description}" width="719" height="480"/></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);
