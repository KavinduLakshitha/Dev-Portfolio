import React from "react";
import { Link } from "react-scroll";
import "./About.css";

function About() {
  return (
    <div className="about" style={{ minHeight: 500 }}>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  aspectRatio: "1",
                  width: "60%",
                  margin: "auto",
                  /* marginLeft: "auto",
                  marginRight: "auto", */
                  /* padding: "20px", */
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660485444/Web-portfolio/portfolio_gedhgy.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <p className="projects__desc">
                <span className="home__badge">WHO AM I?</span>
                <br />
                <br />
                <h1 className="aboutme__Title">I'm Kavindu Marasinghe</h1>
                <p className="aboutme__desc">
                  👨‍💻I am a 3rd-year undergraduate at SLIIT, doing a
                  specialization in BSc(hons) in Information Technology. I've
                  done a few ReactJS-based projects alone and as group projects
                  at the uni. I'm trying to learn new technologies such as
                  NextJs, Tailwind CSS and Web 3.0 development. <br />
                  <br />
                  When I am not coding or studying, I'd like to introduce my
                  self as an artist. I mostly do portrait arts as my hobby as
                  well as a freelancer.
                </p>
                <br />
                <br />
                My preffered weapons of choice👇
                <br />
                <ul class="list-group" style={{ marginTop: "20px" }}>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJs / NextJS
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Bootstrap/Material UI
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;MongoDB
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-info"
        href="https://github.com/KavinduLakshitha/"
        class="btn btn-info"
        role="button"
        target="_blank"
        rel="noreferrer"
        style={{ marginBottom: "5px", backgroundColor: "#111827" }}
      >
        My Github
      </a>

      <div className="gototop__button">
        <Link to="home">
          <i class="bi bi-chevron-double-up"></i>
        </Link>
      </div>

      <hr
        style={{
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
        }}
      />
      <div
        className="icons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section className="sm-buttons">
          <a
            className="socialmedia_icon"
            href="https://www.facebook.com/kavindulakshitha123"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>

          <a
            className="socialmedia_icon"
            href="https://www.instagram.com/_kavindu.laskshitha_/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            className="socialmedia_icon"
            href="https://wa.me/94713037712"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            className="socialmedia_icon"
            href="https://www.twitter.com/kavindulm98"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className="socialmedia_icon"
            href="https://www.linkedin.com/in/kavindu-marasinghe/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="socialmedia_icon"
            href="https://github.com/KavinduLakshitha"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="socialmedia_icon"
            href="mailto:kavindu.m.online@gmail.com"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </section>
      </div>

      <hr
        style={{
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      />
    </div>
  );
}

export default About;
