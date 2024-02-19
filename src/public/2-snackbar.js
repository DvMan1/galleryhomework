// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refForm = document.querySelector("form")


refForm.addEventListener("submit",starEvent)

function starEvent(event){
    event.preventDefault();
    const delay = refForm[0].value
    const fulfilled = refForm[2].checked
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (fulfilled) {
            resolve("Success! Value passed to resolve function");
          } else {
            reject("Error! Error passed to reject function");
          }
        }, delay);
      });
      
    promise
    .then(value => {
        iziToast.show({
            title: 'Success',
            message: `${value}`
        });
    })
    .catch(error => {
        iziToast.show({
            title: 'Error',
            message: `${error}`
        });
    });
}