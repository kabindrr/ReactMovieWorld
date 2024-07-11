import "./App.css";
import { Button } from "react-bootstrap";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
import { useState } from "react";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    //remove possible duplicate movie
    const tempMv = movieList.filter((item) => item.imdbID !== movie.imdbID);

    setMovieList([...tempMv, movie]);
  };

  const handleOnDeleteMovie = (imdbId) => {
    confirm("Are you sure you want to delete this movie from the list") &&
      setMovieList(movieList.filter((mv) => mv.imdbID !== imdbId));
  };
  return (
    <div className="wrapper">
      {/* hero section */}
      <Hero addMovie={addMovie} />
      {/* Display Section */}
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
    </div>
  );
};

export default App;
