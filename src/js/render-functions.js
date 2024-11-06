import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images, galleryElement) {
  galleryElement.innerHTML = images.map(img => `
    <a href="${img.largeImageURL}">
      <img src="${img.webformatURL}" alt="${img.tags}">
      <div class="card-info">
        <div class="info-row">
          <span class="label">Likes</span>
          <span class="value">${img.likes}</span>
        </div>
        <div class="info-row">
          <span class="label">Views</span>
          <span class="value">${img.views}</span>
        </div>
        <div class="info-row">
          <span class="label">Comments</span>
          <span class="value">${img.comments}</span>
        </div>
        <div class="info-row">
          <span class="label">Downloads</span>
          <span class="value">${img.downloads}</span>
        </div>
      </div>
    </a>
  `).join("");
  
  const lightbox = new SimpleLightbox("a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  lightbox.refresh();
}