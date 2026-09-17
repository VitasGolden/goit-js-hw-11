import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox.default('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      hit => `
      <li class="gallery-item">
        <a href="${hit.largeImageURL}" class="gallery-link">
          <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-image" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${hit.likes}</p>
          <p class="info-item"><b>Views</b> ${hit.views}</p>
          <p class="info-item"><b>Comments</b> ${hit.comments}</p>
          <p class="info-item"><b>Downloads</b> ${hit.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.innerHTML = markup;

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
