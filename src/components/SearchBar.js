import React from "react";
import { useState } from "react";

function SearchBar({ onClick }) {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(term);
    onClick(term);
    setTerm("");
  };
  return (
    <div className="form-container">
      <form className="form">
        <input
          onChange={handleChange}
          className="input-field"
          type="text"
          value={term}
          placeholder="Enter a name ..."
        />
        <input
          className="input-field btn"
          type="submit"
          value="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
export default SearchBar;
