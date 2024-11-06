export const fetchImages = (query) => {
  const API_KEY = "46849808-268f228f7185f073a2d253586";
 const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

  const URL = `https://pixabay.com/api/?${params.toString()}`;

  return fetch(URL)
      .then(response => {
        console.log(response);
        
      if (!response.ok) {
        throw new Error(response.statusText);  
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error("Error fetching data:", error);
      return [];
    });
};