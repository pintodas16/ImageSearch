import React from "react";
import SearchBar from "./components/SearchBar";
import fetchImage from "./api";

function App() {
  const handleSubmit = async (term) => {
    const result = await fetchImage(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onClick={handleSubmit} />
    </div>
  );
}
export default App;
