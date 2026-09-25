import React, { useEffect, useRef, useState} from "react";
import Nav from "../Components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import { Link, useParams  } from "react-router-dom";
import Featured from "../Components/Featured";




const MovieInfo = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  const fetchMovie = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=61ba8310&i=${id}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovie(data);
      } else {
        console.error(data.Error); // Log the error if the movie is not found
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }


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
            <Link to="/movies" className="movie__link bluejay">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h2 className="movie__selected--title--top">Media</h2>
          </div>

          <div className="movie__selected">
            <figure className="movie__selected--figure">
              {movie.Poster && <img className="movie__poster--img" src={movie.Poster} alt={movie.Title} />}
            </figure>
            <div className="movie__selected--description">
              <h3 className="movie__selected--title">{movie.Title}</h3>
              <h4 className="movie__year">Year: <span>{movie.Year}</span></h4>
              <h4 className="movie__selected--rating">IMBD Rating: <span>{movie.imdbRating}</span></h4>

              <div className="movie__summmary">
                <h4>Genre: <span className="genre">{movie.Genre}</span></h4>
                <h4>Type: <span>{movie.Type}</span></h4>
                <h4 className="movie__selected--actors">Actors: <span>{movie.Actors}</span></h4>
                <h3 className="movie__summary--title">Summary</h3>
                <p className="movie__summary--para">{movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured/>
      <Footer/>
    </>
  );
};

export default MovieInfo;
