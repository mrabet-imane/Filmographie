import React, { useState } from 'react';
import "../App.css"

const AddFilmForm = ({ onAddFilm }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && director && releaseYear && genre && rating) {
      if (isNaN(releaseYear) || isNaN(rating) || rating < 0 || rating > 10) {
        setError('Veuillez entrer une année et une note valides.');
        return;
      }

      const newFilm = { title, director, releaseYear: Number(releaseYear), genre, rating: Number(rating) };
      onAddFilm(newFilm);
      setTitle('');
      setDirector('');
      setReleaseYear('');
      setGenre('');
      setRating('');
      setError('');
    } else {
      setError('Tous les champs sont obligatoires.');
    }
  };

  const handleReset = () => {
    setTitle('');
    setDirector('');
    setReleaseYear('');
    setGenre('');
    setRating('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-film-form">
      <h2>Ajouter un Film</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Titre:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Réalisateur:</label>
        <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
      </div>
      <div>
        <label>Année de sortie:</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
      </div>
      <div>
        <label>Genre:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Sélectionner un genre</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drame</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>
      <div>
        <label>Note:</label>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="10" />
      </div>
      <button type="submit">Ajouter le film</button>
      <button type="button" onClick={handleReset}>Réinitialiser</button>
    </form>
  );
};

export default AddFilmForm;
