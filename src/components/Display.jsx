import React, { useEffect, useState } from "react";
import { MovieCart } from "./MovieCart";

export const Display = ({ movieList, handleOnDeleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnFilter = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }
    setDisplayList(movieList.filter((mv) => mv.mood === mood));
  };
  return (
    <div className="container  d-flex justify-content-center mt-5 ">
      <div className="bg-dark rounded p-3">
        <div className="row">
          <div className="col">
            <div
              className="btn-group d-flex mb-3 gap-1"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                onClick={() => handleOnFilter("all")}
                type="button"
                className="btn btn-danger rounded"
              >
                All Movies
              </button>
              <button
                onClick={() => handleOnFilter("horror")}
                type="button"
                className="btn btn-warning rounded"
              >
                Horror
              </button>
              <button
                onClick={() => handleOnFilter("action")}
                type="button"
                className="btn btn-success rounded"
              >
                Action
              </button>
              <button
                onClick={() => handleOnFilter("drama")}
                type="button"
                className="btn btn-secondary rounded"
              >
                Drama
              </button>
              <button
                onClick={() => handleOnFilter("thriller")}
                type="button"
                className="btn btn-info rounded"
              >
                Thriller
              </button>
            </div>
            <div className="mt-3 text-white text-center">
              {displayList.length} Movies listed
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col d-flex flex-wrap gap-2 justify-content-around">
            {displayList.map((item, i) => (
              <div className="" key={i}>
                <MovieCart
                  searchedMovie={item}
                  deleteFunc={handleOnDeleteMovie}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
