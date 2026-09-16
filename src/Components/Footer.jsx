import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Blue Jay Bird Logo Transparent(150 x 40 px) (150 x 40 px) (5).png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__container">
          <div className="footer__row">
            <Link to="/">
              <img className="logo" src={logo} src={logo} alt="Logo" />
            </Link>
            <div className="footer__list">
              <Link className="no-cursor footer__link">Account</Link>
              <Link className="no-cursor footer__link">Contact</Link>
              <Link className="no-cursor footer__link">Terms of Use</Link>
              <Link className="no-cursor footer__link">Privacy</Link>
            </div>
            <div className="footer__copyright">
              Copyright &#169; 2026 Blue Jay Productions
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
