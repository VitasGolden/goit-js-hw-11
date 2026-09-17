import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const searchImg = document.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = searchImg.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      message: 'Sorry, the input is empty',
      position: 'topRight',
    });

    return;
  } else {
    clearGallery();
    showLoader();
    getImagesByQuery(searchQuery)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          createGallery(data.hits);
        }
      })
      .catch(error => {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      })
      .finally(() => {
        hideLoader();
      });
  }
});
