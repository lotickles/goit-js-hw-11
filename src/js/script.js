import { BASE_URL, options } from './pixabay-api.js';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio.js';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEL = document.querySelector('.gallery');
const searchInputEl = document.querySelector('input[name="searchQuery"]');
const searchformEl = document.getElementById('search-form');

let reachEnd = false;
let totalhits = 0;
function handleSubmit(e) {
  e.preventDefault();
  options.params.q = searchInputEl.value.trim();
  if (options.params.q === '') return;
  options.params.page = 1;
  galleryEL.innerHTML = '';
}
searchformEl.addEventListener('submit', handleSubmit);
