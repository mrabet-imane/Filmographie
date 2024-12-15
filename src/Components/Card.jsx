import React,{props} from "react";

const Card=(props)=>{
    const {title,realaseYear,genre,rating,isFavorite, onFavoriteToggle}=props
    return(
        <div className="card-container">
            <h2>{title}</h2>
            <h3>{genre}</h3>
            <h4>Rating:{rating}</h4>
            <h4>Realase Year:{realaseYear}</h4>
            <button onClick={onFavoriteToggle}> {isFavorite ? "Retirer des Favoris" : "Ajouter aux Favoris"} </button>
        </div>
    )
}
export default Card