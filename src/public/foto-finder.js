
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {searchPhoth} from "./pixabay-api";
import { showPhoto } from "./render-finc";


const refInput = document.querySelector('.search-field');
const refButton = document.querySelector('.button-search');
const refConteiner = document.querySelector('.photo-container')

refButton.addEventListener('click', searchFoto);

function searchFoto() {
    const keyword = refInput.value;
    searchPhoth(keyword)
    .then(data => {
        if (!Array.isArray(data.hits) || data.hits.length === 0) {
          throw new Error('No photos found');
        }
        return data;})
      .then((data) => {  
        const arrElImg = showPhoto(data.hits);
        refConteiner.innerHTML = arrElImg
        refInput.value =""
        
      })
      .catch((err) => {
        iziToast.show({
          title: 'Ошибка',
          message: `${err}`,
          backgroundColor: "red"
        });
      });
  }
  
 
