import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<li>
      <div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </div>
    </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

const createModal = (event) => {
  event.preventDefault();
  if(event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(

    `<img src="${event.target.dataset.source}">`
    
  ).show();

  const visible = basicLightbox.visible();
  if (visible) {
    document.addEventListener('keyup', ( {key} ) => {
      if (key === 'Escape') {
        instance.close();
      }
    });
  }
}

Gallery.addEventListener("click", createModal);

