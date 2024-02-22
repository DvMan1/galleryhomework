const API_KEY = '42511609-dd42bb6c326d646bc46fbc16c';
export function searchPhoth(keyword) {
 return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${keyword}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
