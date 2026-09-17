import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Blue Jay Bird Logo Template (150 x 40 px) (150 x 40 px).png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [hidden, setHidden] = useState(false);

  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div>
      <div className="nav__container">
        <Link>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="nav__link">
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
          style={{ visibility: hidden ? "visible" : "hidden" }}
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
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
