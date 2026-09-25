import React, { useState, useEffect } from "react";
import Movies from "../Pages/Movies";
import { Link } from "react-router-dom";

const Featured = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=61ba8310&s=new",
      ); 
      const data = await response.json();
      if (data.Search) {
        const sortedMovies = data.Search.sort((a, b) => {
          return parseInt(b.Year) - parseInt(a.Year); 
        });

        setMovies(sortedMovies.slice(0, 4)); 
      }
    };

    fetchMovies();
  }, []); 

  return (
    <div>
      <section id="features">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Newly <span className="bluejay">Released</span>
            </h2>
            <div className="movies">
              {movies.map((movie) => (
                <div key={movie.imdbID} className="movie">
                  <figure className="movie__img--wrapper">
                    <Link to={`/movieinfo/${movie.imdbID}`} >
                    <img
                      className="movie__img"
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                    </Link>
                  </figure>
                  <h2 className="movie__title">{movie.Title}</h2>
                  <h4 className="movie__year">{movie.Year}</h4>
                  <Link to={`/movieinfo/${movie.imdbID}`}>
                  <button className="movie__button">Learn More</button>
                  </Link>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
