const DATA = 'https://api.pexels.com/videos/search?query=';
const pexelsKey = '563492ad6f91700001000001abe95696450b49dd98f53392a55c1c21';

export default {
  search(searchTerm) {
    const url = `${DATA}${searchTerm}&per_page=15&page=1`;
    const id = {
      headers: {
        Authorization: pexelsKey,
      },
    };
    return fetch(url, id)
      .then(response => response.json())
      .then(result => result.videos);
  },
};
