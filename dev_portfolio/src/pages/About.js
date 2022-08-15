import React from "react";
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
                👨‍💻I am a 3rd-year undergraduate at SLIIT, doing a specialization
                in BSc(hons) in Information Technology. I've done a few
                ReactJS-based projects alone and as group projects at the uni.
                I'm trying to learn new technologies such as NextJs, Tailwind
                CSS and Web 3.0 development. <br />
                <br />
                When I am not coding or studying, I'd like to introduce my self
                as an artist. I mostly do portrait arts as my hobby as well as a
                freelancer.
                <br />
                <br />
                My preffered weapons of choice👇
                <br />
                <ul class="list-group">
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
        style={{ marginBottom: "40px", backgroundColor: "#111827" }}
      >
        My Github
      </a>

      <hr
        style={{
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          /* marginBottom: "50px", */
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
        <button
          className="btn btn-secondary"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/kavindulakshitha123"
          style={{ background: "transparent", border: "none" }}
        >
          <i class="bi bi-facebook" style={{ fontSize: "1.8rem" }}></i>
        </button>

        <button
          className="btn btn-secondary"
          style={{ background: "transparent", border: "none" }}
        >
          <i class="bi bi-instagram" style={{ fontSize: "1.8rem" }}></i>
        </button>

        <button
          className="btn btn-secondary"
          style={{ background: "transparent", border: "none" }}
        >
          <i class="bi bi-github" style={{ fontSize: "1.8rem" }}></i>
        </button>

        <button
          className="btn btn-secondary"
          style={{ background: "transparent", border: "none" }}
        >
          <i class="bi bi-linkedin" style={{ fontSize: "1.8rem" }}></i>
        </button>
      </div>

      <hr
        style={{
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
        }}
      />
    </div>
  );
}

export default About;
