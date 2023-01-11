import axios from "axios";

const fetchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    headers: {
      Authorization: "Client-ID a-1QG_fuNDulpLofeIOrfKkIRFchRR0uJAIPKJOVdvw",
    },
    params: {
      query: term,
    },
  });
  return response;
};
export default fetchImage;
