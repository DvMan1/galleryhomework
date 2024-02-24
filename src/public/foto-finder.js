import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchPhoth } from './pixabay-api';
import { showPhoto } from './render-finc';

const refInput = document.querySelector('.search-field');
const refButton = document.querySelector('.button-search');
const refConteiner = document.querySelector('.gallery');
refButton.addEventListener('click', searchFoto);

function searchFoto() {
  const keyword = refInput.value;
  searchPhoth(keyword)
    .then(data => {
      if (!Array.isArray(data.hits) || data.hits.length === 0) {
        throw new Error('No photos found');
      }
      return data;
    })
    .then(data => {
      const arrElImg = showPhoto(data.hits);
      refConteiner.innerHTML = arrElImg;
     const intervalId = setInterval(() => {
        const ArrElImg = document.querySelectorAll('.loader');
        if (ArrElImg.length === 0) {
          clearInterval(intervalId);
        } else {
          ArrElImg.forEach(img => {
            if (img.complete && img.classList.contains('loader')) {
              img.classList.remove('loader');
            }
          });
        }
      }, 50);
      const lightbox = new SimpleLightbox('.gallery a', {
        caption: true,
        captionsSelector: 'img',
        captionsType: 'attr',
        captionsData: 'alt',
        captionDelay: 250,
      });
      refInput.value = '';
    })
    .catch(err => {
      iziToast.show({
        title: 'Ошибка',
        message: `${err}`,
        backgroundColor: 'red',
      });
      refInput.value = '';
    });
}
