import React, { useEffect, useRef, useState} from "react";
import Nav from "../Components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import { Link, useParams  } from "react-router-dom";




const MovieInfo = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async (id ) => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=61ba8310&i=tt0944947`);
      const data = await response.json();
      
      setMovie(data);
    };


    fetchMovie();
  }, [id]); 
 

  if (!movie) return <div>Loading...</div>;
  return (
    <>
      <Nav />
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__selected--top">
            <Link to="/movies" className="movie__link">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <Link to="/">
              <h2 className="movie__selected--title--top">Media</h2>
            </Link>
          </div>

          <div className="movie__selected">
            <figure className="movie__selected--figure">
              {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
            </figure>
            <div className="movie__selected--description">
              <h2 className="movie__selected--title">{movie.Title}</h2>
              <h4 className="movie__year">{movie.Year}</h4>
              <h4 className="movie__selected--rating">{movie.imdbRating}</h4>

              <div className="movie__summmary">
                <h3 className="movie__summary--title">Summary</h3>
                <h3>{movie.Genre}</h3>
                <h3>{movie.Type}</h3>
                <h3 className="movie__selected--actors">{movie.Actors}</h3>
                <p className="movie__summary--para">{movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MovieInfo;
