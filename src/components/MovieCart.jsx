import React from "react";
import { Button } from "react-bootstrap";

export const MovieCart = ({
  searchedMovie,
  deleteFunc,
  handleOnAddToTheMovieList,
}) => {
  const { Poster, Title, imdbRating, Plot, mood, imdbID } = searchedMovie;
  return (
    <div>
      <div className="container">
        <div className="row bg-light border rounded text-dark p-3 movie-card-item">
          <div className="col-md">
            <img src={Poster} alt="" />
          </div>
          <div className="col-md">
            <h3>{Title}</h3>
            <p>IMDB Rating:{imdbRating}</p>
            <p>{Plot?.slice(0, 90) + "......."}</p>
          </div>

          {!mood && (
            <div className="d-flex justify-content-center">
              <Button
                className="btn btn-warning m-2"
                onClick={() => handleOnAddToTheMovieList("horror")}
              >
                Horror
              </Button>
              <Button
                className="btn btn-success m-2"
                onClick={() => handleOnAddToTheMovieList("action")}
              >
                Action
              </Button>
              <Button
                className="btn btn-secondary m-2"
                onClick={() => handleOnAddToTheMovieList("drama")}
              >
                Drama
              </Button>
              <Button
                className="btn btn-info m-2 "
                onClick={() => handleOnAddToTheMovieList("thriller")}
              >
                Thriller
              </Button>
            </div>
          )}

          <div className="d-grid mt-3">
            <Button
              onClick={() => deleteFunc(imdbID)}
              className="btn btn-danger m-2"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
