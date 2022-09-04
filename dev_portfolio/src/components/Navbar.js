import React from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <Helmet></Helmet>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link
                className="nav__link dropdown-toggle"
                to="home"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav__link dropdown-toggle"
                to="projects"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav__link dropdown-toggle"
                to="about"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
