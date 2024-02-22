const API_KEY = '42511609-dd42bb6c326d646bc46fbc16c';
export function searchPhoth(keyword) {
    const urlPar = new URLSearchParams({
        key:API_KEY,
        q:keyword,
        image_type:"photo",
        orientation:"horizontal",
        safesearch:"true",
    })
 return fetch(`https://pixabay.com/api/?key=${API_KEY}&${urlPar}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
