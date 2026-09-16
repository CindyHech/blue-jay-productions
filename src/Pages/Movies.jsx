import React, { useEffect, useRef, useState } from "react";


const Movies = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const movieListEl = useRef(null);

  async function renderMovies(searchTerm = "game") {
    const moviesRes = await fetch(
      `https://www.omdbapi.com/?apikey=61ba8310&s=${searchTerm}`
    );
    const moviesData = await moviesRes.json();
    console.log(moviesData);

    if (!moviesData.Search) {
      movieListEl.current.innerHTML = `<p class="no__results">No movies found for "${searchTerm}"</p>`;
      return;
    }

    setMovies(moviesData.Search); // Update state instead of using movieList
  }

  useEffect(() => {
    renderMovies();
  }, []);

  return (
    <div className="movies" ref={movieListEl}>
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <figure className="movie__img--wrapper">
            <img className="movie__img" src={movie.Poster} alt={movie.Title} />
          </figure>
          <h2 className="movie__title">{movie.Title}</h2>
          <h4 className="movie__year">{movie.Year}</h4>
          <button className="movie__button">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default Movies;

