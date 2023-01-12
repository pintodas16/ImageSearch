import axios from "axios";

const fetchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID a-1QG_fuNDulpLofeIOrfKkIRFchRR0uJAIPKJOVdvw",
    },
    params: {
      query: term,
      per_page: 12,
    },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export default fetchImage;
