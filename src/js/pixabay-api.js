import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "46849808-268f228f7185f073a2d253586";

export const fetchImages = async (query, page = 1, perPage = 15) => {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page,
        per_page: perPage,
      },
    });
    return { hits: response.data.hits, totalHits: response.data.totalHits };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { hits: [], totalHits: 0 };
  }
};