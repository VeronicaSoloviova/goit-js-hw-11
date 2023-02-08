import { imageApi } from './imageAPI';
import { Notify } from 'notiflix';
import { renderGalleryMarkup, clearGalleryMarkup } from './renderfunctions';
import { refs } from './refs';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value.trim();

  if (!searchQuery) {
    Notify.warning('Please, enter something');
    return;
  }

  imageApi.searchQuery = searchQuery;

  const { hits, totalHits } = await imageApi.fetchImages();
  renderGalleryMarkup(hits);
}
