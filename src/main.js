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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter a search term." });
    return;
  }

  loader.classList.add("show");
  gallery.innerHTML = "";
  loadMoreButton.style.display = "none";
  page = 1;

  fetchAndRenderImages();
});

loadMoreButton.addEventListener("click", () => {
  loadMoreButton.style.display = "none";
  loader.classList.add("show");
  page += 1;
  fetchAndRenderImages();
});

async function fetchAndRenderImages() {
  try {
    const images = await fetchImages(query, page);
    loader.classList.remove("show");

    if (page === 1) {
      totalHits = images.totalHits;
    }

    if (images.hits.length > 0) {
      renderGallery(images.hits, gallery);

      if (page * 15 >= totalHits) {
        iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      } else {
        loadMoreButton.style.display = "block";
      }

      if (page > 1) {
        const firstCard = gallery.querySelector(".gallery a");
        const cardHeight = firstCard ? firstCard.getBoundingClientRect().height : 0;

        smoothScroll(cardHeight * 2, 2000);
      }
    } else if (page === 1) {
      iziToast.error({ message: "Sorry, there are no images matching your search query." });
    }
  } catch (error) {
    loader.classList.remove("show");
    iziToast.error({ message: `An error occurred: ${error.message}. Please try again later.` });
  }
}

function smoothScroll(distance, duration) {
  const start = window.scrollY;
  const end = start + distance;
  const step = distance / (duration / 10);

  let currentScroll = start;

  const interval = setInterval(() => {
    currentScroll += step;
    window.scrollBy(0, step);

    if ((step > 0 && currentScroll >= end) || (step < 0 && currentScroll <= end)) {
      clearInterval(interval);
    }
  }, 10);
}