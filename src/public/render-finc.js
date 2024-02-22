export function showPhoto(arrPhoto) {
    const arrElImg = arrPhoto.map(photo => {
      return `<img src="${photo.previewURL}" alt="Фото">`;
    }).join("");
    return arrElImg;
  }