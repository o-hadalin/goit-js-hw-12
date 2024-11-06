import axios from "axios";

export const fetchImages = async (query, page = 1, perPage = 15) => {
  const API_KEY = "46849808-268f228f7185f073a2d253586";
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

  const URL = "https://pixabay.com/api/";

  try {
    const response = await axios.get(URL, {params});
    console.log(response);
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};