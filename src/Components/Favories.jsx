import React from "react";
import Card from "./Card";
import "../App.css"; 

const FavoritesModal = ({ Favories, isVisible, onClose, onFavoriteToggle }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Favoris</h2>
        <div className="favorites-list">
          {Favories.length === 0 ? (
            <p>Aucun film favori.</p>
          ) : (
            Favories.map(movie => (
              <Card 
                key={movie.title}
                title={movie.title}
                genre={movie.genre}
                rating={movie.rating}
                releaseYear={movie.releaseYear}
                isFavorite={true}
                onFavoriteToggle={() => onFavoriteToggle(movie)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
