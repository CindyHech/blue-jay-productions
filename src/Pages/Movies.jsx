import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Blue Jay Bird Logo Transparent(150 x 40 px) (150 x 40 px) (5).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import img from "../assets/2.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Movies = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const movieListEl = useRef(null);

  async function renderMovies(searchTerm = "game") {
    const moviesRes = await fetch(
      `https://www.omdbapi.com/?apikey=61ba8310&s=${searchTerm}`,
    );
    const moviesData = await moviesRes.json();
    console.log(moviesData);

    if (!moviesData.Search) {
      movieListEl.current.innerHTML = `<p class="no__results">No movies found for "${searchTerm}"</p>`;
      return;
    }

    setMovies(moviesData.Search);
  }

  function searchChange(event) {
    const value = event.target.value.trim();
    if (value.length > 2) {
      renderMovies(value);
    }
  }

  const [hidden, setHidden] = useState(false);

  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  useEffect(() => {
    renderMovies();
  }, []);

  return (
    <>
      <nav>
        <div className="nav__container">
          <Link>
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <ul className="movie__nav--links  nav__links">
            <li>
              <Link to="/" className="movie__nav--link nav__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="movie__nav--link nav__link">
                Search Media Library
              </Link>
            </li>
            <li>
              <Link className="no-cursor nav__link nav__link--primary">
                Sign In
              </Link>
            </li>
          </ul>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className="menu__backdrop"
            style= {{ visibility: hidden ? "visible" : "hidden" }}
          >
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <a
                  href="http://127.0.0.1:5500/index.html"
                  className="menu__link"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="menu__list">
                <Link to="/movies" className="menu__link" onClick={closeMenu}>
                  Search Media Library
                </Link>
              </li>
              <li className="menu__list">
                <a className="menu__link no-cursor" onClick={closeMenu}>
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <div className="movies__header--container">
          <div className="movies__header--description">
            <h1 className="movie__h1">Browse our movies</h1>
          </div>
          <div className="input__wrapper--movies">
            <input
              type="text"
              className="input--movies"
              placeholder="Search by name"
              onChange={searchChange}
            />
            <div className="search__icon--wrapper">
              <FontAwesomeIcon
                className="fa-sharp fa-solid fa-magnifying-glass"
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </div>
        <div className="overlay__img">
          <Link>
            <img className="img" src={img} alt="img" />
          </Link>
        </div>
      </header>

      <div className="movies" ref={movieListEl}>
        {movies.slice(0, 8).map((movie) => (
          <div key={movie.imdbID} className="movie">
            <figure className="movie__img--wrapper">
              <Link to={`/movieinfo/${movie.id}`} className="movie__img">
               <img
                src={movie.Poster}
                alt={movie.Title}
              />
              </Link>
            </figure>
             <h2 className="movie__title">{movie.Title}</h2>
            <h4 className="movie__year">{movie.Year}</h4>
            <Link to={`/movieinfo/${movie.id}`}>
            <button className="movie__button">Learn More</button>
            </Link>
            
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Movies;
