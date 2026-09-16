import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";


const Movie = ({ movie }) => {
  const[img, setImg] = useState();

  const mountedRef = useRef(true);

 useEffect(() => {
  mountedRef.current = true;

  const image = new Image();
  image.src = movie.url;

  image.onload = () => {
    setTimeout(() => {
      if (mountedRef.current) {
        setImg(image);
      }
    }, 300);
  };

  return () => {
    mountedRef.current = false;
  };
}, [movie.url]) ;

  return (
    <div className="movie">
      {img ? (
        <>
          <Link to={`/movie/${movie.id}`}>
            <figure className="movie__img--wrapper">
              <img
                src={img.src}
                alt=""
                className="movie__img"
              />
            </figure>
          </Link>
          <div className="movie__title">
            <Link to={`/movies/${movie.id}`} className="movie__title--link">
              {movie.title}
            </Link>
          </div>
          <Ratings rating={movie.rating} />
        </>
      ) : (
        <>
        <div className="movie__img--skeleton"></div>
        <div className="skeleton movie__title--skeleton"></div>
        <div className="skeleton movie__rating--skeleton"></div>
        <div className="skeleton movie__price--skeleton"></div>
        </>
      )}
      
    </div>
  );
};

export default Movie;
