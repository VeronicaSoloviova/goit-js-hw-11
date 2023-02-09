import { refs } from './helpers/refs';
import { onFormSubmit } from './helpers/handlers';
import { loadMoreBtn } from './loadmorebt';

refs.form.addEventListener('submit', onFormSubmit);
