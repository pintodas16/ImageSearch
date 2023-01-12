import React from "react";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    console.log(`cicked ${term}`);
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
