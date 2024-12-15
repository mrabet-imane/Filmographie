import React, { useState } from "react";
import "../App.css"
const SortButtons = ({ filteredMovies, setFilteredMovies }) => {
  const [sortR, setSortR] = useState("decroissant");
  const [sortY, setSortY] = useState("decroissant");

    //------------------------------------------------
  const handleSortRating = () => {
    const sortedMovies = [...filteredMovies]; 
    if (sortR === "decroissant") {
      sortedMovies.sort((a, b) => a.rating - b.rating);
      setSortR("croissant");
    } else {
      sortedMovies.sort((a, b) => b.rating - a.rating);
      setSortR("decroissant");
    }
    setFilteredMovies(sortedMovies);
  };

  //-------------------------------------------------------------------------------------------
  const handleSortYear = () => {
    const sortedMovies = [...filteredMovies]; 
    if (sortY=== "decroissant") {
      sortedMovies.sort((a, b) => a.releaseYear - b.releaseYear);
      setSortY("croissant");
    } else {
      sortedMovies.sort((a, b) => b.releaseYear - a.releaseYear);
      setSortY("decroissant");
    }
    setFilteredMovies(sortedMovies);
  };
//----------------------------------------------------------------------------------------------------------
  return (
    <div className="ButtonsContainer">
        <input  type="button"  value={sortR== "decroissant" ? " Rating croissant" : " Rating décroissant"}
                onClick={handleSortRating}
                className="Buttons"
    />
    <input  type="button"  value={sortY== "decroissant" ? " Année croissant" : " Année décroissant"}
      onClick={handleSortYear}
      className="Buttons"
    />
    </div>
  );
};

export default SortButtons;
