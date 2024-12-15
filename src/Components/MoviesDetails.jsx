import React from "react";
import "../App.css";

const Fenetre = ({ movie, isVisible, onClose }) => {
  if (!isVisible || !movie) return null; 

  return (
    <div className="Fenetre-overlay">
      <div className="Fenetre-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{movie.title}</h2>
        <h3>{movie.genre}</h3>
        <p>Director: {movie.director}</p>
        <p>Year: {movie.releaseYear}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default Fenetre;
