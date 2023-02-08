import axios from 'axios';

const API_KEY = '33486405-d4322a9bfb92445f208170e03';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class ImageApi {
  constructor() {
    this.searchQuery = '';
  }

  async fetchImages() {
    const options = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const { data } = await axios(`?${options}`);
    return data;
  }

  get _searchQuery() {
    return this.searchQuery;
  }
  set _searchQuery(newQuery) {
    this.searchQuery = newQuery;
  }
}

export const imageApi = new ImageApi();
