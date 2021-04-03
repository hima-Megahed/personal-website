import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../images/circle-cropped.png";

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      let root = document.getElementById("root");
      root?.classList.add("disable-scroll");
    }

    if (isMenuOpen) {
      let root = document.getElementById("root");
      root?.classList.remove("disable-scroll");
    }
  };

  return (
    <div className="header-area">
      <div className="navbar-area">
        <nav className="site-navbar">
          <Link to="/" className="site-logo">
            <img src={Avatar} alt="avatar" />
          </Link>
          <ul className={isMenuOpen ? "open" : undefined}>
            <li>
              <Link onClick={toggleMenu} to="/">
                home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/about">
                about
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleMenu}
            className={`nav-toggler ${isMenuOpen ? "toggler-open" : undefined}`}
          >
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
