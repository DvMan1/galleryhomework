import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function showPhoto(arrPhoto) {
  console.log(arrPhoto);

    const arrElImg = arrPhoto.map(photo => {
      return `<li class="gallery-item list">
     <a class="gallery-link" href="${photo.largeImageURL}">
        <img class="gallery-image loader" src="${photo.previewURL}" alt="${photo.tags}" />
      </a>
    </li>`;
    }).join("")
 
    
    return arrElImg;
  }

