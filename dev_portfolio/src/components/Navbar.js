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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav__link" to="home" spy={true}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav__link" to="projects" spy={true}>
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav__link" to="about" spy={true}>
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
