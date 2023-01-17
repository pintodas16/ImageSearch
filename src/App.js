import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/imagelist";
import NavLink from "./components/navLink";
import fetchImage from "./api";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    // console.log(term);
    const result = await fetchImage(term);
    // console.log(result);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <NavLink onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
