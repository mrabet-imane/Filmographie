import React,{useState} from "react";
import SearchBar from "./SearchBarre";
import Card from "./Card";
import movies from "./Movies";
import SortButtons from "./ButtonsSort";
import Fenetre from "./MoviesDetails";
import Pagination from "./Pagination";
import Favories from "./Favories";
import AddFilmForm from "./AddFilmForm";

  const MovieListF=()=>{
    var [moviesF,setMoviesF]=useState(movies)
    var [FilteredMovie,setFiltredMovie]=useState(movies)
    var [selectedMovie, setSelectedMovie] = useState(null)
    var [isModalVisible, setIsModalVisible] = useState(false)
    var [favorites, setFavorites] = useState([])
    const [isFavoritesModalVisible, setIsFavoritesModalVisible] = useState(false);
    var [currentPage, setCurrentPage] = useState(1)
    const moviesPerPage = 5

    const handleSearch=(Search)=>{
         const SearchLowerCase=Search.toLowerCase()

        const MovieFilter=movies.filter((movie)=>
            movie.title.toLowerCase().includes(SearchLowerCase)|| movie.genre.toLowerCase().includes(SearchLowerCase)
        )
        setFiltredMovie(MovieFilter)
        console.log(MovieFilter)
        setCurrentPage(1)
    }

    const handlePageChange = (page) => {
         setCurrentPage(page)
    }
    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = FilteredMovie.slice(indexOfFirstMovie, indexOfLastMovie)
    //travail de recherche
    const handleCardClick =(movie)=>{
            setSelectedMovie(movie)
            setIsModalVisible(true)
        }
    
     const handleCloseModal = () => {
         setIsModalVisible(false) 
        }



    const handleFavoriteToggle = (movie) => {
        if (favorites.includes(movie)) { 
                setFavorites(favorites.filter(fav => fav !== movie))
             } 
        else {
                 setFavorites([...favorites, movie]) 
            } }

    const handleFavoritesClick = () => { 
        setIsFavoritesModalVisible(true)
        }
    const handleCloseFavoritesModal = () => {
        setIsFavoritesModalVisible(false)
        }
    const handleAddFilm = (newFilm) => { 
        const updatedMovies = [...movies, newFilm];
        setMoviesF(updatedMovies);
        setFiltredMovie(updatedMovies); };

    return(
        <div>
            <SearchBar onSearch={handleSearch}/>
            <SortButtons filteredMovies={FilteredMovie} setFilteredMovies={setFiltredMovie}/>
           
            {/* affichage normal */}
            {/* {
            FilteredMovie.map((elt)=>(
                <div onClick={() => handleCardClick(elt)} key={elt.title}>
                    <Card title={elt.title} genre={elt.genre} rating={elt.rating} realaseYear={elt.releaseYear} key={elt.title} />
                </div>
            )
        )} */}
        {/*Pour pagination*/}
         {
            currentMovies.map((elt)=>(
                <div onClick={() => handleCardClick(elt)} key={elt.title}>
                    <Card title={elt.title} genre={elt.genre} rating={elt.rating} realaseYear={elt.releaseYear} key={elt.title}
                            isFavorite={favorites.includes(elt)} onFavoriteToggle={() => handleFavoriteToggle(elt)}                    
                    />
                </div>
            )
        )}

        <Pagination currentPage={currentPage} 
            totalPages={Math.ceil(FilteredMovie.length / moviesPerPage)} 
            onPageChange={handlePageChange} />
        <div className="FavorisAffContainer">
            <button onClick={handleFavoritesClick} className="FavoriesButton">Afficher les Favoris</button> 
        </div>
        <AddFilmForm onAddFilm={handleAddFilm} />
        <Favories Favories={favorites} isVisible={isFavoritesModalVisible} onClose={handleCloseFavoritesModal} onFavoriteToggle={handleFavoriteToggle} />
            <Fenetre movie={selectedMovie} isVisible={isModalVisible} onClose={handleCloseModal} /> 
        
        </div>


    )


  }

  export default MovieListF