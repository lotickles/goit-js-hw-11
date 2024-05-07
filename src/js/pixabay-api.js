export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43764300-c8e70daa82082c3c5d2e410f5';

export const options = {
  params: {
    key: API_KEY,
    q: ' ',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
  },
};
