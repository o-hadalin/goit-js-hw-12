import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreButton = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalHits = 0;

function toggleLoadingState(isLoading) {
  loader.classList.toggle("show", isLoading);
  loadMoreButton.style.display = isLoading ? "none" : "block";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter a search term." });
    return;
  }

  gallery.innerHTML = "";
  page = 1;
  toggleLoadingState(true);
  fetchAndRenderImages();
});

loadMoreButton.addEventListener("click", () => {
  page += 1;
  toggleLoadingState(true);
  fetchAndRenderImages();
});

async function fetchAndRenderImages() {
  try {
    const images = await fetchImages(query, page);
    toggleLoadingState(false);

    if (page === 1) totalHits = images.totalHits;

    if (images.hits.length > 0) {
      renderGallery(images.hits, gallery);

      loadMoreButton.style.display = (page * 15 < totalHits) ? "block" : "none";
      if (page * 15 >= totalHits) {
        iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      }

      if (page > 1) {
        const card = gallery.querySelector(".gallery a");
        const cardHeight = card ? card.getBoundingClientRect().height : 0;
        window.scrollBy({ top: cardHeight * 2, behavior: "smooth" });
      }
    } else if (page === 1) {
      iziToast.error({ message: "Sorry, there are no images matching your search query." });
    }
  } catch (error) {
    toggleLoadingState(false);
    iziToast.error({ message: `An error occurred: ${error.message}. Please try again later.` });
  }
}
