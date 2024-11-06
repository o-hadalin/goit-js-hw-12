import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter a search term." });
    return;
  }

  loader.classList.add("show");
  gallery.innerHTML = "";

  fetchImages(query)
   .then((images) => {
      loader.classList.remove("show");
      if (images.length > 0) {
         renderGallery(images, gallery);
      } else {
         iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" });
      }
   })
   .catch((error) => {
      loader.classList.remove("show");
      console.error("Error fetching images:", error.message);
      iziToast.error({ message: `An error occurred: ${error.message}. Please try again later.` });
   });
});
