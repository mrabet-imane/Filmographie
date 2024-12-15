import HeaderC from './Components/HeaderComp';
import MovieList from './Components/MovieList';
import FooterC from './Components/FooterC';
import './App.css';


function App() {
  return (
    <div className="App">
      <HeaderC/>
      <MovieList/>
      <FooterC/>
    </div>
  );
}

export default App;
