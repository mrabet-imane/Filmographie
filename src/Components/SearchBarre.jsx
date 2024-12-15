import React, { useState } from "react";
import "../App.css";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    onSearch(newSearch);
  };

  return (
    <div className="searchBar">
      <input 
        type="text"
        placeholder="Rechercher un film..."
        value={search}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
