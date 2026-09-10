import React from "react";
import cinema from "../assets/cinema graphic.png";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <div>
      <div className="header__container">
        <div className="header__description">
          <h1>America's most awarded movie subscription platform</h1>
          <h2>
            Find your perfect movie with{" "}
            <span className="bluejay">Blue Jay</span>
          </h2>
          <div className="input__wrapper">
            <button className="btn reroute-btn">
              <FontAwesomeIcon
                className="fa-solid fa-magnifying-glass"
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <figure className="header__img--wrapper">
            <Link>
              <img className="img" src={cinema} alt="cinema" />
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Landing;
