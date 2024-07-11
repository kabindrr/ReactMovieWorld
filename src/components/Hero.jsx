import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { MovieCart } from "./MovieCart";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/randomChar";

export const Hero = ({ addMovie }) => {
  const [searchedMovie, setSearchedMovie] = useState({});

  const [bgImg, setBgImg] = useState("");
  const shouldFetchRef = useRef(true);
  const searchRef = useRef("");

  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);

    setSearchedMovie(movie);
    setBgImg(movie.Poster);
    setSearching(false);
  };

  const handleOnMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value = "";
  };
  const handleOnDelete = () => {
    setSearchedMovie({});
    setSearching(true);
  };
  const handleOnAddToTheMovieList = (mood) => {
    addMovie({ ...searchedMovie, mood });
    setSearchedMovie({});
    setSearching(true);
  };

  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vh",
  };
  return (
    <div>
      {/* NavBar */}
      <nav className=" py-3 text-danger fixed-top p-2">
        <h2 className="container">MovieCollection</h2>
      </nav>

      <div
        className="hero d-flex justify-content-center align-items-center text-white  "
        style={movieStyle}
      >
        <div className="hero-content mt-5  ">
          <div className={searching ? "form-center  mt-5 " : "form-top"}>
            {searching && (
              <div className="text-center">
                <h2 className="mb-4">You can search Millions of Movies</h2>
                <p>We are here to make your MovieCollection awesome </p>
              </div>
            )}

            <div className="custom-search-input">
              <div className="input-group my-5">
                <input
                  ref={searchRef}
                  onFocus={() => setSearching(true)}
                  type="text"
                  className="form-control"
                  placeholder="Search Movie Name"
                />
                <Button
                  className="btn btn-danger"
                  onClick={handleOnMovieSearch}
                >
                  {" "}
                  Search Movies{" "}
                </Button>
              </div>
            </div>
          </div>
          <div>
            {!searching && (
              <div className="movie-card-display showMovie">
                <MovieCart
                  searchedMovie={searchedMovie}
                  deleteFunc={handleOnDelete}
                  handleOnAddToTheMovieList={handleOnAddToTheMovieList}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
